//function for lable ,input,formgroup creation
function lable_(attrvalue1,labelId,content){
    var label_element=document.createElement("label");
    label_element.className="form-label"
    label_element.setAttribute("for",attrvalue1);
    label_element.id=labelId
    label_element.innerHTML= content;
    return label_element;
}
function input_(attrvalue,attrvalue1,attrvalue2,isRequired = false){
    var input_element =document.createElement("input");
    input_element.className="form-control"
    input_element.type=attrvalue;
    input_element.id=attrvalue1;
    input_element.placeholder=attrvalue2;
    if (isRequired) {
        input_element.required = true;
    }
    return input_element;
}

function textarea_(attrvalue1, isRequired = false) {
    var textarea_element = document.createElement("textarea");
    textarea_element.className = "form-control";
    textarea_element.id = attrvalue1;
    if (isRequired) {
        textarea_element.required = true;
    }
    return textarea_element;
}


function createFormGroup(labelText,labelId,inputType, inputId, inputPlaceholder, isRequired = true) {
    var formGroup = document.createElement("div");
    formGroup.className = "form-group col-lg-12";
    var label = lable_(inputId,labelId,labelText);
    var input;
    if (inputType === "textarea") {
        input = textarea_(inputId, isRequired);
    } else {
        input = input_(inputType, inputId, inputPlaceholder, isRequired);
    }
    formGroup.append(label);
    formGroup.append(input);
    return formGroup;
}


function ButtonGroup(labelText,type, groupName, options, isRequired = false) {
    var formGroup = document.createElement("div");
    formGroup.className = "form-group col-lg-6";
    var label = lable_(groupName, groupName + "-label", labelText);
    formGroup.append(label);
    
    options.forEach(function(optionText, index) {
        var span = document.createElement("span");
        span.className = "form-check";
        var input = document.createElement("input");
        input.className = "form-check-input";
        input.type = type;
        input.name = groupName;
        input.id = groupName + "-" + index;
        input.value = optionText.toLowerCase();
        if (isRequired) {
            input.required = true;
        }
        
        var inputLabel = document.createElement("label");
        inputLabel.className = "form-check-label";
        inputLabel.setAttribute("for", input.id);
        inputLabel.innerHTML = optionText;
        
        span.append(input);
        span.append(inputLabel);
        formGroup.append(span);
    });
    
    return formGroup;
}

function Select(id, options, isRequired = false) {
    var select = document.createElement("select");
    select.className = "form-control";
    select.id = id;
    if (isRequired) {
        select.required = true;
    }
    options.forEach(function(optionText) {
        var option = document.createElement("option");
        option.value = optionText.toLowerCase();
        option.innerHTML = optionText;
        select.appendChild(option);
    });
    return select;
}

function SubmitButton(id, text) {
    var button = document.createElement("button");
    button.type = "submit";
    button.id = id;
    button.className = "btn btn-primary";
    button.innerHTML = text;
    return button;
}
//creating a layout for task
var div=document.createElement("div");
var container= document.createElement("div");
container.className="container";

var title=document.createElement("h1");
title.id="title";
title.className="text-center";
title.innerHTML="FORM TASK";
container.append(title);

var description=document.createElement("p");
description.id="description";
description.className="text-center";
description.innerHTML = "<b>A web form is created to gather user information and display the submitted data in a table. The form includes fields for First Name, Last Name, and other details.</b>";
container.append(description);


var row=document.createElement("div")
row.className="row"

var col1=document.createElement("div")
col1.className="col-lg-4 col-md-12"
col1.id="col"
var form_title=document.createElement("h2")
form_title.innerHTML="Form Submission:"
col1.append(form_title) 

container.append(row)
document.body.append(container);

//form data
var form=document.createElement("form")
form.id="survey-form"
form.className="survey-form"
col1.append(form)

var form_row=document.createElement("div")
form_row.className="form-row";
form.append(form_row)

//firstname
form_row.append(createFormGroup("First Name","name-label", "text", "first-name", "Enter Your First Name", true));
//Lastname
form_row.append(createFormGroup("Last Name","name-label", "text", "last-name", "Enter Your Last Name", true));
//Email
form_row.append(createFormGroup("Email", "email-label","email", "email", "Enter Your Email", true));
//Address
form_row.append(createFormGroup("Address", "address-label","text", "address", "Enter Your Address", true));
// pincode
form_row.append(createFormGroup("Pincode", "address-label","text", "pincode", "Enter Your Pincode", true));
//Gender radio button
form_row.append(ButtonGroup("Gender","radio", "gender", ["Male", "Female"], true));
//food checkbox
form_row.append(ButtonGroup("Food Preference","checkbox", "food", ["Briyani", "Soup", "Pasta","Ice-Cream","Meals"], true));
//state
form_row.append(createFormGroup("State","state-label", "text", "state-name", "State", true));
//country
form_row.append(createFormGroup("Country", "country-label", "text", "countryid", "Country", true));
//Additional comments
form_row.append(createFormGroup("Additional Comments or Suggestions","comments-label", "textarea", "comments", "", true));
//submit
var subdiv=document.createElement("div")
subdiv.className="form-group col-lg-6"
subdiv.append(SubmitButton("submit", "Submit"));
form_row.append(subdiv)


//update table
var col2 = document.createElement("div");
col2.className = "col-lg-4 col-md-12";
col2.id="col"
var table_title = document.createElement("h2");
table_title.innerHTML = "Temporary Database";
col2.append(table_title);

function table(tagname){
    var table=document.createElement(tagname);
    table.className="table table-striped";
    table.id="table"
    return table;
}

function thead(tagname,attrname,attrvalue){
    var thead=document.createElement(tagname);
    thead.setAttribute(attrname,attrvalue);
    return thead;
}

function createTbody(tagname) {
    var tbody = document.createElement(tagname);
    tbody.id="table tbody"
    return tbody;
}

function tr(tagname){
    var tr=document.createElement(tagname);
    return tr;
}

function th(tagname,content){
    var th=document.createElement(tagname);
    th.innerHTML=content
    return th;
}


var table_parameter=table("table")
var thead_parameter=thead("thead","class","thead-dark")
var tbody_parameter = createTbody("tbody");

var th_tr=tr("tr")
var headers = ["#","First Name", "Last Name", "Email", "Address", "Pincode", "Gender", "Food", "State", "Country"];
headers.forEach(function(header) {
    var th = document.createElement("th");
    th.innerHTML=header
    th_tr.append(th);
});

thead_parameter.append(th_tr)
table_parameter.append(thead_parameter,tbody_parameter)
col2.append(table_parameter)
row.append(col1,col2)

var count=1;
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    // To Get form data
    var formdata ={
        "#": count,
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        email : document.getElementById("email").value,
        address : document.getElementById("address").value,
        pincode : document.getElementById("pincode").value,
        gender : document.querySelector('input[name="gender"]:checked').value,
        food : Array.from(document.querySelectorAll('input[name="food"]:checked')).map(food => food.value).join(', '),     state : document.getElementById("state-name").value,
        country : document.getElementById("countryid").value,
    };
    count++;
    var tbody = document.querySelector('tbody');
    var tr = tbody.insertRow();

    var cellIndex = 0;
    for (var key in formdata) {
        var td = tr.insertCell(cellIndex);

        td.textContent = formdata[key];
        cellIndex++;
    }
    form.reset();
});