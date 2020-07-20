const puppeteer = require('puppeteer');
const fs = require('fs');

async function app(username){
    return new Promise(async (resolve, reject) => {
       const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await page.goto(`https://platzi.com/@${username}`);
        await page.setViewport({
            width:1280,
            height:720,
            isMobile: false
        })
        const data = await page.evaluate(() => {
            if (document.querySelectorAll('body')[0].innerHTML.includes('Errorpage')) {
                return false
            }
            else{
                let courses = []
                const dataContainer = document.querySelectorAll('.Course')
                dataContainer.forEach(item => {
                    courses.push({
                        courseImg: item.querySelector('img').src,
                        courseName: item.querySelector('.Course-title').innerText
                    })
                })
                return courses
            }
        })
        if (data == false) {
            reject('Ocurrio un error')
        }
        else{
            resolve(data)
        }
        await browser.close() 
    })
    
}

module.exports = app
