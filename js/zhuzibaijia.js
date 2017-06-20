// JavaScript Document;
function al(x){
	var content=new Array(
	"阴阳家，“太极玄一，阴阳两气”。 在动画的时代背景中的五百年前，阴阳家脱离道家，剑走偏锋，自成一派，追求天人极限，创出了很多威力巨大的招术，世代也有俊杰辈出。 但其高深莫测的阴阳咒印却又在上百年前失传了，而在动画的时代背景中又重现人间，而且正因为失传了百年，所以能够诊断和解开阴阳咒术的人也已经几乎找不到了。",
	"墨家，“天下皆白，唯我独黑。非攻墨门，兼爱平生”。始创于墨子，历代首领都称为“巨子”。历代巨子携弟子于绝岭雄峰间，筑起墨家机关城，成为最后的“人间乐土”。墨家与儒家并称当世两大显学，墨家弟子中精于武艺者称为“墨侠”，奉守“非攻，兼爱”的要旨，擅长机关构造之术。墨家弟子行侠仗义，常以墨门绝学机关术助他国守城为世人称道，是侠义精神的代表。",
	"儒家，第一代宗师为鲁国的孔子，自孔子被誉为“圣者”以来，儒家已流传几百年，期间不断发展壮大。其门下共分成八系，不过只剩下七个，其中有一系已经流失。儒侠们怀揣着“修身、齐家、治国、平天下”的理想，逐渐成为诸子百家中最受世人推崇的一派，与墨家并称为当世两大显学，而儒家势力最为强盛的地方就在繁华一时的齐鲁之地。伏念、颜路、张良被称为“齐鲁三杰”。",
	"农家，尊崇上古神农氏，精通五谷之术。农家弟子遍布整个天下，而且游侠隐士辈出，多正直侠义之士，但却行踪莫测，常隐于田野市集之中，不求闻达于诸侯，是当今诸子百家中弟子数量最庞大的一派。农家弟子大多出身平民，这一点与墨家也较为接近，因此，农家也是墨家在未来计划中想要争取的朋友，而非敌人。",
	"名家以善于辩论，善于语言分析而著称。名家的开山前辈惠子原本是与儒家孔孟、道家老庄、墨家墨子等大派齐名的人物，不过名家这些年一路传下来，路越走越偏门，弟子也越来越少了。公孙玲珑 公孙龙的后人，能言善辩的名家继承人。擅长诡辩术。身形庞硕，说话却矫柔造作，对自己的样貌甚为自信。随李斯来到桑海，与儒家的子明辩合，失败，因此而苦恼 ",
	"医家，以救死扶伤为己任。其中“医仙”端木蓉曾立下“三不救”：秦国之人不救；姓盖之人不救；因逞凶斗狠、剑受伤的人不救。",
	" 流沙“聚散流沙，生死无踪”“聚散流沙”由韩非创立，以达“术以知奸，以刑止刑”的目的，组织内杀手武艺高超。韩非死后，卫庄成为首领，调查韩非死因。而“逆流沙”，是卫庄麾下的一支黑暗中的部队，专门负责一些难度超绝，极度隐秘的暗杀任务，是组织中非常可怕的力量。",
	"罗网“天罗地网，无孔不入”罗网刺客团，最庞大同时也是最可怕的神秘组织。其核心杀手是六剑奴。六剑奴都忘却了自己的名字，从他们拿到赵高送给他们的上古利刃的那一刻起，他将只有一个名字，那就是那把利剑的名字。罗网组织在七国之内，编织着一张无形的巨网，大量吸收亡命死囚，流浪剑客，加以残酷血腥的训练。将他们培养成致命的一根根毒刺，如同一只只潜伏在大秦帝国阴影中的蜘蛛，时刻守候着落入网中的猎物。",
	"项家/项氏一族（未来的西楚王国）在楚国世世代代为楚将。门下亦有异姓谋士将领。项燕 楚国名将。战死 。项？ 项燕之子，少羽生父，项梁兄长。战死，牺牲前激励少羽。（片中名字未公布。历史上名字有争议，有““项荣”、“项渠”、“项英”、“项婴”等说法……“项超”无史料记载。） 项梁 项燕之子，少羽的叔父兼家臣（注：历史上项梁战死前，地位一直高于项羽。）。生性豪放，暗中招兵买马，准备推翻秦朝 范增 谋士。老者，少羽兵法上的启蒙老师，为人老谋深算，审时度势，洞察敏锐 龙且 与少羽一同长大，情同手足的兄弟。楚军大败后与项家残部走散，后自己组织势力在桑海占山为王。一次巧遇之下，与少羽重逢",
	" 公输家族“墨家机关，木石走路，青铜开口，要问公输”公输家族始创于鲁班（公输盘）。与墨家一样，同样也是以精通机关术扬名天下。三百多年来，一直与墨家争斗。墨家的非攻机关术一直以非攻兼爱为宗旨，反对战争，捍卫和平。而公输家族的霸道机关术一旦介入，就是意味着战争。公输仇 现任掌门，据传对机关术的精通程度已接近鲁班。他把机关杀伤力的进攻极度强化，并对祖师爷败给墨家一事始终耿耿于怀 ",
	"纵横家，“苍生涂涂，天下缭燎，诸子百家，唯我纵横”。七百年来，春秋五霸，战国七雄，每一国每一朝兴衰的背后，都有一个共同的名字——鬼谷。历代鬼谷先生一生只收两名弟子，一个是纵，一个是横，势不两立，两人之间的胜者就能成为新一任的鬼谷子，这种奇异传统已经沿袭了几百年。历代鬼谷子虽一人之力，却强于百万之师，“一怒而诸侯惧，安居则天下息”。赵一 （名字出自《秦时明月网页游戏》，正剧未透露名字。）前任鬼谷子，江湖中泰山北斗级的前辈人物，盖聂与卫庄的师傅，纵横家上一任掌门 。盖聂 气质从容淡定，处事冷静，在江湖享有“剑圣”“天下第一剑”的称号，却意外从秦国叛逃，携故人之子荆天明，亡命天涯 。卫庄 盖聂的同门师弟，同为鬼谷派纵横剑法的传人，浑身充满邪气与霸气，武功深不可测，“聚散流沙”组织首领 ",
	" 蜀山 西方蜀山，是个奇特的巫族。关于蜀山，这是一个非常古老，隐秘，强大的民族。而且，巫族与阴阳家也有着很深的渊源。蜀山叛逆分子后被蒙恬征灭，但仍有残余势力。石兰 蜀山公主，蜀山武功 ：腾挪格斗术 蜀国特有的腾挪格斗术，号称比猿猴更敏捷，比虎豹更猛烈的拳脚。蛇蛊术 一种蛊阵陷阱，一旦被白蛇咬中必死无疑。） 。一叶障目 一叶障目，不见天下，蜀国独有的幻术可以迷惑别人隐藏自己。",
	"法家，历代法家以上古神兽“獬豸”为标志，提倡以赏罚规矩民心。法家先贤商鞅以一己之力助秦国崛起于西方，成为战国七雄之一，后韩非子集法家势、术、法三派思想之大成而倍受秦王推崇。李斯 法家传人，曾拜师于荀子，后成秦国宰相，一人之下万人之上，当世法家最高官职者。处事干练，心思慎密，提出“以江湖制江湖”计策，一心辅佐秦王统一天下 韩非 法家的集大成者，韩国公子，荀子的得意弟子，赤练的兄长，“聚散流沙”创立者之一。后疑被李斯设计杀于秦国狱中，死因疑为阴阳家的六魂恐咒 ",
	"兵家，始于千古武圣奇人齐太公，他辅佐武王伐纣，著《太公兵法》流传后世。春秋时，兵家奇才孙武著绝世秘籍《孙子兵法》，以“疾如风，徐如林，掠如火，静如山”十二字要诀道出行兵布阵必胜之法，世人尊其为“兵圣”。得兵家者可获扭转乾坤之力，为万人敌。",
	"道家，起源于远古的隐士传统，创始者老子，后老子于函谷闭关著《道德经》，以“道”解天下万物运行之理，“绝圣弃智”，“清静无为”。主张以自身修炼达到万物融合的至高境界。其后道家逐渐分裂成【天】【人】二宗，之后百年间，二宗之间争斗不止，而原先世代相传的名剑“雪霁”，也变成由二宗掌门轮流执掌。现由【人宗】逍遥子执掌。",
	"敬请期待")
	document.getElementById('con').innerHTML=content[x-1];

	if(x<9){
		var xx=document.getElementById('u').getElementsByTagName('li')[x-1].innerHTML;
		document.getElementById("ti").innerHTML=xx;
		}
	else{
		var xx=document.getElementById('u1').getElementsByTagName('li')[x-9].innerHTML;
		document.getElementById("ti").innerHTML=xx;
		}
	}
	
	