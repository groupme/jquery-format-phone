require 'rubygems'
require 'sinatra'

get '/jquery-format-phone' do
  File.read('index.html')
end

get '/jquery-format-phone/src/format_phone_input.js' do
  content_type "text/javascript"
  File.read('src/format_phone_input.js')
end

get '/jquery.js' do
  File.read('spec/screw-unit/jquery-1.2.6.js')
end