function Title(t1) { 
    this.mytitle = t1;
}

Title.prototype.getName = function () { 
    return (this.mytitle);
}

var socialMedia = {
    facebook: 'http://facebook.com',
    twitter: 'http://twitter.com',
    flickr: 'http://flickr.com',
    youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('studentInfo').innerHTML = 'Your Full Name - NUID: 123456789';
    
    var dropdowns = document.querySelectorAll('.dropDownTextArea');
    dropdowns.forEach(function(dropdown) {
        dropdown.style.display = 'none';
    });
    
    var submitBtn = document.getElementById('button');
    submitBtn.disabled = true;
    
    attachEventListeners();
});

function attachEventListeners() {
    var checkboxes = document.querySelectorAll('#myTable tbody tr:not(.dropDownTextArea) input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', handleCheckboxChange);
    });
    
    var arrows = document.querySelectorAll('.arrow');
    arrows.forEach(function(arrow) {
        arrow.addEventListener('click', toggleDropdown);
    });
}

function toggleDropdown(e) {
    var arrow = e.target;
    var currentRow = arrow.closest('tr');
    var dropdownRow = currentRow.nextElementSibling;
    
    if(dropdownRow && dropdownRow.classList.contains('dropDownTextArea')) {
        if(dropdownRow.style.display === 'none' || dropdownRow.style.display === '') {
            dropdownRow.style.display = 'table-row';
        } else {
            dropdownRow.style.display = 'none';
        }
    }
}