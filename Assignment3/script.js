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
    
    var socialMediaDiv = document.querySelector('.socialmediaicons');
    var ul = document.createElement('ul');
    var socialIcons = {
        facebook: 'images/facebook.png',
        twitter: 'images/twitter.png',
        flickr: 'images/flickr.png',
        youtube: 'images/youtube.png',
        google: 'images/google.png',
        linkedin: 'images/linkedin.png',
        wordpress: 'images/wordpress.png',
        meetup: 'images/meetup.png'
    };

    for(var key in socialIcons) {
        var li = document.createElement('li');
        var img = document.createElement('img');
        img.src = socialIcons[key];
        img.alt = key;
        li.appendChild(img);
        ul.appendChild(li);
    }
    socialMediaDiv.appendChild(ul);

    attachEventListeners();

    document.getElementById('add').addEventListener('click', addNewStudent);
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

function handleCheckboxChange(e) {
    var checkbox = e.target;
    var row = checkbox.closest('tr');
    var deleteCell = row.cells[8];
    var editCell = row.cells[9];

    if(checkbox.checked) {
        row.style.backgroundColor = 'yellow';

        if(!deleteCell.querySelector('button')) {
            var deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function() {
                deleteStudent(row);
            });
            deleteCell.appendChild(deleteBtn);
        }

        if(!editCell.querySelector('button')) {
            var editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', function() {
                var studentName = row.cells[1].textContent;
                editStudent(studentName);
            });
            editCell.appendChild(editBtn);
        }
    } else {
        row.style.backgroundColor = 'white';
        deleteCell.innerHTML = '';
        editCell.innerHTML = '';
    }

    updateSubmitButton();
}

function updateSubmitButton() {
    var checkboxes = document.querySelectorAll('#myTable tbody tr:not(.dropDownTextArea) input[type="checkbox"]');
    var anyChecked = false;

    checkboxes.forEach(function(checkbox) {
        if(checkbox.checked) {
            anyChecked = true;
        }
    });

    var submitBtn = document.getElementById('button');
    if(anyChecked) {
        submitBtn.disabled = false;
        submitBtn.classList.add('enabled');
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove('enabled');
    }
}

function addNewStudent() {
    var tbody = document.querySelector('#myTable tbody');
    var rows = tbody.querySelectorAll('tr:not(.dropDownTextArea)');

    var studentNumbers = [];
    rows.forEach(function(row) {
        var studentText = row.cells[1].textContent;
        var num = parseInt(studentText.replace('Student ', ''));
        studentNumbers.push(num);
    });

    var nextNum = 1;
    while(studentNumbers.includes(nextNum)) {
        nextNum++;
    }

    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="checkbox" /><br /><br /><img src="down.png" width="25px" class="arrow" /></td>
        <td>Student ${nextNum}</td>
        <td>Teacher ${nextNum}</td>
        <td>Approved</td>
        <td>Fall</td>
        <td>TA</td>
        <td>${12345 + (nextNum - 1) * 11111}</td>
        <td>100%</td>
        <td></td>
        <td></td>
    `;

    var dropdownRow = document.createElement('tr');
    dropdownRow.className = 'dropDownTextArea';
    dropdownRow.innerHTML = `
        <td colspan="10">
            Advisor:<br /><br />
            Award Details<br />
            Summer 1-2014(TA)<br />
            Budget Number: <br />
            Tuition Number: <br />
            Comments:<br /><br /><br />
            Award Status:<br /><br /><br />
        </td>
    `;

    tbody.appendChild(newRow);
    tbody.appendChild(dropdownRow);

    attachEventListeners();

    alert('Student ' + nextNum + ' Record added successfully');
}

function deleteStudent(row) {
    var studentName = row.cells[1].textContent;
    var dropdownRow = row.nextElementSibling;

    row.remove();
    if(dropdownRow && dropdownRow.classList.contains('dropDownTextArea')) {
        dropdownRow.remove();
    }

    updateSubmitButton();

    alert(studentName + ' Record deleted successfully');
}

function editStudent(studentName) {
    var userInput = prompt('Edit details of ' + studentName + '\n\nEnter new student name:', studentName);

    if(userInput !== null && userInput.trim() !== '') {
        var rows = document.querySelectorAll('#myTable tbody tr:not(.dropDownTextArea)');
        rows.forEach(function(row) {
            if(row.cells[1].textContent === studentName) {
                row.cells[1].textContent = userInput;
            }
        });
        alert(userInput + ' data updated successfully');
    }
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