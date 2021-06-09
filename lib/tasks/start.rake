desc 'Run Rails server and React in development'
task start: :environment do
  exec 'heroku local -f Procfile.dev'
end
