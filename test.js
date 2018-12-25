const fs = require('fs'); // 读取文件

var getRgb = /(?<=\n).*?(?=<\/span)/

var getName = /(?<=;">).*?(?= <br>) /
var str = `<div class="table-box"><table border="0" cellspacing="0" cellpadding="5" width="97%"><tbody><tr><td bgcolor="#FFFFFF" colspan="4">
<p align="center"><span style="font-size:40px;">中文颜色名称颜色对照表</span></p>
</td>
</tr><tr><td bgcolor="#F7ACBC" width="25%"><span style="color:#FFFFFF;">鸨色 <br>
#f7acbc</span></td>
<td bgcolor="#DEAB8A" width="25%"><span style="color:#FFFFFF;">赤白橡 <br>
#deab8a</span></td>
<td bgcolor="#817936" width="25%"><span style="color:#FFFFFF;">油色 <br>
#817936</span></td>
<td bgcolor="#444693" width="25%"><span style="color:#FFFFFF;">绀桔梗 <br>
#444693</span></td>
</tr><tr><td bgcolor="#EF5B9C"><span style="color:#FFFFFF;">踯躅色 <br>
#ef5b9c</span></td>
<td bgcolor="#FEDCBD"><span style="color:#000000;">肌色 <br>
#fedcbd</span></td>
<td bgcolor="#7F7522"><span style="color:#FFFFFF;">伽罗色 <br>
#7f7522</span></td>
<td bgcolor="#2B4490"><span style="color:#FFFFFF;">花色 <br>
#2b4490</span></td>
</tr><tr><td bgcolor="#FEEEED"><span style="color:#000000;">桜色 <br>
#feeeed</span></td>
<td bgcolor="#F47920"><span style="color:#FFFFFF;">橙色 <br>
#f47920</span></td>
<td bgcolor="#80752C"><span style="color:#FFFFFF;">青丹 <br>
#80752c</span></td>
<td bgcolor="#2A5CAA"><span style="color:#FFFFFF;">瑠璃色 <br>
#2a5caa</span></td>
</tr><tr><td bgcolor="#F05B72"><span style="color:#FFFFFF;">蔷薇色 <br>
#f05b72</span></td>
<td bgcolor="#905A3D"><span style="color:#FFFFFF;">灰茶 <br>
#905a3d</span></td>
<td bgcolor="#87843B"><span style="color:#FFFFFF;">莺色 <br>
#87843b</span></td>
<td bgcolor="#224B8F"><span style="color:#FFFFFF;">琉璃绀 <br>
#224b8f</span></td>
</tr><tr><td bgcolor="#F15B6C"><span style="color:#FFFFFF;">韩红 <br>
#f15b6c</span></td>
<td bgcolor="#8F4B2E"><span style="color:#FFFFFF;">茶色 <br>
#8f4b2e</span></td>
<td bgcolor="#726930"><span style="color:#FFFFFF;">利久色 <br>
#726930</span></td>
<td bgcolor="#003A6C"><span style="color:#FFFFFF;">绀色 <br>
#003a6c</span></td>
</tr><tr><td bgcolor="#F8ABA6"><span style="color:#FFFFFF;">珊瑚色 <br>
#f8aba6</span></td>
<td bgcolor="#87481F"><span style="color:#FFFFFF;">桦茶色 <br>
#87481f</span></td>
<td bgcolor="#454926"><span style="color:#FFFFFF;">媚茶 <br>
#454926</span></td>
<td bgcolor="#102B6A"><span style="color:#FFFFFF;">青蓝 <br>
#102b6a</span></td>
</tr><tr><td bgcolor="#F69C9F"><span style="color:#FFFFFF;">红梅色 <br>
#f69c9f</span></td>
<td bgcolor="#5F3C23"><span style="color:#FFFFFF;">枯茶 <br>
#5f3c23</span></td>
<td bgcolor="#2E3A1F"><span style="color:#FFFFFF;">蓝海松茶 <br>
#2e3a1f</span></td>
<td bgcolor="#426AB3"><span style="color:#FFFFFF;">杜若色 <br>
#426ab3</span></td>
</tr><tr><td bgcolor="#F58F98"><span style="color:#FFFFFF;">桃色 <br>
#f58f98</span></td>
<td bgcolor="#6B473C"><span style="color:#FFFFFF;">焦茶 <br>
#6b473c</span></td>
<td bgcolor="#4D4F36"><span style="color:#FFFFFF;">青钝 <br>
#4d4f36</span></td>
<td bgcolor="#46485F"><span style="color:#FFFFFF;">胜色 <br>
#46485f</span></td>
</tr><tr><td bgcolor="#CA8687"><span style="color:#FFFFFF;">薄柿 <br>
#ca8687</span></td>
<td bgcolor="#FAA755"><span style="color:#FFFFFF;">柑子色 <br>
#faa755</span></td>
<td bgcolor="#B7BA6B"><span style="color:#FFFFFF;">抹茶色 <br>
#b7ba6b</span></td>
<td bgcolor="#4E72B8"><span style="color:#FFFFFF;">群青色 <br>
#4e72b8</span></td>
</tr><tr><td bgcolor="#F391A9"><span style="color:#FFFFFF;">薄红梅 <br>
#f391a9</span></td>
<td bgcolor="#FAB27B"><span style="color:#FFFFFF;">杏色 <br>
#fab27b</span></td>
<td bgcolor="#B2D235"><span style="color:#FFFFFF;">黄緑 <br>
#b2d235</span></td>
<td bgcolor="#181D4B"><span style="color:#FFFFFF;">铁绀 <br>
#181d4b</span></td>
</tr><tr><td bgcolor="#BD6758"><span style="color:#FFFFFF;">曙色 <br>
#bd6758</span></td>
<td bgcolor="#F58220"><span style="color:#FFFFFF;">蜜柑色 <br>
#f58220</span></td>
<td bgcolor="#5C7A29"><span style="color:#FFFFFF;">苔色 <br>
#5c7a29</span></td>
<td bgcolor="#1A2933"><span style="color:#FFFFFF;">蓝铁 <br>
#1a2933</span></td>
</tr><tr><td bgcolor="#D71345"><span style="color:#FFFFFF;">红色 <br>
#d71345</span></td>
<td bgcolor="#843900"><span style="color:#FFFFFF;">褐色 <br>
#843900</span></td>
<td bgcolor="#BED742"><span style="color:#FFFFFF;">若草色 <br>
#bed742</span></td>
<td bgcolor="#121A2A"><span style="color:#FFFFFF;">青褐 <br>
#121a2a</span></td>
</tr><tr><td bgcolor="#D64F44"><span style="color:#FFFFFF;">赤丹 <br>
#d64f44</span></td>
<td bgcolor="#905D1D"><span style="color:#FFFFFF;">路考茶 <br>
#905d1d</span></td>
<td bgcolor="#7FB80E"><span style="color:#FFFFFF;">若緑 <br>
#7fb80e</span></td>
<td bgcolor="#0C212B"><span style="color:#FFFFFF;">褐返 <br>
#0c212b</span></td>
</tr><tr><td bgcolor="#D93A49"><span style="color:#FFFFFF;">红赤 <br>
#d93a49</span></td>
<td bgcolor="#8A5D19"><span style="color:#FFFFFF;">饴色 <br>
#8a5d19</span></td>
<td bgcolor="#A3CF62"><span style="color:#FFFFFF;">萌黄 <br>
#a3cf62</span></td>
<td bgcolor="#6A6DA9"><span style="color:#FFFFFF;">藤纳戸 <br>
#6a6da9</span></td>
</tr><tr><td bgcolor="#B3424A"><span style="color:#FFFFFF;">臙脂色 <br>
#b3424a</span></td>
<td bgcolor="#8C531B"><span style="color:#FFFFFF;">丁子色 <br>
#8c531b</span></td>
<td bgcolor="#769149"><span style="color:#FFFFFF;">苗色 <br>
#769149</span></td>
<td bgcolor="#585EAA"><span style="color:#FFFFFF;">桔梗色 <br>
#585eaa</span></td>
</tr><tr><td bgcolor="#C76968"><span style="color:#FFFFFF;">真赭 <br>
#c76968</span></td>
<td bgcolor="#826858"><span style="color:#FFFFFF;">丁子茶 <br>
#826858</span></td>
<td bgcolor="#6D8346"><span style="color:#FFFFFF;">草色 <br>
#6d8346</span></td>
<td bgcolor="#494E8F"><span style="color:#FFFFFF;">绀蓝 <br>
#494e8f</span></td>
</tr><tr><td bgcolor="#BB505D"><span style="color:#FFFFFF;">今様色 <br>
#bb505d</span></td>
<td bgcolor="#64492B"><span style="color:#FFFFFF;">黄栌 <br>
#64492b</span></td>
<td bgcolor="#78A355"><span style="color:#FFFFFF;">柳色 <br>
#78a355</span></td>
<td bgcolor="#AFB4DB"><span style="color:#FFFFFF;">藤色 <br>
#afb4db</span></td>
</tr><tr><td bgcolor="#987165"><span style="color:#FFFFFF;">梅染 <br>
#987165</span></td>
<td bgcolor="#AE6642"><span style="color:#FFFFFF;">土器色 <br>
#ae6642</span></td>
<td bgcolor="#ABC88B"><span style="color:#FFFFFF;">若草色 <br>
#abc88b</span></td>
<td bgcolor="#9B95C9"><span style="color:#FFFFFF;">藤紫 <br>
#9b95c9</span></td>
</tr><tr><td bgcolor="#AC6767"><span style="color:#FFFFFF;">退红色 <br>
#ac6767</span></td>
<td bgcolor="#56452D"><span style="color:#FFFFFF;">黄枯茶 <br>
#56452d</span></td>
<td bgcolor="#74905D"><span style="color:#FFFFFF;">松叶色 <br>
#74905d</span></td>
<td bgcolor="#6950A1"><span style="color:#FFFFFF;">青紫 <br>
#6950a1</span></td>
</tr><tr><td bgcolor="#973C3F"><span style="color:#FFFFFF;">苏芳 <br>
#973c3f</span></td>
<td bgcolor="#96582A"><span style="color:#FFFFFF;">狐色 <br>
#96582a</span></td>
<td bgcolor="#CDE6C7"><span style="color:#000000;">白緑 <br>
#cde6c7</span></td>
<td bgcolor="#6F60AA"><span style="color:#FFFFFF;">菫色 <br>
#6f60aa</span></td>
</tr><tr><td bgcolor="#B22C46"><span style="color:#FFFFFF;">茜色 <br>
#b22c46</span></td>
<td bgcolor="#705628"><span style="color:#FFFFFF;">黄橡 <br>
#705628</span></td>
<td bgcolor="#1D953F"><span style="color:#FFFFFF;">薄緑 <br>
#1d953f</span></td>
<td bgcolor="#867892"><span style="color:#FFFFFF;">鸠羽色 <br>
#867892</span></td>
</tr><tr><td bgcolor="#A7324A"><span style="color:#FFFFFF;">红 <br>
#a7324a</span></td>
<td bgcolor="#4A3113"><span style="color:#FFFFFF;">银煤竹 <br>
#4a3113</span></td>
<td bgcolor="#77AC98"><span style="color:#FFFFFF;">千草色 <br>
#77ac98</span></td>
<td bgcolor="#918597"><span style="color:#FFFFFF;">薄色 <br>
#918597</span></td>
</tr><tr><td bgcolor="#AA363D"><span style="color:#FFFFFF;">银朱 <br>
#aa363d</span></td>
<td bgcolor="#412F1F"><span style="color:#FFFFFF;">涅色 <br>
#412f1f</span></td>
<td bgcolor="#007D65"><span style="color:#FFFFFF;">青緑 <br>
#007d65</span></td>
<td bgcolor="#6F6D85"><span style="color:#FFFFFF;">薄鼠 <br>
#6f6d85</span></td>
</tr><tr><td bgcolor="#ED1941"><span style="color:#FFFFFF;">赤 <br>
#ed1941</span></td>
<td bgcolor="#845538"><span style="color:#FFFFFF;">胡桃色 <br>
#845538</span></td>
<td bgcolor="#84BF96"><span style="color:#FFFFFF;">浅緑 <br>
#84bf96</span></td>
<td bgcolor="#594C6D"><span style="color:#FFFFFF;">鸠羽鼠 <br>
#594c6d</span></td>
</tr><tr><td bgcolor="#F26522"><span style="color:#FFFFFF;">朱色 <br>
#f26522</span></td>
<td bgcolor="#8E7437"><span style="color:#FFFFFF;">香色 <br>
#8e7437</span></td>
<td bgcolor="#45B97C"><span style="color:#FFFFFF;">緑 <br>
#45b97c</span></td>
<td bgcolor="#694D9F"><span style="color:#FFFFFF;">菖蒲色 <br>
#694d9f</span></td>
</tr><tr><td bgcolor="#D2553D"><span style="color:#FFFFFF;">洗朱 <br>
#d2553d</span></td>
<td bgcolor="#69541B"><span style="color:#FFFFFF;">国防色 <br>
#69541b</span></td>
<td bgcolor="#225A1F"><span style="color:#FFFFFF;">草色 <br>
#225a1f</span></td>
<td bgcolor="#6F599C"><span style="color:#FFFFFF;">江戸紫 <br>
#6f599c</span></td>
</tr><tr><td bgcolor="#B4534B"><span style="color:#FFFFFF;">红桦色 <br>
#b4534b</span></td>
<td bgcolor="#D5C59F"><span style="color:#FFFFFF;">练色 <br>
#d5c59f</span></td>
<td bgcolor="#367459"><span style="color:#FFFFFF;">木贼色 <br>
#367459</span></td>
<td bgcolor="#8552A1"><span style="color:#FFFFFF;">紫 <br>
#8552a1</span></td>
</tr><tr><td bgcolor="#EF4136"><span style="color:#FFFFFF;">红绯 <br>
#ef4136</span></td>
<td bgcolor="#CD9A5B"><span style="color:#FFFFFF;">肉色 <br>
#cd9a5b</span></td>
<td bgcolor="#007947"><span style="color:#FFFFFF;">常盘色 <br>
#007947</span></td>
<td bgcolor="#543044"><span style="color:#FFFFFF;">灭紫 <br>
#543044</span></td>
</tr><tr><td bgcolor="#C63C26"><span style="color:#FFFFFF;">桦色 <br>
#c63c26</span></td>
<td bgcolor="#CD9A5B"><span style="color:#FFFFFF;">人色 <br>
#cd9a5b</span></td>
<td bgcolor="#40835E"><span style="color:#FFFFFF;">緑青色 <br>
#40835e</span></td>
<td bgcolor="#63434F"><span style="color:#FFFFFF;">葡萄鼠 <br>
#63434f</span></td>
</tr><tr><td bgcolor="#F3715C"><span style="color:#FFFFFF;">铅丹色 <br>
#f3715c</span></td>
<td bgcolor="#B36D41"><span style="color:#FFFFFF;">土色 <br>
#b36d41</span></td>
<td bgcolor="#2B6447"><span style="color:#FFFFFF;">千歳緑 <br>
#2b6447</span></td>
<td bgcolor="#7D5886"><span style="color:#FFFFFF;">古代紫 <br>
#7d5886</span></td>
</tr><tr><td bgcolor="#A7573B"><span style="color:#FFFFFF;">赭 <br>
#a7573b</span></td>
<td bgcolor="#DF9464"><span style="color:#FFFFFF;">小麦色 <br>
#df9464</span></td>
<td bgcolor="#005831"><span style="color:#FFFFFF;">深緑 <br>
#005831</span></td>
<td bgcolor="#401C44"><span style="color:#FFFFFF;">暗红 <br>
#401c44</span></td>
</tr><tr><td bgcolor="#AA2116"><span style="color:#FFFFFF;">绯色 <br>
#aa2116</span></td>
<td bgcolor="#B76F40"><span style="color:#FFFFFF;">琥珀色 <br>
#b76f40</span></td>
<td bgcolor="#006C54"><span style="color:#FFFFFF;">萌葱色 <br>
#006c54</span></td>
<td bgcolor="#472D56"><span style="color:#FFFFFF;">葡萄 <br>
#472d56</span></td>
</tr><tr><td bgcolor="#B64533"><span style="color:#FFFFFF;">丹 <br>
#b64533</span></td>
<td bgcolor="#AD8B3D"><span style="color:#FFFFFF;">木兰色 <br>
#ad8b3d</span></td>
<td bgcolor="#375830"><span style="color:#FFFFFF;">青白橡 <br>
#375830</span></td>
<td bgcolor="#45224A"><span style="color:#FFFFFF;">茄子绀 <br>
#45224a</span></td>
</tr><tr><td bgcolor="#B54334"><span style="color:#FFFFFF;">土 <br>
#b54334</span></td>
<td bgcolor="#DEA32C"><span style="color:#FFFFFF;">栀子色 <br>
#dea32c</span></td>
<td bgcolor="#274D3D"><span style="color:#FFFFFF;">革色 <br>
#274d3d</span></td>
<td bgcolor="#411445"><span style="color:#FFFFFF;">紫绀 <br>
#411445</span></td>
</tr><tr><td bgcolor="#853F04"><span style="color:#FFFFFF;">焦香 <br>
#853f04</span></td>
<td bgcolor="#D1923F"><span style="color:#FFFFFF;">朽叶 <br>
#d1923f</span></td>
<td bgcolor="#375830"><span style="color:#FFFFFF;">麹尘 <br>
#375830</span></td>
<td bgcolor="#4B2F3D"><span style="color:#FFFFFF;">浓色 <br>
#4b2f3d</span></td>
</tr><tr><td bgcolor="#840228"><span style="color:#FFFFFF;">真红 <br>
#840228</span></td>
<td bgcolor="#C88400"><span style="color:#FFFFFF;">萱草色 <br>
#c88400</span></td>
<td bgcolor="#27342B"><span style="color:#FFFFFF;">仙斎茶 <br>
#27342b</span></td>
<td bgcolor="#402E4C"><span style="color:#FFFFFF;">二蓝 <br>
#402e4c</span></td>
</tr><tr><td bgcolor="#7A1723"><span style="color:#FFFFFF;">绯 <br>
#7a1723</span></td>
<td bgcolor="#C37E00"><span style="color:#FFFFFF;">黄金 <br>
#c37e00</span></td>
<td bgcolor="#65C294"><span style="color:#FFFFFF;">若竹色 <br>
#65c294</span></td>
<td bgcolor="#C77EB5"><span style="color:#FFFFFF;">菖蒲色 <br>
#c77eb5</span></td>
</tr><tr><td bgcolor="#A03939"><span style="color:#FFFFFF;">红海老茶 <br>
#a03939</span></td>
<td bgcolor="#C37E00"><span style="color:#FFFFFF;">金色 <br>
#c37e00</span></td>
<td bgcolor="#73B9A2"><span style="color:#FFFFFF;">青磁色 <br>
#73b9a2</span></td>
<td bgcolor="#EA66A6"><span style="color:#FFFFFF;">牡丹色 <br>
#ea66a6</span></td>
</tr><tr><td bgcolor="#8A2E3B"><span style="color:#FFFFFF;">浅苏芳 <br>
#8a2e3b</span></td>
<td bgcolor="#E0861A"><span style="color:#FFFFFF;">金茶 <br>
#e0861a</span></td>
<td bgcolor="#72BAA7"><span style="color:#FFFFFF;">青竹色 <br>
#72baa7</span></td>
<td bgcolor="#F173AC"><span style="color:#FFFFFF;">赤紫 <br>
#f173ac</span></td>
</tr><tr><td bgcolor="#8E453F"><span style="color:#FFFFFF;">鸢色 <br>
#8e453f</span></td>
<td bgcolor="#FFCE7B"><span style="color:#000000;">卵色 <br>
#ffce7b</span></td>
<td bgcolor="#005344"><span style="color:#FFFFFF;">铁色 <br>
#005344</span></td>
<td bgcolor="#FFFFFB"><span style="color:#000000;">白 <br>
#fffffb</span></td>
</tr><tr><td bgcolor="#8F4B4A"><span style="color:#FFFFFF;">小豆色 <br>
#8f4b4a</span></td>
<td bgcolor="#FCAF17"><span style="color:#FFFFFF;">山吹色 <br>
#fcaf17</span></td>
<td bgcolor="#122E29"><span style="color:#FFFFFF;">锖鼠 <br>
#122e29</span></td>
<td bgcolor="#FFFEF9"><span style="color:#000000;">胡粉色 <br>
#fffef9</span></td>
</tr><tr><td bgcolor="#892F1B"><span style="color:#FFFFFF;">弁柄色 <br>
#892f1b</span></td>
<td bgcolor="#BA8448"><span style="color:#FFFFFF;">黄土色 <br>
#ba8448</span></td>
<td bgcolor="#293047"><span style="color:#FFFFFF;">铁御纳戸 <br>
#293047</span></td>
<td bgcolor="#F6F5EC"><span style="color:#000000;">生成色 <br>
#f6f5ec</span></td>
</tr><tr><td bgcolor="#6B2C25"><span style="color:#FFFFFF;">栗梅 <br>
#6b2c25</span></td>
<td bgcolor="#896A45"><span style="color:#FFFFFF;">朽叶色 <br>
#896a45</span></td>
<td bgcolor="#00AE9D"><span style="color:#FFFFFF;">青緑 <br>
#00ae9d</span></td>
<td bgcolor="#D9D6C3"><span style="color:#000000;">灰白 <br>
#d9d6c3</span></td>
</tr><tr><td bgcolor="#733A31"><span style="color:#FFFFFF;">海老茶 <br>
#733a31</span></td>
<td bgcolor="#76624C"><span style="color:#FFFFFF;">空五倍子色 <br>
#76624c</span></td>
<td bgcolor="#508A88"><span style="color:#FFFFFF;">锖浅葱 <br>
#508a88</span></td>
<td bgcolor="#D1C7B7"><span style="color:#000000;">石竹色 <br>
#d1c7b7</span></td>
</tr><tr><td bgcolor="#54211D"><span style="color:#FFFFFF;">深绯 <br>
#54211d</span></td>
<td bgcolor="#6D5826"><span style="color:#FFFFFF;">莺茶 <br>
#6d5826</span></td>
<td bgcolor="#70A19F"><span style="color:#FFFFFF;">水浅葱 <br>
#70a19f</span></td>
<td bgcolor="#F2EADA"><span style="color:#000000;">象牙色 <br>
#f2eada</span></td>
</tr><tr><td bgcolor="#78331E"><span style="color:#FFFFFF;">赤铜色 <br>
#78331e</span></td>
<td bgcolor="#FFC20E"><span style="color:#FFFFFF;">向日葵色 <br>
#ffc20e</span></td>
<td bgcolor="#50B7C1"><span style="color:#FFFFFF;">新桥色 <br>
#50b7c1</span></td>
<td bgcolor="#D3D7D4"><span style="color:#000000;">乳白色 <br>
#d3d7d4</span></td>
</tr><tr><td bgcolor="#53261F"><span style="color:#FFFFFF;">赤褐色 <br>
#53261f</span></td>
<td bgcolor="#FDB933"><span style="color:#FFFFFF;">郁金色 <br>
#fdb933</span></td>
<td bgcolor="#00A6AC"><span style="color:#FFFFFF;">浅葱色 <br>
#00a6ac</span></td>
<td bgcolor="#999D9C"><span style="color:#FFFFFF;">薄钝 <br>
#999d9c</span></td>
</tr><tr><td bgcolor="#F15A22"><span style="color:#FFFFFF;">金赤 <br>
#f15a22</span></td>
<td bgcolor="#D3C6A6"><span style="color:#FFFFFF;">砂色 <br>
#d3c6a6</span></td>
<td bgcolor="#78CDD1"><span style="color:#FFFFFF;">白群 <br>
#78cdd1</span></td>
<td bgcolor="#A1A3A6"><span style="color:#FFFFFF;">银鼠 <br>
#a1a3a6</span></td>
</tr><tr><td bgcolor="#B4533C"><span style="color:#FFFFFF;">赤茶 <br>
#b4533c</span></td>
<td bgcolor="#C7A252"><span style="color:#FFFFFF;">芥子色 <br>
#c7a252</span></td>
<td bgcolor="#008792"><span style="color:#FFFFFF;">御纳戸色 <br>
#008792</span></td>
<td bgcolor="#9D9087"><span style="color:#FFFFFF;">茶鼠 <br>
#9d9087</span></td>
</tr><tr><td bgcolor="#84331F"><span style="color:#FFFFFF;">赤锖色 <br>
#84331f</span></td>
<td bgcolor="#DEC674"><span style="color:#FFFFFF;">淡黄 <br>
#dec674</span></td>
<td bgcolor="#94D6DA"><span style="color:#FFFFFF;">瓮覗 <br>
#94d6da</span></td>
<td bgcolor="#8A8C8E"><span style="color:#FFFFFF;">鼠色 <br>
#8a8c8e</span></td>
</tr><tr><td bgcolor="#F47A55"><span style="color:#FFFFFF;">黄丹 <br>
#f47a55</span></td>
<td bgcolor="#B69968"><span style="color:#FFFFFF;">亜麻色 <br>
#b69968</span></td>
<td bgcolor="#AFDFE4"><span style="color:#FFFFFF;">水色 <br>
#afdfe4</span></td>
<td bgcolor="#74787C"><span style="color:#FFFFFF;">薄墨色 <br>
#74787c</span></td>
</tr><tr><td bgcolor="#F15A22"><span style="color:#FFFFFF;">赤橙 <br>
#f15a22</span></td>
<td bgcolor="#C1A173"><span style="color:#FFFFFF;">枯色 <br>
#c1a173</span></td>
<td bgcolor="#5E7C85"><span style="color:#FFFFFF;">蓝鼠 <br>
#5e7c85</span></td>
<td bgcolor="#7C8577"><span style="color:#FFFFFF;">利休鼠 <br>
#7c8577</span></td>
</tr><tr><td bgcolor="#F3704B"><span style="color:#FFFFFF;">柿色 <br>
#f3704b</span></td>
<td bgcolor="#DBCE8F"><span style="color:#FFFFFF;">鸟子色 <br>
#dbce8f</span></td>
<td bgcolor="#76BECC"><span style="color:#FFFFFF;">秘色 <br>
#76becc</span></td>
<td bgcolor="#72777B"><span style="color:#FFFFFF;">铅色 <br>
#72777b</span></td>
</tr><tr><td bgcolor="#DA765B"><span style="color:#FFFFFF;">肉桂色 <br>
#da765b</span></td>
<td bgcolor="#FFD400"><span style="color:#FFFFFF;">黄色 <br>
#ffd400</span></td>
<td bgcolor="#90D7EC"><span style="color:#FFFFFF;">空色 <br>
#90d7ec</span></td>
<td bgcolor="#77787B"><span style="color:#FFFFFF;">灰色 <br>
#77787b</span></td>
</tr><tr><td bgcolor="#C85D44"><span style="color:#FFFFFF;">桦色 <br>
#c85d44</span></td>
<td bgcolor="#FFD400"><span style="color:#FFFFFF;">蒲公英色 <br>
#ffd400</span></td>
<td bgcolor="#009AD6"><span style="color:#FFFFFF;">青 <br>
#009ad6</span></td>
<td bgcolor="#4F5555"><span style="color:#FFFFFF;">钝色 <br>
#4f5555</span></td>
</tr><tr><td bgcolor="#AE5039"><span style="color:#FFFFFF;">炼瓦色 <br>
#ae5039</span></td>
<td bgcolor="#FFE600"><span style="color:#FFFFFF;">中黄 <br>
#ffe600</span></td>
<td bgcolor="#145B7D"><span style="color:#FFFFFF;">蓝色 <br>
#145b7d</span></td>
<td bgcolor="#6C4C49"><span style="color:#FFFFFF;">煤竹色 <br>
#6c4c49</span></td>
</tr><tr><td bgcolor="#6A3427"><span style="color:#FFFFFF;">锖色 <br>
#6a3427</span></td>
<td bgcolor="#F0DC70"><span style="color:#FFFFFF;">刈安色 <br>
#f0dc70</span></td>
<td bgcolor="#11264F"><span style="color:#FFFFFF;">浓蓝 <br>
#11264f</span></td>
<td bgcolor="#563624"><span style="color:#FFFFFF;">黒茶 <br>
#563624</span></td>
</tr><tr><td bgcolor="#8F4B38"><span style="color:#FFFFFF;">桧皮色 <br>
#8f4b38</span></td>
<td bgcolor="#FCF16E"><span style="color:#FFFFFF;">黄檗色 <br>
#fcf16e</span></td>
<td bgcolor="#7BBFEA"><span style="color:#FFFFFF;">勿忘草色 <br>
#7bbfea</span></td>
<td bgcolor="#3E4145"><span style="color:#FFFFFF;">黒橡 <br>
#3e4145</span></td>
</tr><tr><td bgcolor="#8E3E1F"><span style="color:#FFFFFF;">栗色 <br>
#8e3e1f</span></td>
<td bgcolor="#DECB00"><span style="color:#FFFFFF;">緑黄色 <br>
#decb00</span></td>
<td bgcolor="#33A3DC"><span style="color:#FFFFFF;">露草色 <br>
#33a3dc</span></td>
<td bgcolor="#3C3645"><span style="color:#FFFFFF;">浓鼠 <br>
#3c3645</span></td>
</tr><tr><td bgcolor="#F36C21"><span style="color:#FFFFFF;">黄赤 <br>
#f36c21</span></td>
<td bgcolor="#CBC547"><span style="color:#FFFFFF;">鶸色 <br>
#cbc547</span></td>
<td bgcolor="#228FBD"><span style="color:#FFFFFF;">缥色 <br>
#228fbd</span></td>
<td bgcolor="#464547"><span style="color:#FFFFFF;">墨 <br>
#464547</span></td>
</tr><tr><td bgcolor="#B4532A"><span style="color:#FFFFFF;">代赭 <br>
#b4532a</span></td>
<td bgcolor="#6E6B41"><span style="color:#FFFFFF;">海松色 <br>
#6e6b41</span></td>
<td bgcolor="#2468A2"><span style="color:#FFFFFF;">浅缥 <br>
#2468a2</span></td>
<td bgcolor="#130C0E"><span style="color:#FFFFFF;">黒 <br>
#130c0e</span></td>
</tr><tr><td bgcolor="#B7704F"><span style="color:#FFFFFF;">骆驼色 <br>
#b7704f</span></td>
<td bgcolor="#596032"><span style="color:#FFFFFF;">鶸茶 <br>
#596032</span></td>
<td bgcolor="#2570A1"><span style="color:#FFFFFF;">薄缥 <br>
#2570a1</span></td>
<td bgcolor="#281F1D"><span style="color:#FFFFFF;">黒铁 <br>
#281f1d</span></td>
</tr><tr><td bgcolor="#DE773F"><span style="color:#FFFFFF;">黄茶 <br>
#de773f</span></td>
<td bgcolor="#525F42"><span style="color:#FFFFFF;">山鸠色 <br>
#525f42</span></td>
<td bgcolor="#2585A6"><span style="color:#FFFFFF;">薄花色 <br>
#2585a6</span></td>
<td bgcolor="#2F271D"><span style="color:#FFFFFF;">蝋色 <br>
#2f271d</span></td>
</tr><tr><td bgcolor="#C99979"><span style="color:#FFFFFF;">洗柿 <br>
#c99979</span></td>
<td bgcolor="#5F5D46"><span style="color:#FFFFFF;">生壁色 <br>
#5f5d46</span></td>
<td bgcolor="#1B315E"><span style="color:#FFFFFF;">绀青 <br>
#1b315e</span></td>
<td bgcolor="#1D1626"><span style="color:#FFFFFF;">紫黒 <br>
#1d1626</span></td>
</tr></tbody></table></div>`

console.log(str.match(getRgb))

let RgbList = []

let RgbName = []

str.split('style="color:').forEach(element => {
  if (element.match(getRgb)) {
    // 取得RGB
    RgbList.push(element.match(getRgb)[0])
  }
  if (element.match(getName)) {
    // 取得RGB
    RgbName.push(element.match(getName)[0])
  }

});

console.log(RgbList.length)
console.log(RgbName.length)

let c = 'export const Rgb_List = [\n'

for (let i of RgbList) {
  c += `"${i}",\n`
}
c+=']\nexport const RgbName_List = [\n'

for (let i of RgbName) {
  c += `"${i}",\n`
}
c+=']'

fs.appendFile('get.js', c, function (err) {
  if (err) {
    console.log(err)
  }
})
