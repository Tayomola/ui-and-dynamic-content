/*
Save the reference to text-field into a variable. | <input type="text">
Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
Save the reference to paragraph for feedback | <p class="feedback"></p>

Start function addItem.

    Create list item and store output in a variable.
    
    Check if user entered the value in input text-field.
    If so:
        Use textContent property on created list-item
        and assign it with the value of the text written in the text-field

        Append list item to unordered list.

        Clear a feedback-message.

        Clear the text-field.

        Put the cursor back to text-field 
    
    End if. 
    Otherwise:
     
        Print the message nothing entered in the paragraph "feedback"

    End otherwise.

End function addItem.

Register your function addItem for click event on button.
*/
let ul = document.getElementById("boughtList");
let btn = document.getElementById("clickButton");
let input = document.getElementById("yourInput");
let feedback = document.getElementById("feedback");

function addItem() {
   
    if (input.value !== "") {
        let li = document.createElement("li");
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = "";
        input.focus();
        feedback.textContent = "Your item has been added ";
    
    } else {
        
        feedback.textContent = "Please add an item  ";
	    input.focus();
    }
}
 
btn.addEventListener("click", addItem);

