var connection = new WebSocket('ws://localhost:35729/livereload');

connection.onerror = function(error) {
  console.err('reload connection got error:', error);
};

connection.onmessage = function(msg) {
  if (msg.data) {
    var data = JSON.parse(msg.data);
    if (data && data.command === 'reload') {
      chrome.runtime.reload();
    }
  }
};
