
var $newCustomer =  document.getElementById("newcustomer");
var $invoiceDateinput = document.getElementById("invoiceDateinput");
var $Duedateinput = document.getElementById("Duedateinput");
var $inv_numberinput = document.getElementById("inv_numberinput");

// filename
var inv_num = $inv_numberinput.value;

function loadClisk(){

    validations();

}

function validations(){
    
 var newcustomer = $newCustomer.value;
 var invoiceDate = $invoiceDateinput.value;
 var duedate = $Duedateinput.value;
 var inv_numberinput = $inv_numberinput.value;
 if(newcustomer === '' || invoiceDate === '' || duedate === '' || inv_numberinput === ''){
    if(newcustomer ===''){
        $newCustomer.parentElement.style.border = "1px solid red";
    }
    if(inv_numberinput === ''){
        $inv_numberinput.parentElement.style.border = "1px solid red";
    }
    
    if(duedate === ''){
        $Duedateinput.parentElement.style.border = "1px solid red";
    }
    if(invoiceDate ===''){
        $invoiceDateinput.parentElement.style.border = "1px solid red";
    }
    // else color
    if(newcustomer !==''){
        $newCustomer.parentElement.style.border = "1px solid #605bda";
    }
    if(inv_numberinput !== ''){
        $inv_numberinput.parentElement.style.border = "1px solid #605bda";
    }
    
    if(duedate !== ''){
        $Duedateinput.parentElement.style.border = "1px solid #605bda";
    }
    if(invoiceDate !==''){
        $invoiceDateinput.parentElement.style.border = "1px solid #605bda";
    }

    alert("You Must fill the red box");
 }
 else{
    console.log("done")
    if(newcustomer !==''){
        $newCustomer.parentElement.style.border = "1px solid #605bda";
    }
    if(inv_numberinput !== ''){
        $inv_numberinput.parentElement.style.border = "1px solid #605bda";
    }
    
    if(duedate !== ''){
        $Duedateinput.parentElement.style.border = "1px solid #605bda";
    }
    if(invoiceDate !==''){
        $invoiceDateinput.parentElement.style.border = "1px solid #605bda";
    }

 }

}
document.getElementById("downloadbtn").addEventListener('click',()=>{
        
        const invoice = this.document.getElementById("card");
        var opt = {
            margin:       1,
            filename:     inv_num,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
        html2pdf().from(invoice).set(opt).save();
    });



    // additems

/* <tr>
    <th><div class="itemnamecon"><input type="text" id="itemName(IName)"></div></th>
    <th><div class="itemQuantitycon"><input type="number" id="itemQuantity(IQuan)"></div></th>
    <th><div class="itempricecon"><input type="text" id="itemprice(IPrice)" placeholder="$ 0.0"></div></th>
    <th><div class="itemAmountcon"><p id="itemamount(IAmount)">0</p></div></th>
</tr> */
var $producttable = document.getElementById("productTabler");

function additems(){

    var $row = document.createElement("tr");

    var timer = new Date().getTime();
    var Inaemid = timer + 2
    var IQuanid = timer + 3
    var IPriceid = timer+ 4
    var IAmountid = timer+5
    $row.innerHTML=`
    <th><div class="itemnamecon"><input type="text" id="`+Inaemid+`"></div></th>
    <th><div class="itemQuantitycon"><input type="number" id="`+IQuanid+`"></div></th>
    <th><div class="itempricecon"><input type="text" id="`+IPriceid+`" placeholder="$ 0.0"></div></th>
    <th><div class="itemAmountcon"><p id="`+IAmountid+`">0</p></div></th>
    `
    $producttable.appendChild($row);

}



