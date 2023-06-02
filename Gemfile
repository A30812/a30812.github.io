source 'https://rubygems.org'

gem "jekyll", "~> 4.3" # installed by `gem jekyll`
# gem "webrick"        # required when using Ruby >= 3 and Jekyll <= 4.2.2

# gem "just-the-docs", "0.5.0" # pinned to the current release
# gem "just-the-docs"        # always download the latest release

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-gist"
  gem "jekyll-github-metadata"
  gem "jekyll-link-attributes"
  gem "jekyll-optional-front-matter"
  gem "jekyll-relative-links"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "nokogiri"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

gem "faraday-retry", "~> 2.1"
gem "kramdown-parser-gfm", "~> 1.1"
