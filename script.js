document.addEventListener('DOMContentLoaded', function() {
    const ids = ['6980', '6380', '6080', '3880', '3380', '800', '4001', '4002'];
    ids.forEach(id => {
        const decreaseButton = document.getElementById(`bm_${id}`);
        decreaseButton.style.color = '#CCCCCC';
        const line = document.getElementById(`seat_${id}`);
        line.style.border = '1px solid #DDDDDD';
        line.style.borderLeft = '2px solid #DDDDDD';
    });
    const nextbutton = document.getElementById('nextstep');
    nextbutton.style.backgroundColor = '#A6D282';
});

document
function increase(id) {
    const input = document.getElementById(`num_${id}`);
    const decreaseButton = document.getElementById(`bm_${id}`);
    const line = document.getElementById(`seat_${id}`);
    
    let currentValue = parseInt(input.value) || 0;
    let sumTicket = sumNum();
    
    if (sumTicket < 4) {
        currentValue++;
        input.value = currentValue;
    }
    
    if (currentValue > 0) {
        decreaseButton.style.color = '';
        if (line) {
            line.style.border = '1px solid #7BBE43';
            line.style.borderLeft = '2px solid #7BBE43';
        }
    }
    checkIncreaseButtonColor();
    checkNextstepColor();
}

function decrease(id) {
    const input = document.getElementById(`num_${id}`);
    const decreaseButton = document.getElementById(`bm_${id}`);
    const line = document.getElementById(`seat_${id}`);
    
    let currentValue = parseInt(input.value) || 0;
    
    if (currentValue > 0) {
        currentValue--;
        input.value = currentValue;
    }
    
    if (currentValue == 0) {
        decreaseButton.style.color = '#CCCCCC';
        if (line) {
            line.style.border = '1px solid #DDDDDD';
            line.style.borderLeft = '2px solid #DDDDDD';
        }
    } else {
        decreaseButton.style.color = '';
        if (line) {
            line.style.border = '1px solid #7BBE43';
            line.style.borderLeft = '2px solid #7BBE43';
        }
    }
    checkIncreaseButtonColor();
    checkNextstepColor();
}

function checkValue(id) {
    const input = document.getElementById(`num_${id}`);
    const decreaseButton = document.getElementById(`bm_${id}`);
    
    if (input.value < 0) {
        input.value = 0;
    }
    
    if (input.value <= 0) {
        decreaseButton.style.color = '#CCCCCC';
    } else {
        decreaseButton.style.color = '';
    }
    checkIncreaseButtonColor();
}

function checkIncreaseButtonColor() {
    let sum = sumNum();
    const ids = ['6980', '6380', '6080', '3880', '3380', '800', '4001', '4002'];
    
    ids.forEach(id => {
        const increaseButton = document.getElementById(`bp_${id}`);
        if (sum >= 4) {
            increaseButton.style.color = '#CCCCCC';
        } else {
            increaseButton.style.color = '';
        }
    });
}

function checkNextstepColor() {
    const agreement = document.getElementById(`check_agree`);
    const nextbutton = document.getElementById(`nextstep`);
    let sumTicket = sumNum();
    if(sumTicket > 0 && agreement.checked){
        nextbutton.style.backgroundColor = '#7BBE43'
    }
    else{
        nextbutton.style.backgroundColor = '#A6D282'
    }
}

function sumNum() {
    let sum = 0;
    const ids = ['6980', '6380', '6080', '3880', '3380', '800', '4001', '4002'];
    
    ids.forEach(id => {
        const input = document.getElementById(`num_${id}`);
        sum += parseInt(input.value) || 0;
    });
    
    return sum;
}

function NextStepAction() {
    let sumTicket = sumNum();
    const agreement = document.getElementById(`check_agree`);
    // const nextbutton = document.getElementById(`nextstep`);
    if(!agreement.checked){
        window.alert("啊啊啊要記得打勾！！！");
    }
    if(sumTicket == 0){
        window.alert("張數沒有選...");
    }
    if(agreement.checked && sumTicket != 0){
        window.location.href = 'success.html';
    }
}

