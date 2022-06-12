console.log('This is drag and drop utility');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');
let time = document.getElementById('time');
let win = document.getElementById('win')
let line = document.getElementById('line')

let time_left = 30

let score = 0;

let value = "bloom"

const my_interval = setInterval(() => {
    time_left -= 1;
    time.innerText = `Time Left: ${time_left}`

    if (time_left == 0) {
        time.innerText = `GAME OVER`
        clearInterval(my_interval)
        document.getElementById("selection_box").style.display = "none";
        document.getElementById("dirty_Things").style.display = "none";
        time.style.display = "none"
        line.style.display = "block"
        win.style.display = "block"
    }

}, 1000);

imgBox.addEventListener('dragstart', (e) => {

    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    e.target.className = 'imgBox';

});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    whiteBox.addEventListener('dragenter', (e) => {
        e.target.className += ' dashed';
    })

    whiteBox.addEventListener('dragleave', (e) => {
        e.target.className = 'whiteBox'
        if (e.target.id == 'yellow') {
            document.getElementById('select').style.height = "155px"
            document.getElementById('select').style.width = "155px"
        }
    })

    whiteBox.addEventListener('drop', (e) => {
        document.getElementById('select').draggable = false
        setTimeout(() => {
            document.getElementById('select').draggable = true
        }, 2000);
        if (e.target.id == 'yellow') {
            document.getElementById('select').style.height = "250px"
            document.getElementById('select').style.width = "150px"
            if (value == "police") {
                setTimeout(() => {
                    e.target.remove(imgBox)
                    document.querySelector('.whiteBox').append(imgBox)
                    document.getElementById('select').style.backgroundImage = "url(./image/bandages.png)"
                    value = "bandage"
                    score += 1
                    document.getElementById('select').style.height = "155px"
                    document.getElementById('select').style.width = "155px"
                }, 2000);
            }
        }
        if (e.target.id == "green") {
            setTimeout(() => {
                e.target.remove(imgBox)
                document.querySelector('.whiteBox').append(imgBox)
                document.getElementById('select').style.backgroundImage = "url(./image/handcuffs.png)"
                value = "police"
                score += 1
            }, 2000);
        }
        if (e.target.id == "red") {
            if (value == "bandage") {
                setTimeout(() => {
                    e.target.remove(imgBox)
                    document.querySelector('.whiteBox').append(imgBox)
                    document.getElementById('select').style.backgroundImage = "url(./image/dustbin.png)"
                    value = "dustbin"
                    score += 1
                }, 2000);
            }
        }
        if (e.target.id == "black") {
            if (value == "dustbin") {
                setTimeout(() => {
                    e.target.remove(imgBox)
                    document.querySelector('.whiteBox').append(imgBox)
                    document.getElementById('select').style.backgroundImage = "url(./image/gloves.png)"
                    value = "gloves"
                    score += 1
                }, 2000);
            }
        }
        if (e.target.id == "white") {
            if (value == "gloves") {
                setTimeout(() => {
                    e.target.remove(imgBox)
                    document.querySelector('.whiteBox').append(imgBox)
                    document.getElementById('select').style.display = "none"
                    value = "none"
                    score += 1
                    time.innerText = `GAME OVER`
                    clearInterval(my_interval)
                    document.getElementById("selection_box").style.display = "none";
                    document.getElementById("dirty_Things").style.display = "none";
                    time.style.display = "none"
                    line.style.display = "block"
                    win.style.display = "block"
                }, 2000);
            }
        }
        e.target.append(imgBox);



    })
}
