move to 新項目網址:</br>
https://github.com/hktrpg/TG.line.Discord.Roll.Bot


這項目已不再更新</br>
整合成一個可以同時在Telegram Discord Line 上運行項目了</br>
所以新的功能都只會加入在新項目上</br>
新項目雖然是三合一, 但可以單獨啓動, 想要line 就只啟動line 平台功能</br>

</br>
想試用這機械人的話,請按以下連結，輸入bothelp顯示教學.</br></br>
Line版：</br>
https://line.me/R/ti/p/svMLqy9Mik</br></br>
Discord版： </br>
https://discordapp.com/oauth2/authorize?&client_id=544462904037081138&scope=bot&permissions=8</br></br>
Telegram版： </br>
http://t.me/hktrpg_bot</br>
網頁版：</br>
https://www.hktrpg.com/tool/rollbot.html</br></br>
簡易版網上擲骰工具 — 兩面 六面 十面 二十面 百面 自定</br>
https://www.hktrpg.com/tool/roll.html</br>

</br></br></br></br></br></br></br></br></br></br>
</br></br></br></br></br></br></br></br></br></br>







# RoboYabasoDiscord@HKTRPG  V0.3.4
# 開放原始碼的Discord骰子機器人
關於RoboYabaso
==
RoboYabaso是一個開放源碼的line骰子機器人計畫。</br>
最早由LarryLo  Retsnimle開發。</br>
  

這是建立在Heroku的免費伺服器上，所以大家都可以按照下面的教程，客制化做一個自己的DiscordBot！</br>
不懂授權條款，如果使用其中的CODE的話，就把它繼續開源下去吧
</br></br></br>

試用
==
RoboYabasoDiscord@HKTRPG 的Link是：</br>
https://discordapp.com/oauth2/authorize?&client_id=544462904037081138&scope=bot&permissions=8 </br>

骰組指令在最底下</br>

</br>
順便宣傳
<a href="http://www.goddessfantasy.net/bbs/index.php?board=1400.0">香港TRPG區</a>
<a href="https://www.hktrpg.com">TRPG百科</a>
招技術人員
</br></br></br>

特色介紹</br>
==
占卜運氣功能。</br>
支持大小階。</br>
增加HELP功能。詳情BOT內輸入bothelp 查看說明</br>
支持直接 1d100 5d20。</br>
cc<= 改成 cc cc1 cc2 ccn1 ccn2。</br>
增加永遠後日談的NC擲骰 來自Rainsting/TarotLineBot。</br>
增加wod 黑暗世界 DX3 SW2.0的擲骰。</br>
模組化設計。</br>
自定啓動語。</br>
</br></br></br>

如何建立自己的Discord骰子機器人
==

準備動作：
--
* 先申請好Discord帳號（廢話）</br>
* 先申請好Github帳號</br>
* 先申請好Heroku帳號</br>
以下全部選擇用免費的服務就夠了，請不要手殘選到付費。
</br></br></br>

Step1：先把這個專案Fork回去
--
* 到右上角的 ![Fork](http://i.imgur.com/g5VmzkC.jpg) 按鈕嗎，按下去。</br>
把這個專案存到你的Github裡。
</br></br></br></br>

Step2：建立DiscordBot賬號
--
* 到[http://discordapp.com/developers/applications/me](http://discordapp.com/developers/applications/me )登入一個Discord帳號，</br>
點選「New Application」，按照指示註冊你的Discord Bot。</br>
---

* 記下那個「CLIENT ID」</br>


* 進入左方Setting 的Bot</br>


* 在BUILD-A-BOT中點選Add Bot->Yes Do It. 接著把「Token」複製(Copy)下來</br>
</br></br></br>
Step3：將DiscordBot部署到Heroku
--

* 按一下下面這個按鈕</br>
按它→[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/zeteticl/DiscordRollBot_HKTRPG)←按它</br></br></br>
---

* 你會看到這個</br>
![Heroku](http://i.imgur.com/sbCVOcW.jpg)</br></br></br>
當然，先取一個App name，然後把以前記下的「Token」貼上.</br></br>
如果想要啓動語,可以順便打上. 例如啓動語!trpg 便會變成!trpg 1d100 
接著，按下Deploy app，等他跑完之後按下Manage App</br>
距離部署完機器人只差一步啦！
</br></br></br></br>



Step4：把機器人邀請到你的頻道
--
* 剛剛複製了一個「CLIENT ID」把它取代到以下網址中間</br>

[https://discordapp.com/oauth2/authorize?&client_id=CLIENTID&scope=bot&permissions=8](https://discordapp.com/oauth2/authorize?&client_id=CLIENTID&scope=bot&permissions=8)</br></br>

* 點擊然後選擇你的頻道</br>
* 然後就可以在頻道中使用你的Bot了.
---
</br></br></br>

如何修改並上傳程式碼咧
--
回到Heroku網頁，點選上面的Deploy，你會看到四種配置程式碼的方法。</br>
![Deploy](http://i.imgur.com/VVRpNLe.jpg)</br>

我猜想如果你是會用第一種（Heroku Git）或是第四種（Container Registry）的人，應該是不會看這種教學文～所以我就不介紹了～</br>
絕、絕對不是我自己也不會的關係哦（眼神漂移）</br>

以第二種（Github）來說的話，你可以綁定你的Github賬號——剛剛我們不是fork了一份程式碼回去嗎？把它連接上去，這樣你就可以在Github那邊修改你要的程式碼，再Deploy過來。</br>
或是你可以使用第三種（Dropbox），當你鏈接之後，它會自動幫你把你剛剛上線的程式碼下載到你的dropbox裡面。你修改完之後再上來Deploy就好咯。</br></br></br>


</br>
以上說明參考
--
https://github.com/zeteticl/TrpgLineBot-php
</br></br>

另外Heroku 的免費PLAN 會把不運行的APP自動OFFLINE</br>
以及一個月只可免費420小時，如果輸入信用卡資料，則可以免費升級1000小時</br>
想持續運行的話，可以用https://uptimerobot.com/ 這網站，注冊後每五鐘PING/訪問APP就可以了。</br></br>

下一部希望更新是
1. MONGODB (但好難啊....會有高手幫忙嗎....不想用GOOGLE SHEET.....

</br>

*2019/02/12</br>
完成DISCORD化</br>
</br>
*2019/02/14</br>
暗骰功能增加,只要在指令前加入dr 即可</br></br>
*2019/02/15</br>
新增成長或增長檢定：dp (數值) (名字)</br></br>
*2019/02/22</br>
修改COC7版擲骰的顯示</br></br>
*2019/03/26</br>
運氣占卜關鍵字改為運勢,減少誤觸 </br></br>

【擲骰BOT】
--
暗骰功能 在指令前打dr 結果會私訊你</br>
例子 dr cc 80</br>
</br>
基本擲骰1d100</br>
例如輸入2d6+1　攻撃！</br>
會輸出）2d6+1：攻撃  9[6+3]+1 = 10</br>
如上面一樣,在骰子數字後方隔空白位打字,可以進行發言。</br>
以下還有其他例子</br>
</br>
5 3D6 ： 分別骰出5次3d6</br>
D66 D66s： 骰出D66 s小者固定在前</br>
5B10： 不加總的擲骰 會進行小至大排序</br>
5B10 8： 如上,另外計算其中有多少粒大過8</br>
5U10 8： 進行5D10 每骰出一粒8會有一粒獎勵骰</br>
5U10 8 9： 如上,另外計算其中有多少粒大過9</br>
</br>
隨機選擇： 啓動語choice/隨機/選項/選1</br>
(問題)(啓動語)(問題)  (選項1) (選項2)</br>
例子 隨機收到聖誕禮物數 1 2 3 >4  </br>
  </br>
隨機排序： 啓動語　排序</br>
(問題)(啓動語)(問題)  (選項1) (選項2)(選項3)</br>
例子 交換禮物排序 A君 C君 F君 G君</br>
</br>
</br>
・COC六版判定　CCb （目標値）： 做出成功或失敗的判定</br>
例）CCb 30　CCb 80</br>
・COC七版判定　CCx（目標値）</br>
　x：獎勵骰/懲罰骰 (2～n2)。沒有的話可以省略。</br>
例）CC 30　CC1 50　CCn2 75</br>
・coc7角色背景：啓動語 coc7角色背景</br>
・coc6版創角：啓動語 cc6版創角 </br>
・coc7版創角：啓動語 cc7版創角 歲數</br>
・coc7版 即時型瘋狂：啓動語 ccrt </br>
・coc7版 總結型瘋狂：啓動語 ccsu </br>
・coc7 成長或增長檢定：dp (技能) (名稱)</br>
例）DP 80 偵查</br></br>


・NC 永遠的後日談擲骰</br>
(骰數)NC/NA (問題)</br>
  例子 1NC 2Na+4 3na-2</br>
依戀  NM (問題)</br>
  例子 NM 我的依戀</br></br>
  
・WOD 黑暗世界擲骰</br>
(骰數)WOD/Wd(加骰)(+成功數) (問題)</br>
  例子 2wod 3wd8 15wd9+2</br></br>

・SW2.0</br>
KKn+m-m@c$d$+xGF n=骰數 c=暴擊值 m=其他修正 d=固定值 x=增加值</br>
例子 KK050+8-1@8 KK050+8@8$9gf</br></br>

・DX3 </br>
nDXc+m-m  n=骰數 c=暴擊值 m=其他修正</br>
例子 5DX8-1+8</br></br>

・占卜運氣功能 字句中包括「運勢」兩字即可</br>
・塔羅牌占卜 塔羅/大十字塔羅/每日塔羅牌</br>
  時間tarot 等關键字可啓動</br>
・死亡FLAG：啓動語 立Flag/死亡flag</br>
