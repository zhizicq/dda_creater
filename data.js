/* ============================================================
 * DDA v1.4 数码宝贝：数字大冒险 — 车卡规则数据
 * 数据来源：《数码宝贝：数字大冒险（DDA v1.4 中文版）》
 * ============================================================ */

/* ---------- 战役等级（人类） ---------- */
const CAMPAIGN_LEVELS = {
  standard: { name: '标准 Standard', age: '8 - 13', cp: 30, cap: 3, finalCap: 5, catCap: 20,
    attrRec: 12, skillRec: 18, actOfInsp: 2, divineFate: 5 },
  enhanced: { name: '强化 Enhanced', age: '12 - 20', cp: 40, cap: 5, finalCap: 7, catCap: 20,
    attrRec: 18, skillRec: 22, actOfInsp: 4, divineFate: 7 },
  extreme: { name: '极端 Extreme', age: '16+', cp: 50, cap: 7, finalCap: 10, catCap: 25,
    attrRec: 22, skillRec: 28, actOfInsp: 6, divineFate: 10 }
};

/* ---------- 人类属性与技能 ---------- */
const HUMAN_STATS = [
  { key: 'agility',    name: '敏捷 Agility',
    skills: [
      { key: 'dodge',   name: '闪避 Dodge' },
      { key: 'fight',   name: '战斗 Fight' },
      { key: 'stealth', name: '潜行 Stealth' }
    ]},
  { key: 'body',       name: '体能 Body',
    skills: [
      { key: 'athletics',      name: '运动 Athletics' },
      { key: 'endurance',      name: '耐力 Endurance' },
      { key: 'feats',          name: '力量壮举 Feats of Strength' }
    ]},
  { key: 'charisma',   name: '魅力 Charisma',
    skills: [
      { key: 'manipulate',     name: '操控 Manipulate' },
      { key: 'perform',        name: '表演 Perform' },
      { key: 'persuasion',     name: '说服 Persuasion' }
    ]},
  { key: 'intelligence', name: '智力 Intelligence',
    skills: [
      { key: 'computer',       name: '计算机 Computer' },
      { key: 'survival',       name: '生存 Survival' },
      { key: 'knowledge',      name: '知识 Knowledge' }
    ]},
  { key: 'willpower',  name: '意志力 Willpower',
    skills: [
      { key: 'perception',     name: '感知 Perception' },
      { key: 'decipher',       name: '识破意图 Decipher Intent' },
      { key: 'bravery',        name: '勇气 Bravery' }
    ]}
];

/* ---------- 特别指令（按属性解锁）----------
 * 每阶需求按 标准/强化/极端 */
const SPECIAL_ORDERS = [
  { attr: 'agility', req: [3,5,6], name: '先发制人！Strike First!', type: '被动',
    desc: '数码兽获得 +1 先攻和 2 点基础移动力。' },
  { attr: 'agility', req: [4,6,8], name: '疾速打击！Strike Fast!', type: '每天一次 / 复杂动作',
    desc: '只要数码兽本回合移动过，驯兽师就可以为数码兽的攻击宣告此指令；目标数码兽的闪避池在该次攻击中视为减半。此指令无法触发"巨大力量"或"超额击杀"。' },
  { attr: 'agility', req: [5,7,10], name: '后发制人！Strike Last!', type: '每天一次 / 介入动作',
    desc: '受到攻击时，无论闪避成功与否，数码兽都会以【反击】效果进行反击，由驯兽师宣告。此指令无法触发"巨大力量"或"超额击杀"。此外，下一回合动作池将减少 1。' },
  { attr: 'body', req: [3,5,6], name: '能量爆发 Energy Burst', type: '每天一次 / 复杂动作',
    desc: '你的数码兽恢复 5 个伤口格。此数值是固定的。' },
  { attr: 'body', req: [4,6,8], name: '不屈之魂 Enduring Soul', type: '被动',
    desc: '数码兽现在可以用 1 个伤口格承受一次致命打击，但每场战斗只能一次。' },
  { attr: 'body', req: [5,7,10], name: '终结一击 Finishing Touch', type: '每天一次 / 简单动作',
    desc: '每天一次，你可以在数码兽发动攻击前宣告"终结一击"。掷出的任何 4 点现在都算作对数码兽精准检定的成功。此指令无法触发"巨大力量"或"超额击杀"。' },
  { attr: 'charisma', req: [3,5,6], name: '虚张声势 Swagger', type: '每场战斗一次 / 简单动作',
    desc: '【嘲讽】现在持续三回合。你的数码兽根据其 CPU×2 自动获得仇恨值。此指令无法被强化。' },
  { attr: 'charisma', req: [4,6,8], name: '巅峰表现 Peak Performance', type: '每天一次 / 复杂动作',
    desc: '数码兽从其驯兽师处获得【壁垒】增益。除生命外的所有属性 +2。持续一回合。' },
  { attr: 'charisma', req: [5,7,10], name: '指引之光 Guiding Light', type: '被动',
    desc: '你的数码兽给予其爆发半径内所有友方数码兽 +2 精准。同样，其爆发半径内的每只友方数码兽都会使你的数码兽获得 +1 闪避。喽啰不计入。' },
  { attr: 'intelligence', req: [3,5,6], name: '快速反应 Quick Reaction', type: '每天一次 / 介入',
    desc: '当你的数码兽被敌方数码兽攻击时，你的数码兽在其闪避骰中获得"阶段加成+2"，持续到回合结束。此外，下一回合动作池将减少 1。' },
  { attr: 'intelligence', req: [4,6,8], name: '敌方扫描 Enemy Scan', type: '每场战斗一次 / 复杂动作',
    desc: '驯兽师对一只敌方数码兽施加【削弱】减益。除生命外的所有属性 -2。持续一回合。' },
  { attr: 'intelligence', req: [5,7,10], name: '屠戮 Decimation', type: '每天一次 / 复杂动作',
    desc: '驯兽师可以指挥数码兽在战斗第二回合就使用标记为【招牌招式】的攻击，而非等到第三回合。' },
  { attr: 'willpower', req: [3,5,6], name: '咬牙撑住！Tough it Out!', type: '每场战斗一次 / 复杂动作',
    desc: '凭借纯粹的意志力，数码兽从困扰其的负面效果中被治愈。【净化】' },
  { attr: 'willpower', req: [4,6,8], name: '挑战者 Challenger', type: '被动',
    desc: '战斗开始时，确定主敌的进化阶段比你的数码兽基础阶段高出多少级，每高出 1 级获得 2 个外加 1 个临时伤口格。【上限：5】' },
  { attr: 'willpower', req: [5,7,10], name: '命运干预 Fateful Intervention', type: '自由动作',
    desc: '参见规则书中的灵感/命运干预机制。' }
];

/* ---------- 折磨 ---------- */
const TORMENT_TYPES = [
  { key: 'minor',  name: '轻微 Minor',  boxes: 5, maxCross: 2 },
  { key: 'major',  name: '严重 Major',  boxes: 7, maxCross: 3 },
  { key: 'terrible', name: '可怕 Terrible', boxes: 10, maxCross: 4 }
];

/* ---------- 数码兽阶段表（3.19） ---------- */
const DIGIMON_STAGES = [
  { key: 'fresh',       name: '幼生期 Fresh',       dp: 5,  move: 2,  wound: 0,  brains: 0,  attacks: 1, spec: 0, sb: 0, negCap: 0 },
  { key: 'inTraining',  name: '幼年期 In-Training', dp: 15, move: 4,  wound: 1,  brains: 1,  attacks: 2, spec: 0, sb: 0, negCap: 0 },
  { key: 'rookie',      name: '成长期 Rookie',      dp: 25, move: 6,  wound: 2,  brains: 3,  attacks: 2, spec: 1, sb: 1, negCap: 1 },
  { key: 'champion',    name: '成熟期 Champion',    dp: 40, move: 8,  wound: 5,  brains: 5,  attacks: 3, spec: 2, sb: 2, negCap: 2 },
  { key: 'ultimate',    name: '完全体 Ultimate',    dp: 55, move: 10, wound: 7,  brains: 7,  attacks: 4, spec: 3, sb: 3, negCap: 3 },
  { key: 'mega',        name: '究极体 Mega',        dp: 70, move: 12, wound: 10, brains: 10, attacks: 5, spec: 4, sb: 4, negCap: 4 },
  { key: 'megaPlus',    name: '究极体+ Super Ultimate', dp: 85, move: 14, wound: 14, brains: 13, attacks: 5, spec: 5, sb: 5, negCap: 5 }
];

/* ---------- 体型表（3.18） ---------- */
const DIGIMON_SIZES = [
  { key: 'tiny',      name: '微小 Tiny',      area: '1×1',  body: -2, agility: 2, note: '可占据其他单位站立的方格' },
  { key: 'small',     name: '小型 Small',     area: '1×1',  body: -1, agility: 1, note: '可穿过其他单位站立的方格' },
  { key: 'medium',    name: '中型 Medium',    area: '1×1',  body: 0,  agility: 0, note: '无加值或减值' },
  { key: 'large',     name: '大型 Large',     area: '2×2',  body: 1,  agility: -1, note: '' },
  { key: 'huge',      name: '巨型 Huge',      area: '3×3',  body: 2,  agility: -1, note: '' },
  { key: 'gigantic',  name: '庞大 Gigantic',  area: '4+×4+', body: 3, agility: -2, note: '' }
];

/* ---------- 数码兽属性 ---------- */
const DIGIMON_STATS = [
  { key: 'accuracy', name: '精准 Accuracy' },
  { key: 'damage',   name: '伤害 Damage' },
  { key: 'dodge',    name: '闪避 Dodge' },
  { key: 'armor',    name: '护甲 Armor' },
  { key: 'health',   name: '生命 Health' }
];

/* ---------- 自然同行元素 ---------- */
const NATURE_ELEMENTS = [
  { key: 'fire',     name: '火 Fire' },
  { key: 'water',    name: '水 Water' },
  { key: 'wind',     name: '风 Wind' },
  { key: 'ice',      name: '冰 Ice' },
  { key: 'thunder',  name: '雷 Thunder' },
  { key: 'wood',     name: '木 Wood' },
  { key: 'earth',    name: '土 Earth' },
  { key: 'darkness', name: '暗 Darkness' },
  { key: 'steel',    name: '钢 Steel' },
  { key: 'light',    name: '光 Light' }
];

/* ---------- 攻击效果（3.09） ---------- */
const ATTACK_EFFECTS = {
  '1': [
    { key: 'immobilize', name: '定身 [N] Immobilize' },
    { key: 'taunt',      name: '嘲讽 [N] Taunt' },
    { key: 'fear',       name: '恐惧 [N] Fear' },
    { key: 'knockback',  name: '击退 [N/A] Knockback' },
    { key: 'pull',       name: '拉扯 [N/A] Pull' }
  ],
  '2': [
    { key: 'poison',    name: '中毒 [N] Poison' },
    { key: 'confuse',   name: '混乱 [N] Confuse' },
    { key: 'stun',      name: '眩晕 [N] Stun' },
    { key: 'lifesteal', name: '生命偷取 [N/A] Lifesteal' },
    { key: 'vigor',     name: '活力 [P] Vigor' },
    { key: 'fury',      name: '狂暴 [P] Fury' },
    { key: 'cleanse',   name: '净化 [P] Cleanse' },
    { key: 'haste',     name: '加速 [P] Haste' },
    { key: 'strengthen',name: '增强 [P] Strengthen' },
    { key: 'weaken',    name: '削弱 [N] Weaken' },
    { key: 'swiftness', name: '迅捷 [P] Swiftness' },
    { key: 'vigilance', name: '警戒 [P] Vigilance' },
    { key: 'distract',  name: '干扰 [N] Distract' },
    { key: 'exploit',   name: '利用 [N] Exploit' },
    { key: 'pacify',    name: '安抚 [N] Pacify' }
  ],
  '3': [
    { key: 'blind',     name: '致盲 [N] Blind' },
    { key: 'paralysis', name: '麻痹 [N] Paralysis' },
    { key: 'dot',       name: '持续伤害 [N] DOT' },
    { key: 'shield',    name: '护盾 [P] Shield' },
    { key: 'regenerate',name: '再生 [P] Regenerate' },
    { key: 'lag',       name: '卡顿 [N] Lag' },
    { key: 'burn',      name: '灼烧 [N] Burn' }
  ]
};

/* ---------- 范围攻击标签 ---------- */
const RANGE_TAGS = [
  { key: 'blast',      name: '[爆炸] Blast（仅远程）' },
  { key: 'burst',      name: '[爆发] Burst（近战/远程）' },
  { key: 'closeBlast', name: '[近距爆炸] Close Blast（近战/远程）' },
  { key: 'cone',       name: '[锥形] Cone（近战/远程）' },
  { key: 'line',       name: '[线形] Line（近战/远程）' },
  { key: 'pass',       name: '[贯穿] Pass（仅近战）' }
];

/* ============================================================
 * 特质库 QUALITIES
 * 字段：
 *   id       唯一标识
 *   name     名称
 *   dp       DP 消耗（负数 = 负面特质返还 DP）
 *   cat      S/T/A（可组合，如 'S,T'）
 *   group    分组
 *   rank     最高等级（1 = 仅一次；>1 可多级；'maxN' 特殊）
 *   prereq   前置特质 id 数组
 *   stageMin 最低阶段（1=幼生期…7=究极体+）
 *   stageMax 最高阶段
 *   exclusive 互斥特质 id
 *   desc     效果描述
 *   mods     属性修正 {acc, dmg, dodge, armor, health, move, baseMove, spec, brains, body, agility}
 *   pick     需要选择（如优化树、元素、技能）
 *   free     免费特质（0 DP）
 * ============================================================ */

const QUALITY_GROUPS = [
  { key: 'dataopt',   name: '数据优化（Data Optimization）', note: '只能获得一次，决定数码兽的定位' },
  { key: 'dataspec',  name: '数据专精（Data Specialization）', note: '要求：数据优化 + 完全体或更高阶段（2 级需究极体）' },
  { key: 'hybrid',    name: '混合驱动（Hybrid Drive）', note: '要求：数据优化 + 完全体或更高阶段' },
  { key: 'move',      name: '移动类特质（Extra Movement / Advanced Mobility / Speedy）' },
  { key: 'attack',    name: '攻击性特质（Offensive）' },
  { key: 'counter',   name: '反击特质（Counter）' },
  { key: 'stealth',   name: '潜行特质（Stealth）' },
  { key: 'defense',   name: '防御性特质（Defensive）' },
  { key: 'combatmon', name: '战斗怪物树（Combat Monster）' },
  { key: 'enhance',   name: '增强特质（Enhanced）' },
  { key: 'utility',   name: '实用特质（Utility）' },
  { key: 'nature',    name: '自然同行（Naturewalk）', note: '第一级免费' },
  { key: 'support',   name: '支援特质（Support）' },
  { key: 'effect',    name: '攻击效果（Attack Effects）', note: '选择后应用于攻击' },
  { key: 'element',   name: '元素大师树（Element Master）' },
  { key: 'summon',    name: '造物者与召唤师树（Creator & Summoner）' },
  { key: 'mode',      name: '形态切换树（Mode Change）' },
  { key: 'sig',       name: '招牌招式（Signature Move）' },
  { key: 'digizoid',  name: '数码合金特质（Digizoid）', note: '要求：完全体或更高阶段' },
  { key: 'gainforce', name: '增益力量（Gain Force）', note: '要求：完全体 + 本能 1 级；完全体只能获得"覆盖"' },
  { key: 'burst',     name: '爆发力量（Burst Power）', note: '要求：形态切换 X.0 2 级 + 究极体 + GM 批准' },
  { key: 'free',      name: '免费特质（Free Quality）', note: '无论阶段如何，只能获得一个免费特质（GM 可禁止）' },
  { key: 'negative',  name: '负面特质（Negative）', note: '获得额外 DP，有阶段数量限制' }
];

const QUALITIES = [
  /* ---------- 数据优化 ---------- */
  { id: 'opt_close',    group: 'dataopt', name: '近身战斗（Close Combat）', dp: 1, cat: 'S',
    desc: '使用带 [近战] 标签的攻击时，精准池 +2；使用带 [远程] 标签的攻击时，精准池 -1。',
    mods: { meleeAcc: 2, rangedAcc: -1 } },
  { id: 'opt_ranged',   group: 'dataopt', name: '远程突击手（Ranged Striker）', dp: 1, cat: 'S',
    desc: '使用带 [远程] 标签的攻击时，精准 +2；被带 [近战] 标签的攻击瞄准时，闪避池 -1。',
    mods: { rangedAcc: 2, dodgeVsMelee: -1 } },
  { id: 'opt_guardian', group: 'dataopt', name: '守护者（Guardian）', dp: 1, cat: 'S',
    desc: '数码兽获得 +2 护甲加值，但其基础移动值受到 -1 惩罚。',
    mods: { armor: 2, baseMove: -1 } },
  { id: 'opt_brawler',  group: 'dataopt', name: '格斗家（Brawler）', dp: 2, cat: 'S',
    desc: '冲撞时所有检定 +2，且冲撞时体型等级视为大一级。' },
  { id: 'opt_speed',    group: 'dataopt', name: '速度突击手（Speed Striker）', dp: 1, cat: 'S',
    desc: '数码兽的基础移动值获得 +2 加值。',
    mods: { baseMove: 2 } },
  { id: 'opt_effect',   group: 'dataopt', name: '效果战士（Effect Warrior）', dp: 2, cat: 'S',
    desc: '数码兽的基础特化值获得 +1 加值，但护甲受到 -2 惩罚。',
    mods: { spec: 1, armor: -2 } },

  /* ---------- 数据专精（要求数据优化，完全体+） ---------- */
  { id: 'spec_powerfist',   group: 'dataspec', name: '力量之拳（Power Fist）', dp: 2, cat: 'S,A',
    prereq: ['opt_close'], stageMin: 4,
    desc: '[近战] [范围] 攻击按 [远程] 方式缩放范围。被 [近战] [范围攻击] 攻击的目标只能获得一半 RAM 闪避加成。' },
  { id: 'spec_flurry',      group: 'dataspec', name: '连击风暴（Flurry）', dp: 3, cat: 'T',
    prereq: ['opt_close'], stageMin: 4,
    desc: '每回合免费进行一次额外的 [近战] [伤害] 攻击。此攻击不能以任何方式修改（[触及] 类生效）。' },
  { id: 'spec_sniper',      group: 'dataspec', name: '狙击手（Sniper）', dp: 2, cat: 'S,T',
    prereq: ['opt_ranged'], stageMin: 4,
    desc: '简单动作进入 [狙击姿态]：远程攻击无精准惩罚，但 [近战] 闪避受对手 RAM 惩罚，无法瞄准 2 米内敌人，所有地形视为困难地形。' },
  { id: 'spec_turret',      group: 'dataspec', name: '移动炮台（Turret）', dp: 3, cat: 'S',
    prereq: ['opt_ranged'], stageMin: 4,
    desc: '将 CPU 值添加到 [范围] 攻击造成的伤害中。基础移动 -1。', mods: { baseMove: -1 } },
  { id: 'spec_karma',       group: 'dataspec', name: '因果报应（Karma）', dp: 2, cat: 'S',
    prereq: ['opt_guardian'], stageMin: 4,
    desc: '被 [近战] 攻击命中时，对对手造成等于 CPU 值的伤害（护甲可减免，不能低于 2）。' },
  { id: 'spec_trueguard',   group: 'dataspec', name: '真正守护者（True Guardian）', dp: 3, cat: 'S',
    prereq: ['opt_guardian'], stageMin: 4,
    desc: '介入时获得等于介入移动距离的护甲加值；身后友军对 [范围] 攻击减伤 CPU×2（≥1）并消除 [效果] 标签。精准 -2。', mods: { acc: -2 } },
  { id: 'spec_powerthrow',  group: 'dataspec', name: '强力投掷（Power Throw）', dp: 2, cat: 'S',
    prereq: ['opt_brawler'], stageMin: 4,
    desc: '投掷目标时，将双倍 CPU 值添加到精准上。' },
  { id: 'spec_wrestling',   group: 'dataspec', name: '摔角狂热（Wrestling）', dp: 3, cat: 'S',
    prereq: ['opt_brawler'], stageMin: 4,
    desc: '每回合可不使用动作冲撞一次。伤害、护甲和生命各 -1。', mods: { dmg: -1, armor: -1, health: -1 } },
  { id: 'spec_hitrun',      group: 'dataspec', name: '打了就跑（Hit & Run）', dp: 2, cat: 'A,T',
    prereq: ['opt_speed'], stageMin: 4,
    desc: '使用带 [冲锋] 标签的攻击时，将 RAM 添加到伤害中。必须作为攻击的一部分移动。' },
  { id: 'spec_untouchable', group: 'dataspec', name: '无法捕捉的目标（Untouchable）', dp: 3, cat: 'S',
    prereq: ['opt_speed'], stageMin: 4,
    desc: '获得 +3 闪避，且一回合内被多次攻击不会遭受叠加闪避惩罚。', mods: { dodge: 3 },
    exclusive: ['def_absolute'] },
  { id: 'spec_black',       group: 'dataspec', name: '黑魔法师（Black Mage）', dp: 3, cat: 'A,T',
    prereq: ['opt_effect'], stageMin: 4,
    desc: '负面 [效果] 攻击命中时，以池检定掷 BIT 值；每个成功向目标分配 1 点不可更改伤害。每回合一次。' },
  { id: 'spec_white',       group: 'dataspec', name: '白魔法师（White Mage）', dp: 2, cat: 'A,T',
    prereq: ['opt_effect'], stageMin: 4,
    desc: '正面 [效果] 攻击命中时，以池检定掷 BIT 值；每个成功治愈 1 个伤口格。每回合一次。' },

  /* ---------- 混合驱动 ---------- */
  { id: 'hybrid_drive', group: 'hybrid', name: '混合驱动（Hybrid Drive）', dp: 3, cat: 'S', rank: 2,
    prereq: ['opt_close','opt_ranged','opt_guardian','opt_brawler','opt_speed','opt_effect'], stageMin: 4,
    desc: '可购买与你数据优化不同树的数据专精（只能选相邻树选项）。' },

  /* ---------- 移动类 ---------- */
  { id: 'mv_digger',   group: 'move', name: '额外移动：挖掘者（Digger）', dp: 1, cat: 'S',
    desc: '能以等于移动速度的速度钻入柔软地面（雪地/沙地亦可）。' },
  { id: 'mv_swimmer',  group: 'move', name: '额外移动：游泳者（Swimmer）', dp: 1, cat: 'S',
    desc: '能以等于移动值的速度在水中移动。' },
  { id: 'mv_flight',   group: 'move', name: '额外移动：飞行（Flight）', dp: 2, cat: 'S',
    desc: '数码兽能够在空中飞行。' },
  { id: 'mv_wall',     group: 'move', name: '额外移动：攀墙者（Wallclimber）', dp: 1, cat: 'S',
    desc: '能攀爬垂直表面，但不能在天花板上。' },
  { id: 'mv_jumper',   group: 'move', name: '额外移动：跳跃者（Jumper）', dp: 1, cat: 'S',
    desc: '能以等于移动值的高度和长度跳跃。' },
  { id: 'adv_move',    group: 'move', name: '高级机动性（Advanced Mobility）', dp: 2, cat: 'S', rank: 1,
    prereq: ['mv_digger','mv_swimmer','mv_flight','mv_wall','mv_jumper'], pick: '机动类型',
    desc: '每级从已拥有的移动类型中选择一个，获得强化效果（按 RAM 加速、三倍移动等）。' },
  { id: 'mv_speedy',   group: 'move', name: '迅捷（Speedy）', dp: 1, cat: 'S', rank: 3,
    desc: '每级移动值 +2（不能将基础移动提升超过一倍）。', mods: { move: 2 } },
  { id: 'mv_teleport', group: 'move', name: '传送（Teleport）', dp: 3, cat: 'T',
    prereq: ['mv_speedy'], rankNote: '要求迅捷 3 级',
    desc: '瞬间传送到基础移动+2 米的距离（需视线）。每场战斗一次可躲避攻击，使用后下一回合放弃一个简单动作。' },
  { id: 'mv_transport',group: 'move', name: '运输者（Transporter）', dp: 2, cat: 'S',
    prereq: ['mv_teleport'],
    desc: '传送时可携带相邻盟友（盟友下一回合放弃一个简单动作）。传送距离 +2。' },

  /* ---------- 攻击性特质 ---------- */
  { id: 'atk_armorpierce', group: 'attack', name: '破甲（Armor Piercing）', dp: 1, cat: 'A', rank: 3,
    stageMaxNote: '阶段限制：成长期1 / 成熟期2 / 完全体3 / 究极体3',
    desc: '选择一次攻击，无视最多 X 点护甲（X = 等级×2）。只能应用于一次攻击。', pick: '选择攻击' },
  { id: 'atk_charge',  group: 'attack', name: '冲锋攻击（Charge Attack）', dp: 1, cat: 'A',
    desc: '选择 [近战] 攻击，[冲锋] 标签允许同时移动和攻击（一个简单动作）。', pick: '选择攻击' },
  { id: 'atk_mighty',  group: 'attack', name: '强力一击（Mighty Blow）', dp: 2, cat: 'A', stageMin: 3,
    desc: '获得 [强力一击] 标签：护甲减免后伤害 ≥ 目标阶段加成时，主目标 [眩晕] 一回合。仅 [近战]。', pick: '选择攻击' },
  { id: 'atk_certain', group: 'attack', name: '必中（Certain Strike）', dp: 2, cat: 'A', rank: 2,
    stageMin: 4, rankNote: '2 级需完全体及以上',
    desc: '选择一次攻击。基础精准池中每 4 个骰子获得 1 个自动成功（上限等级×2）。', pick: '选择攻击' },
  { id: 'atk_weapon',  group: 'attack', name: '武器（Weapon）', dp: 1, cat: 'A', rank: 3,
    stageMaxNote: '阶段限制：成长期1 / 成熟期2 / 完全体3 / 究极体3',
    exclusive: ['enh_instinct'],
    desc: '获得 [武器] 标签攻击；使用时获得等于等级的精准和伤害加值。', pick: '选择攻击',
    mods: { weaponAcc: 'rank', weaponDmg: 'rank' } },
  { id: 'atk_slayer',  group: 'attack', name: '猎杀者（Slayer）', dp: 1, cat: 'S',
    desc: '根据科属/类型选择一种目标（龙、恶魔、野兽等）：对匹配目标精准检定获得 RAM 加值。若自身属于该科属，攻击落空时受阶段数不可更改伤害。', pick: '选择目标类型' },
  { id: 'atk_hugepower', group: 'attack', name: '巨大力量（Huge Power）', dp: 2, cat: 'T,A', rank: 2,
    desc: 'Lv1：精准检定可重掷出现的任何 1 点（[远程] 每回合一次，[近战] 无限制）。Lv2：每回合一次重掷任何 2 点。' },
  { id: 'atk_flank',   group: 'attack', name: '激进侧翼（Aggressive Flank）', dp: 2, cat: 'S',
    desc: '位于盟友 [爆发][远程] 半径内或与盟友紧邻敌人时，获得等于自身 RAM 值的精准加值。' },
  { id: 'atk_coord',   group: 'attack', name: '协调突袭（Coordinated Assault）', dp: 3, cat: 'T',
    prereq: ['atk_flank'],
    desc: '简单动作标记一个目标：该目标每回合从第二次被攻击起，每次获得 -3 闪避（而非 -1）。' },
  { id: 'atk_area',    group: 'attack', name: '范围攻击（Area Attack）', dp: 2, cat: 'T,A', rank: 1,
    desc: '每级选择一个 [范围标签]（爆炸/爆发/近距爆炸/锥形/线形/贯穿）应用一次攻击，且每次必须选择不同的标签。', pick: '选择标签与攻击' },

  /* ---------- 反击特质 ---------- */
  { id: 'cnt_counter', group: 'counter', name: '反击（Counter）', dp: 2, cat: 'T,A',
    desc: '每场战斗一次，敌人攻击落空时，以敌人为唯一目标免费攻击；目标只能掷其闪避池的一半。' },
  { id: 'cnt_shock',   group: 'counter', name: '反击冲击（Counter Shock）', dp: 3, cat: 'T,A',
    prereq: ['cnt_counter'],
    desc: '选择一次攻击加 [反击] 标签：带标签攻击的目标只能应用其护甲属性的一半。', pick: '选择攻击' },
  { id: 'cnt_cross',   group: 'counter', name: '交叉反击（Cross Counter）', dp: 3, cat: 'T,A',
    prereq: ['cnt_counter'],
    desc: '[近战] 攻击落空时可反击而不消耗次数；但必须承受落空的攻击（不掷闪避），并承受等于阶段加成的护甲惩罚。不能与战斗怪物同获，不触发反击冲击。',
    exclusive: ['cm_monster'] },

  /* ---------- 潜行特质 ---------- */
  { id: 'st_hide',     group: 'stealth', name: '光天化日之下隐身（Hide in Plain Sight）', dp: 2, cat: 'S',
    desc: '任何试图发现使用者的人在掷骰寻找时，受到等于 RAM×2 的惩罚。' },
  { id: 'st_cloak',    group: 'stealth', name: '影之斗篷（Cloak）', dp: 2, cat: 'T', prereq: ['st_hide'],
    desc: '可将光天化日之下隐身加值应用于 [爆发][远程] 半径内的所有盟友。' },
  { id: 'st_ambush',   group: 'stealth', name: '偷袭（Ambush）', dp: 2, cat: 'T', prereq: ['st_hide'],
    desc: '潜行检定对抗目标感知成功后，下一次对目标攻击获得 RAM×2 的精准和伤害加值。每场战斗会话一次（突袭回合可两次）。' },
  { id: 'st_glamor',   group: 'stealth', name: '魅力幻影（Glamor）', dp: 2, cat: 'T', prereq: ['st_cloak'],
    desc: '通过潜行检定（TN 12+阶段加成）对盟友施放幻影。不能与幻象覆盖同获。', exclusive: ['st_illusion'] },
  { id: 'st_illusion', group: 'stealth', name: '幻象覆盖（Illusion Overlay）', dp: 2, cat: 'T', prereq: ['st_cloak'],
    desc: '复杂动作在现实中叠加幻象（须指定效果）。不能与魅力幻影同获。', exclusive: ['st_glamor'] },
  { id: 'st_substitute', group: 'stealth', name: '替身（Substitute）', dp: 2, cat: 'T', prereq: ['st_ambush'],
    desc: '闪避失败时可制造替身承受打击：潜行检定对抗攻击者感知；成功则放弃 1/5 伤口格池总量。每场战斗最多 3 次。' },

  /* ---------- 防御性特质 ---------- */
  { id: 'def_absolute', group: 'defense', name: '绝对闪避（Absolute Evasion）', dp: 3, cat: 'S', rank: 2,
    stageMin: 4, rankNote: '2 级需完全体及以上',
    desc: '基础闪避池每 4 个骰子获得 1 个自动成功（上限等级×2），之后每次闪避保证骰子减 1，回合结束重置。不能与"无法捕捉的目标"同购。',
    exclusive: ['spec_untouchable'] },
  { id: 'def_agility', group: 'defense', name: '敏捷（Agility）', dp: 2, cat: 'T', rank: 2,
    desc: 'Lv1：每回合一次，闪避检定时可重掷任何 1 点。Lv2：每回合一次，重掷任何 2 点。' },
  { id: 'def_aware',   group: 'defense', name: '战斗意识（Combat Awareness）', dp: 1, cat: 'S', rank: 3,
    desc: 'Lv1：+等级 先攻；Lv2：+等级 第一回合闪避；Lv3：+等级 第一回合精准。' },

  /* ---------- 战斗怪物树 ---------- */
  { id: 'cm_monster',  group: 'combatmon', name: '战斗怪物（Combat Monster）', dp: 2, cat: 'S',
    desc: '每次受伤，下一次成功攻击的伤害获得累计加值（自上次成功攻击以来失去的伤口格数）。上限 = 生命属性。' },
  { id: 'cm_berserker', group: 'combatmon', name: '狂战士（Berserker）', dp: 2, cat: 'T', prereq: ['cm_monster'],
    desc: '获得狂怒计量表（2d6，从 2 开始）：命中/被命中 +1 狂怒，每点狂怒护甲伤害 +1、精准闪避 -1。填满时由 GM 控制。不能与勇者之心同获。',
    exclusive: ['cm_braveheart'] },
  { id: 'cm_blood',    group: 'combatmon', name: '沸腾之血（Boiling Blood）', dp: 1, cat: 'S', rank: 3, prereq: ['cm_berserker'],
    desc: '每级使未命中回合的狂怒惩罚降低 1 点（如 2 级时失去 2 而非 4）。' },
  { id: 'cm_angry',    group: 'combatmon', name: "你不会喜欢我生气的样子（You Won't Like Me When I'm Angry）", dp: 3, cat: 'S', prereq: ['cm_blood'],
    desc: '狂怒骰子加倍（2→4），狂怒从 4 开始，最高 24。' },
  { id: 'cm_braveheart', group: 'combatmon', name: '勇者之心（Braveheart）', dp: 2, cat: 'T', prereq: ['cm_monster'],
    desc: '伤口格不足一半时可采取 [勇者姿态]：[守护] 简单动作，护甲计为 x1.5，移动受阶段加成惩罚。不能与狂战士/覆盖/不朽力同获。',
    exclusive: ['cm_berserker','gf_overwrite','gf_undying'] },
  { id: 'cm_oneforall', group: 'combatmon', name: '一为众人（One for All）', dp: 2, cat: 'S,T',
    prereq: ['cm_monster','cm_braveheart'], stageMin: 4,
    desc: '战斗怪物上限 = 伤口格数量。勇者姿态中介入幸存时获得 [胆识] 效果。' },

  /* ---------- 增强特质 ---------- */
  { id: 'enh_improved', group: 'enhance', name: '强化衍生属性（Improved Derived Stat）', dp: 1, cat: 'S', rank: 10,
    desc: '每级选择一个衍生属性（体能/敏捷/头脑）+1；受过训练后技能检定不再加特化值，而是加相应衍生属性的一半。', pick: '选择衍生属性' },
  { id: 'enh_sysboost', group: 'enhance', name: '系统增强（System Boost）', dp: 3, cat: 'S', rank: 9,
    desc: '每级将数码兽的一个特化值 +1（不能使基础特化值翻倍以上，同一属性最多选 3 次）。', pick: '选择特化值', mods: { spec: 1 } },
  { id: 'enh_prodigious', group: 'enhance', name: '天赋技能（Prodigious Skill）', dp: 2, cat: 'S', rank: 1,
    prereq: ['enh_improved'],
    desc: '选择与驯兽师技能列表对应的技能：该技能检定使用完整衍生属性（头脑/敏捷/体能）。', pick: '选择技能' },
  { id: 'enh_instinct', group: 'enhance', name: '本能（Instinct）', dp: 1, cat: 'S', rank: 3,
    stageMaxNote: '阶段限制：成长期1 / 成熟期2 / 完全体3 / 究极体3',
    exclusive: ['atk_weapon'],
    desc: '每级闪避、生命和基础移动获得同等加值。', mods: { dodge: 'rank', health: 'rank', move: 'rank' } },
  { id: 'enh_reach',   group: 'enhance', name: '触及（Reach）', dp: 2, cat: 'S', rank: 3,
    desc: '能以等级×2 米的距离使用 [近战] 攻击并发起冲撞。' },

  /* ---------- 实用特质 ---------- */
  { id: 'ut_technician', group: 'utility', name: '技师（Technician）', dp: 1, cat: 'S', rank: 3,
    desc: '擅长修复代码和技术，默认可阅读数码文字；每级 +4 修复/破译代码检定。' },
  { id: 'ut_firewall', group: 'utility', name: '防火墙（Firewall）', dp: 2, cat: 'S', prereq: ['ut_technician'],
    desc: '清除入侵者和保护代码方面获得等于技师等级的加值；可额外购买 3 级技师。' },
  { id: 'ut_trojan',  group: 'utility', name: '特洛伊木马（Trojan）', dp: 2, cat: 'S', prereq: ['ut_technician'],
    desc: '入侵受保护区域方面获得等于技师等级的加值；可额外购买 3 级技师。' },
  { id: 'ut_tracker', group: 'utility', name: '追踪者（Tracker）', dp: 1, cat: 'S', rank: 3,
    desc: '感知（头脑）检定 +4 寻找隐藏陷阱/敌人或追踪踪迹；有工具时每级额外 +2。' },
  { id: 'ut_roll',    group: 'utility', name: '翻滚者（Roller）', dp: 1, cat: 'S',
    desc: '受到坠落或被投掷伤害时，获得 RAM×2 的额外伤害减免。' },

  /* ---------- 自然同行（第一级免费） ---------- */
  { id: 'nat_walk',   group: 'nature', name: '自然同行（Naturewalk）', dp: 1, cat: 'S,T', rank: 2, freeFirst: true,
    desc: '每级选择一个元素（火/水/风/冰/雷/木/土/暗/钢/光）。第一级免费。在所选环境中不受困难地形移动惩罚，并获得元素相关加值。',
    pick: '选择元素' },

  /* ---------- 支援特质 ---------- */
  { id: 'sp_quickheal', group: 'support', name: '快速治愈者（Quick Healer）', dp: 1, cat: 'T',
    desc: '战斗结束时恢复检定可重掷任何 1 点。' },
  { id: 'sp_regen',   group: 'support', name: '再生者（Regenerator）', dp: 1, cat: 'S', rank: 3, prereq: ['sp_quickheal'],
    desc: '与 [快速治愈者] 配合时，整体恢复获得一个保证伤口格（等于投入等级）。' },
  { id: 'sp_secondwind', group: 'support', name: '第二次呼吸（Second Wind）', dp: 1, cat: 'T',
    prereq: ['sp_quickheal','sp_regen'],
    desc: '战斗中作为简单动作进行一次恢复检定，但该回合不能攻击。' },
  { id: 'sp_resistant', group: 'support', name: '抗性（Resistant）', dp: 1, cat: 'S', rank: 3,
    desc: '每级将来袭 [效果] 标签攻击的持续时间减少 2 回合（不能低于 1 回合；中毒 3 回合）。' },
  { id: 'sp_decisive', group: 'support', name: '决定性防御（Decisive Defense）', dp: 2, cat: 'S', prereq: ['sp_resistant'],
    rankNote: '要求抗性 3 级',
    desc: '抗性现在只改变负面效果的持续时间，不再降低正面效果的持续时间。' },
  { id: 'sp_selective', group: 'support', name: '选择性目标（Selective Targeting）', dp: 2, cat: 'S',
    desc: '[范围] 攻击不再伤害盟友或对其施加负面效果；敌人无法从正面效果获益。' },
  { id: 'sp_crybaby', group: 'support', name: '爱哭鬼（Crybaby）', dp: 1, cat: 'T',
    desc: '成为攻击目标时，附近一位盟友可介入而不承受动作惩罚。每场战斗一次。' },
  { id: 'sp_packmaster', group: 'support', name: '群主（Pack Master）', dp: 2, cat: 'T', prereq: ['sp_crybaby'],
    desc: '成为攻击目标时，位于等于阶段加成米数范围内的盟友可介入而不承受动作惩罚。' },

  /* ---------- 攻击效果（选择后应用于攻击） ---------- */
  { id: 'fx_immobilize', group: 'effect', name: '定身 [N]', dp: 1, cat: 'A' },
  { id: 'fx_taunt',      group: 'effect', name: '嘲讽 [N]', dp: 1, cat: 'A' },
  { id: 'fx_fear',       group: 'effect', name: '恐惧 [N]', dp: 1, cat: 'A' },
  { id: 'fx_knockback',  group: 'effect', name: '击退 [N/A]', dp: 1, cat: 'A' },
  { id: 'fx_pull',       group: 'effect', name: '拉扯 [N/A]', dp: 1, cat: 'A' },
  { id: 'fx_poison',     group: 'effect', name: '中毒 [N]', dp: 2, cat: 'A' },
  { id: 'fx_confuse',    group: 'effect', name: '混乱 [N]', dp: 2, cat: 'A' },
  { id: 'fx_stun',       group: 'effect', name: '眩晕 [N]', dp: 2, cat: 'A' },
  { id: 'fx_lifesteal',  group: 'effect', name: '生命偷取 [N/A]', dp: 2, cat: 'A' },
  { id: 'fx_vigor',      group: 'effect', name: '活力 [P]', dp: 2, cat: 'A' },
  { id: 'fx_fury',       group: 'effect', name: '狂暴 [P]', dp: 2, cat: 'A' },
  { id: 'fx_cleanse',    group: 'effect', name: '净化 [P]', dp: 2, cat: 'A' },
  { id: 'fx_haste',      group: 'effect', name: '加速 [P]', dp: 2, cat: 'A' },
  { id: 'fx_strengthen', group: 'effect', name: '增强 [P]', dp: 2, cat: 'A' },
  { id: 'fx_weaken',     group: 'effect', name: '削弱 [N]', dp: 2, cat: 'A' },
  { id: 'fx_swiftness',  group: 'effect', name: '迅捷 [P]', dp: 2, cat: 'A' },
  { id: 'fx_vigilance',  group: 'effect', name: '警戒 [P]', dp: 2, cat: 'A' },
  { id: 'fx_distract',   group: 'effect', name: '干扰 [N]', dp: 2, cat: 'A' },
  { id: 'fx_exploit',    group: 'effect', name: '利用 [N]', dp: 2, cat: 'A' },
  { id: 'fx_pacify',     group: 'effect', name: '安抚 [N]', dp: 2, cat: 'A' },
  { id: 'fx_blind',      group: 'effect', name: '致盲 [N]', dp: 3, cat: 'A' },
  { id: 'fx_paralysis',  group: 'effect', name: '麻痹 [N]', dp: 3, cat: 'A' },
  { id: 'fx_dot',        group: 'effect', name: '持续伤害 [N]', dp: 3, cat: 'A' },
  { id: 'fx_shield',     group: 'effect', name: '护盾 [P]', dp: 3, cat: 'A' },
  { id: 'fx_regenerate', group: 'effect', name: '再生 [P]', dp: 3, cat: 'A' },
  { id: 'fx_lag',        group: 'effect', name: '卡顿 [N]', dp: 3, cat: 'A' },
  { id: 'fx_burn',       group: 'effect', name: '灼烧 [N]', dp: 3, cat: 'A' },

  /* ---------- 元素大师树 ---------- */
  { id: 'em_master',   group: 'element', name: '元素大师（Element Master）', dp: 2, cat: 'T', prereq: ['nat_walk'],
    desc: '操纵自然同行的元素（仅自然来源）。[爆发][远程] 半径内可改变地形。只能获得一次。' },
  { id: 'em_domain',   group: 'element', name: '领域控制（Domain Control）', dp: 1, cat: 'T', rank: 1,
    prereq: ['em_master'],
    desc: '为地形注入额外效果（效力 = BIT/2，向下取整）。分 [固定领域]（1 DP）与 [光环领域]（2 DP）两类，按元素选择。',
    pick: '选择元素与领域类型' },
  { id: 'em_adaptive', group: 'element', name: '适应性元素（Adaptive Element）', dp: 1, cat: 'S', rank: 1,
    prereq: ['em_master','em_domain'],
    desc: '选择领域控制中的任何元素类别及固定/光环选项，可在创建领域控制时应用。只能获得一次。' },

  /* ---------- 造物者与召唤师树 ---------- */
  { id: 'su_creator',  group: 'summon', name: '造物者（Creator）', dp: 3, cat: 'T',
    desc: '获得 BIT×3 召唤池，召唤物体（每立方米 1 点）。物体共享伤口池 BIT×4、护甲 BIT×2、无闪避池。不能同时获得召唤师（除非混合召唤师）。',
    exclusive: ['su_summoner'] },
  { id: 'su_summoner', group: 'summon', name: '召唤师（Summoner）', dp: 3, cat: 'T',
    desc: '获得 BIT×3 召唤池，召唤喽啰（每个 2 点）。喽啰共享伤口池 BIT×3、精准伤害 = BIT+阶段加成、护甲 = BIT、无闪避池。不能同时获得造物者（除非混合召唤师）。',
    exclusive: ['su_creator'] },
  { id: 'su_mixed',    group: 'summon', name: '混合召唤师（Mixed Summoner）', dp: 3, cat: 'S', rank: 1,
    prereq: ['su_summoner','su_creator'],
    desc: '可同时获得召唤师和造物者；计算召唤池时 BIT 值视为低 1。' },
  { id: 'su_elemental', group: 'summon', name: '元素召唤师（Elemental Summoner）', dp: 3, cat: 'S', rank: 1, prereq: ['su_summoner'],
    desc: '召唤喽啰被摧毁时，对 [爆发][远程] 半径内造成等于 BIT 的伤害。不能与专业召唤同获。',
    exclusive: ['su_pro'] },
  { id: 'su_pro',      group: 'summon', name: '专业召唤（Pro Summon）', dp: 3, cat: 'T', rank: 1,
    prereq: ['su_summoner'], stageMin: 4,
    desc: '特殊喽啰成本 2→5，选择一种专精战术（先锋/保护者/侦察）。每场战斗只能召唤一次所选类型。不能与元素召唤师同获。',
    exclusive: ['su_elemental'], pick: '选择战术' },

  /* ---------- 形态切换树 ---------- */
  { id: 'mo_change',   group: 'mode', name: '形态切换（Mode Change）', dp: 1, cat: 'T', rank: 2,
    desc: '1 级：护甲和伤害可简单动作互换。2 级：可选择互换精准和闪避。' },
  { id: 'mo_changex',  group: 'mode', name: '形态切换 X.0（Mode Change X.0）', dp: 2, cat: 'T', rank: 2,
    prereq: ['mo_change'],
    desc: '1 级：可将两个属性（非生命）的互换换成另外两个属性。2 级：可随心所欲互换属性。' },

  /* ---------- 招牌招式 ---------- */
  { id: 'sig_move',    group: 'sig', name: '招牌招式（Signature Move）', dp: 3, cat: 'T,A', rank: 1,
    desc: '选择一次攻击。战斗第三回合才能使用。[伤害] 型：攻击次数作为伤害和精准加值；非伤害型：偏好特化值 +2 级。',
    pick: '选择攻击' },

  /* ---------- 数码合金特质（完全体+） ---------- */
  { id: 'dz_armor_chrome',   group: 'digizoid', name: '数码合金护甲：铬（Chrome）', dp: 1, cat: 'S,T', stageMin: 4,
    desc: '获得 2 护甲和 1 生命。', mods: { armor: 2, health: 1 } },
  { id: 'dz_armor_black',    group: 'digizoid', name: '数码合金护甲：黑（Black）', dp: 2, cat: 'S,T', stageMin: 4,
    desc: '获得 2 护甲。每回合开始时掷 1D6：1-2 该回合 +4 护甲；3-4 该回合 +4 闪避；5-6 该回合 +2 护甲 +2 闪避。', mods: { armor: 2 } },
  { id: 'dz_armor_brown',    group: 'digizoid', name: '数码合金护甲：棕（Brown）', dp: 3, cat: 'S,T', stageMin: 4,
    desc: '护甲 +2，获得一个自动闪避成功，冲撞检定获得 RAM 加值。', mods: { armor: 2 } },
  { id: 'dz_armor_blue',     group: 'digizoid', name: '数码合金护甲：蓝（Blue）', dp: 3, cat: 'S,T', stageMin: 4,
    desc: '护甲 +2，额外 2 闪避，基础移动 +4。', mods: { armor: 2, dodge: 2, baseMove: 4 } },
  { id: 'dz_armor_gold',     group: 'digizoid', name: '数码合金护甲：金（Gold）', dp: 2, cat: 'S,T', stageMin: 4,
    desc: '获得 2 护甲和 1 生命。被 [远程] 攻击命中时，对手承受 CPU×2 伤害（≥1）。', mods: { armor: 2, health: 1 } },
  { id: 'dz_armor_obsidian', group: 'digizoid', name: '数码合金护甲：黑曜石（Obsidian）', dp: 2, cat: 'S,T', stageMin: 4,
    desc: '获得 2 护甲和 1 生命。被 [近战] 攻击命中时，对手承受 CPU×2 伤害（≥1）。', mods: { armor: 2, health: 1 } },
  { id: 'dz_armor_red',      group: 'digizoid', name: '数码合金护甲：红（Red）', dp: 2, cat: 'S,T', stageMin: 4,
    desc: '获得 +4 护甲和 +2 生命。', mods: { armor: 4, health: 2 } },
  { id: 'dz_wp_chrome',   group: 'digizoid', name: '数码合金武器：铬（Chrome）', dp: 1, cat: 'S,T', stageMin: 4,
    prereq: ['atk_weapon'], desc: '[武器] 攻击 +2 精准和 +1 伤害。' },
  { id: 'dz_wp_black',    group: 'digizoid', name: '数码合金武器：黑（Black）', dp: 2, cat: 'S,T', stageMin: 4,
    prereq: ['atk_weapon'], desc: '[武器] 攻击 +2 精准。每回合掷 1D6 获得额外加成。' },
  { id: 'dz_wp_brown',    group: 'digizoid', name: '数码合金武器：棕（Brown）', dp: 3, cat: 'S,T', stageMin: 4,
    prereq: ['atk_weapon'], desc: '+2 闪避；[武器] 攻击 +2 伤害和 2 级触及效果。', mods: { dodge: 2 } },
  { id: 'dz_wp_blue',     group: 'digizoid', name: '数码合金武器：蓝（Blue）', dp: 3, cat: 'S,T', stageMin: 4,
    prereq: ['atk_weapon'], desc: '[武器] 攻击 +2 精准 +2 伤害，且拥有一个自动成功。' },
  { id: 'dz_wp_gold',     group: 'digizoid', name: '数码合金武器：金（Gold）', dp: 3, cat: 'S,T', stageMin: 4,
    prereq: ['atk_weapon'], desc: '[武器] 攻击 +1 伤害 +4 精准；[远程] 时基础射程 +5 米。' },
  { id: 'dz_wp_obsidian', group: 'digizoid', name: '数码合金武器：黑曜石（Obsidian）', dp: 3, cat: 'S,T', stageMin: 4,
    prereq: ['atk_weapon'], desc: '[武器] 攻击 +2 伤害 +2 精准，且视为拥有额外一级破甲。' },
  { id: 'dz_wp_red',      group: 'digizoid', name: '数码合金武器：红（Red）', dp: 3, cat: 'S,T', stageMin: 4,
    prereq: ['atk_weapon'], desc: '[武器] 攻击获得 +6 伤害。' },

  /* ---------- 增益力量（完全体 + 本能 1 级） ---------- */
  { id: 'gf_overwrite', group: 'gainforce', name: '覆盖（Overwrite）', dp: 1, cat: 'S', stageMin: 4,
    prereq: ['enh_instinct'], desc: '简单动作激活：每回合承受 CPU 不可更改伤害，不受花费低于 3 DP 的 [效果] 影响。不能获得勇者之心。',
    exclusive: ['cm_braveheart'] },
  { id: 'gf_undying',   group: 'gainforce', name: '不朽力（Undying InForce）', dp: 2, cat: 'S', stageMin: 4,
    prereq: ['enh_instinct'], desc: '从 CPU 派生被动 [护盾]；每级本能 +1 临时伤口格。第一次受伤后上限降至 ½，每隔一回合刷新 ¼。',
    exclusive: ['cm_braveheart'] },
  { id: 'gf_time',      group: 'gainforce', name: '时间力（Time InForce）', dp: 2, cat: 'T,A', stageMin: 4,
    prereq: ['enh_instinct'], desc: '无需掷先攻（在所有检定后决定位置，每隔一回合可调整）。每场战斗一次可重掷巨大力量或超额击杀第二次。' },
  { id: 'gf_omniscience', group: 'gainforce', name: '全知力（Omniscience InForce）', dp: 2, cat: 'T', stageMin: 4,
    prereq: ['enh_instinct'], desc: '每回合一次做出 [预备动作] 预测。每场战斗一次可重掷敏捷或回避第二次。' },
  { id: 'gf_crisis',    group: 'gainforce', name: '数码危机（Digi Crisis）', dp: 3, cat: 'T,A', stageMin: 4,
    prereq: ['enh_instinct'], desc: '获得单个 [危险] 标签：对远程爆发半径内一切造成自动伤害（不掷精准/闪避）。不能受选择性目标影响。' },
  { id: 'gf_zero',      group: 'gainforce', name: '零单元（Zero Unit）', dp: 3, cat: 'T,A', stageMin: 4,
    prereq: ['enh_instinct'], desc: '获得单个 [重生] 标签：目标拥有伤口格时，选择两个属性组合给予 BIT 加值并恢复 BIT 伤口格；目标负值/零伤口格时复杂动作复活（驯兽师掷意志力）。' },

  /* ---------- 爆发力量 ---------- */
  { id: 'burst_power', group: 'burst', name: '爆发力量（Burst Power）', dp: 1, cat: 'T', stageMin: 6,
    prereq: ['mo_changex'], note: '要求：形态切换 X.0 2 级 + 究极体 + GM 批准',
    desc: '创建期间投入属性的静态 DP 可重新分配为 [爆发模式] 构建。宣告时人类进行勇气检定（标准 18 / 强化 20 / 极端 22），进入爆发模式 3 回合。根据驯兽师最高属性获得加值与特殊特质。' },

  /* ---------- 免费特质（只能 1 个） ---------- */
  { id: 'fq_nicedone',  group: 'free', name: '干得漂亮（Nice Done）', dp: 0, cat: 'T', free: true,
    desc: '战斗开始掷 1d6：6 = +阶段加成临时伤口格与伤害；2 = 战斗期间承受阶段加成护甲惩罚；1 = 最高属性静态缺点并立即受伤。' },
  { id: 'fq_ammo',      group: 'free', name: '弹药（Ammo）', dp: 0, cat: 'A', free: true,
    desc: '获得 [弹药] 标签（仅限具有三个攻击标签的招式）：该攻击可在战斗期间一回合连续使用，最多 5 次。不能应用于 [招牌招式]。' },
  { id: 'fq_fragile',   group: 'free', name: '脆弱装备（Fragile）', dp: 0, cat: 'S,A', free: true,
    desc: '应用于 [武器] 攻击：命中时掷 1d6，1 = 武器破碎；6 = 该次攻击 +阶段加成伤害。应用于护甲：被命中掷 1d6，1 = 护甲破碎；6 = 该次攻击护甲 +阶段加成。' },
  { id: 'fq_unstable',  group: 'free', name: '体型不稳定（Unstable Size）', dp: 0, cat: 'T', free: true,
    desc: '进化时掷 1d6：1-2 中型、3-4 大型、5-6 巨型。体型保持到战斗结束。' },
  { id: 'fq_violent',   group: 'free', name: '暴力覆盖（Violent Overwrite）', dp: 0, cat: 'T', free: true,
    desc: '每回合开始掷 1d6：1 = 承受阶段加成+1 不可更改伤害；6 = 恢复等于阶段加成的伤口格。' },
  { id: 'fq_merciful',  group: 'free', name: '慈悲模式（Merciful Mode）', dp: 0, cat: 'S', free: true,
    desc: '攻击默认为非致命；删除敌人需宣告致命意图。不能采取进攻姿态。' },
  { id: 'fq_mood',      group: 'free', name: '正面强化（Positive Reinforcement）', dp: 0, cat: 'S,T', free: true,
    desc: '心情计量表（1d6，从 3 开始）：命中/闪避 +1，未命中/被命中 -1。5-6 = +闪避伤害；1-2 = -精准护甲。不能与狂战士同获。',
    exclusive: ['cm_berserker'] },
  { id: 'fq_willover',  group: 'free', name: '意志胜于物质（Mind Over Matter）', dp: 0, cat: 'S', free: true,
    desc: '所有属性 -1；从单个属性类别（不含敏捷）选择两个技能视为拥有天赋技能。', mods: { acc: -1, dmg: -1, dodge: -1, armor: -1, health: -1 } },
  { id: 'fq_blindjustice', group: 'free', name: '正义盲目（Blind Justice）', dp: 0, cat: 'S', free: true,
    desc: '视觉障碍：感知（听觉）检定天赋技能，自动失败任何基于视觉的检定。近战攻击附带 [近距爆炸]，远程免费 [锥形]。单目标攻击需驯兽师复杂指令。不能受益于选择性目标。' },

  /* ---------- 负面特质（返还 DP） ---------- */
  { id: 'ng_bulky',    group: 'negative', name: '笨重（Bulky）', dp: -1, cat: 'S', rank: 3,
    desc: '每级基础移动 -3（不能降至 1 或更低）。', mods: { baseMove: -3 } },
  { id: 'ng_fragile',  group: 'negative', name: '脆弱（Fragile）', dp: -2, cat: 'S',
    desc: '来袭 [负面效果] 持续时间 +1；所有来袭 [正面效果] 持续时间 -1。' },
  { id: 'ng_defiant',  group: 'negative', name: '不服从（Defiant）', dp: -1, cat: 'S',
    desc: '所有基础驯兽师指令承受 -2 缺点。' },
  { id: 'ng_rebel',    group: 'negative', name: '叛逆阶段（Rebel Stage）', dp: -1, cat: 'S,T', prereq: ['ng_defiant'],
    desc: '每回合掷 1d6，1 = 拒绝听令，驯兽师须魅力检定（12/14/16）。' },
  { id: 'ng_fullaction', group: 'negative', name: '完整动作（Full Action）', dp: -3, cat: 'A',
    prereq: ['sig_move'], desc: '获得 [完整动作] 标签并必须应用于招牌招式：攻击需复杂动作而非简单动作。' },
  { id: 'ng_lighthit', group: 'negative', name: '轻击（Light Hit）', dp: -1, cat: 'A', rank: 3,
    prereq: ['atk_armorpierce'], desc: '必须附加到带破甲的攻击上：每级攻击必须额外成功 X 次才能触发破甲。' },
  { id: 'ng_klutz',    group: 'negative', name: '笨手笨脚（Klutz）', dp: -2, cat: 'S', prereq: ['sp_selective'],
    desc: '使用 [范围] 攻击掷 1d6：5-6 正常；3-4 可能命中在场每只数码兽（含盟友）；1 只伤害盟友并给敌人正面效果。' },
  { id: 'ng_underwhelm', group: 'negative', name: '令人失望（Underwhelming）', dp: -2, cat: 'T', rank: 2,
    prereq: ['atk_hugepower'], desc: '巨大力量必须为第一次攻击掷出；第二次攻击重掷所有 5 点。2 级需超额击杀。' },
  { id: 'ng_broadside', group: 'negative', name: '舷侧（Broadside）', dp: -2, cat: 'T', rank: 2,
    prereq: ['def_agility'], desc: '敏捷被呼叫后，下次闪避掷骰时重掷所有 5 点。2 级需回避，重掷所有成功闪避骰。' },
  { id: 'ng_decstat',  group: 'negative', name: '降低衍生属性（Decreased Derived Stat）', dp: -1, cat: 'S', rank: 5,
    prereq: ['enh_improved'], desc: '每级将一个衍生属性降低 1（只能降低未受强化衍生属性影响的）。', pick: '选择衍生属性' }
];

/* ---------- 快速索引 ---------- */
const QUALITY_MAP = {};
QUALITIES.forEach(q => { QUALITY_MAP[q.id] = q; });

/* 阶段数值速查（用于阶段限制） */
const STAGE_INDEX = {};
DIGIMON_STAGES.forEach((s, i) => { s.index = i; STAGE_INDEX[s.key] = s; });
