# Publify-Music

**A Music Blogging Application. Clone It. Run it. Dance.**

### Download

You can download Publify [stable release](http://publify.co/stable.tgz) or [clone Publify
repository](https://github.com/publify/publify.git).

[![Build Status](https://travis-ci.org/publify/publify.png)](https://travis-ci.org/publify/publify)
[![Code Climate](https://codeclimate.com/github/publify/publify.png)](https://codeclimate.com/github/publify/publify)
[![Dependency Status](https://gemnasium.com/publify/publify.png)](https://gemnasium.com/publify/publify)

## What is this?

A simple but full featured web publishing software forked from [publify/publify].
It's built around a blogging engine and a small message system connected to Twitter.


## Features

- A classic multi user blogging engine
- Short messages with a Twitter connection
- Text filters (Markdown, Textile, SmartyPants, @mention to link, #hashtag to link)
- A widgets system and a plugin API
- Custom themes
- Advanced SEO capabilities
- Multilingual : Publify is (more or less) translated in English, French, German, Danish, Norwegian, Japanese, Hebrew, Simplified Chinese, Mexican Spanish, Italian, Lithuanian, Dutch, Polish, Romanian…

## Demo site

Coming Soon.

You can [give Publify a try](http://demo.publify.co)

The login / password [to the admin](http://demo.publify.co/admin)
are:

- Administrator: admin / admin
- Publisher: publish / publish

The demo is reset every 2 hours.

## Install locally

-   Ruby 2.0, 2.1 or 2.2
-   Ruby On Rails 4.2.0
-   A database engine, MySQL, PgSQL or SQLite3

```bash
$ git clone git@github.com:blairanderson/that-music-blog.git name-of-my-music-blog
$ cd name-of-my-music-blog
$ bundle install
$ rake db:setup
$ rake db:migrate
$ rake db:seed
$ rake assets:precompile
$ rails server
$ open http://localhost:3000/admin
```

## Install on Heroku

### Images!

Setup Amazon S3 Storage to be able to upload files on your blog.

- create s3 Bucket - https://console.aws.amazon.com/s3/home
- create User - https://console.aws.amazon.com/iam/home#users
- create Group with S3 permissions - https://console.aws.amazon.com/iam/home#groups
- add user to group
- get s3 details: http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html

Set Heroku config vars.

```bash
heroku create name-of-my-music-blog
heroku config:set provider=AWS
heroku config:set aws_bucket=YOUR_AWS_BUCKET_NAME
heroku config:set aws_access_key_id=YOUR_AWS_ACCESS_KEY_ID
heroku config:set aws_secret_access_key=YOUR_AWS_SECRET_ACCESS_KEY
git push heroku master
heroku run rake db:migrate db:seed
heroku restart
```

## Resources

- [Sidebar Plugins](https://github.com/publify/publify/wiki/Sidebar-plugins)
- [In page Plugins](https://github.com/publify/publify/wiki/In-Page-Plugins)
- [**Report a bug**](https://github.com/publify/publify/issues)
- [**Frequently Asked Questions**](https://github.com/publify/publify/wiki/frequently-asked-questions)
- [Publify blog](http://blog.publify.co)
- [Publify on Twitter](https://twitter.com/getpublify)
- IRC: \#publify on irc.freenode.net

### Maintainers

This is a list of Publify maintainers. If you have committed, please add
your name and contact details to the list.

**Blair Anderson** <blair81@gmail.com>
blog: http://www.blairanderson.co
