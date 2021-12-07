desc 'Install Rails and React dependencies'
task install: :environment do
  exec 'bundle install'
  exec 'npm install --prefix client'
end
