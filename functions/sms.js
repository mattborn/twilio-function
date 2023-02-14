exports.handler = (context, event, callback) => {
  const twiml = new Twilio.twiml.MessagingResponse()

  twiml.message(`You said: ${event.Body}`)

  return callback(null, twiml)
}
