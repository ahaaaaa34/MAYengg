'use strict';

// ════════════════════════════════════════════
// WORD DATA  (id は 0 始まり連番)
// ════════════════════════════════════════════
const WORDS = [
  // 英検3級
  { id:  0, en: 'species',     ja: '種',               lv: '3級',   lvCls: 'lv-3',    ex: 'An endangered species is a group of animals or plants which could soon become extinct.', exJa: '絶滅危惧種とは、まもなく絶滅してしまう可能性のある動植物のグループです。' },
  { id:  1, en: 'extinct',     ja: '絶滅した',           lv: '3級',   lvCls: 'lv-3',    ex: 'Many species are nearly extinct and could disappear from the Earth very soon.', exJa: '多くの種はほぼ絶滅しており、もうすぐ地球から消えてしまうかもしれません。' },
  { id:  2, en: 'disappear',   ja: '消える',             lv: '3級',   lvCls: 'lv-3',    ex: "Many species are nearly extinct and could disappear from the Earth very soon if we don't do anything to save them.", exJa: '私たちが何もしなければ、多くの種はまもなく地球から姿を消してしまうかもしれません。' },
  { id:  3, en: 'save',        ja: '救う',               lv: '3級',   lvCls: 'lv-3',    ex: "We could disappear from the Earth very soon if we don't do anything to save them.", exJa: '私たちが彼らを救うために何もしなければ、地球からまもなく消えてしまうでしょう。' },
  { id:  4, en: 'reason',      ja: '理由',               lv: '3級',   lvCls: 'lv-3',    ex: 'There are many reasons why species become endangered, but most harm is due to human activities.', exJa: '私たちが何もしなければ、多くの種はまもなく地球から姿を消してしまうかもしれません。' },
  { id:  5, en: 'harm',        ja: '害',                 lv: '3級',   lvCls: 'lv-3',    ex: 'Most harm to species is due to human activities such as habitat destruction, hunting and overfishing.', exJa: '私たちが彼らを救うために何もしなければ、地球からまもなく消えてしまうでしょう。' },
  { id:  6, en: 'activity',    ja: '活動',               lv: '3級',   lvCls: 'lv-3',    ex: 'Most harm to species is due to human activities such as habitat destruction, hunting and overfishing.', exJa: '種が絶滅危惧になる理由はたくさんありますが、ほとんどの害は人間の活動によるものです。' },
  { id:  7, en: 'destruction', ja: '破壊',               lv: '3級',   lvCls: 'lv-3',    ex: 'Most harm to species is due to human activities such as habitat destruction, hunting and overfishing.', exJa: '種への害のほとんどは、生息地の破壊・狩猟・乱獲などの人間の活動によるものです。' },
  { id:  8, en: 'hunting',     ja: '狩猟',               lv: '3級',   lvCls: 'lv-3',    ex: 'Most harm to species is due to human activities such as habitat destruction, hunting and overfishing.', exJa: '種への害のほとんどは、生息地の破壊・狩猟・乱獲などの人間の活動によるものです。' },
  { id:  9, en: 'destroy',     ja: '破壊する',           lv: '3級',   lvCls: 'lv-3',    ex: 'Farmers or companies who destroy animal habitats should face a financial penalty.', exJa: '種への害のほとんどは、生息地の破壊・狩猟・乱獲などの人間の活動によるものです。' },
  { id: 10, en: 'natural',     ja: '自然の',             lv: '3級',   lvCls: 'lv-3',    ex: 'This destroys the animals\', exJa: '種への害のほとんどは、生息地の破壊・狩猟・乱獲などの人間の活動によるものです。' habitat – the natural environment where plants or animals usually live.' },
  { id: 11, en: 'environment', ja: '環境',               lv: '3級',   lvCls: 'lv-3',    ex: 'This destroys the animals\', exJa: '動物の生息地を破壊する農家や企業は、金銭的な罰則を受けるべきです。' habitat – the natural environment where plants or animals usually live.' },
  { id: 12, en: 'pollution',   ja: '汚染',               lv: '3級',   lvCls: 'lv-3',    ex: 'Animal habitats are also destroyed because of pollution.', exJa: '植物や動物が通常生活している自然環境である生息地を破壊します。' },
  { id: 13, en: 'factory',     ja: '工場',               lv: '3級',   lvCls: 'lv-3',    ex: 'Dirty water from factories, which contains chemicals, ends up in rivers.', exJa: '植物や動物が通常生活している自然環境である生息地を破壊します。' },
  { id: 14, en: 'contain',     ja: '含む',               lv: '3級',   lvCls: 'lv-3',    ex: 'Dirty water from factories, which contains chemicals, ends up in rivers.', exJa: '動物の生息地は汚染によっても破壊されています。' },
  { id: 15, en: 'area',        ja: '地域',               lv: '3級',   lvCls: 'lv-3',    ex: 'Poisons used on farmland may even kill animals which live in the area.', exJa: '工場から出る化学物質を含んだ汚染水が川に流れ込みます。' },
  { id: 16, en: 'result',      ja: '結果',               lv: '3級',   lvCls: 'lv-3',    ex: 'Endangered species are also the result of hunting and fishing.', exJa: '工場から出る化学物質を含んだ汚染水が川に流れ込みます。' },
  { id: 17, en: 'price',       ja: '価格',               lv: '3級',   lvCls: 'lv-3',    ex: 'Animals such as the Arabian oryx are nearly extinct because of the high price of their meat.', exJa: 'その地域に住む動物を死なせることさえある毒が農地で使われています。' },
  { id: 18, en: 'example',     ja: '例',                 lv: '3級',   lvCls: 'lv-3',    ex: 'For example, some seal species are now almost extinct because they are killed for their fur to make coats.', exJa: '絶滅危惧種は、狩猟や漁業の結果でもあります。' },
  { id: 19, en: 'almost',      ja: 'ほとんど・もう少しで', lv: '3級',   lvCls: 'lv-3',    ex: 'Some seal species are now almost extinct because they are killed for their fur to make coats.', exJa: 'アラビアオリックスなどは、肉の高値のためにほぼ絶滅しています。' },
  { id: 20, en: 'medicine',    ja: '薬',                 lv: '3級',   lvCls: 'lv-3',    ex: 'Tigers are shot to make medicine and tea from their bones.', exJa: '例えば、一部のアザラシの種は毛皮目的で殺され、今やほぼ絶滅しています。' },
  { id: 21, en: 'creature',    ja: '生き物',             lv: '3級',   lvCls: 'lv-3',    ex: 'Large sea creatures like whales, tuna and sharks have all become endangered species because of overfishing.', exJa: '一部のアザラシの種は毛皮のために殺され、今やほぼ絶滅しています。' },
  { id: 22, en: 'special',     ja: '特別な',             lv: '3級',   lvCls: 'lv-3',    ex: 'Too many are caught to make special dishes that people like to eat, such as shark\', exJa: 'トラは骨から薬やお茶を作るために撃たれます。's fin soup or sushi.' },
  { id: 23, en: 'dish',        ja: '料理',               lv: '3級',   lvCls: 'lv-3',    ex: 'Too many are caught to make special dishes that people like to eat, such as shark\', exJa: 'クジラ・マグロ・サメのような大型の海の生き物が乱獲で絶滅危惧種となっています。's fin soup or sushi.' },
  { id: 24, en: 'step',        ja: '手段',               lv: '3級',   lvCls: 'lv-3',    ex: 'What steps can individuals and governments take to protect more animal and plant species from becoming endangered?', exJa: 'フカヒレスープや寿司など、特別な料理を作るために過剰に捕獲されています。' },
  { id: 25, en: 'protect',     ja: '守る',               lv: '3級',   lvCls: 'lv-3',    ex: 'What steps can individuals and governments take to protect more animal and plant species from becoming endangered?', exJa: 'フカヒレスープや寿司など、特別な料理を作るために過剰に捕獲されています。' },
  { id: 26, en: 'refuse',      ja: '拒む',               lv: '3級',   lvCls: 'lv-3',    ex: 'The public can help out by refusing to buy products made from animals\', exJa: '個人や政府はどのような手段を取れば絶滅危惧から動植物を守れるでしょうか？' body parts.' },
  { id: 27, en: 'product',     ja: '製品',               lv: '3級',   lvCls: 'lv-3',    ex: 'The public can help out by refusing to buy products made from animals\', exJa: '個人や政府はどのような手段を取れば絶滅危惧から動植物を守れるでしょうか？' body parts, such as seal fur coats or crocodile bags.' },
  { id: 28, en: 'against',     ja: '〜に反して',         lv: '3級',   lvCls: 'lv-3',    ex: 'Governments can help by making it against the law to hunt, fish or trade in endangered species.', exJa: '一般市民は動物の体の部位から作られた製品を拒むことで助けることができます。' },
  { id: 29, en: 'law',         ja: '法律',               lv: '3級',   lvCls: 'lv-3',    ex: 'Governments can help by making it against the law to hunt, fish or trade in endangered species.', exJa: '一般市民はアザラシの毛皮コートやワニのバッグなどを買わないことで助けることができます。' },
  { id: 30, en: 'provide',     ja: '提供する',           lv: '3級',   lvCls: 'lv-3',    ex: 'They can also provide funding for animal sanctuaries and zoos.', exJa: '政府は絶滅危惧種の狩猟・漁業・取引を法律で禁止することで助けることができます。' },
  { id: 31, en: 'cooperate',   ja: '協力する',           lv: '3級',   lvCls: 'lv-3',    ex: 'If we all cooperate by taking these steps we will protect our planet.', exJa: '政府は絶滅危惧種の狩猟・漁業・取引を法律で禁止することで助けることができます。' },
  { id: 32, en: 'planet',      ja: '星・地球',           lv: '3級',   lvCls: 'lv-3',    ex: 'If we all cooperate by taking these steps we will protect our planet so that our children can enjoy it, too.', exJa: '政府は動物保護区や動物園への資金を提供することもできます。' },
  { id: 33, en: 'enjoy',       ja: '楽しむ',             lv: '3級',   lvCls: 'lv-3',    ex: 'We will protect our planet so that our children and their children can enjoy it, too.', exJa: '私たち全員が協力してこれらの手段を取れば、地球を守ることができます。' },
  // 英検準2級
  { id: 34, en: 'endangered',  ja: '絶滅危惧の',         lv: '準2級', lvCls: 'lv-pre2', ex: 'An endangered species is a group of animals or plants which could soon become extinct.', exJa: '子どもたちも楽しめるよう、皆が協力して地球を守りましょう。' },
  { id: 35, en: 'extinction',  ja: '絶滅',               lv: '準2級', lvCls: 'lv-pre2', ex: 'These protect animals from extinction by breeding more endangered animals, which can later be released into the wild.', exJa: '子どもたちやその子どもたちも楽しめるよう、地球を守っていきましょう。' },
  { id: 36, en: 'habitat',     ja: '生息地',             lv: '準2級', lvCls: 'lv-pre2', ex: 'Habitat destruction is the main reason why animals become endangered.', exJa: '絶滅危惧種とは、まもなく絶滅してしまう可能性のある動植物のグループです。' },
  { id: 37, en: 'overfishing', ja: '乱獲',               lv: '準2級', lvCls: 'lv-pre2', ex: 'Most harm to species is due to human activities such as habitat destruction, hunting and overfishing.', exJa: '動物園や保護区でより多くの絶滅危惧動物を繁殖させ、後に野生に放すことで絶滅を防ぎます。' },
  { id: 38, en: 'chemical',    ja: '化学物質',           lv: '準2級', lvCls: 'lv-pre2', ex: 'Dirty water from factories, which contains chemicals, ends up in rivers.', exJa: '生息地の破壊は、動物が絶滅危惧になる主な原因です。' },
  { id: 39, en: 'poison',      ja: '毒',                 lv: '準2級', lvCls: 'lv-pre2', ex: 'Poisons used on farmland may even kill animals which live in the area.', exJa: '種への害のほとんどは、生息地の破壊・狩猟・乱獲などの人間の活動によるものです。' },
  { id: 40, en: 'fur',         ja: '毛皮',               lv: '準2級', lvCls: 'lv-pre2', ex: 'Some seal species are now almost extinct because they are killed for their fur to make coats.', exJa: '工場から出る化学物質を含んだ汚染水が川に流れ込みます。' },
  { id: 41, en: 'bone',        ja: '骨',                 lv: '準2級', lvCls: 'lv-pre2', ex: 'Tigers are shot to make medicine and tea from their bones.', exJa: 'その地域に住む動物を死なせることさえある毒が農地で使われています。' },
  { id: 42, en: 'skin',        ja: '皮',                 lv: '準2級', lvCls: 'lv-pre2', ex: 'Other animals are killed for their fur, bones or skin – or just for sport.', exJa: '一部のアザラシは毛皮のコートを作るために殺され、今やほぼ絶滅しています。' },
  { id: 43, en: 'sport',       ja: 'スポーツ・娯楽',     lv: '準2級', lvCls: 'lv-pre2', ex: 'Other animals are killed for their fur, bones or skin – or just for sport.', exJa: 'トラは骨から薬やお茶を作るために撃たれます。' },
  { id: 44, en: 'seal',        ja: 'アザラシ',           lv: '準2級', lvCls: 'lv-pre2', ex: 'Some seal species are now almost extinct because they are killed for their fur to make coats.', exJa: '他の動物は毛皮・骨・皮のために、あるいは単に娯楽のために殺されます。' },
  { id: 45, en: 'shoot',       ja: '撃つ',               lv: '準2級', lvCls: 'lv-pre2', ex: 'Tigers are shot to make medicine and tea from their bones.', exJa: '他の動物は毛皮・骨・皮のために、あるいは単に娯楽のために殺されます。' },
  { id: 46, en: 'whale',       ja: 'クジラ',             lv: '準2級', lvCls: 'lv-pre2', ex: 'Large sea creatures like whales, tuna and sharks have all become endangered species because of overfishing.', exJa: '一部のアザラシの種は毛皮のために殺され、今やほぼ絶滅しています。' },
  { id: 47, en: 'tuna',        ja: 'マグロ',             lv: '準2級', lvCls: 'lv-pre2', ex: 'Large sea creatures like whales, tuna and sharks have all become endangered species because of overfishing.', exJa: 'トラは骨から薬やお茶を作るために撃たれます。' },
  { id: 48, en: 'shark',       ja: 'サメ',               lv: '準2級', lvCls: 'lv-pre2', ex: 'Large sea creatures like whales, tuna and sharks have all become endangered species because of overfishing.', exJa: 'クジラ・マグロ・サメのような大型の海の生き物が乱獲で絶滅危惧種となっています。' },
  { id: 49, en: 'individual',  ja: '個人',               lv: '準2級', lvCls: 'lv-pre2', ex: 'What steps can individuals and governments take to protect more animal and plant species from becoming endangered?', exJa: 'クジラ・マグロ・サメのような大型の海の生き物が乱獲で絶滅危惧種となっています。' },
  { id: 50, en: 'government',  ja: '政府',               lv: '準2級', lvCls: 'lv-pre2', ex: 'What steps can individuals and governments take to protect more animal and plant species from becoming endangered?', exJa: 'クジラ・マグロ・サメのような大型の海の生き物が乱獲で絶滅危惧種となっています。' },
  { id: 51, en: 'pollute',     ja: '汚染する',           lv: '準2級', lvCls: 'lv-pre2', ex: 'We should try not to pollute natural areas.', exJa: '個人や政府はどのような手段を取れば絶滅危惧から動植物を守れるでしょうか？' },
  { id: 52, en: 'farmer',      ja: '農家',               lv: '準2級', lvCls: 'lv-pre2', ex: 'Farmers or companies who destroy animal habitats should face a financial penalty.', exJa: '個人や政府はどのような手段を取れば絶滅危惧から動植物を守れるでしょうか？' },
  { id: 53, en: 'company',     ja: '会社',               lv: '準2級', lvCls: 'lv-pre2', ex: 'Farmers or companies who destroy animal habitats should face a financial penalty.', exJa: '自然の地域を汚染しないよう努めるべきです。' },
  { id: 54, en: 'financial',   ja: '金銭的な',           lv: '準2級', lvCls: 'lv-pre2', ex: 'Farmers or companies who destroy animal habitats should face a financial penalty.', exJa: '動物の生息地を破壊する農家や企業は、金銭的な罰則を受けるべきです。' },
  { id: 55, en: 'penalty',     ja: '罰',                 lv: '準2級', lvCls: 'lv-pre2', ex: 'Farmers or companies who destroy animal habitats should face a financial penalty.', exJa: '動物の生息地を破壊する農家や企業は、金銭的な罰則を受けるべきです。' },
  { id: 56, en: 'public',      ja: '一般市民',           lv: '準2級', lvCls: 'lv-pre2', ex: 'The public can help out by refusing to buy products made from animals\', exJa: '動物の生息地を破壊する農家や企業は、金銭的な罰則を受けるべきです。' body parts.' },
  { id: 57, en: 'trade',       ja: '取引する',           lv: '準2級', lvCls: 'lv-pre2', ex: 'Governments can help by making it against the law to hunt, fish or trade in endangered species.', exJa: '動物の生息地を破壊する農家や企業は、金銭的な罰則を受けるべきです。' },
  { id: 58, en: 'funding',     ja: '資金',               lv: '準2級', lvCls: 'lv-pre2', ex: 'They can also provide funding for animal sanctuaries and zoos.', exJa: '一般市民は動物の体の部位から作られた製品を拒むことで助けることができます。' },
  { id: 59, en: 'sanctuary',   ja: '保護区',             lv: '準2級', lvCls: 'lv-pre2', ex: 'They can also provide funding for animal sanctuaries and zoos.', exJa: '政府は絶滅危惧種の狩猟・漁業・取引を法律で禁止することで助けることができます。' },
  { id: 60, en: 'breed',       ja: '繁殖させる',         lv: '準2級', lvCls: 'lv-pre2', ex: 'These protect animals from extinction by breeding more endangered animals, which can later be released into the wild.', exJa: '政府は動物保護区や動物園への資金を提供することもできます。' },
  { id: 61, en: 'release',     ja: '放つ',               lv: '準2級', lvCls: 'lv-pre2', ex: 'These protect animals from extinction by breeding more endangered animals, which can later be released into the wild.', exJa: '政府は動物保護区や動物園への資金を提供することもできます。' },
  { id: 62, en: 'wild',        ja: '野生',               lv: '準2級', lvCls: 'lv-pre2', ex: 'Endangered animals can later be released into the wild.', exJa: 'より多くの絶滅危惧動物を繁殖させ、後に野生に放すことで絶滅から動物を守ります。' },
  // 英検2級
  { id: 63, en: 'oryx',        ja: 'オリックス（レイヨウの一種）', lv: '2級', lvCls: 'lv-2', ex: 'Animals such as the Arabian oryx are nearly extinct because of the high price of their meat.', exJa: 'より多くの絶滅危惧動物を繁殖させ、後に野生に放すことで絶滅から動物を守ります。' },
  { id: 64, en: 'crocodile',   ja: 'ワニ',               lv: '2級',   lvCls: 'lv-2',    ex: 'Crocodiles are caught to make bags and shoes.', exJa: '絶滅危惧動物は後に野生に放すことができます。' },
  // 英検準1級以上
  { id: 65, en: 'Arabian',     ja: 'アラビアの',         lv: '準1級+', lvCls: 'lv-pre1', ex: 'Animals such as the Arabian oryx are nearly extinct because of the high price of their meat.', exJa: 'アラビアオリックスなどは、肉の高値のためにほぼ絶滅しています。' },
  // 追加単語
  { id: 66, en: 'Earth',       ja: '地球',               lv: '3級',   lvCls: 'lv-3',    ex: 'Many species could disappear from the Earth very soon if we don\', exJa: 'ワニはバッグや靴を作るために捕獲されます。't do anything to save them.' },
  { id: 67, en: 'water',       ja: '水',                 lv: '3級',   lvCls: 'lv-3',    ex: 'Dirty water from factories, which contains chemicals, ends up in rivers.', exJa: 'アラビアオリックスなどは、肉の高値のためにほぼ絶滅しています。' },
  { id: 68, en: 'river',       ja: '川',                 lv: '3級',   lvCls: 'lv-3',    ex: 'Dirty water from factories, which contains chemicals, ends up in rivers.', exJa: '私たちが何もしなければ、多くの種がまもなく地球から姿を消してしまうかもしれません。' },
  { id: 69, en: 'tree',        ja: '木',                 lv: '3級',   lvCls: 'lv-3',    ex: 'When humans move into a new area, they cut down trees to build houses and farms.', exJa: '工場から出る化学物質を含んだ汚染水が川に流れ込みます。' },
  { id: 70, en: 'sea',         ja: '海',                 lv: '3級',   lvCls: 'lv-3',    ex: 'Large sea creatures like whales, tuna and sharks have all become endangered species because of overfishing.', exJa: '工場から出る化学物質を含んだ汚染水が川に流れ込みます。' },
  { id: 71, en: 'house',       ja: '家',                 lv: '3級',   lvCls: 'lv-3',    ex: 'When humans move into a new area, they cut down trees to build houses and farms.', exJa: '家や農場を作るために木を切り倒し、新しい地域に移り住みます。' },
  { id: 72, en: 'farm',        ja: '農場',               lv: '3級',   lvCls: 'lv-3',    ex: 'When humans move into a new area, they cut down trees to build houses and farms.', exJa: 'クジラ・マグロ・サメのような大型の海の生き物が乱獲で絶滅危惧種となっています。' },
  { id: 73, en: 'farmland',    ja: '農地',               lv: '3級',   lvCls: 'lv-3',    ex: 'Poisons used on farmland may even kill animals which live in the area.', exJa: '家や農場を作るために木を切り倒し、新しい地域に移り住みます。' },
  { id: 74, en: 'zoo',         ja: '動物園',             lv: '3級',   lvCls: 'lv-3',    ex: 'They can also provide funding for animal sanctuaries and zoos.', exJa: '家や農場を作るために木を切り倒し、新しい地域に移り住みます。' },
  { id: 75, en: 'end up',      ja: '〜になる・〜に終わる', lv: '3級',  lvCls: 'lv-3',    ex: 'Dirty water from factories, which contains chemicals, ends up in rivers.', exJa: 'その地域に住む動物を死なせることさえある毒が農地で使われています。' },
  { id: 76, en: 'fin',         ja: 'ひれ',               lv: '準2級', lvCls: 'lv-pre2', ex: "Too many are caught to make special dishes, such as shark's fin soup or sushi.", exJa: 'フカヒレスープや寿司などの特別な料理を作るために過剰に捕獲されています。' },
];

// ════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════
const S = {
  dir: 'en-jp',   // 'en-jp' | 'jp-en'
  deck: [],
  idx: 0,
  flipped: false,
  wrong: [],
  correct: [],
};

// ════════════════════════════════════════════
// UTILITIES
// ════════════════════════════════════════════
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function highlightWord(sentence, word) {
  if (!sentence) return '';
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Handle optional common suffixes (s, es, ed, ing, er, tion, etc.)
  const re = new RegExp(`(${escaped}(?:s|es|ed|ing|er|ly)?)`, 'gi');
  return sentence.replace(re, '<mark>$1</mark>');
}

// ════════════════════════════════════════════
// RENDER
// ════════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function renderCard() {
  const word = WORDS[S.deck[S.idx]];
  const total = S.deck.length;
  const current = S.idx + 1;

  // Progress
  document.getElementById('fc-progress').textContent = `${current} / ${total}`;
  document.getElementById('fc-bar').style.width = `${(current / total) * 100}%`;

  // Level badge
  const badge = document.getElementById('fc-level');
  badge.textContent = word.lv;
  badge.className = 'level-badge ' + word.lvCls;

  // Front face
  document.getElementById('fc-front-word').textContent =
    S.dir === 'en-jp' ? word.en : word.ja;

  // Back face
  document.getElementById('fc-back-answer').textContent =
    S.dir === 'en-jp' ? word.ja : word.en;

  const exEl = document.getElementById('fc-back-ex');
  const exJaEl = document.getElementById('fc-back-exja');
  if (word.ex) {
    exEl.innerHTML = highlightWord(word.ex, word.en);
    exEl.style.display = '';
    exJaEl.textContent = word.exJa || '';
    exJaEl.style.display = word.exJa ? '' : 'none';
  } else {
    exEl.style.display = 'none';
    exJaEl.style.display = 'none';
  }

  // Reset flip
  S.flipped = false;
  document.getElementById('fc-card').classList.remove('flipped');
  document.getElementById('fc-btn-show').style.display = '';
  document.getElementById('fc-btn-row').style.display = 'none';
}

// ════════════════════════════════════════════
// ACTIONS
// ════════════════════════════════════════════
function startSession(dir) {
  S.dir = dir;
  S.deck = shuffle(WORDS.map(w => w.id));
  S.idx = 0;
  S.wrong = [];
  S.correct = [];
  showScreen('screen-fc');
  renderCard();
}

function flipCard() {
  if (S.flipped) return;
  S.flipped = true;
  document.getElementById('fc-card').classList.add('flipped');
  document.getElementById('fc-btn-show').style.display = 'none';
  document.getElementById('fc-btn-row').style.display = 'flex';
}

function markCard(known) {
  const wordId = S.deck[S.idx];
  if (known) S.correct.push(wordId);
  else S.wrong.push(wordId);

  S.idx++;
  if (S.idx >= S.deck.length) {
    showResult();
  } else {
    renderCard();
  }
}

function showResult() {
  document.getElementById('res-correct').textContent = S.correct.length;
  document.getElementById('res-wrong').textContent = S.wrong.length;
  document.getElementById('res-total').textContent = S.deck.length;
  showScreen('screen-result');
}

// ════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-en-jp').addEventListener('click', () => startSession('en-jp'));
  document.getElementById('btn-jp-en').addEventListener('click', () => startSession('jp-en'));
  document.getElementById('fc-card').addEventListener('click', flipCard);
  document.getElementById('fc-btn-show').addEventListener('click', flipCard);
  document.getElementById('fc-btn-wrong').addEventListener('click', () => markCard(false));
  document.getElementById('fc-btn-correct').addEventListener('click', () => markCard(true));
  document.getElementById('btn-back-home').addEventListener('click', () => showScreen('screen-home'));
  document.getElementById('btn-result-home').addEventListener('click', () => showScreen('screen-home'));
  document.getElementById('btn-retry').addEventListener('click', () => startSession(S.dir));

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});
