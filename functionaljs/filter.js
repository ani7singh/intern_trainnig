function getShortMessages(messages) {
    var filtered =messages.filter(msg => msg.message.length < 50);
    return filtered.map(msg => msg.message);

  } 
  module.exports = getShortMessages
