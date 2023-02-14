# twilio-function

## Initial code origin

I watched [this video](https://youtu.be/4jUMqutYmyE?t=5109), referenced [these docs](https://www.twilio.com/docs/sms), and used the following commands to generate the initial state of this repo.

Use Homebrew to install the Twilio CLI.

```
brew tap twilio/brew && brew install twilio
```

Associate your terminal with your Twilio account. Replace `abcdefg` with whatever you called your profile.

```
twilio login
twilio profiles:use abcdefg
```

Use the CLI to install the serverless plugin.

```
twilio plugins:install @twilio-labs/plugin-serverless
```

Create a new Twilio Function project.

```
twilio serverless:init twilio-function
```

Clean slate.

```
rm -rf assets/* functions/*
```

## Dev locally

```
npm start
```

Swap `3000` with the port used after `npm start`.

```
ngrok http 3000
```

## Test sms

Show your phone number(s).

```
twilio phone-numbers:list
```

Update the SMS URL for your number.

```
twilio phone-numbers:update +15552345678 --sms-url=https://1234-56-789-0-12.ngrok.io/sms
```

## Test voice

Update the voice URL for your number.

```
twilio phone-numbers:update +15552345678 --voice-url=https://1234-56-789-0-12.ngrok.io/voice
```

## Deploy

```
twilio serverless:deploy
```
