module ActiveModelSerializers
  class Model
    module Caching
      extend ActiveSupport::Concern

      included do
        attr_writer :updated_at
        attributes :id
      end

      # Defaults to the downcased model name and updated_at
      def cache_key
        ActiveSupport::Cache.expand_cache_key([
          self.class.model_name.name.downcase,
          "#{id}-#{updated_at.strftime('%Y%m%d%H%M%S%9N')}"
        ].compact)
      end

      # Defaults to the time the serializer file was modified.
      def updated_at
        defined?(@updated_at) ? @updated_at : File.mtime(__FILE__)
      end
    end
  end
end
