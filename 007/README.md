> Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

โดยปกติแล้ว JS จะมีการทำงานแบบ synchronous ก็คือทำงานทีละ step ต่อหนึ่งช่วงเวลาเท่านั้น คราวนี้ถ้าหากเราต้องการจะเรียกใช้ function หรือ method ใดๆ ก็ตามที่มีการทำงานนานกว่าปกติแล้วเราไม่ต้องการที่จะรอให้การทำงานนั้นเสร็จในทันที แต่เราต้องการที่จะทำอย่างอื่นไปด้วย จะทำยังไงได้บ้าง เทคนิคที่เราจะนำมาใช้ในทีนี้เรียกว่า Asynchronous ก็คือ การทำงานที่ไม่ต่อเนื่องนั่นเอง

## CallBacks

```
    function printLater(callBack) {
        setTimeout(callBack, 1000);
    }

    function printNow() {
        console.log('printNow');
    }

    const callBack = () => {
        console.log('printLater');
    }

    printLater(callBack);
    printNow();
```

หนึ่งใน function ที่นิยมใช้ในการทดสอบ Asynchronous ก็คือ setTimeout จะเห็นได้ว่า function printLater ถูกเรียกใช้ก่อนโดยที่เราใส่ callback function เข้าไปข้างในเพื่อให้ print message ออกมา แต่ function printNow กลับทำก่อน แต่คราวนี้ถ้าเราไม่อยากใช้ callBack หล่ะจะทำยังไง javascript ก็มีอีกสิ่งหนึ่งที่เรียกว่า promise

## Promise
คือ เมื่อเราประกาศใช้ promise ขึ้นมานั้นจะเป็นการบอกว่าให้การทำงานบางอย่างนั้นเกิดขึ้นก่อน แล้วในอนาคตจะ return value หรือ thow error ออกมาให้ในภายหลัง ยกตัวอย่าง

```
    function printLater() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('printLater');
            }, 1000);
        })
    }

    function printNow() {
        console.log('printNow');
    }

    printLater().then(value => {
        console.log(value);
    })
    printNow();
```

เมื่อต้องการเรียกใช้ promise ใช้คำสั่ง new Promise(res, rej)

โดยที่ resolve นั้นก็คือบ่งบอกว่าในกรณีที่เราทำ function นั้นสำเร็จ จะให้ return ค่าอะไรออกไป
แต่ reject ก็คือ ถ้า function นั้นๆ เกิด error เราจะ reject promise นั้นๆก็คือไม่สำเร็จนั่นเอง

โดยที่เราสามารถใช้ then method เพื่อรองรับค่าจาก resolve ได้ และ catch method สำหรับ handle error จาก reject นั่นเอง คราวนี้ถ้าเราอยากจะรอค่าจาก printLater ให้ทำเสร็จก่อนแล้วค่อยทำ printNow ได้ไหม เราสามารถใช้คำสัง async ได้ และตามด้วย await นำหน้า function ที่ต้องการจะรอให้มันทำเสร็จ

## Async - Await

```
    (async () => {
        function printLater() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('printLater');
                }, 1000);
            })
        }

        function printNow() {
            console.log('printNow');
        }

        await printLater().then(value => {
            console.log(value);
        })
        
        printNow();
    })()
```

คำสั่ง await ที่อยู่ข้างหน้า printLater บอกว่า ให้รอจนกว่า printLater จะ resolve หรือ reject ค่าออกมาแล้วค่อยทำสิ่งถัดๆไป