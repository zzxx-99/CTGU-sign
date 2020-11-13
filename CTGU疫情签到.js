/**

 *by zx

 *华为解锁,不完美版

 */



//解锁  

var pass = "believe" //解锁密码

while (true) {

    Unlock();

    PunchClock();

}



function Unlock() {

    //息屏和锁屏状态需要解锁

    if (!device.isScreenOn()) {

        //曲线解锁 emui锁屏滑动唤出密码输入 通过下拉通知栏进入密码解锁

        device.wakeUp();

        swipe(500, 300, 500, 1000, 300);

        sleep(1000);

        click(654,1881);sleep(400);

        click(263,1570);sleep(400);

        click(981,1716);sleep(400);

        click(818,1553);sleep(400);

        click(269,1550);sleep(400);

        click(527,1882);sleep(400);

        click(267,1552);sleep(400);

        sleep(400);

        console.log('开始打卡');

        toast("打卡开始");

        return

    } else if (packageName("com.android.systemui").text("输入密码").findOnce()) {

        sleep(500);

        for (var i = 0; i < pass.length; i++) {

            var aa = text(pass[i].toString()).findOne().bounds();

            click(aa.centerX(), aa.centerY());

        }

    } else if (packageName("com.android.systemui").findOnce()) {

        sleep(500)

        swipe(360, 600, 360, 0, 100);

    }

}

function PunchClock() {

// var close = className("android.widget.Button").id("right_button").findOne().click();

// log(close);

// sleep(100);

// var cl2 = className("android.widget.Button").text("强行停止").findOne();

// console.log(cl2);

// cl2.click();

// sleep(200);



//签到

    var s = "三峡大学学生处"; 

    launchApp("微信");

    sleep(2000)



    var sousuo = className("android.widget.ImageView").id("f8y").findOne(2000);//进行搜索

    log(sousuo);

    if(sousuo!=null){

        click(sousuo.bounds().centerX(),sousuo.bounds().centerY());

    }

        sleep(2000);



    setText("0",s);

        sleep(2000)



    var sdxsc = className("android.widget.TextView").text(s).findOnce(0);

    log(sdxsc);

    if(sdxsc==null) exit();

        click(sdxsc.bounds().centerX(),sdxsc.bounds().centerY());

        sleep(500);



    var zzfw = className("android.widget.TextView").text("自助服务").findOne(2000);

    console.log(zzfw);

    click(zzfw.bounds().centerX(),zzfw.bounds().centerY());

        sleep(500);



    var aqsb = className("android.widget.TextView").text("安全上报").findOne(2000);

    console.log(aqsb);

    click(aqsb.bounds().centerX(),aqsb.bounds().centerY());

        sleep(3000);



    click("报平安（截止21:00）",0)

    while(true) {

            var target =  text("报平安（截止21:00）").findOnce();

            if (target == null) {

                sleep(3000);

                continue;

            } 

            target.click();

            break;

            //浏览网页20s

        }

        sleep(1000)



    log(device.width);

    log(device.height)

    swipe(300,1000,300,1,1000);

    swipe(300,1000,300,1,1000);



    text("提交").click()

    sleep(1000);

    text("确定").click()

    sleep(500);

    home();

    console.log('打卡结束');

    toast("打卡结束");

}
