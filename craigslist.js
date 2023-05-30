const menuIcon = document.querySelector('.menuicon');
const menuBox = document.querySelector('.menubox');

menuIcon.addEventListener('click', function() {
  menuBox.style.display = menuBox.style.display === 'none' ? 'block' : 'none';
});

function applyFilters() {
  var priceValue = document.getElementById('price').value;
      var locationValue = document.getElementById('location').value;
      var otherValue = document.getElementById('other').value; 
}

var listings = document.getElementsByClassName('listing');
for (var i = 0; i < listings.length; i++) {
  var listing = listings[i];
  var listingPrice = listing.querySelector('.price').innerText;

  if (priceValue && listingPrice !== priceValue) {
    listing.style.display = 'none'; 
  } else {
    listing.style.display = 'block';
  }
}

function resetFilters() {
  document.getElementById('price').value = '';
  document.getElementById('location').value = '';
  document.getElementById('other').value = 'option1'

}

var listings = document.getElementsByClassName('listing');
for (var i = 0; i < listings.length; i++) {
  var listing = listings[i];
  listing.style.display = 'block';
}
