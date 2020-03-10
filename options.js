// Saves options to chrome.storage
function save_options() {
  var mac_address = document.getElementById('mac_address').value;
  chrome.storage.sync.set({
    mac_address: mac_address,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved. Redirecting to usage site in 5.';
    setTimeout(function() {
      status.textContent = 'Options saved. Redirecting to usage site in 4.';
      setTimeout(function() {
        status.textContent = 'Options saved. Redirecting to usage site in 3.';
        setTimeout(function() {
          status.textContent = 'Options saved. Redirecting to usage site in 2.';
          setTimeout(function() {
            status.textContent = 'Options saved. Redirecting to usage site in 1.';
            setTimeout(function() {
                var newURL = "https://ubbapps.nwtel.ca/cable_usage/secured/index.jsp";
                chrome.tabs.create({ url: newURL });
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
}
// Restores mac_address state using the preferences stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    mac_address: ''
  }, function(items) {
    document.getElementById('mac_address').value = items.mac_address;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);