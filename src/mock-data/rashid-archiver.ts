// このファイルは scripts/import-archiver.ts が生成する。手で編集しないこと。
// 入力: ../sf6-combo-archiver/data/rashid/*.json（108本）、data/matchup/*.json（39本）

import type { ArchiverUnresolved, Combo, MatchupEntry, OkizemeSetup } from './rashid';

export const ARCHIVER_COMBOS: Combo[] = [
  {
    "id": "ax_eXUug9kjcVQ_01",
    "title": "コンボ20選 #1",
    "starter": "2MP",
    "hitState": "通常",
    "position": "中央",
    "priority": "よく使う",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 36,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_01_r",
      "segment": "2MP > 5LK > 214LK",
      "damage": 1780,
      "enderClassId": "ec_weak_eagle",
      "situationTags": [],
      "notes": "元レシピ: 2中P>弱K>弱スパイク\nヒットバックが少なく、弱K>弱Pの暴れ潰しや弱Kから大サイクロン、2中P歩き2中Pなど連携の起点になる",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_02",
    "title": "コンボ20選 #2",
    "starter": "5LP",
    "hitState": "通常",
    "position": "中央",
    "priority": "ときどき",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 68,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_02_r",
      "segment": "5LP > 2LP > 5LP > 236LP or 236MP",
      "damage": 1170,
      "enderClassId": "ec_mid_mixer",
      "situationTags": [],
      "notes": "元レシピ: 弱P>2弱P>弱P>弱ミキサーか中ミキサー\nダメージは弱ミキサー〆。大サイクロン等で+1F取った後に使用。2段目は小足でも可（ジャスパ対策）。弱ミキサーをガードされたら弱サイクロン",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_03",
    "title": "コンボ20選 #3",
    "starter": "5MP",
    "hitState": "通常",
    "position": "中央",
    "priority": "ときどき",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 98,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_03_r",
      "segment": "5MP > 5LP > 236MP",
      "enderClassId": "ec_mid_mixer",
      "situationTags": [],
      "notes": "元レシピ: 中P>弱P>中ミキサー\nガードバックを活かした固め。クラシックは基本2中P、モダンで頻繁に使うルート",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_04",
    "title": "コンボ20選 #4",
    "starter": "5LP",
    "hitState": "通常",
    "position": "中央",
    "priority": "よく使う",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 114,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_04_r",
      "segment": "5LP or 5LK > CR > 5LP > 5MK > 5MP > 214MK",
      "damage": 2310,
      "enderClassId": "ec_mid_eagle",
      "situationTags": [],
      "notes": "元レシピ: 弱Por弱K>キャンセルラッシュ立弱P>立中K>中P>中スパイク\nダメージは弱P始動。ゲージがあれば伸ばすルート。運び量が大きい。5ゲージ以上あれば使ってよい",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_05",
    "title": "コンボ20選 #5",
    "starter": "2MK",
    "hitState": "通常",
    "position": "中央",
    "priority": "よく使う",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 144,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_05_r",
      "segment": "2MK > CR > 5MK > 5HP > 214MK",
      "damage": 2043,
      "enderClassId": "ec_mid_eagle",
      "situationTags": [],
      "notes": "元レシピ: 中足>キャンセルラッシュ中K>大P>中スパイク\n中足ラッシュの定番。しゃがみ確認できれば中足>CR2中P>立中K>中P>中スパイクでダメージ増。確認が難しければCR弱P>立中K>中P>中スパイク",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_06",
    "title": "コンボ20選 #6",
    "starter": "DR",
    "hitState": "通常",
    "position": "中央",
    "priority": "よく使う",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 177,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_06_r",
      "segment": "DR > 5LP > 5MP > 214MK",
      "damage": 1690,
      "enderClassId": "ec_mid_eagle",
      "situationTags": [],
      "notes": "元レシピ: ラッシュ弱P>中P>中スパイク\nラシード黄金3段コンボその2。低燃費で運び量に優れる",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_07",
    "title": "コンボ20選 #7",
    "starter": "DR",
    "hitState": "通常",
    "position": "中央",
    "priority": "ときどき",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 193,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_07_r",
      "segment": "DR > 2LK > 2MK > 214LK",
      "damage": 1370,
      "enderClassId": "ec_weak_eagle",
      "situationTags": [],
      "notes": "元レシピ: ラッシュ小足>中足>弱スパイク\n下段から攻め込みたい時、後ろ歩きが多い相手に。咄嗟パリィにジャスパされやすい",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_08",
    "title": "コンボ20選 #8",
    "starter": "その他",
    "hitState": "通常",
    "position": "中央",
    "priority": "ときどき",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 208,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_08_r",
      "segment": "始動技 > CR > 2HP > 5HP > 214LK > 236236P",
      "damage": 4549,
      "enderClassId": "ec_sa3_iusal",
      "situationTags": [],
      "notes": "元レシピ: 始動技>キャンセルラッシュ2大P>大P>弱スパイク>SA3\n中足始動での値（SA3前 2549）。SA3でリーサルを狙う時。主な始動は中P・大P。SA1でリーサルなら大P>キャンセルSA1",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_09",
    "title": "コンボ20選 #9",
    "starter": "2LK",
    "hitState": "通常",
    "position": "端",
    "priority": "よく使う",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 272,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_09_r",
      "segment": "始動技 > 中大TC > 236LP > 6MP > 214LP>4K > j.HK",
      "damage": 1430,
      "enderClassId": "ec_weak_stroke",
      "situationTags": [],
      "notes": "元レシピ: 始動技>中大TC>弱ミキサー>前中P>弱サイクロンストローク>J大K\n通称もにょもにょ。ダメージは小足始動、J大Kの前まで（J大Kは起き攻めとして800）。中スパイクを当てられる場面で端に届くなら中PからTCへ移行",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_10",
    "title": "コンボ20選 #10",
    "starter": "その他",
    "hitState": "通常",
    "position": "端",
    "priority": "ときどき",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 352,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_10_r",
      "segment": "始動技 > 5MP > 214MP > 5LP > CR > 5LP > 5MK > 中大TC > 236K(微溜め) > 6MP > 236MP > 236236K",
      "damage": 2999,
      "enderClassId": "ec_sa1",
      "situationTags": [],
      "notes": "元レシピ: 始動技>中P>中サイクロン>弱P>キャンセルラッシュ立弱P>立中K>中大TC>微溜めワール>前中P>中ミキサー>SA1\nSA1込み（SA1前 2459）。通称コンビニコンボ。最後を前中P>弱スパイクにするとSA3リーサルも可。ワールが厳しければTC>弱ミキサー>前中P>中ミキサー>SA1",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_11",
    "title": "コンボ20選 #11",
    "starter": "インパクト",
    "hitState": "通常",
    "position": "どこでも",
    "priority": "よく使う",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 448,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_11_r",
      "segment": "j.8HK > 214HK",
      "damage": 2650,
      "enderClassId": "ec_strong_eagle",
      "situationTags": [
        "インパクト"
      ],
      "notes": "元レシピ: 垂直J8大K>大スパイク\n簡単で超運ぶ。起き攻めも優秀で、コパ消費で詐欺飛びにいける",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_12",
    "title": "コンボ20選 #12",
    "starter": "インパクト",
    "hitState": "通常",
    "position": "どこでも",
    "priority": "ときどき",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 464,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_12_r",
      "segment": "j.8HK > 6MP > 214HK",
      "damage": 2710,
      "enderClassId": "ec_strong_eagle",
      "situationTags": [
        "インパクト"
      ],
      "notes": "元レシピ: 垂直J大K>前中P>大スパイク\n11より少し高ダメージだが詐欺飛び不可。代わりに中段消費で持続2中P",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_13",
    "title": "コンボ20選 #13",
    "starter": "インパクト",
    "hitState": "通常",
    "position": "端",
    "priority": "よく使う",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 482,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_13_r",
      "segment": "j.8HK > 5HK > j.MP > j.214HK > j.2HP",
      "damage": 3260,
      "enderClassId": null,
      "situationTags": [
        "インパクト"
      ],
      "notes": "元レシピ: 垂直J8大K>大K>J前中P>大スカイハイ>J2大P\n端付近限定の超優秀なノーゲージコンボ。拘束時間・火力・SA増加量すべて優秀",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_14",
    "title": "コンボ20選 #14",
    "starter": "インパクト",
    "hitState": "通常",
    "position": "どこでも",
    "priority": "ときどき",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 502,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_14_r",
      "segment": "66 > 66 > 214PP > 6MP > 214LK > 6MP > 214LP>4K",
      "damage": 2530,
      "enderClassId": "ec_weak_stroke",
      "situationTags": [
        "インパクト"
      ],
      "notes": "元レシピ: 前ステ2回>ODサイクロン>前中P>弱スパイク>前中P>弱サイクロンストローク\n2ゲージで画面どこからでも端へ運べる。位置を入れ替えたい時はフリップからTC",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_15",
    "title": "コンボ20選 #15",
    "starter": "スタン",
    "hitState": "通常",
    "position": "どこでも",
    "priority": "よく使う",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 552,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_15_r",
      "segment": "j.HK > 5MK > いつもの",
      "damage": 2130,
      "enderClassId": null,
      "situationTags": [
        "スタン"
      ],
      "notes": "元レシピ: J大K>立中K>いつもの\n「いつもの」＝端コンボと同じルート（実演は約2130）。ノーゲージなら立中KからTC。リーサル時は中サイクロンを混ぜてキャンセルラッシュで伸ばす",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_16",
    "title": "コンボ20選 #16",
    "starter": "スタン",
    "hitState": "通常",
    "position": "どこでも",
    "priority": "ときどき",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 578,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_16_r",
      "segment": "236K(最大溜め) > 236PP > j.214KK > 236MP > 236236K",
      "damage": 4000,
      "enderClassId": "ec_sa1",
      "situationTags": [
        "スタン"
      ],
      "notes": "元レシピ: 最大溜めワール>ODミキサー>ODスカイハイ>中ミキサー>SA1\n4ゲージ使う比較的低燃費な高ダメージコンボ。SAゲージ回収率は悪い。ODスカイハイ後に前中P>ODサイクロン>強化ミキサーでSA3まで狙える",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_17",
    "title": "コンボ20選 #17",
    "starter": "イウサール",
    "hitState": "通常",
    "position": "中央",
    "priority": "よく使う",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 633,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_17_r",
      "segment": "66 > 2HP > 6MP > 214LK > 236LP > 236HP",
      "damage": 3695,
      "enderClassId": "ec_strong_mixer",
      "situationTags": [
        "イウサール"
      ],
      "notes": "元レシピ: 前ステ>2大P>前中P>弱スパイク>弱ミキサー>大ミキサー\nノーゲージ運びコン（イウサールのダメージ込み）。起き攻めは中足で持続2中P、立中K消費で+4F投げ。端が少し遠ければ前中Pから弱サイクロンネイルで詐欺飛び",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_18",
    "title": "コンボ20選 #18",
    "starter": "イウサール",
    "hitState": "通常",
    "position": "中央",
    "priority": "ときどき",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 655,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_18_r",
      "segment": "5MP > j.8HK > 236PP > j.214KK > 236HP",
      "damage": 3770,
      "enderClassId": "ec_strong_mixer",
      "situationTags": [
        "イウサール"
      ],
      "notes": "元レシピ: 中P>垂直J8大K>ODミキサー>ODスカイハイ>大ミキサー\nゲージ使用の高火力コン。初めの不思議な踊りでODミキサーが最低空でヒット。Dゲージが厳しければ弱スカイハイで〆",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_19",
    "title": "コンボ20選 #19",
    "starter": "イウサール",
    "hitState": "通常",
    "position": "中央",
    "priority": "よく使う",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 693,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_19_r",
      "segment": "6KK > 5HK > 236PP > 6MP > 214LP>4K",
      "damage": 2380,
      "enderClassId": "ec_weak_stroke",
      "situationTags": [
        "イウサール"
      ],
      "notes": "元レシピ: フリップ>大K>ODミキサー>前中P>弱サイクロンストローク\n入れ替えつつもにょ起き攻めができる逆転力の高いルート。端が遠くても狙え、Dゲージ2本消費",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_eXUug9kjcVQ_20",
    "title": "コンボ20選 #20",
    "starter": "イウサール",
    "hitState": "通常",
    "position": "中央",
    "priority": "あまり使わない",
    "youtubeId": "eXUug9kjcVQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 710,
    "patchVersion": "Y4",
    "root": {
      "id": "n_ax_eXUug9kjcVQ_20_r",
      "segment": "5HK > 6MP > 214LK",
      "damage": 2850,
      "enderClassId": "ec_weak_eagle",
      "situationTags": [
        "イウサール"
      ],
      "notes": "元レシピ: 大K>前中P>弱スパイク\n入れ替えゲージも無く端も遠い時の最低限の妥協コンボ。最低限投げは埋まる",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_kDldjC2G2QE_02",
    "title": "イウサールコンボ8選 #2",
    "starter": "イウサール",
    "hitState": "通常",
    "position": "どこでも",
    "priority": "ときどき",
    "youtubeId": "kDldjC2G2QE",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 74,
    "patchVersion": "Y3後期",
    "root": {
      "id": "n_ax_kDldjC2G2QE_02_r",
      "segment": "5MP > 垂直J攻撃 > 236PP > j.214KK > 236HP",
      "damage": 4325,
      "enderClassId": "ec_strong_mixer",
      "situationTags": [
        "イウサール"
      ],
      "notes": "元レシピ: 中P>垂直J攻撃>ODミキサー>ODスカイハイ>大ミキサー\nゲージ使用の高火力ルート。リーサルならSA1まで。端に届かなければ大足で追撃できる",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_kDldjC2G2QE_03",
    "title": "イウサールコンボ8選 #3",
    "starter": "イウサール",
    "hitState": "通常",
    "position": "端",
    "priority": "ときどき",
    "youtubeId": "kDldjC2G2QE",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 101,
    "patchVersion": "Y3後期",
    "root": {
      "id": "n_ax_kDldjC2G2QE_03_r",
      "segment": "5MK > 66 > 214LK > 236PP > 6MP > 214LP>6K>K",
      "damage": 4090,
      "enderClassId": "ec_weak_nail",
      "situationTags": [
        "イウサール"
      ],
      "notes": "元レシピ: 立中K>前ステ>弱スパイク>ODミキサー>前中P>弱サイクロンネイル\n端限定の詐欺飛びルート。ダメージ・起き攻めとも良好",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_kDldjC2G2QE_04",
    "title": "イウサールコンボ8選 #4",
    "starter": "イウサール",
    "hitState": "通常",
    "position": "どこでも",
    "priority": "あまり使わない",
    "youtubeId": "kDldjC2G2QE",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 129,
    "patchVersion": "Y3後期",
    "root": {
      "id": "n_ax_kDldjC2G2QE_04_r",
      "segment": "66 > 溜めODワール > 5MK > 214HK > 6KK > j.MK",
      "damage": 3505,
      "enderClassId": null,
      "situationTags": [
        "イウサール"
      ],
      "notes": "元レシピ: 前ステ>溜めODワール>立中K>大スパイク>フリップ>J中K\nフリップを絡めた詐欺飛び。受け身方向で見づらいが、位置が入れ替わるリスクもある。フリップを前大Kにすると持続中段",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_kDldjC2G2QE_05",
    "title": "イウサールコンボ8選 #5",
    "starter": "イウサール",
    "hitState": "通常",
    "position": "中央",
    "priority": "あまり使わない",
    "youtubeId": "kDldjC2G2QE",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 158,
    "patchVersion": "Y3後期",
    "root": {
      "id": "n_ax_kDldjC2G2QE_05_r",
      "segment": "66 > 溜めODワール > 大サイクロン転がり > 6MP > 214LP>6K>K",
      "damage": 2965,
      "enderClassId": "ec_weak_nail",
      "situationTags": [
        "イウサール"
      ],
      "notes": "元レシピ: 前ステ>溜めODワール>大サイクロン転がり>前中P>弱サイクロンネイル\n画面7割ほど運んで詐欺飛びへ。火力は控えめで手が忙しい",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_kDldjC2G2QE_07",
    "title": "イウサールコンボ8選 #7",
    "starter": "イウサール",
    "hitState": "通常",
    "position": "どこでも",
    "priority": "ときどき",
    "youtubeId": "kDldjC2G2QE",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 207,
    "patchVersion": "Y3後期",
    "root": {
      "id": "n_ax_kDldjC2G2QE_07_r",
      "segment": "前飛び > j.214HK > j.2HP > 6HP",
      "damage": 2605,
      "enderClassId": null,
      "situationTags": [
        "イウサール"
      ],
      "notes": "元レシピ: 前飛び>大スカイハイ>J2大P>中段\nノーゲージ入れ替えで持続中段。大スカイハイはかなり遅め。中段がばれたら前ステ投げや前ステ小足",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_i4vx0nMzQqw_01",
    "title": "もにょもにょ6選 #1",
    "starter": "5MP",
    "hitState": "通常",
    "position": "端",
    "priority": "よく使う",
    "youtubeId": "i4vx0nMzQqw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 43,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_i4vx0nMzQqw_01_r",
      "segment": "中大TC > 236LP > 6MP > 214LP>4K",
      "damage": 1847,
      "enderClassId": "ec_weak_stroke",
      "situationTags": [],
      "notes": "元レシピ: 中大TC>弱ミキサー>前中P>弱サイクロンストローク\n定番中の定番。前中P>弱サイクのキャンセルが短く、ストロークを伸ばす部分は体感",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_i4vx0nMzQqw_02",
    "title": "もにょもにょ6選 #2",
    "starter": "DR",
    "hitState": "通常",
    "position": "端",
    "priority": "ときどき",
    "youtubeId": "i4vx0nMzQqw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 78,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_i4vx0nMzQqw_02_r",
      "segment": "DR > 2LP > 5MK > 中大TC > 214MP > 6MP > 236LP > 6MP > 214LP>4K",
      "enderClassId": "ec_weak_stroke",
      "situationTags": [],
      "notes": "元レシピ: ラッシュコパ>立中K>中大TC>中サイクロン>前中P>弱ミキサー>前中P>弱サイクロンストローク\n元祖もにょコン。TC>微溜めワール>前中P>弱サイクロンネイルにするとDゲージ3.5本以上からSAゲージ1本溜まる。スタン後にも",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_i4vx0nMzQqw_03",
    "title": "もにょもにょ6選 #3",
    "starter": "5MP",
    "hitState": "通常",
    "position": "中央",
    "priority": "ときどき",
    "youtubeId": "i4vx0nMzQqw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 129,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_i4vx0nMzQqw_03_r",
      "segment": "中大TC > 236MK > DR > 5HP > 236LP > 6MP > 214LP>4K",
      "damage": 1740,
      "enderClassId": "ec_weak_stroke",
      "situationTags": [],
      "notes": "元レシピ: 中大TC>中ワール>ラッシュ大P>弱ミキサー>前中P>弱サイクロンストローク\n画面中央より少し先の距離から狙える",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_i4vx0nMzQqw_04",
    "title": "もにょもにょ6選 #4",
    "starter": "5HP",
    "hitState": "通常",
    "position": "端",
    "priority": "あまり使わない",
    "youtubeId": "i4vx0nMzQqw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 152,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_i4vx0nMzQqw_04_r",
      "segment": "5HP > 214PP > 236PP > j.214LK > j.2HP > 6MP > 214LP>4K",
      "enderClassId": "ec_weak_stroke",
      "situationTags": [],
      "notes": "元レシピ: 大P>ODサイクロン>ODミキサー>弱スカイハイ>J2強P>前中P>弱サイクロンストローク\n難度が極めて高く、実戦で狙わなくてよい。字幕は「低空J2強P」。ブログは低空J2強Pの後に弱ミキサーが入る",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_i4vx0nMzQqw_05",
    "title": "もにょもにょ6選 #5",
    "starter": "インパクト",
    "hitState": "通常",
    "position": "どこでも",
    "priority": "ときどき",
    "youtubeId": "i4vx0nMzQqw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 175,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_i4vx0nMzQqw_05_r",
      "segment": "66 > 66 > 中大TC > 214PP > 6MP > 214LK > 6MP > 214LP>4K",
      "damage": 2530,
      "enderClassId": "ec_weak_stroke",
      "situationTags": [
        "インパクト"
      ],
      "notes": "元レシピ: 前ステ2回>中大TC>ODサイクロン>前中P>弱スパイク>前中P>弱サイクロンストローク\nインパクトPC始動。表は前ステ前ステ、裏はフリップで画面どこからでも端へ",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_-p3ajb0VlQY_02",
    "title": "実用コンボ18選 #2",
    "starter": "2MP",
    "hitState": "通常",
    "position": "中央",
    "priority": "よく使う",
    "youtubeId": "-p3ajb0VlQY",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 49,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_-p3ajb0VlQY_02_r",
      "segment": "2MP > 5LK > CR > 5LP > 5MK > 5MP > 214MK",
      "enderClassId": "ec_mid_eagle",
      "situationTags": [],
      "notes": "元レシピ: 2中P>弱K>キャンセルラッシュ立弱P>立中K>中P>中スパイク\n運びと暴れ潰し。Dゲージ5本以上で狙う",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_-p3ajb0VlQY_03",
    "title": "実用コンボ18選 #3",
    "starter": "j.HK",
    "hitState": "通常",
    "position": "中央",
    "priority": "ときどき",
    "youtubeId": "-p3ajb0VlQY",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 64,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_-p3ajb0VlQY_03_r",
      "segment": "飛び > 5MP > 214PP > 6MP > 214LK",
      "damage": 2570,
      "enderClassId": "ec_weak_eagle",
      "situationTags": [],
      "notes": "元レシピ: 飛び>中P>ODサイクロン>前中P>弱スパイク\n運び・起き攻めとも良い。前ステ2回で+5F、前ステ中段で持続中段、密着+5Fで垂直ジャンプ、端では詐欺飛び可",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_-p3ajb0VlQY_06",
    "title": "実用コンボ18選 #6",
    "starter": "DR",
    "hitState": "通常",
    "position": "中央",
    "priority": "ときどき",
    "youtubeId": "-p3ajb0VlQY",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 128,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_-p3ajb0VlQY_06_r",
      "segment": "DR > 6HP > 5MP > 214MK",
      "damage": 2440,
      "enderClassId": "ec_mid_eagle",
      "situationTags": [],
      "notes": "元レシピ: ラッシュ6大P>中P>中スパイク\nラッシュからの中段",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_-p3ajb0VlQY_07",
    "title": "実用コンボ18選 #7",
    "starter": "DR",
    "hitState": "通常",
    "position": "中央",
    "priority": "ときどき",
    "youtubeId": "-p3ajb0VlQY",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 143,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_-p3ajb0VlQY_07_r",
      "segment": "DR > 6HK > 5MP > 214MK",
      "damage": 2290,
      "enderClassId": "ec_mid_eagle",
      "situationTags": [],
      "notes": "元レシピ: ラッシュ6大K>中P>中スパイク\n画面6割ほど移動する。JP戦や、ラッシュ弱Pを嫌がって距離を離す相手に",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_-p3ajb0VlQY_09",
    "title": "実用コンボ18選 #9",
    "starter": "その他",
    "hitState": "通常",
    "position": "中央",
    "priority": "あまり使わない",
    "youtubeId": "-p3ajb0VlQY",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 180,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_-p3ajb0VlQY_09_r",
      "segment": "始動技 > 5MP or 5HP > CR > 2HP > 5HP > 214MK",
      "damage": 2544,
      "enderClassId": "ec_mid_eagle",
      "situationTags": [],
      "notes": "元レシピ: 始動技>中Pか大P>キャンセルラッシュ2大P>大P>中スパイク\nダメージ補強用。Dゲージ6本以外ではあまり使わない。リーサルは大P>SA1",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_-p3ajb0VlQY_10",
    "title": "実用コンボ18選 #10",
    "starter": "5LP",
    "hitState": "通常",
    "position": "中央",
    "priority": "ときどき",
    "youtubeId": "-p3ajb0VlQY",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 203,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_-p3ajb0VlQY_10_r",
      "segment": "5LP > 2LP > 5LP > 236MP",
      "damage": 1050,
      "enderClassId": "ec_mid_mixer",
      "situationTags": [],
      "notes": "元レシピ: 弱P>2弱P>弱P>中ミキサー\n字幕は「コパ>しゃがこぱ>コパ>中ミキ」。主に大サイクロンを通した時に使う",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_-p3ajb0VlQY_11",
    "title": "実用コンボ18選 #11",
    "starter": "2MP",
    "hitState": "通常",
    "position": "端",
    "priority": "よく使う",
    "youtubeId": "-p3ajb0VlQY",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 248,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_-p3ajb0VlQY_11_r",
      "segment": "2MP > 5MP > 214MP > 5LK > 214LK",
      "enderClassId": "ec_weak_eagle",
      "situationTags": [],
      "notes": "元レシピ: 2中P>中P>中サイクロン>弱K>弱スパイク\nノーゲージで3000近い。弱スパイクで端コンボを締めた後の持続2中Pから使う",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_-p3ajb0VlQY_12",
    "title": "実用コンボ18選 #12",
    "starter": "5LK",
    "hitState": "通常",
    "position": "端",
    "priority": "ときどき",
    "youtubeId": "-p3ajb0VlQY",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 278,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_-p3ajb0VlQY_12_r",
      "segment": "5LK > CR > 5LP > 5MK > 中大TC > 214HK",
      "enderClassId": "ec_strong_eagle",
      "situationTags": [],
      "notes": "元レシピ: 弱K>キャンセルラッシュ立弱P>立中K>中大TC>大スパイク\n11の弱Kから起き攻め状況を重視する時に。字幕は「キャンセルラッシュ立P」",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_-p3ajb0VlQY_13",
    "title": "実用コンボ18選 #13",
    "starter": "5MP",
    "hitState": "通常",
    "position": "端",
    "priority": "よく使う",
    "youtubeId": "-p3ajb0VlQY",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 299,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_-p3ajb0VlQY_13_r",
      "segment": "中大TC > 236LP > 6MP > 214LP>4K > j.HK",
      "enderClassId": "ec_weak_stroke",
      "situationTags": [],
      "notes": "元レシピ: 中大TC>弱ミキサー>前中P>弱サイクロンストローク>J大K\n端でラッシュが入った時など。難易度が高いので12のTC>大スパイクでもよい",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_-p3ajb0VlQY_15",
    "title": "実用コンボ18選 #15",
    "starter": "インパクト",
    "hitState": "通常",
    "position": "どこでも",
    "priority": "ときどき",
    "youtubeId": "-p3ajb0VlQY",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 381,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_-p3ajb0VlQY_15_r",
      "segment": "66 > 66 > 中大TC > 214PP > 6MP > 214LK > 6MP > 214LP>6K>K",
      "enderClassId": "ec_weak_nail",
      "situationTags": [
        "インパクト"
      ],
      "notes": "元レシピ: 前ステ2回>中大TC>ODサイクロン>前中P>弱スパイク>前中P>弱サイクロンネイル\n画面どこからでも端へ運べる。めくりたい時はフリップから同じルート",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_-p3ajb0VlQY_17",
    "title": "実用コンボ18選 #17",
    "starter": "スタン",
    "hitState": "通常",
    "position": "どこでも",
    "priority": "ときどき",
    "youtubeId": "-p3ajb0VlQY",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 417,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_-p3ajb0VlQY_17_r",
      "segment": "j.2HP > j.HK > 5MK > 中大TC > 214HK",
      "damage": 2560,
      "enderClassId": "ec_strong_eagle",
      "situationTags": [
        "スタン"
      ],
      "notes": "元レシピ: J2強P>J大K>立中K>中大TC>大スパイク\nDゲージ3本以上あれば立中Kから弱K>キャンセルラッシュで伸ばせて、ほぼSAゲージ1本溜まる",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  },
  {
    "id": "ax_-p3ajb0VlQY_18",
    "title": "実用コンボ18選 #18",
    "starter": "スタン",
    "hitState": "通常",
    "position": "どこでも",
    "priority": "ときどき",
    "youtubeId": "-p3ajb0VlQY",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "visibility": "public",
    "startSec": 442,
    "patchVersion": "Y3",
    "root": {
      "id": "n_ax_-p3ajb0VlQY_18_r",
      "segment": "236K(最大溜め) > 236PP > j.214KK > 6MP > 214PP > 236236K",
      "enderClassId": "ec_sa1",
      "situationTags": [
        "スタン"
      ],
      "notes": "元レシピ: 溜めワール>気流ODミキサー>ODスカイハイ>前中P>ODサイクロン>SA1\n1ゲージでリーサルの時。字幕では「大体4000程」。Dゲージの都合で最後のODサイクロンを省くなら中ミキサー>SA1。ブログはODサイクロンの後に強化弱ミキサーが入る",
      "votes": {
        "good": 0,
        "bad": 0,
        "brokenInCurrentVer": 0
      }
    }
  }
];

export const ARCHIVER_OKIZEME_SETUPS: OkizemeSetup[] = [
  {
    "id": "ax_JIb3eHU9_xI_01",
    "enderClassId": "ec_sa3_iusal",
    "title": "どこでも SA3後 #1",
    "position": "どこでも",
    "inputs": "DR > 2LP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: SA3>ラッシュコパ\nSA3（アルタイル）の演出が終わった後にラッシュしゃがコパを重ねるだけ。よほど発生の早いSAでなければ大抵安全重ねになる。難易度も低くオススメ",
    "youtubeId": "JIb3eHU9_xI",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 0,
    "sourceTitle": "アルタイル後の安全ラッシュ重ね",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_YcXT-v20Qto_01",
        "section": "どこでも",
        "youtubeId": "YcXT-v20Qto",
        "startSec": 3,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "9F安全重ねでSAを釣る",
        "notes": "元レシピ: SA3>ラッシュコパ\nSA3の後はラッシュコパを重ねると9F詐欺（発生9F以上の技を詐欺れる重ね）ができ、SAの発生が遅いキャラにとても便利。反応が早い人やモダンはかなり釣りやすい。釣ったら最大コンボまで考えておくと完璧。この知識があれば初手のラッシュを自信を持って重ねにいけ、そのまま端に運んで勝ちという場面も多い"
      },
      {
        "id": "ax_X1NNeM8uvfU_01",
        "section": "どこでも",
        "youtubeId": "X1NNeM8uvfU",
        "startSec": 0,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "アルタイル（SA3）後の安全ラッシュ",
        "notes": "元レシピ: SA3>ラッシュコパ\nSA3後のラッシュしゃがコパは8F詐欺。7Fより早いSA3には割り込まれる（豪鬼のSA3は7F）。各キャラのSA1・SA2は発生9Fか8Fが多く、かなりの率で詐欺れる。ラッシュを見てからOD無敵を打つ人には打ちにくいが、相手がバーンアウトで3ゲージ持っていない状況ではやり得。途中の連携はパナされたら負けるが、初手のラッシュは安全"
      }
    ]
  },
  {
    "id": "ax_Rxqg2tj5C5A_01",
    "enderClassId": "ec_sweep_pc",
    "title": "どこでも 大足後 #1",
    "position": "どこでも",
    "inputs": "2MP(空) > 66 > 2MP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大足>2中P空振り>前ステ>2中P持続当て\n大足パニッシュカウンターの後。持続当てで、とりあえずこれがベースになりそう。ガード時は+3F",
    "youtubeId": "Rxqg2tj5C5A",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 3,
    "sourceTitle": "大足パニカン時のセットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Rxqg2tj5C5A_02",
    "enderClassId": "ec_sweep_pc",
    "title": "どこでも 大足後 #2",
    "position": "どこでも",
    "inputs": "2LP(空) > 2LP(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大足>コパ空振り>コパ空振り>中段持続当て\n大足パニッシュカウンターの後。持続中段",
    "youtubeId": "Rxqg2tj5C5A",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 21,
    "sourceTitle": "大足パニカン時のセットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Rxqg2tj5C5A_03",
    "enderClassId": "ec_sweep_pc",
    "title": "どこでも 大足後 #3",
    "position": "どこでも",
    "inputs": "2LP(空) > 2LP(空) > 66 > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 大足>コパ空振り>コパ空振り>前ステ>投げ\n大足パニッシュカウンターの後。5F投げ（シミーはできない）",
    "youtubeId": "Rxqg2tj5C5A",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 31,
    "sourceTitle": "大足パニカン時のセットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Rxqg2tj5C5A_04",
    "enderClassId": "ec_sweep_pc",
    "title": "どこでも 大足後 #4",
    "position": "どこでも",
    "inputs": "前飛び > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 大足>前飛び>投げ\n大足パニッシュカウンターの後、前ジャンプ>投げ。距離によっては入れ替えて4F有利。ラシードに限ったことではないが有能",
    "youtubeId": "Rxqg2tj5C5A",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 38,
    "sourceTitle": "大足パニカン時のセットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Rxqg2tj5C5A_05",
    "enderClassId": "ec_sweep_pc",
    "title": "どこでも 大足後 #5",
    "position": "どこでも",
    "inputs": "5MK(空) > 66",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大足>立中K空振り>前ステ\n大足パニッシュカウンターの後。五分の起き攻めで、バーンアウトの相手に有効。パリィで上書きできる",
    "youtubeId": "Rxqg2tj5C5A",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 45,
    "sourceTitle": "大足パニカン時のセットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Rxqg2tj5C5A_06",
    "enderClassId": "ec_sweep_pc",
    "title": "どこでも 大足後 #6",
    "position": "どこでも",
    "inputs": "2LK(空) > 6KK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大足>小足空振り>フリップ\n大足パニッシュカウンターの後。入れ替えて五分。さすがにマニアックなので覚えなくて良さそう",
    "youtubeId": "Rxqg2tj5C5A",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 59,
    "sourceTitle": "大足パニカン時のセットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Rxqg2tj5C5A_07",
    "enderClassId": "ec_sweep_pc",
    "title": "どこでも 大足後 #7",
    "position": "どこでも",
    "inputs": "6KK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大足>フリップ\n大足パニッシュカウンターの後。入れ替えて+15F有利。ここから持続当て系を狙えないのが残念",
    "youtubeId": "Rxqg2tj5C5A",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 66,
    "sourceTitle": "大足パニカン時のセットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Rxqg2tj5C5A_08",
    "enderClassId": "ec_sweep_pc",
    "title": "どこでも 大足後 #8",
    "position": "どこでも",
    "inputs": "2LP(空) > 6KK > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 大足>コパ空振り>フリップ>投げ\n大足パニッシュカウンターの後。コパン>フリップで入れ替えて+1F。やる必要ある？感はあるが、入れ替えでガード方向を揺さぶってから投げると結構通りやすい",
    "youtubeId": "Rxqg2tj5C5A",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 73,
    "sourceTitle": "大足パニカン時のセットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_oZwsS2v5zF4_01",
    "enderClassId": "ec_weak_stroke",
    "title": "端 弱サイクロンストローク後 #1",
    "position": "端",
    "inputs": "前飛び",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 弱サイクロンストローク>前飛び\nもにょもにょの後に前ジャンプ。テリーやリュウなど、垂直では昇竜を避けられないキャラによく使う。遅らせグラップに勝てるのも良い。ガードされると位置が入れ替わるリスクがある",
    "youtubeId": "oZwsS2v5zF4",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 8,
    "sourceTitle": "端攻めの選択肢、ストローク前ジャンプ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_B3Fj9cv4qSA_01",
        "section": "端",
        "youtubeId": "B3Fj9cv4qSA",
        "startSec": 8,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "対春麗に有効！もにょもにょ前ジャンプ",
        "notes": "元レシピ: 弱サイクロンストローク>前飛び\n対春麗。無敵技のパナしをケアしつつ、当たったらコンボは落ち着いて。少し待ってから飛ぶことで端を維持できる（アドリブっぽく見えて再現性が高い）。テンペストパリィには注意。透かして下段で崩す場面もある"
      }
    ]
  },
  {
    "id": "ax_O_376eH9WTM_01",
    "enderClassId": "ec_mid_eagle",
    "title": "対JP 中スパイク後 #1",
    "inputs": "2MP > 236HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>2中P>大ワール\n大ワールを重ねる弾重ねで、JPのアムネジアへの簡易的な対策になる。ガードされても+5Fで投げ間合いと、普通に展開が強い。ヒット時も中Pがつながるので火力が高い（説明欄）。昇竜を持っていないキャラに狙いたいが、SA1のフォローで出すと姿勢で抜けてくるキャラも多いので注意",
    "youtubeId": "O_376eH9WTM",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 5,
    "sourceTitle": "ガードで+5F、弾重ねセットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_Lb6O2R2-qv8_19",
        "section": "どこでも",
        "youtubeId": "Lb6O2R2-qv8",
        "startSec": 645,
        "ownerLabel": "ばるぱ",
        "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
        "notes": "元レシピ: 中スパイク>2中P空振り>大ワール\n字幕は「しゃがみ中パンチ>強ワール」。ワールを重ねて有利を取れる。弾重ねなので一部SAに対しては安全に重ねられ、ガードでプラス、ヒットで特大リターン。珍しいセットプレイなので相手がボタンを押しやすい。見てからのOD無敵には注意"
      },
      {
        "id": "ax_qj-VYWDyCZc_01",
        "section": "どこでも",
        "youtubeId": "qj-VYWDyCZc",
        "startSec": 26,
        "ownerLabel": "イウサール(本人)",
        "sourceTitle": "最強の起き攻め（弾重ね）2選",
        "notes": "元レシピ: 中スパイク>2中P空振り>大ワール\n字幕は「中スパイク→屈中P→大ワール」。ワールの弾重ねで、SA1などの無敵技に強い。インパクトも返せる"
      }
    ]
  },
  {
    "id": "ax_7QFXmDfYoUU_01",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "溜めODワール 大スパイク後 #1",
    "inputs": "236LK(溜め) > 微後ろ歩き > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>溜め弱ワール>微後ろ歩き>中段持続当て\n最近とてもよく使う溜めODワールからの持続中段。溜めODワール>2中P>大スパイク>溜め弱ワール>微後ろ歩き>中段。微後ろ歩き（微後ろ下がり）で中段が持続で当たるように調整するのがポイント。画面の5割ほどを移動しながら持続中段を狙え、この距離から中段が来るとは予想しないのでよく当たる。Dゲージに余裕ができやすいスタン後が狙い目。Dゲージに余裕がある時はラッシュ下段や中段からも当たれば、リーサルを狙う時は積極的に狙いたい",
    "youtubeId": "7QFXmDfYoUU",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 2,
    "sourceTitle": "よく使うようになった持続中段択",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_kD6N170b1jQ_01",
        "section": "TC溜めODワール",
        "youtubeId": "kD6N170b1jQ",
        "startSec": 1,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "超リーチの持続中段、ODワールセットプレイ",
        "notes": "元レシピ: 大スパイク>溜め弱ワール>微後ろ歩き>中段持続当て\nTC>溜めODワール>中P>大スパイク>溜め弱ワール>微後ろ歩き中段。画面の5割ほどの距離を移動しながら持続中段を狙える。体感8割ほどは当たる。今のバージョンは中段が特に強い。中段が通ればリーサルにいける場面で特に有効。Dゲージに余裕があるバーンアウトの相手に狙いやすい"
      },
      {
        "id": "ax_GfiAyBbRi_A_03",
        "section": "端",
        "youtubeId": "GfiAyBbRi_A",
        "startSec": 101,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "アプデ後の新コンボ・セットプレイ14選",
        "notes": "元レシピ: 大スパイク>溜め弱ワール>微後ろ歩き>中段持続当て\nTC>溜めODワール>中P>大スパイク>溜め弱ワール>微後ろ歩き中段。5割ほどの距離を移動しながら持続中段を狙える。体感8割ほど当たる。今のバージョンは中段が特に強い"
      }
    ]
  },
  {
    "id": "ax_qeCOTUxzFwU_01",
    "enderClassId": "ec_mid_mixer",
    "title": "端 中ミキサー後 #1",
    "position": "端",
    "inputs": "214HP>4K > j.HP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中ミキサー>大サイクロンストローク>J大P\n中ミキサー〆の後に大サイクロンを重ね、ストローク派生J大Pまで4F技で割り込まれない連携。投げは食らうが、打撃で確定を取ろうとする相手にはサイクロン部分が当たる。ジャスパされた後の状況はややこしく、生き延びることもある。セットプレイ自体は簡単",
    "youtubeId": "qeCOTUxzFwU",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 0,
    "sourceTitle": "中ミキサー＞大サイクロンセットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_-49BdkJoS5o_01",
    "enderClassId": "ec_strong_mixer_ground",
    "title": "どこでも 大ミキサー後 #1",
    "position": "どこでも",
    "inputs": "5MK > 2MP > 5MP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大ミキサー>立中K>2中P>中P\n地上ヒット（小足>コパン>大ミキサーなど）。空中で大ミキサーを当てたとき（大P>大サイクロン>大ミキサーなど）は強いセットプレイがあるが、地上ヒットではほぼ無い。胡散臭いものとして、立中K消費で投げ間合いの外でしゃがめる（投げは埋まらないので、様子見したい場合のみ有効）。遅らせグラップに2中P>中Pが当たる間合い。常に使う択ではないが、たまに混ぜてよい",
    "youtubeId": "-49BdkJoS5o",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 6,
    "sourceTitle": "地上大ミキサー後のセットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_B7GqchUdv3Y_01",
    "enderClassId": "ec_mid_eagle",
    "title": "中央 中スパイク後 #1",
    "position": "中央",
    "inputs": "66 > 5LK > 6HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>前ステ>弱K>6大K\n中スパイクが端まで届かなかった時。6大Kが持続当てで、アプデ強化により中Pが繋がる。ガード後は五分。両受け身対応",
    "youtubeId": "B7GqchUdv3Y",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 45,
    "sourceTitle": "セットプレイ10選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_Lb6O2R2-qv8_07",
        "section": "どこでも",
        "youtubeId": "Lb6O2R2-qv8",
        "startSec": 214,
        "ownerLabel": "ばるぱ",
        "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
        "notes": "元レシピ: 中スパイク>前ステ>弱K空振り>6大K持続当て\n字幕は「前ステ>立ち弱キック>前強キック」。最近ラシード使いで話題の、前強Kを持続で重ねるセットプレイ。ガードで±0で、強攻撃なのでドライブゲージをかなり削れる（詳しくは doskonnbu さんの動画）"
      },
      {
        "id": "ax_CKAcVBG_X4w_01",
        "section": "中央",
        "youtubeId": "CKAcVBG_X4w",
        "startSec": 7,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "中スパイク：持続6大Kセットプレイ",
        "notes": "元レシピ: 中スパイク>前ステ>弱K空振り>6大K持続当て\n中スパイク後に前ステ>立弱K>6大K。ガードで五分、ヒットで+5F。分かっている相手はガード後に4Fで打ち返してくるが、大攻撃を当てて五分を作れるのが良い所。単発でDゲージを大きく削れ、2中P>弱Kと2発刻むより削れる。打撃を刻むとパリィがうざく、1F有利の状況でのジャスパは一生狙われる（起き上がりのジャスパは相手のリスクも大きく、案外されない）。起き上がりに中P・2中Pといった有利打撃を当てず、単発技でDゲージを削っていく"
      }
    ]
  },
  {
    "id": "ax_B7GqchUdv3Y_02",
    "enderClassId": "ec_weak_eagle",
    "title": "端 弱スパイク後 #2",
    "position": "端",
    "inputs": "2MP > 2MP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 弱スパイク>2中P>2中P持続当て\nヒット時は中Pに繋げて各種コンボへ。ガード時は持続当ての有利Fで歩き投げ、中Pから大サイクロン、ちょい下がり大P、中足から微溜めワール等。ヒット確認必須",
    "youtubeId": "B7GqchUdv3Y",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 94,
    "sourceTitle": "セットプレイ10選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_nuqU12ysc7k_01",
        "section": "中央",
        "youtubeId": "nuqU12ysc7k",
        "startSec": 8,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "弱スパイク後の起き攻め3選",
        "notes": "元レシピ: 弱スパイク>2中P>2中P持続当て\n最も使うセットプレイ。弱スパイク後に迷ったらこれ。その後のヒット確認も重要で、ヒット時はコンボ、ガード時は攻め継続の流れを身に着ける。基本は持続2中Pがとても強いので、ここをベースに他のセットプレイを組み立てる"
      },
      {
        "id": "ax_xOZTyewt8Rw_01",
        "section": "どこでも",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 27,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 弱スパイク>2中P空振り>2中P持続当て\nド定番。簡単にして最強なので必ずやる"
      },
      {
        "id": "ax_RUcGCfDJvdQ_01",
        "section": "端",
        "youtubeId": "RUcGCfDJvdQ",
        "startSec": 82,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "セットプレイ10選（Y3）",
        "notes": "元レシピ: 弱スパイク>2中P>2中P持続当て\nラシードの火力の要で絶対に習得推奨。ヒット時は中Pからコンボ、ガード時は歩き投げ。暴れ潰しの中Pをカウンター確認して中足>弱スパイクまで繋げるとなお良い（最初は2中P>中Pまで入れ込みで十分）。2中P>中P>中足>大サイクロン、中足を大ワールにして有利F継続も強い"
      },
      {
        "id": "ax_K7-u1zEnYH0_08",
        "section": "どこでも",
        "youtubeId": "K7-u1zEnYH0",
        "startSec": 657,
        "ownerLabel": "つのちゃんねる",
        "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
        "notes": "元レシピ: 弱スパイク>2中P空振り>2中P持続当て\n字幕は「弱スパイク→2中P×2（持続ヒット+7F）」。中スパイク〆（2中P×3）とほぼ同じで覚えやすい"
      }
    ]
  },
  {
    "id": "ax_B7GqchUdv3Y_04",
    "enderClassId": "ec_weak_eagle",
    "title": "端 弱スパイク後 #4",
    "position": "端",
    "inputs": "2MK > LPLK or シミー",
    "vsWakeup": {},
    "flags": {
      "low": true,
      "throw": true
    },
    "notes": "元レシピ: 弱スパイク>中足>投げORシミー\n5F有利ではないがシミー可能。中足消費でシミーとバレないように",
    "youtubeId": "B7GqchUdv3Y",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 152,
    "sourceTitle": "セットプレイ10選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_B7GqchUdv3Y_06",
    "enderClassId": "ec_mid_eagle",
    "title": "端 中スパイク後 #6",
    "position": "端",
    "inputs": "6HP > 2MP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 中スパイク>中段>2中P持続当て\n打撃択メインの時。中段でフレーム消費しつつ画面を押し込める",
    "youtubeId": "B7GqchUdv3Y",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 216,
    "sourceTitle": "セットプレイ10選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_B7GqchUdv3Y_08",
    "enderClassId": "ec_strong_eagle",
    "title": "端 大スパイク後 #8",
    "position": "端",
    "inputs": "2LP > j.HK",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 大スパイク>コパ>J大K\n詐欺飛び。主に相手の切り返しをガードした時の反撃で使用。大スパイクは運ぶので中央付近からでも狙える",
    "youtubeId": "B7GqchUdv3Y",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 309,
    "sourceTitle": "セットプレイ10選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_K7-u1zEnYH0_14",
        "section": "どこでも",
        "youtubeId": "K7-u1zEnYH0",
        "startSec": 698,
        "ownerLabel": "つのちゃんねる",
        "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
        "notes": "元レシピ: 大スパイク>2弱P空振り>J大K\n字幕は「強スパイク→2弱P→J強K（詐欺飛び）」。J大Kが詐欺飛び。強スパイク〆はシミーの後などに出る。作者は大体これ"
      }
    ]
  },
  {
    "id": "ax_B7GqchUdv3Y_09",
    "enderClassId": "ec_strong_eagle",
    "title": "中央 大スパイク後 #9",
    "position": "中央",
    "inputs": "66>6P > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 大スパイク>スライディング>投げ\n端まで届かなかった時のとりまセット。4F有利。大スパイクは有利Fが長く体感で投げを埋めにいかないこと",
    "youtubeId": "B7GqchUdv3Y",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 323,
    "sourceTitle": "セットプレイ10選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_xOZTyewt8Rw_18",
        "section": "どこでも",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 172,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 大スパイク>スライディング>投げ\nスラ>投げで+4F。中央でもいける択は貴重"
      },
      {
        "id": "ax_K7-u1zEnYH0_15",
        "section": "どこでも",
        "youtubeId": "K7-u1zEnYH0",
        "startSec": 707,
        "ownerLabel": "つのちゃんねる",
        "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
        "notes": "元レシピ: 大スパイク>スライディング>投げ\n字幕は「強スパイク→ラン→スラ派生（+4F）」。安全に投げられる。その場受け身にはシミーできない"
      }
    ]
  },
  {
    "id": "ax_B7GqchUdv3Y_10",
    "enderClassId": "ec_strong_mixer",
    "title": "端 大ミキサー後 #10",
    "position": "端",
    "inputs": "2MK or 5MK > LPLK or 2MP",
    "vsWakeup": {},
    "flags": {
      "low": true,
      "throw": true
    },
    "notes": "元レシピ: 大ミキサー>中足OR中K>投げOR2中P\n主に端で大P>大サイクロンを当てた後のコンボ後に使用。中足消費で持続2中P、立中K消費で4,5F有利の投げ択（シミー不可）。地上ヒット時は有利Fが変わり、良いレシピが無い",
    "youtubeId": "B7GqchUdv3Y",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 351,
    "sourceTitle": "セットプレイ10選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_vZqNkMs5WbE_01",
    "enderClassId": "ec_mid_eagle",
    "title": "対ザンギエフ 中スパイク後 #1",
    "inputs": "6KK > 66>6K",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>フリップ>テンペスト\n対ザンギエフ。中スパイク>フリップ>テンペストと打つことでザンギのSA3を回避できる。SA2・SA1・投げ抜け・小足暴れの全ての択に勝てるのが素晴らしい",
    "youtubeId": "vZqNkMs5WbE",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 7,
    "sourceTitle": "対ザンギ専用起き攻め",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_H88DF4poxpA_01",
    "enderClassId": "ec_weak_stroke",
    "title": "端 弱サイクロンストローク後 #1",
    "position": "端",
    "inputs": "垂直J",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 弱サイクロンストローク>垂直\nもにょもにょは強い起き攻めだが、遅らせグラップにはリスクを負わせづらく、シミーも狙いにくい。そんなときは垂直から最大コンボで一気にリーサル。特にOD昇竜を垂直で避けられるキャラに使う",
    "youtubeId": "H88DF4poxpA",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 0,
    "sourceTitle": "もにょもにょ垂直一閃",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_MFVKreBMfkg_04",
        "section": "端",
        "youtubeId": "MFVKreBMfkg",
        "startSec": 73,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "もにょもにょ後の攻め方",
        "notes": "元レシピ: 弱サイクロンストローク>垂直\n垂直でもよい。垂直でOD昇竜を透かせるキャラによく使う"
      }
    ]
  },
  {
    "id": "ax_7TaY4BGdE9o_01",
    "enderClassId": "ec_strong_skyhigh_pickup",
    "title": "気流ODミキサー 大スカイハイ後 #1",
    "inputs": "j.MP > LPLK(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スカイハイ>J中P>投げ消費>中段持続当て\n気流ODミキサー始動。ODミキサー後に大スカイハイJ>中P>着地>投げ>中段とすることで持続中段になる。物理的にラシードが画面にいる時間が短く、とても見づらいのでよく当たる",
    "youtubeId": "7TaY4BGdE9o",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 12,
    "sourceTitle": "めっちゃ当たるよ！オススメ持続中段ルート",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_xOZTyewt8Rw_56",
        "section": "気流ODミキサー",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 523,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 大スカイハイ>J中P>投げ消費>中段持続当て\n気流ODミキサー>強スカイハイ>J中P>投げ>中段。作者の経験上、異常なヒット率を誇る持続中段。ラシードが画面外でフレーム消費しているのが良い意味でアホ"
      },
      {
        "id": "ax_RUcGCfDJvdQ_10",
        "section": "端",
        "youtubeId": "RUcGCfDJvdQ",
        "startSec": 485,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "セットプレイ10選（Y3）",
        "notes": "元レシピ: 大スカイハイ>J中P>投げ消費>中段持続当て\nとても見づらい持続中段。着地に最速で投げ消費しないと持続にならず、難易度は高め。安定しない場合は9がオススメ"
      },
      {
        "id": "ax_WkuFofkpLlU_03",
        "section": "中央",
        "youtubeId": "WkuFofkpLlU",
        "startSec": 176,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "気流ODミキサー後の展開について",
        "notes": "元レシピ: 大スカイハイ>J中P>投げ消費>中段持続当て\n気流ODミキサー>大スカイハイ（J中P派生）の後。通称シフト式中段。カメラが上を映すので相手からラシードの動きがとても見づらく、作者の経験上一番当たりやすい持続中段。ただし自分もラシードの着地が分かりにくく、投げ消費（フレーム消費）は難しい。作者が最もよく使うレシピ。MR1800以上にオススメ"
      }
    ]
  },
  {
    "id": "ax_gHEkaffg4TE_01",
    "enderClassId": "ec_mid_eagle",
    "title": "対キャミィ 中スパイク後 #1",
    "inputs": "2MK(空) > 後J",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>中足空振り>バックジャンプ\n対キャミィ。中スパイク後に中足>バックジャンプ。ほぼ全ての逆択に対処できる。低空ストライクもJ大Kで簡単に迎撃でき、コンボも高い（割と簡単なコンボで4000ほど減り、リーサル判断もしやすい）。ODも同様。垂直ジャンプだとキャミィのSA1に確定を入れるのは難しいが、バックジャンプなら容易で、ラッシュで追いかけることもできる。SA3も逃さない。普通に対空されたら負けるが、相手目線ではかなり難しい行動。シミー2中Pでも良さそうだが、バックジャンプは相手の行動を確認せずに最大を取りやすいのが簡単で良い。味変程度に使っても良さそう",
    "youtubeId": "gHEkaffg4TE",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 0,
    "sourceTitle": "対キャミィ起き攻め方法",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_jsIxsz5w5J0_01",
    "enderClassId": "ec_mid_eagle_whirl",
    "title": "溜めODワール 中スパイク後 #1",
    "inputs": "236LK(溜め) > 微後ろ歩き > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 中スパイク>溜め弱ワール>微後ろ歩き>中段持続当て\n溜めODワール>2中P>中スパイク>溜め小ワール>微後ろ歩き中段。本当によく当たるのでオススメ（実戦で何度も当てている）",
    "youtubeId": "jsIxsz5w5J0",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 0,
    "sourceTitle": "この持続中段が一番当たると思います",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_ILwX8ohu_44_01",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #1",
    "inputs": "66 > 溜めODワール > 前転",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>前ステ>溜めODワール>前転\nTC>溜めODワール>前転>強スパイクの後。2回目のODワールが起き上がりに重なり、前転でガード時+4F（暴れに勝ちつつ、暴れられても確定が無い）。中攻撃での暴れ潰しもできる。さらに前転の後は気流が残っていて、気流強スパイクを振ると遅らせ投げ抜けにパニッシュカウンターで大ダメージ（相手の体力7割）。気流強スパイクは暴れやOD技に負けるが、OD無敵技は垂直ジャンプで避けられるので読み合える。2ゲージ使う。ODワールの部分が無敵技やDリバに返されるので（前転で避けられる無敵技もあるが相手で変わる）、相手のDゲージが少ない時などに狙う",
    "youtubeId": "ILwX8ohu_44",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 52,
    "sourceTitle": "ODワールの新要素を使ったセットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_m4ffEPE_HbI_01",
    "enderClassId": "ec_mid_eagle",
    "title": "中央 中スパイク後 #1",
    "position": "中央",
    "inputs": "6KK > 6HP",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 中スパイク>フリップ>中段\n視聴者のコメントで教わったレシピ。中央の中スパイク後は体感になりがちで（作者は大体ランから投げか2中P）、前ステ×2の持続2中P埋め（通称ビグバ式）は強いがとても難しい。ヒット時+3Fで、持続当てではないが起き上がりに打撃が埋まっているフレームなので、リバサ4F暴れに勝ち、リバサのバクステやバックジャンプも咎められる。中央の+3Fは割と神フレームで、バクステされてもリスクがほぼ無く、投げに強気にいけるうえ小足も2発確認できる（相手の投げが1F遅れると後退でき、実質シミーもできる。ヒット後の最速投げ暴れには負けるが、ランクマで投げられたことは無い）。中段を打たなくてもフリップ>前ステで+2F。ラシードの前ステ・中段とも飛びあがるので幻惑効果がかなりある。その場・後ろ受け身の両方に中段が当たる（フリップ>前ステ投げも両受け身対応）。ガード時も、以前は生中段ガード後-3Fで投げ間合いだったが、今は投げ間合いの外で、相手は基本打撃を打つしかない（さすがにこれは調整される気がする）。無理にジャスパを狙わなくてOKで、パリィを取ってDゲージを回復できるだけでも効果的。中段800と投げ1200で計2000減る。今のバージョンのラシードの中段はさすがに壊れを感じる",
    "youtubeId": "m4ffEPE_HbI",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 16,
    "sourceTitle": "中スパイク後の両受け身対応セットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_sy_HKzvhyYs_01",
    "enderClassId": "ec_mid_eagle",
    "title": "対アレックス 中スパイク後 #1",
    "inputs": "2LP(空) > j.HK",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 中スパイク>コパ空振り>J大K\n対アレックス。中スパイク後コパン>J大K。その場受け身・後ろ受け身のどちらにも飛びを重ねられ、全てのSAとリバサ昇竜をケアできる（詐欺飛び）。飛びを当てても投げ間合いの外なので、その後の攻め継続が少し難しいのが懸念点。それでも中央でできる起き攻めとしては汎用性が高い。端でも同じレシピでOK",
    "youtubeId": "sy_HKzvhyYs",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 0,
    "sourceTitle": "全SAケア！対アレックス起き攻めレシピ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_GfiAyBbRi_A_01",
    "enderClassId": "ec_strong_mixer",
    "title": "端 大ミキサー後 #1",
    "position": "端",
    "inputs": "5MK(空) > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 大ミキサー>立中K空振り>投げ\nTC>溜めODワール>小足>弱スパイク>弱ミキサー>大ミキサーの後、立中K消費で+5F投げ。端の鉄板コンボになりそうなレシピで、Dゲージに余裕があるスタン後に狙いやすい。ダメージ・SA増加量・Dゲージ燃費・起き攻め状況の全てに優れる。前回の調整から可能だったが、難易度の緩和で使いやすくなった",
    "youtubeId": "GfiAyBbRi_A",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 64,
    "sourceTitle": "アプデ後の新コンボ・セットプレイ14選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_RUcGCfDJvdQ_06",
        "section": "端",
        "youtubeId": "RUcGCfDJvdQ",
        "startSec": 392,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "セットプレイ10選（Y3）",
        "notes": "元レシピ: 大ミキサー>立中K>投げ\n4Fか5F重ねの投げ。シミー不可。始動技でフレームが細かく変わるので、大P>大ミキサー〆で見ている"
      }
    ]
  },
  {
    "id": "ax_GfiAyBbRi_A_02",
    "enderClassId": "ec_strong_mixer",
    "title": "端 大ミキサー後 #2",
    "position": "端",
    "inputs": "2MK(空) > 2MP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "low": true
    },
    "notes": "元レシピ: 大ミキサー>中足空振り>2中P持続当て\nTC>溜めODワール>小足>弱スパイク>弱ミキサー>大ミキサーの後、中足消費で持続2中P",
    "youtubeId": "GfiAyBbRi_A",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 90,
    "sourceTitle": "アプデ後の新コンボ・セットプレイ14選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_xOZTyewt8Rw_48",
        "section": "TC溜めODワール",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 431,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 大ミキサー>中足空振り>2中P持続当て\nTC>溜めODワール>弱スパイク>弱ミキサー>大ミキサー>中足>2中P。持続当てレシピ。難易度はそこそこだが、SAゲージ回収に優れる"
      },
      {
        "id": "ax_RUcGCfDJvdQ_07",
        "section": "端",
        "youtubeId": "RUcGCfDJvdQ",
        "startSec": 402,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "セットプレイ10選（Y3）",
        "notes": "元レシピ: 大ミキサー>中足>2中P持続当て\n投げの対となる打撃択。TC>ODサイクロン>テンペスト>大ミキサー〆（モダンに多い）は立中K消費だと+6Fで投げがスカるので、中足消費で持続中Pか投げの二択にする"
      }
    ]
  },
  {
    "id": "ax_GfiAyBbRi_A_04",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "端 大スパイク後 #4",
    "position": "端",
    "inputs": "214214K > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>イウサール>中段持続当て\nTC>OD溜めワール>コパコパ>大スパイク>イウサール>中段。いつものイウサール中段で、ODサイクロンの連携よりダメージが500ほど高いので実質上位レシピ。中段ヒット後は中ミキサー>中P>大P>弱ミキサー>大ミキサーがノーゲージでとても減る",
    "youtubeId": "GfiAyBbRi_A",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 142,
    "sourceTitle": "アプデ後の新コンボ・セットプレイ14選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_GfiAyBbRi_A_05",
    "enderClassId": "ec_mid_nail",
    "title": "端 中サイクロンネイル後 #5",
    "position": "端",
    "inputs": "飛び",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 中サイクロンネイル>飛び\n大K（パニッシュカウンター）>前中P>中サイクロンネイルの後、詐欺飛び。低めで当てるのがちょっとしたコツ。端付近のノーゲージ鉄板になりそう。シンプルが故に強い",
    "youtubeId": "GfiAyBbRi_A",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 265,
    "sourceTitle": "アプデ後の新コンボ・セットプレイ14選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_GfiAyBbRi_A_06",
    "enderClassId": "ec_od_eagle",
    "title": "どこでも ODスパイク後 #6",
    "position": "どこでも",
    "inputs": "2LP(空) > j.MK",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: ODスパイク>コパ空振り>J中K\n大K（パニッシュカウンター）>前中P>ODスパイク>コパ>J中K。2ゲージで入れ替えつつ詐欺飛びができる、ちょっと面白いレシピ。その場起きにはめくりになるが、かなり見づらい飛びになる。後ろ受け身には詐欺飛びで攻め込める",
    "youtubeId": "GfiAyBbRi_A",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 327,
    "sourceTitle": "アプデ後の新コンボ・セットプレイ14選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_V9vATykIkaY_01",
    "enderClassId": "ec_mid_eagle",
    "title": "中央 中スパイク後 #1",
    "position": "中央",
    "inputs": "6KK > DR > 5MK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>フリップ>ラッシュ>立中K\n+20Fからの生ラッシュ立中Kは、ガード時+3F・ヒット時+12F。ヒット時は立P>中スパイクで大体画面端に着くので端の起き攻めへ（SA2があればしゃがみ強P>SA2で火力高め）。ガード時は+3Fで投げ間合いなので、投げと2中Pで2択。ただし相手が立中Kをガードした後に下がっていると投げが空振るので、その下がりは小足・立P・中足・歩き投げなどで止める",
    "youtubeId": "V9vATykIkaY",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 59,
    "sourceTitle": "中央の起き攻め 新4shika式セットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_V9vATykIkaY_02",
    "enderClassId": "ec_mid_eagle",
    "title": "中央 中スパイク後 #2",
    "position": "中央",
    "inputs": "6KK > DR > 6KK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>フリップ>ラッシュ>フリップ\nフリップで相手の投げ抜けや無敵技などの暴れを避けつつ反撃する。投げ抜けは4F遅らせまでなら避けられ、避けたら最低でも7Fの技が確定する（立中P・立強P・中スパイクなどでかなりのダメージ）。パリィは見てから投げ、Dリバは裏に回ってから反撃（リバの後の距離にキャラ差があり、攻撃しないといけないキャラもいる）、無敵技にも反撃できる",
    "youtubeId": "V9vATykIkaY",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 144,
    "sourceTitle": "中央の起き攻め 新4shika式セットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_V9vATykIkaY_03",
    "enderClassId": "ec_mid_eagle",
    "title": "中央 中スパイク後 #3",
    "position": "中央",
    "inputs": "6KK > DR > 6HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>フリップ>ラッシュ>6大K\n前強Kは相手の起き上がりの7F目に当たる。最速の行動には弱いが、遅らせ行動やバックステップ・ジャンプからリターンを取れる。ジャンプは空中ヒットになるが、相手のジャンプが最速でないと追撃が空振ることがあるので、空中ヒットの時は素直にランから起き攻めへ。相手が動いていなければガードさせて+1Fなので、打撃と投げの2択",
    "youtubeId": "V9vATykIkaY",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 228,
    "sourceTitle": "中央の起き攻め 新4shika式セットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_V9vATykIkaY_04",
    "enderClassId": "ec_mid_eagle",
    "title": "中央 中スパイク後 #4",
    "position": "中央",
    "inputs": "6KK > DR > 5LP(空) > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 中スパイク>フリップ>ラッシュ>弱P空振り>投げ\n弱P空振りはラシード側が-5F。ダッシュに反応してボタンを押す人を咎められる。OD無敵技の発生は全キャラ6F以上なので、この-5Fの連携に確定しない。ラッシュの後に弱Pを振ることで動いた相手を釣り出せる。生ラッシュ>弱P空振り>遅らせ投げ、とする。-5Fなので最速投げや小技の暴れには確定をもらう。暴れる相手には立中K重ねを積極的に使う",
    "youtubeId": "V9vATykIkaY",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 300,
    "sourceTitle": "中央の起き攻め 新4shika式セットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Lb6O2R2-qv8_01",
    "enderClassId": "ec_mid_eagle",
    "title": "どこでも 中スパイク後 #1",
    "position": "どこでも",
    "inputs": "ラン",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>ラン\n汎用的で使い勝手の良い起き攻め。ダウン中のランでめっちゃ運べる。フレーム消費の行動が無いのでシンプルな読み合いができる。起き上がりに打撃を重ねても、投げにいっても、中段にもいける",
    "youtubeId": "Lb6O2R2-qv8",
    "sourceType": "shared",
    "ownerLabel": "ばるぱ",
    "startSec": 67,
    "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Lb6O2R2-qv8_03",
    "enderClassId": "ec_mid_eagle",
    "title": "どこでも 中スパイク後 #3",
    "position": "どこでも",
    "inputs": "微歩き > 6KK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>微歩き>フリップ\n字幕は「ちょい歩き>サイドフリップ」。〇〇式と呼ばれる起き攻め。歩きの距離を変えたり、相手の受け身によって表か裏かが変わる。起き上がりとサイドフリップが重なるので相手も見づらい",
    "youtubeId": "Lb6O2R2-qv8",
    "sourceType": "shared",
    "ownerLabel": "ばるぱ",
    "startSec": 131,
    "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Lb6O2R2-qv8_04",
    "enderClassId": "ec_mid_eagle",
    "title": "どこでも 中スパイク後 #4",
    "position": "どこでも",
    "inputs": "前飛び > 2MP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>前飛び>2中P持続当て\n字幕は「遅らせ前ジャンプ」。中スパイクのモーションが終わり切る前に前ジャンプすると、起き上がりにしゃがみ中Pを持続で重ねたり、受け身によって表裏の択をかけられる。安全な飛びっぽく見えるのでパリィを釣れる。持続しゃがみ中Pから攻めを継続できる",
    "youtubeId": "Lb6O2R2-qv8",
    "sourceType": "shared",
    "ownerLabel": "ばるぱ",
    "startSec": 155,
    "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Lb6O2R2-qv8_05",
    "enderClassId": "ec_mid_eagle",
    "title": "どこでも 中スパイク後 #5",
    "position": "どこでも",
    "inputs": "前飛び > j.HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>前飛び>J大K\n前ジャンプ強Kにすると持続打撃はできなくなるが、ミスった式っぽくなり、安定して打撃を重ねられる。相手の受け身によって表裏の択になる",
    "youtubeId": "Lb6O2R2-qv8",
    "sourceType": "shared",
    "ownerLabel": "ばるぱ",
    "startSec": 166,
    "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Lb6O2R2-qv8_06",
    "enderClassId": "ec_mid_eagle",
    "title": "中央 中スパイク後 #6",
    "position": "中央",
    "inputs": "66 > 6KK > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 中スパイク>前ステ>フリップ>投げ\n最速の前ステからサイドフリップ。とりあえず投げにいきたい時に使う。相手の受け身に関係なく+2Fで投げが埋まる。サイドフリップを出し切ると無敵技を避けられる。中央で投げにいきたい時はこれ",
    "youtubeId": "Lb6O2R2-qv8",
    "sourceType": "shared",
    "ownerLabel": "ばるぱ",
    "startSec": 190,
    "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Lb6O2R2-qv8_08",
    "enderClassId": "ec_mid_eagle",
    "title": "どこでも 中スパイク後 #8",
    "position": "どこでも",
    "inputs": "236LK(溜め) or 236HK(溜め)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>溜め弱ワールor溜め大ワール\n字幕は「最大溜めワール（弱or強）」。作者の起き攻めの8割はこれ。弱点はかなりあり、その場起きのOD無敵やリバサが確定するうえ、中央でのその場起き前ジャンプにめっぽう弱い。それでも使うのは、ドライブゲージを削ったり、問答無用で有利Fを押し付けたりできるから。続く章で、この起き攻めへの各キャラの確定反撃をまとめている（ラシード対策にも）",
    "youtubeId": "Lb6O2R2-qv8",
    "sourceType": "shared",
    "ownerLabel": "ばるぱ",
    "startSec": 234,
    "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Lb6O2R2-qv8_10",
    "enderClassId": "ec_mid_eagle",
    "title": "中央 中スパイク後 #10",
    "position": "中央",
    "inputs": "2LP(空) > 6KK > 2LP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>2弱P空振り>フリップ>2弱P持続当て\n中央でのセットプレイ。最速でやるとしゃがみ弱Pを持続で重ねられ、ノーゲージでその場起きには立ち中P、後ろ受け身にはしゃがみ中Kをつなげられる。発生の遅いOD無敵やSAをケアできる（一部キャラには安全に打撃を重ねられる）。読まれるとジャスパを取られる",
    "youtubeId": "Lb6O2R2-qv8",
    "sourceType": "shared",
    "ownerLabel": "ばるぱ",
    "startSec": 417,
    "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_1kSITEM8Dcg_03",
        "section": "端",
        "youtubeId": "1kSITEM8Dcg",
        "startSec": 70,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "中スパイク後の実用セットプレイ7選",
        "notes": "元レシピ: 中スパイク>コパ空振り>フリップ>2弱P持続当て\n+6Fルート。しゃがコパが持続当てになり、中Pでコンボにつなげられる。発生が遅い無敵技のケアにとても強い。相手のバーンアウト時や、エド・SA1の発生が遅いキンバリーなどに強力"
      },
      {
        "id": "ax_xOZTyewt8Rw_08",
        "section": "どこでも",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 82,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 中スパイク>コパ空振り>フリップ>2弱P持続当て\nコパン>フリップで+6F。しゃがコパで持続当てができ、発生が遅い昇竜を詐欺れる"
      },
      {
        "id": "ax_CQgCAy3iKng_02",
        "section": "端",
        "youtubeId": "CQgCAy3iKng",
        "startSec": 16,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "中スパイク締めセットプレイ6選",
        "notes": "元レシピ: 中スパイク>2弱P空振り>フリップ>2弱P持続当て\nしゃがコパ>フリップで+6F。しゃがコパの持続当てができ、発生が遅めのOD技やSAの切り返しをケアできる。ヒット時は当然コンボへ"
      }
    ]
  },
  {
    "id": "ax_Lb6O2R2-qv8_12",
    "enderClassId": "ec_mid_eagle",
    "title": "端 中スパイク後 #12",
    "position": "端",
    "inputs": "2LK(空) > 5HP(空) > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true,
      "low": true
    },
    "notes": "元レシピ: 中スパイク>小足空振り>大P空振り>投げ\n5F投げのフレーム消費3種のうち1つ（作者は気分で使い分け）。立ち強Pのフレーム消費は距離が少し離れるのでシミーがしやすい",
    "youtubeId": "Lb6O2R2-qv8",
    "sourceType": "shared",
    "ownerLabel": "ばるぱ",
    "startSec": 512,
    "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_B7GqchUdv3Y_07",
        "section": "端",
        "youtubeId": "B7GqchUdv3Y",
        "startSec": 232,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "セットプレイ10選",
        "notes": "元レシピ: 中スパイク>小足>大P>投げ\nシミー可能、5F有利。スパイクで端密着になっていないと成立しない"
      },
      {
        "id": "ax_1kSITEM8Dcg_02",
        "section": "端",
        "youtubeId": "1kSITEM8Dcg",
        "startSec": 52,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "中スパイク後の実用セットプレイ7選",
        "notes": "元レシピ: 中スパイク>小足空振り>大P空振り\nシミーできる+5F。端まで届いた時のド鉄板で、基本これ一択というくらい強い。ここからのシミーは要練習（ラシードはシミーからの打撃が難しいキャラなので、適当に後ろ歩き大Pはしないように）。密着5Fではないので垂直は弱い。様子を見たい時はシミーをする"
      },
      {
        "id": "ax_xOZTyewt8Rw_05",
        "section": "端",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 61,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 中スパイク>小足空振り>大P空振り>投げ\n超強い。端までスパイクで運べたらまずこれ"
      },
      {
        "id": "ax_RUcGCfDJvdQ_04",
        "section": "端",
        "youtubeId": "RUcGCfDJvdQ",
        "startSec": 245,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "セットプレイ10選（Y3）",
        "notes": "元レシピ: 中スパイク>小足>大P\nシミー可能な5F投げ。中スパイクで密着端まで運べたら基本これ一択"
      },
      {
        "id": "ax_gQjApuW1Dcc_05",
        "section": "端",
        "youtubeId": "gQjApuW1Dcc",
        "startSec": 38,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "+5Fセットプレイ9選",
        "notes": "元レシピ: 中スパイク>2弱K空振り>大P空振り\n+5Fでシミーもできる。スパイクが端まで到達したら、とりあえずこれでOKなくらい強い"
      },
      {
        "id": "ax_CQgCAy3iKng_01",
        "section": "端",
        "youtubeId": "CQgCAy3iKng",
        "startSec": 0,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "中スパイク締めセットプレイ6選",
        "notes": "元レシピ: 中スパイク>小足空振り>大P空振り\n小足>大Pで+5F。投げもシミーもできる。端に到達する中スパイク〆なら全部これで良い。とても強い"
      }
    ]
  },
  {
    "id": "ax_Lb6O2R2-qv8_13",
    "enderClassId": "ec_mid_eagle",
    "title": "端 中スパイク後 #13",
    "position": "端",
    "inputs": "2LK(空) > 6KK > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 中スパイク>小足空振り>フリップ>投げ\n5F投げのフレーム消費3種のうち1つ。サイドフリップを出し切ると、流れで相手の投げ抜け狩りや無敵技のケアができる",
    "youtubeId": "Lb6O2R2-qv8",
    "sourceType": "shared",
    "ownerLabel": "ばるぱ",
    "startSec": 530,
    "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_1kSITEM8Dcg_04",
        "section": "端",
        "youtubeId": "1kSITEM8Dcg",
        "startSec": 91,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "中スパイク後の実用セットプレイ7選",
        "notes": "元レシピ: 中スパイク>小足空振り>フリップ\n密着5F。そのまま投げても強いが、他の+5Fとの違いは、フリップの派生でほぼ全ての無敵の切り返しを回避できること。+5Fからの垂直では当たるような、春麗・ブランカ・DJなど垂直方向に強いOD技を持つキャラに大変強力"
      },
      {
        "id": "ax_xOZTyewt8Rw_07",
        "section": "どこでも",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 75,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 中スパイク>小足空振り>フリップ\n+5F。フリップの派生でほぼ全ての昇竜をすかせる"
      },
      {
        "id": "ax_gQjApuW1Dcc_04",
        "section": "どこでも",
        "youtubeId": "gQjApuW1Dcc",
        "startSec": 28,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "+5Fセットプレイ9選",
        "notes": "元レシピ: 中スパイク>2弱K空振り>フリップ\n+5F。フリップの派生でほぼ全ての無敵技を避けられる。フリップは3つ入力すると暴発しにくい。作者は同時押しをよくミスるので使うことはめったに無い"
      },
      {
        "id": "ax_CQgCAy3iKng_03",
        "section": "端",
        "youtubeId": "CQgCAy3iKng",
        "startSec": 36,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "中スパイク締めセットプレイ6選",
        "notes": "元レシピ: 中スパイク>小足空振り>フリップ\n小足>フリップで+5F。フリップを派生することで、ほぼ全ての無敵技を回避できる（前ジャンプの上位互換）。直投げももちろんアリ"
      }
    ]
  },
  {
    "id": "ax_Lb6O2R2-qv8_14",
    "enderClassId": "ec_mid_eagle",
    "title": "端 中スパイク後 #14",
    "position": "端",
    "inputs": "214LP > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 中スパイク>弱サイクロン>投げ\n5F投げのフレーム消費3種のうち1つ。弱サイクロンのフレーム消費はあまり見ないセットプレイなので、投げが通りやすい気もする",
    "youtubeId": "Lb6O2R2-qv8",
    "sourceType": "shared",
    "ownerLabel": "ばるぱ",
    "startSec": 541,
    "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Lb6O2R2-qv8_15",
    "enderClassId": "ec_mid_eagle",
    "title": "端 中スパイク後 #15",
    "position": "端",
    "inputs": "2MK(空) > DI",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>中足空振り>インパクト\n中足でフレーム消費すると、起き上がりにぴったりインパクトを埋められる。壁ドンからノーゲージなら中P>8強K>弱ミキサー>大ミキサーとつなげる",
    "youtubeId": "Lb6O2R2-qv8",
    "sourceType": "shared",
    "ownerLabel": "ばるぱ",
    "startSec": 557,
    "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_xOZTyewt8Rw_10",
        "section": "どこでも",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 98,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 中スパイク>中足空振り>インパクト\n相手を壊したい時に使う"
      }
    ]
  },
  {
    "id": "ax_Lb6O2R2-qv8_16",
    "enderClassId": "ec_mid_eagle",
    "title": "端 中スパイク後 #16",
    "position": "端",
    "inputs": "2LK(空) > DI",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>小足空振り>インパクト\n汚インパクト。インパクトを返してくる人には、小足のフレーム消費からインパクトを撃つ。相手がインパクトに釣られてくれれば、相手にインパクトを叩き込める。起き攻めインパクトで相手の意表を突く",
    "youtubeId": "Lb6O2R2-qv8",
    "sourceType": "shared",
    "ownerLabel": "ばるぱ",
    "startSec": 566,
    "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_1kSITEM8Dcg_07",
        "section": "端",
        "youtubeId": "1kSITEM8Dcg",
        "startSec": 171,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "中スパイク後の実用セットプレイ7選",
        "notes": "元レシピ: 中スパイク>小足空振り>インパクト\n汚インパクト式。反応が早い「若者」を分からせていく。パリィを押す人も多いので、ちゃんと見てから投げる"
      },
      {
        "id": "ax_xOZTyewt8Rw_12",
        "section": "どこでも",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 116,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 中スパイク>小足空振り>インパクト\n汚インパクト式。パリィを押してくる人を投げられると超気持ちいい"
      },
      {
        "id": "ax_CQgCAy3iKng_06",
        "section": "端",
        "youtubeId": "CQgCAy3iKng",
        "startSec": 92,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "中スパイク締めセットプレイ6選",
        "notes": "元レシピ: 中スパイク>小足空振り>インパクト\n闇の力「汚」インパクト（重ならないタイミングのインパクト）。小足小足インパクトを見せてからやると良いことが起こるかもしれない。ほかに立中K>前ステも+5Fを作れて強い（動画では省略）"
      }
    ]
  },
  {
    "id": "ax_Lb6O2R2-qv8_17",
    "enderClassId": "ec_mid_eagle",
    "title": "どこでも 中スパイク後 #17",
    "position": "どこでも",
    "inputs": "66 > 214HP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>前ステ>大サイクロン\n起き攻めで強サイクロンを重ね、ガードで一気に有利Fを取れる。ジャスパのケアなどにも役立つ",
    "youtubeId": "Lb6O2R2-qv8",
    "sourceType": "shared",
    "ownerLabel": "ばるぱ",
    "startSec": 604,
    "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_xOZTyewt8Rw_13",
        "section": "どこでも",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 124,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 中スパイク>前ステ>大サイクロン\nOD昇竜持ちには負けるが、ジャスパされにくいので切り返しが弱い相手に結構使う"
      }
    ]
  },
  {
    "id": "ax_Lb6O2R2-qv8_18",
    "enderClassId": "ec_mid_eagle",
    "title": "どこでも 中スパイク後 #18",
    "position": "どこでも",
    "inputs": "2MP(空) > 2MP(空) > 2MP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>2中P空振り>2中P空振り>2中P持続当て\n字幕は「しゃがみ中パンチ×3」。しゃがみ中Pを持続で重ねるセットプレイ。ノーマルヒットでも立ち中Pがつながるので、打撃が当たったらリターンを取れる優秀な択。ガードでも持続のおかげで有利Fが多いので、そのまま攻めを継続できる",
    "youtubeId": "Lb6O2R2-qv8",
    "sourceType": "shared",
    "ownerLabel": "ばるぱ",
    "startSec": 622,
    "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_xOZTyewt8Rw_06",
        "section": "どこでも",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 68,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 中スパイク>2中P空振り>2中P空振り>2中P持続当て\n持続当て。操作が結構難しい"
      },
      {
        "id": "ax_K7-u1zEnYH0_07",
        "section": "どこでも",
        "youtubeId": "K7-u1zEnYH0",
        "startSec": 634,
        "ownerLabel": "つのちゃんねる",
        "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
        "notes": "元レシピ: 中スパイク>2中P空振り>2中P空振り>2中P持続当て\n字幕は「中スパイク→2中P×3（持続ヒット+7F）」「→5中P→好きなルート」。持続ヒットで+7Fなので中Pからコンボへ。Dリバも詐欺れるのが強み。OD無敵の無いキャラにおすすめ"
      }
    ]
  },
  {
    "id": "ax_1kSITEM8Dcg_06",
    "enderClassId": "ec_mid_eagle",
    "title": "端 中スパイク後 #6",
    "position": "端",
    "inputs": "2LK(空) > 2LK(空) > DI",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>小足空振り>小足空振り>インパクト\nくらえぃ！と念じながら打つ。小足>小足が地味に難しいので、中足でもOK",
    "youtubeId": "1kSITEM8Dcg",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 161,
    "sourceTitle": "中スパイク後の実用セットプレイ7選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_xOZTyewt8Rw_11",
        "section": "どこでも",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 103,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 中スパイク>小足空振り>小足空振り>インパクト\n相手を壊したい時に使う、その2。インパクト返しはまずされないが、ジャスパはとてもされる"
      },
      {
        "id": "ax_CQgCAy3iKng_05",
        "section": "端",
        "youtubeId": "CQgCAy3iKng",
        "startSec": 80,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "中スパイク締めセットプレイ6選",
        "notes": "元レシピ: 中スパイク>小足空振り>小足空振り>インパクト\nインパクトがぴったり重なるフレーム。いざやられると本当に見えない"
      }
    ]
  },
  {
    "id": "ax_nvEmVDLg3h4_01",
    "enderClassId": "ec_mid_eagle",
    "title": "どこでも 中スパイク後 #1",
    "position": "どこでも",
    "inputs": "5MK(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 中スパイク>立中K空振り>中段持続当て\n意外と当たる（矛盾）",
    "youtubeId": "nvEmVDLg3h4",
    "sourceType": "shared",
    "ownerLabel": "イウサール(本人)",
    "startSec": 6,
    "sourceTitle": "気持ちいい持続中段セットプレイ5選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_K7-u1zEnYH0_04",
        "section": "どこでも",
        "youtubeId": "K7-u1zEnYH0",
        "startSec": 613,
        "ownerLabel": "つのちゃんねる",
        "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
        "notes": "元レシピ: 中スパイク>立中K空振り>中段持続当て\n字幕は「中スパイク→5中K（+23F）」「中スパイク→5中K→6強P（持続中段）→5弱P→5弱K→弱スパイク」。立中K消費の後が+23Fで、中段が持続で当たる。ヒット時は弱P>弱K>弱スパイク。立中K消費からは持続中段・投げ・下段の択"
      }
    ]
  },
  {
    "id": "ax_nvEmVDLg3h4_02",
    "enderClassId": "ec_weak_skyhigh",
    "title": "TC始動 弱スカイハイ後 #2",
    "inputs": "6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 弱スカイハイ>中段持続当て\nTC>大サイクロン>ウィンドストローク>小スカイハイ（ジャンプ攻撃は出さない）の後。下段も見せる",
    "youtubeId": "nvEmVDLg3h4",
    "sourceType": "shared",
    "ownerLabel": "イウサール(本人)",
    "startSec": 16,
    "sourceTitle": "気持ちいい持続中段セットプレイ5選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_K7-u1zEnYH0_16",
        "section": "TC始動",
        "youtubeId": "K7-u1zEnYH0",
        "startSec": 723,
        "ownerLabel": "つのちゃんねる",
        "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
        "notes": "元レシピ: 弱スカイハイ>中段持続当て\n字幕は「5中P→5強K→強サイクロン上派生→弱スカイハイ（+23F）」「…→弱スカイハイ→6強P（持続中段）→5弱P→5弱K→弱スパイク」。中スパイク〆の立中K消費と同じ状況（+23F）で、中央でもできるのが強み（中央でも持続中段できる）。ヒット時は弱P>弱K>弱スパイク"
      }
    ]
  },
  {
    "id": "ax_nvEmVDLg3h4_03",
    "enderClassId": "ec_strong_skyhigh",
    "title": "端 大スカイハイ後 #3",
    "position": "端",
    "inputs": "j.HP(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スカイハイ>J大P空振り>中段持続当て\n画面端。TC>大サイクロン>ウィンドストローク>ジャンプ中Pキャンセル大スカイハイ>ジャンプ大P空振りの後。インパクトや投げとの択（割愛）",
    "youtubeId": "nvEmVDLg3h4",
    "sourceType": "shared",
    "ownerLabel": "イウサール(本人)",
    "startSec": 32,
    "sourceTitle": "気持ちいい持続中段セットプレイ5選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_nvEmVDLg3h4_04",
    "enderClassId": "ec_strong_skyhigh_pickup",
    "title": "気流ODミキサー 大スカイハイ後 #4",
    "inputs": "垂直J > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スカイハイ>垂直>中段持続当て\nSA2ヒット時、BO（バーンアウト）壁ドン後など、気流発生時のODミキサー>大スカイハイ>ジャンプの後。字幕は「→ジャンプ」で、デモは垂直ジャンプに見える",
    "youtubeId": "nvEmVDLg3h4",
    "sourceType": "shared",
    "ownerLabel": "イウサール(本人)",
    "startSec": 58,
    "sourceTitle": "気持ちいい持続中段セットプレイ5選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_nvEmVDLg3h4_05",
    "enderClassId": "ec_mid_skyhigh",
    "title": "TC始動 中スカイハイ後 #5",
    "pattern": "表（大P空振り）",
    "inputs": "j.HP(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 中スカイハイ>J大P空振り>中段持続当て\nTC>ODサイクロン>ウィンドストローク>中スカイハイ>大P空振りの後。表の持続中段",
    "youtubeId": "nvEmVDLg3h4",
    "sourceType": "shared",
    "ownerLabel": "イウサール(本人)",
    "startSec": 70,
    "sourceTitle": "気持ちいい持続中段セットプレイ5選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_nvEmVDLg3h4_06",
    "enderClassId": "ec_mid_skyhigh",
    "title": "TC始動 中スカイハイ後 #6",
    "pattern": "裏（何も出さない）",
    "inputs": "6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 中スカイハイ>中段持続当て\nTC>ODサイクロン>ウィンドストローク>中スカイハイ（何も出さない）の後。裏に回って持続中段。表（大P空振り）と使い分ける",
    "youtubeId": "nvEmVDLg3h4",
    "sourceType": "shared",
    "ownerLabel": "イウサール(本人)",
    "startSec": 76,
    "sourceTitle": "気持ちいい持続中段セットプレイ5選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_qj-VYWDyCZc_02",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #2",
    "inputs": "2HP(空) > 236HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>2大P空振り>大ワール\n字幕は「TC→大スパイク→屈大P→大ワール」。弾重ね。動画では、この2つの連携は何が有利なのかをコメントで教えてほしい、としている",
    "youtubeId": "qj-VYWDyCZc",
    "sourceType": "shared",
    "ownerLabel": "イウサール(本人)",
    "startSec": 32,
    "sourceTitle": "最強の起き攻め（弾重ね）2選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_rbet66_4Hos_01",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #1",
    "inputs": "後J > j.HK",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 大スパイク>バックジャンプ>J大K\n安全飛び（詐欺飛び）ルート。ド安パイな選択肢。その後2発でヒット確認して、ヒット時はコンボ、ガード時はボリにいく流れがとても大事",
    "youtubeId": "rbet66_4Hos",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 10,
    "sourceTitle": "TC>大スパイク後の実戦セットプレイ解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_rbet66_4Hos_04",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #4",
    "inputs": "5LK(空) > 2MK(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>弱K空振り>中足空振り>中段持続当て\n持続中段ルート。字幕は「立K>中足>中段」（立Kは弱Kと解釈）。持続中段はありすぎて笑うほどあり（中P>2中P>中段、立K>立中K>中段、バックジャンプ大K>中段、中段>中段など。ほかに5個ほど）、SA3でリーサルを狙える時は積極的に",
    "youtubeId": "rbet66_4Hos",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 56,
    "sourceTitle": "TC>大スパイク後の実戦セットプレイ解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_rbet66_4Hos_05",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #5",
    "inputs": "垂直J > 5LK(空) > 2MP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>垂直>弱K空振り>2中P持続当て\n持続2中Pルート。字幕は「垂直>立K>2中P」。ほかに立中K>投げ>2中Pなど色々あるが、垂直からがオサレ。安全飛びと同じくヒット確認が超重要で、持続当てだけ成功して満足しないように",
    "youtubeId": "rbet66_4Hos",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 87,
    "sourceTitle": "TC>大スパイク後の実戦セットプレイ解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_rbet66_4Hos_08",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #8",
    "inputs": "6KK > j.HK",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 大スパイク>フリップ>J大K\n安全飛び改（詐欺飛び）。ディレイフリップ（派生を遅らせる）>J大K。できれば超強いけど超難しい。安定すればもにゅもにゅと同等レベルの強さだが、ミスった時がそこそこ悲惨なので非推奨。プロシーンではあまり使われていないセットプレイだが十分強く、操作も簡単で初心者から上級者まで使いやすい",
    "youtubeId": "rbet66_4Hos",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 133,
    "sourceTitle": "TC>大スパイク後の実戦セットプレイ解説",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n81b55ff3de1c_01",
    "enderClassId": "ec_weak_eagle",
    "title": "中央 弱スパイク後 #1",
    "position": "中央",
    "inputs": "66 > ラン > LPLK or 2MP",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 弱スパイク>前ステ>ラン>投げOR2中P\nランで詰めて体感で投げか2中P。難しければラッシュで",
    "sourceUrl": "https://note.com/yubibiseth/n/n81b55ff3de1c",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "基礎攻略（覚えるべきセットプレイ）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n81b55ff3de1c_02",
    "enderClassId": "ec_mid_eagle",
    "title": "中央 中スパイク後 #2",
    "position": "中央",
    "inputs": "66 > 66 > LPLK or 2MP",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 中スパイク>前ステ>前ステ>投げOR2中P\n体感で投げか2中P。難しければワールを重ねる",
    "sourceUrl": "https://note.com/yubibiseth/n/n81b55ff3de1c",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "基礎攻略（覚えるべきセットプレイ）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_Lb6O2R2-qv8_02",
        "section": "どこでも",
        "youtubeId": "Lb6O2R2-qv8",
        "startSec": 97,
        "ownerLabel": "ばるぱ",
        "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
        "notes": "元レシピ: 中スパイク>前ステ>前ステ\n最速で前ステすると距離が離れるが、前ステのタイミングを遅らせることで距離が変わり、密着の状況やちょっと離れた状況を作れる。使いこなせば後ろ下がりせずに様子見ができたりして、相手に動きを悟らせずに攻められる"
      }
    ]
  },
  {
    "id": "ax_note_n81b55ff3de1c_03",
    "enderClassId": "ec_mid_eagle",
    "title": "中央 中スパイク後 #3",
    "position": "中央",
    "inputs": "5LP(空) > 6KK > (微歩き > LPLK) or 2LP",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 中スパイク>弱P空振り>サイドフリップ>微歩き投げOR2弱P\n慣れれば簡単。2弱Pは持続重ねで、ヒットなら2中Kが繋がる",
    "sourceUrl": "https://note.com/yubibiseth/n/n81b55ff3de1c",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "基礎攻略（覚えるべきセットプレイ）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n81b55ff3de1c_04",
    "enderClassId": "ec_mid_eagle",
    "title": "中央 中スパイク後 #4",
    "position": "中央",
    "inputs": "236LK(溜め)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>弱ワール溜め\n後ろ受け身だと重なりきらず飛ばれる。飛ばれたらODミキサーで落とす",
    "sourceUrl": "https://note.com/yubibiseth/n/n81b55ff3de1c",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "基礎攻略（覚えるべきセットプレイ）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n81b55ff3de1c_05",
    "enderClassId": "ec_mid_mixer",
    "title": "中央 中ミキサー後 #5",
    "position": "中央",
    "inputs": "236LK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中ミキサー>弱ワール\n中ミキサーの着地キャンセルで弱ワールを先行入力。安全にワールを重ねられる",
    "sourceUrl": "https://note.com/yubibiseth/n/n81b55ff3de1c",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "基礎攻略（覚えるべきセットプレイ）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n81b55ff3de1c_06",
    "enderClassId": "ec_weak_eagle",
    "title": "端 弱スパイク後 #6",
    "position": "端",
    "inputs": "2MP(空) > LPLK or 2MP",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 弱スパイク>2中P空振り>投げOR2中P\n打撃択のリターンが高い。2中Pを先行入力で連打し、見えたら止める。2中P空振りの後に下がればシミー",
    "sourceUrl": "https://note.com/yubibiseth/n/n81b55ff3de1c",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "基礎攻略（覚えるべきセットプレイ）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n81b55ff3de1c_07",
    "enderClassId": "ec_mid_eagle",
    "title": "端 中スパイク後 #7",
    "position": "端",
    "inputs": "2MP(空) > 2MP(空) > LPLK or 2MP",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 中スパイク>2中P空振り>2中P空振り>投げOR2中P\n弱スパイク後と同じ要領。2中P空振りの後に下がればシミー",
    "sourceUrl": "https://note.com/yubibiseth/n/n81b55ff3de1c",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "基礎攻略（覚えるべきセットプレイ）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n81b55ff3de1c_08",
    "enderClassId": "ec_mid_eagle",
    "title": "端 中スパイク後 #8",
    "position": "端",
    "inputs": "5MK(空) > 6HP or (66 > 2LK) or (66 > LPLK)",
    "vsWakeup": {},
    "flags": {
      "mid": true,
      "low": true,
      "throw": true
    },
    "notes": "元レシピ: 中スパイク>中K空振り>中段OR前ステ小足OR前ステ投げ\n持続中段・下段・投げの3択",
    "sourceUrl": "https://note.com/yubibiseth/n/n81b55ff3de1c",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "基礎攻略（覚えるべきセットプレイ）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_B7GqchUdv3Y_05",
        "section": "端",
        "youtubeId": "B7GqchUdv3Y",
        "startSec": 182,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "セットプレイ10選",
        "notes": "元レシピ: 中スパイク>中K>前ステ投げOR中段OR前ステ小足\n古来からのレシピで今も健在。微妙に端到達していない時でも狙える。迷ったらこれ"
      },
      {
        "id": "ax_Lb6O2R2-qv8_11",
        "section": "端",
        "youtubeId": "Lb6O2R2-qv8",
        "startSec": 470,
        "ownerLabel": "ばるぱ",
        "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
        "notes": "元レシピ: 中スパイク>立中K空振り>前ステ\n画面端限定。立中Kのフレーム消費から前ステで、5F投げ・持続中段・下段の重ね。作者が一番よく使うのは前ステからの垂直で、相手に痛いダメージを叩き込める。一部キャラのOD無敵をかわせるのも強い"
      },
      {
        "id": "ax_1kSITEM8Dcg_01",
        "section": "中央",
        "youtubeId": "1kSITEM8Dcg",
        "startSec": 7,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "中スパイク後の実用セットプレイ7選",
        "notes": "元レシピ: 中スパイク>立中K空振り>前ステ\nシミーできない+5F。このセットの真骨頂は、立中K>前ステで軸を大きく前へ移動できること。画面中央あたりから+5Fにいけるのが強力（小足>大Pでもシミーできる+5Fだが、この距離では届かない）。距離がいまいち分からないからとセットプレイせずに前に出ると、投げが重なっていなかったり最速コパンに負けたりする。分かっている人が大半だと思うが、距離ごとにきちんと使い分けられている人は少ない"
      },
      {
        "id": "ax_xOZTyewt8Rw_04",
        "section": "どこでも",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 53,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 中スパイク>立中K空振り>前ステor中段\n立中K>前ステor中段or下段。ラシード村の縄文時代から知られているセットプレイ"
      },
      {
        "id": "ax_RUcGCfDJvdQ_03",
        "section": "端",
        "youtubeId": "RUcGCfDJvdQ",
        "startSec": 187,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "セットプレイ10選（Y3）",
        "notes": "元レシピ: 中スパイク>立中K>前ステ投げOR中段持続当てOR前ステ小足\nド定番。前ステで5F投げ（シミー不可）、中段で持続。中スパイクが微妙に端まで届かないときは基本これ。立中K>前ステで端に届きそうと感じたら使う"
      },
      {
        "id": "ax_gQjApuW1Dcc_03",
        "section": "どこでも",
        "youtubeId": "gQjApuW1Dcc",
        "startSec": 21,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "+5Fセットプレイ9選",
        "notes": "元レシピ: 中スパイク>立中K空振り>前ステ\n+5F。もはや説明不要の原初のセットプレイ。2弱K>フリップより操作が簡単なので、作者は結構愛用している"
      },
      {
        "id": "ax_K7-u1zEnYH0_05",
        "section": "どこでも",
        "youtubeId": "K7-u1zEnYH0",
        "startSec": 622,
        "ownerLabel": "つのちゃんねる",
        "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
        "notes": "元レシピ: 中スパイク>立中K空振り>前ステ\n字幕は「中スパイク→5中K→前ステ（+5F）」。+5Fで投げ"
      },
      {
        "id": "ax_K7-u1zEnYH0_06",
        "section": "どこでも",
        "youtubeId": "K7-u1zEnYH0",
        "startSec": 628,
        "ownerLabel": "つのちゃんねる",
        "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
        "notes": "元レシピ: 中スパイク>立中K空振り>前ステ>小足\n字幕は「中スパイク→5中K→前ステ→2弱K（下段択）→5弱P→中ミキサー」。下段択で、ヒット時は弱P>中ミキサー"
      }
    ]
  },
  {
    "id": "ax_note_n81b55ff3de1c_09",
    "enderClassId": "ec_strong_eagle",
    "title": "端 大スパイク後 #9",
    "position": "端",
    "inputs": "5LP(空) > 前飛び",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 大スパイク>弱P空振り>前飛び\n詐欺飛び。2弱Pの空振りでもよい。小技は大スパイクの硬直中に先行入力すると安定する",
    "sourceUrl": "https://note.com/yubibiseth/n/n81b55ff3de1c",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "基礎攻略（覚えるべきセットプレイ）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n81b55ff3de1c_10",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #10",
    "position": "端",
    "inputs": "DR > 5LP(空) > LPLK or 2LK or 6HP",
    "vsWakeup": {},
    "flags": {
      "mid": true,
      "low": true,
      "throw": true
    },
    "notes": "元レシピ: 投げ>ラッシュ>弱P空振り>投げOR小足OR中段\n端の投げ後は前ステ投げが難しいので、まずこちらから。中段は5F遅らせグラップも潰せる",
    "sourceUrl": "https://note.com/yubibiseth/n/n81b55ff3de1c",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "基礎攻略（覚えるべきセットプレイ）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_xOZTyewt8Rw_59",
        "section": "どこでも",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 558,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 投げ>ラッシュ>弱P\nラッシュ立Pで投げ間合い+2F。バクステされたらキレていい"
      },
      {
        "id": "ax_note_n6fe5f7740e9a_10",
        "section": "端",
        "sourceUrl": "https://note.com/yubibiseth/n/n6fe5f7740e9a",
        "ownerLabel": "ゆば",
        "sourceTitle": "202506ver.画面端　投げ後",
        "notes": "元レシピ: 投げ>ラッシュ>弱P空振り>投げ\n+2で投げが重なる。OD無敵の割り込みもガードできる"
      },
      {
        "id": "ax_-BuizDoBNkk_06",
        "section": "端",
        "youtubeId": "-BuizDoBNkk",
        "startSec": 63,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "端投げ後の展開方法6選",
        "notes": "元レシピ: 投げ>ラッシュ>弱Por弱K\nラッシュ弱Pで投げ間合い+2、ラッシュ弱Kで±0（投げ間合いの外）。作者がかなり好きな攻め方で、弱Kでパニッシュカウンターを取ると2中P>中Pがつながるのが素敵。投げ後の展開はいくつかのレシピを暗記して使い分ける"
      }
    ]
  },
  {
    "id": "ax_02y3zE318WU_01",
    "enderClassId": "ec_sa1",
    "title": "どこでも SA1後 #1",
    "pattern": "ODワールを出してから",
    "position": "どこでも",
    "inputs": "6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: SA1>中段持続当て\nODワール>SA1>中段。視聴者（武器職人さん）から投稿されたレシピで、ODワールの使い道がここにあった。SA1の後に持続中段を当てる発想は作者にも無かった。ゲージはかなり使うがダメージ効率は悪くなさそうで、狙いどころも多い（ラッシュ小足を当てた段階で狙えるので発動しやすい）。ランクマでは現段階でめちゃくちゃ当たった。スタン後は本当に狙いやすく、ゲージを払う価値は十分ある。前ステ下段もあるが打ちたくはない",
    "youtubeId": "02y3zE318WU",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 19,
    "sourceTitle": "ユニークな持続中段レシピを試してきました",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_u0Ho1wfWb78_01",
    "enderClassId": "ec_od_mixer",
    "title": "中央 ODミキサー後 #1",
    "pattern": "その場受け身",
    "position": "中央",
    "inputs": "6MP > 214MP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: ODミキサー>前中P>中サイクロン\nODミキサーは有利Fが約15F減って+9F（弱体化）。受け身方向の確認を頑張りたい。その場受け身には前中P>中サイクロン。Dゲージ削り量が高く、反撃も確定しない。相手が動いていればそのままコンボへ（連続ヒットになる）。ただし相手の打ち返しをガードしてしまう距離",
    "youtubeId": "u0Ho1wfWb78",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 14,
    "sourceTitle": "ODミキサー後の展開について",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_3fxmerWIE0U_01",
        "section": "中央",
        "youtubeId": "3fxmerWIE0U",
        "startSec": 8,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "ODミキサー後の受け身方向確認",
        "notes": "元レシピ: ODミキサー>前中P>中サイクロン\nその場受け身の場合、前中P>中サイクロンでDゲージを削りにいきたい。相手の4F技が届かないので、ほぼノーリスク"
      }
    ]
  },
  {
    "id": "ax_u0Ho1wfWb78_02",
    "enderClassId": "ec_od_mixer",
    "title": "中央 ODミキサー後 #2",
    "pattern": "その場受け身",
    "position": "中央",
    "inputs": "6MP > 236HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: ODミキサー>前中P>大ワール\n打ち返されたくない場合。ガードバックが広く、飛ばれても対空が間に合う",
    "youtubeId": "u0Ho1wfWb78",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 36,
    "sourceTitle": "ODミキサー後の展開について",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_u0Ho1wfWb78_03",
    "enderClassId": "ec_od_mixer",
    "title": "中央 ODミキサー後 #3",
    "pattern": "受け身方向を見ずに",
    "position": "中央",
    "inputs": "5MK or 2HP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: ODミキサー>立中Kor2大P\n受け身方向の確認が厳しければこちら。何でも良いので打撃をガードさせにいく",
    "youtubeId": "u0Ho1wfWb78",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 49,
    "sourceTitle": "ODミキサー後の展開について",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_u0Ho1wfWb78_04",
    "enderClassId": "ec_od_mixer",
    "title": "中央 ODミキサー後 #4",
    "pattern": "後ろ受け身",
    "position": "中央",
    "inputs": "236HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: ODミキサー>大ワール\n後ろ受け身には大ワールが鉄板。前飛びに大ダメージを取れるほか、相手が距離を離してきたら気流モードに入りやすい",
    "youtubeId": "u0Ho1wfWb78",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 58,
    "sourceTitle": "ODミキサー後の展開について",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_3fxmerWIE0U_04",
        "section": "中央",
        "youtubeId": "3fxmerWIE0U",
        "startSec": 45,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "ODミキサー後の受け身方向確認",
        "notes": "元レシピ: ODミキサー>大ワール\n後ろ受け身には大ワールが丸い。後ろ受け身からの前飛びにぴったり当たる。低リスクでワールを1つ召喚できる"
      }
    ]
  },
  {
    "id": "ax_BdvQjBLS1CA_01",
    "enderClassId": "ec_mid_eagle",
    "title": "対ブランカ 中スパイク後 #1",
    "inputs": "2MP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>2中P\n対ブランカ。投げ間合いの外で遅らせて打つ2中Pが鉄板。ODパチカ・低空ロリ・グラップの全てに勝つ（キャミィのストライク対策と同じく頼りになる）。リバサ前ジャンプや最速暴れには弱いが、相手の逆択には滅法強いのでどんどん狙って良い。中足ラッシュからもできる（その際は大Kが入らないことが多いので前中Pで拾う。リターンも高い）。中央の中スパイク後は起き上がりの種類の判別が難しくグダりやすいので、なんとか端で倒し切りたい",
    "youtubeId": "BdvQjBLS1CA",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 10,
    "sourceTitle": "対ブランカ起き攻め方法",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_BdvQjBLS1CA_02",
    "enderClassId": "ec_weak_stroke",
    "title": "対ブランカ 弱サイクロンストローク後 #2",
    "inputs": "2MP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 弱サイクロンストローク>2中P\n対ブランカ。もにょもにょからも遅らせ2中Pはもちろんいける。体感の起き攻めになるが安定させておきたい。この技があるので対ブランカは結構イケてると作者は思っている",
    "youtubeId": "BdvQjBLS1CA",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 28,
    "sourceTitle": "対ブランカ起き攻め方法",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_nuqU12ysc7k_02",
    "enderClassId": "ec_weak_eagle",
    "title": "中央 弱スパイク後 #2",
    "position": "中央",
    "inputs": "2LK(空) > 2LP(空) > LPLK or 垂直J",
    "vsWakeup": {},
    "flags": {
      "throw": true,
      "low": true
    },
    "notes": "元レシピ: 弱スパイク>小足空振り>コパ空振り>投げor垂直\n小足>コパで+5F。こちらもよく使う。5F投げが弱いわけではないが、シミーはできない。遅らせグラップを狩りたい時は垂直がオススメで、グラップを見てからJ大Kを押せるとベスト。密着+5Fから昇竜を透かせるキャラには特にオススメ",
    "youtubeId": "nuqU12ysc7k",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 26,
    "sourceTitle": "弱スパイク後の起き攻め3選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_B7GqchUdv3Y_03",
        "section": "端",
        "youtubeId": "B7GqchUdv3Y",
        "startSec": 135,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "セットプレイ10選",
        "notes": "元レシピ: 弱スパイク>小足>コパン>投げ\n5F有利の投げレシピ。今シーズンからJPにアムネジアされても確定を取られない。シミー不可"
      },
      {
        "id": "ax_xOZTyewt8Rw_02",
        "section": "どこでも",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 35,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 弱スパイク>小足空振り>弱P空振り>投げ\n字幕は「小足>立P>投げ」。5F投げ。シミーできないので微妙感はある"
      },
      {
        "id": "ax_gQjApuW1Dcc_08",
        "section": "どこでも",
        "youtubeId": "gQjApuW1Dcc",
        "startSec": 66,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "+5Fセットプレイ9選",
        "notes": "元レシピ: 弱スパイク>2弱K空振り>弱P空振りor2弱P空振り\n+5F。強いが、持続2中Pのルートへいけないのであまり使わない。安全に投げにいきたい時に狙う"
      },
      {
        "id": "ax_K7-u1zEnYH0_09",
        "section": "どこでも",
        "youtubeId": "K7-u1zEnYH0",
        "startSec": 661,
        "ownerLabel": "つのちゃんねる",
        "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
        "notes": "元レシピ: 弱スパイク>小足空振り>2弱P空振り>投げ\n字幕は「弱スパイク→2弱K→2弱P（+5）」。+5Fで投げられる。小技は連キャンする"
      }
    ]
  },
  {
    "id": "ax_nuqU12ysc7k_03",
    "enderClassId": "ec_weak_eagle",
    "title": "中央 弱スパイク後 #3",
    "position": "中央",
    "inputs": "2MK(空) > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 弱スパイク>中足空振り>投げ\n中足>投げを混ぜるのも面白い。+3Fなのでバクステに弱いが、代わりにシミーができる",
    "youtubeId": "nuqU12ysc7k",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 58,
    "sourceTitle": "弱スパイク後の起き攻め3選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_MFVKreBMfkg_01",
    "enderClassId": "ec_weak_stroke",
    "title": "端 弱サイクロンストローク後 #1",
    "position": "端",
    "inputs": "j.HK > 2MP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 弱サイクロンストローク>J大K>2中P\nJ大Kのヒット確認が難しければ立中Kを省いて2中Pでよい（作者はこちらを使用）。2中Pまで入れ込むと2発で確認できるので、ヒット時は中サイクロン、ガード時は大サイクロンで攻め継続。J大Kをガードされているのに立中Kを出すと攻めが途切れるので厳禁。2中P>立K>立Pのコパンは当たらないので手癖でやらない。J大Kのヒット確認と、相手が遅らせグラップをしているかの2点を意識する",
    "youtubeId": "MFVKreBMfkg",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 13,
    "sourceTitle": "もにょもにょ後の攻め方",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_MFVKreBMfkg_02",
    "enderClassId": "ec_weak_stroke",
    "title": "端 弱サイクロンストローク後 #2",
    "position": "端",
    "inputs": "j.HK > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 弱サイクロンストローク>J大K>投げ\nJ大Kをガードさせた後にシンプルに投げ",
    "youtubeId": "MFVKreBMfkg",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 37,
    "sourceTitle": "もにょもにょ後の攻め方",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_K7-u1zEnYH0_03",
        "section": "どこでも",
        "youtubeId": "K7-u1zEnYH0",
        "startSec": 561,
        "ownerLabel": "つのちゃんねる",
        "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
        "notes": "元レシピ: 弱サイクロンストローク>J大K>投げ\n字幕は「…→弱サイクロン→上派生→（早め）J強K→投げ」。J大Kを早めに出して着地して投げ"
      }
    ]
  },
  {
    "id": "ax_MFVKreBMfkg_03",
    "enderClassId": "ec_weak_stroke",
    "title": "端 弱サイクロンストローク後 #3",
    "position": "端",
    "inputs": "シミー",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 弱サイクロンストローク>シミー\nシミーするときはかなり早めに着地する。引き付けると投げに吸われる",
    "youtubeId": "MFVKreBMfkg",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 62,
    "sourceTitle": "もにょもにょ後の攻め方",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_MFVKreBMfkg_05",
    "enderClassId": "ec_weak_stroke",
    "title": "端 弱サイクロンストローク後 #5",
    "position": "端",
    "inputs": "LPLK or 2LK",
    "vsWakeup": {},
    "flags": {
      "low": true,
      "throw": true
    },
    "notes": "元レシピ: 弱サイクロンストローク>投げOR小足\nJ大Kを出さずに透かす。遅らせグラップしていないと思ったら透かし投げ、崩しには透かし小足も強い",
    "youtubeId": "MFVKreBMfkg",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 79,
    "sourceTitle": "もにょもにょ後の攻め方",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_XcWu7hv0FdQ_01",
    "enderClassId": "ec_strong_skyhigh",
    "title": "端 大スカイハイ後 #1",
    "pattern": "+24F（J中P最速）",
    "position": "端",
    "inputs": "5LK > 2MP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スカイハイ>弱K>2中P持続当て\n迷ったらまずこれ。持続2中Pは火力が高く暴れ潰しも強い。投げとの二択を軸にする",
    "youtubeId": "XcWu7hv0FdQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 242,
    "sourceTitle": "TC＞大サイクロンルート",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_XcWu7hv0FdQ_02",
    "enderClassId": "ec_strong_skyhigh",
    "title": "端 大スカイハイ後 #2",
    "pattern": "+24F（J中P最速）",
    "position": "端",
    "inputs": "5LK > 垂直J",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スカイハイ>弱K>垂直\n+7Fから垂直を置くので、+5Fの垂直より投げ抜けを見てから蹴れる。直投げは体感になるので+23Fパターンで狙う方が無難",
    "youtubeId": "XcWu7hv0FdQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 255,
    "sourceTitle": "TC＞大サイクロンルート",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_XcWu7hv0FdQ_03",
    "enderClassId": "ec_strong_skyhigh",
    "title": "端 大スカイハイ後 #3",
    "pattern": "+24F（J中P最速）",
    "position": "端",
    "inputs": "66 > 2LP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スカイハイ>前ステ>2弱P持続当て\n発生の遅い無敵切り返し対策。対エド・キンバリー戦で重宝",
    "youtubeId": "XcWu7hv0FdQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 273,
    "sourceTitle": "TC＞大サイクロンルート",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_XcWu7hv0FdQ_04",
    "enderClassId": "ec_strong_skyhigh",
    "title": "端 大スカイハイ後 #4",
    "pattern": "+24F（J中P最速）",
    "position": "端",
    "inputs": "DI",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スカイハイ>インパクト\n直で重なるインパクト。端でインパクトを意識させると、持続中段やラッシュ中段が通りやすくなる",
    "youtubeId": "XcWu7hv0FdQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 282,
    "sourceTitle": "TC＞大サイクロンルート",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_XcWu7hv0FdQ_05",
    "enderClassId": "ec_strong_skyhigh",
    "title": "端 大スカイハイ後 #5",
    "pattern": "+23F（J中P遅らせ）",
    "position": "端",
    "inputs": "6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スカイハイ>中段持続当て\n中段で持続当て。ランクマで6割ほど通る。SA3を含めリーサルを狙える場面では積極的に",
    "youtubeId": "XcWu7hv0FdQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 326,
    "sourceTitle": "TC＞大サイクロンルート",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_XcWu7hv0FdQ_06",
    "enderClassId": "ec_strong_skyhigh",
    "title": "端 大スカイハイ後 #6",
    "pattern": "+23F（J中P遅らせ）",
    "position": "端",
    "inputs": "66 > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 大スカイハイ>前ステ投げ\n5F投げ。シミーには行けない",
    "youtubeId": "XcWu7hv0FdQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 342,
    "sourceTitle": "TC＞大サイクロンルート",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_XcWu7hv0FdQ_07",
    "enderClassId": "ec_strong_skyhigh",
    "title": "端 大スカイハイ後 #7",
    "pattern": "+23F（J中P遅らせ）",
    "position": "端",
    "inputs": "66 > 2LK",
    "vsWakeup": {},
    "flags": {
      "low": true
    },
    "notes": "元レシピ: 大スカイハイ>前ステ>小足\n貴重な下段択。遅らせグラップやジャストパリィ対策",
    "youtubeId": "XcWu7hv0FdQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 353,
    "sourceTitle": "TC＞大サイクロンルート",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_XcWu7hv0FdQ_08",
    "enderClassId": "ec_strong_stroke",
    "title": "端 大サイクロンストローク後 #8",
    "position": "端",
    "inputs": "j.MP > 66 > DI",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大サイクロンストローク>J中P>前ステ>インパクト\n汚インパクト（+25F）。大スカイハイの代わりにストロークへ。外からは見分けにくい。ほかの絡め手: J中Pからフリップ持続中段、ストローク>J大K>小足インパクト、中スパイク>小足>小足インパクト（重ね）、J2大P>J大K>インパクト",
    "youtubeId": "XcWu7hv0FdQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 388,
    "sourceTitle": "TC＞大サイクロンルート",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_sosWrJKVhq4_01",
    "enderClassId": "ec_od_cyclone",
    "title": "TC始動 ODサイクロン後 #1",
    "inputs": "2LP(空) > 214214K > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: ODサイクロン>コパ空振り>イウサール>中段持続当て\n始動技>TC>ODサイクロン>コパン（消費）>イウサール>中段。ヒットしたら中ミキサー>中P大P（F消費）>弱スパイク>大ミキサーで、相手の体力を8割近く奪える（慣れるまではかなり難しい）。スタン後が特に狙い目。ガードされても竜巻の圧で崩したり削ったりと誤魔化しやすい。ラッシュ中段や小足からも狙える。レジェンド帯でもまだ通る連携で、ガードされても大抵良いことが起こるので、持続中段を知っている相手にも使ってOK（ジャスパだけは勘弁）",
    "youtubeId": "sosWrJKVhq4",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 24,
    "sourceTitle": "通らば8割！イウサールを活用した持続中段一閃",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_3fxmerWIE0U_02",
    "enderClassId": "ec_od_mixer",
    "title": "中央 ODミキサー後 #2",
    "pattern": "その場受け身",
    "position": "中央",
    "inputs": "5MK or 2HP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: ODミキサー>立中Kor2大P\n前中P>中サイクロンが難しければ立中K・2大Pでも代用できる。ワンボタンなので簡単。打撃をガードさせることが大事",
    "youtubeId": "3fxmerWIE0U",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 17,
    "sourceTitle": "ODミキサー後の受け身方向確認",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_3fxmerWIE0U_03",
    "enderClassId": "ec_od_mixer",
    "title": "中央 ODミキサー後 #3",
    "pattern": "その場受け身",
    "position": "中央",
    "inputs": "2HP > 214214K",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: ODミキサー>2大P>イウサール\n相手のDゲージ次第で。3本削りが確定する。相手が起き上がりに動いていてイウサールがヒットすることも多いので、しっかりフルコンボを入れる",
    "youtubeId": "3fxmerWIE0U",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 27,
    "sourceTitle": "ODミキサー後の受け身方向確認",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_3fxmerWIE0U_05",
    "enderClassId": "ec_od_mixer",
    "title": "中央 ODミキサー後 #5",
    "pattern": "後ろ受け身",
    "position": "中央",
    "inputs": "214214K",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: ODミキサー>イウサール\n後ろ受け身を確認してイウサールもよく使う。その場受け身に出すとパリィで凌がれるので注意。立ち回りでイウサールを出すとラッシュSA3を食らったりするが、ODミキサーからの場合は大丈夫",
    "youtubeId": "3fxmerWIE0U",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 58,
    "sourceTitle": "ODミキサー後の受け身方向確認",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_3fxmerWIE0U_06",
    "enderClassId": "ec_od_mixer",
    "title": "中央 ODミキサー後 #6",
    "pattern": "後ろ受け身",
    "position": "中央",
    "inputs": "236HK > バクステ",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: ODミキサー>大ワール>バクステ\nDゲージ回復に向かいたい場合は、大ワールからのバクステ気流（バクステで気流に触れる）が鉄板。時間稼ぎとして優秀",
    "youtubeId": "3fxmerWIE0U",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 76,
    "sourceTitle": "ODミキサー後の受け身方向確認",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_3fxmerWIE0U_07",
    "enderClassId": "ec_od_mixer",
    "title": "中央 ODミキサー後 #7",
    "position": "中央",
    "inputs": "66>6K",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: ODミキサー>テンペスト\nODミキサー後はラッシュを使っても打撃も投げも埋まらないので注意。ラッシュを使わずランからテンペストへ向かうのはアリ。ラッシュは止まれないが、ランなら飛びや停止を選べるので止められにくい。ODミキサーは対空にも使うのでこの状況はとても多い。しっかり受け身方向を確認していく",
    "youtubeId": "3fxmerWIE0U",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 90,
    "sourceTitle": "ODミキサー後の受け身方向確認",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_BOgQls5fvuc_01",
    "enderClassId": "ec_back_throw",
    "title": "端 後ろ投げ後 #1",
    "position": "端",
    "inputs": "66 > 2LP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 後ろ投げ>前ステ>2弱P持続当て\n端攻めで遅らせ投げをしたら前投げではなく後ろ投げになってしまった場面（位置が入れ替わる）。前ステで+6F取れる（作者も最近知った）。しゃがコパの持続当てでガード+1F、ヒット+7Fでとても便利。ガード時は大サイクロンをぶっこんでいくのも面白い",
    "youtubeId": "BOgQls5fvuc",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 10,
    "sourceTitle": "端攻め後ろ投げの起き攻め方法",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_BOgQls5fvuc_02",
    "enderClassId": "ec_back_throw",
    "title": "端 後ろ投げ後 #2",
    "position": "端",
    "inputs": "66 > 4LPLK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 後ろ投げ>前ステ>後ろ投げ\n後ろ投げで再度位置を入れ替える場合は、ちょっとだけ遅らせてから投げる。後ろ受け身の場合はシミーできるので様子見もあり",
    "youtubeId": "BOgQls5fvuc",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 35,
    "sourceTitle": "端攻め後ろ投げの起き攻め方法",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_BOgQls5fvuc_03",
    "enderClassId": "ec_back_throw",
    "title": "端 後ろ投げ後 #3",
    "position": "端",
    "inputs": "DR",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 後ろ投げ>ラッシュ\nラッシュに昇竜は安パイではないので、ラッシュから下段か中段か投げにいくのもアリ。ノーゲージで打撃や投げにいくよりとても通りやすい",
    "youtubeId": "BOgQls5fvuc",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 52,
    "sourceTitle": "端攻め後ろ投げの起き攻め方法",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_BOgQls5fvuc_04",
    "enderClassId": "ec_back_throw",
    "title": "端 後ろ投げ後 #4",
    "position": "端",
    "inputs": "DR > 6KK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 後ろ投げ>ラッシュ>フリップ\n基本は前ステ>しゃがコパか後ろ投げで良い。ラッシュ>フリップも入れ替えを狙いやすいので優先度が高そう",
    "youtubeId": "BOgQls5fvuc",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 70,
    "sourceTitle": "端攻め後ろ投げの起き攻め方法",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_09",
    "enderClassId": "ec_mid_eagle",
    "title": "どこでも 中スパイク後 #9",
    "position": "どこでも",
    "inputs": "LPLK(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 中スパイク>投げ消費>中段持続当て\n持続中段。唐突にやるとたまに当たる",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 92,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_15",
    "enderClassId": "ec_mid_eagle",
    "title": "どこでも 中スパイク後 #15",
    "position": "どこでも",
    "inputs": "236HK(溜め)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>溜め大ワール\n大ワール最大溜め。一部キャラに有効だが、最近対策されてきた（詳しくは別の動画）",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 145,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_ybIAW5Dio18_01",
        "section": "中央",
        "youtubeId": "ybIAW5Dio18",
        "startSec": 0,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "中スパイク後の溜め大ワールについて",
        "notes": "元レシピ: 中スパイク>溜め大ワール\n中央の起き攻めで逆択を食らいたくない場合にオススメ（作者もよく使う）。半分以上のキャラはリバサODを打たれても相打ち以上を取れ、Dゲージ交換がとても美味しい。後ろ受け身からの前ジャンプには大ワールがぴったり当たる。リバも強要させやすく、距離が開くので相手の起き攻めはほぼ無い。弱点はリバサ前ジャンプで、下方向に判定が強い飛び技を持つキャラには確定をもらうので、その場合は微溜めに切り替えてお仕置きする。弾抜けのSA2を持つキャラも多いので、SA状況によっては危険。その場受けでガード（パリィ）されることも多い。Dゲージの回復と削りに優れ、起き攻めを一回放棄する価値があるほど強い"
      }
    ]
  },
  {
    "id": "ax_xOZTyewt8Rw_16",
    "enderClassId": "ec_strong_eagle",
    "title": "どこでも 大スパイク後 #16",
    "position": "どこでも",
    "inputs": "2LP(空) > 飛び",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 大スパイク>コパ空振り>飛び\nコパン>詐欺飛び。とりあえず迷ったらこれ、というくらい強い",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 160,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_xOZTyewt8Rw_21",
        "section": "インパクト始動",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 196,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 大スパイク>コパ空振り>飛び\nインパクト>J8大K>大スパイク>コパン>詐欺飛び。安定して強い。やっぱり安全飛びは最強"
      },
      {
        "id": "ax_RUcGCfDJvdQ_05",
        "section": "端",
        "youtubeId": "RUcGCfDJvdQ",
        "startSec": 319,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "セットプレイ10選（Y3）",
        "notes": "元レシピ: 大スパイク>コパン>飛び\n詐欺飛び。OD昇竜ガード後大P>大スパイクやインパクト始動で発生する状況。ヒット時はコンボ、ガード時は大サイクロンで攻め継続。インパクト始動は当てた技でフレームが変わる: インパクト>J8大K>大スパイクで小パン詐欺飛び、インパクト>J大K>6中P>大スパイクで投げ>中段の持続ルート"
      }
    ]
  },
  {
    "id": "ax_xOZTyewt8Rw_17",
    "enderClassId": "ec_strong_eagle",
    "title": "どこでも 大スパイク後 #17",
    "position": "どこでも",
    "inputs": "2LK(空) > 66 > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>小足空振り>前ステ>中段持続当て\nリーサルを狙える時に使いたい",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 166,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_19",
    "enderClassId": "ec_strong_eagle",
    "title": "どこでも 大スパイク後 #19",
    "position": "どこでも",
    "inputs": "236HK(溜め)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>溜め大ワール\n大ワール最大溜め。相手にDリバを強要しやすい。OD無敵技が無いキャラに使う",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 178,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_20",
    "enderClassId": "ec_strong_eagle",
    "title": "インパクト始動 大スパイク後 #20",
    "inputs": "LPLK(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>投げ消費>中段持続当て\nインパクト>J大K>前中P>大スパイク>投げ>中段。インパクト始動の持続中段だが、あまり当たらない",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 187,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_22",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #22",
    "inputs": "バクステ > 飛び",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 大スパイク>バクステ>飛び\nTC>大スパイクの後。詐欺飛び。人類全員安全飛びが好きに違いない",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 207,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_23",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #23",
    "inputs": "6KK > 2LK",
    "vsWakeup": {},
    "flags": {
      "low": true
    },
    "notes": "元レシピ: 大スパイク>フリップ>小足\nTC>大スパイクの後、フリップ派生>小足。見づらい下段で、かなり当たる",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 215,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_24",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #24",
    "inputs": "2HK(空) > 2MK(空)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>大足空振り>中足空振り\nTC>大スパイクの後。シミーできる+5F。この文面だけで最強なのが分かる",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 221,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_gQjApuW1Dcc_06",
        "section": "TC始動",
        "youtubeId": "gQjApuW1Dcc",
        "startSec": 45,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "+5Fセットプレイ9選",
        "notes": "元レシピ: 大スパイク>大足空振り>中足空振り\nTC>大スパイクの後。あまり知られていない、シミーできる+5F。TC>大スパイクからのセットとしてぜひ覚えておきたい"
      },
      {
        "id": "ax_K7-u1zEnYH0_20",
        "section": "TC始動",
        "youtubeId": "K7-u1zEnYH0",
        "startSec": 770,
        "ownerLabel": "つのちゃんねる",
        "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
        "notes": "元レシピ: 大スパイク>大足空振り>中足空振り\n字幕は「…→強スパイク→2強K→2中K（+5F）」"
      }
    ]
  },
  {
    "id": "ax_xOZTyewt8Rw_25",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #25",
    "inputs": "2MK(空) > 2HK(空)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>中足空振り>大足空振り\nTC>大スパイクの後。シミーできない+5F。垂直で攻めたい場合はこちら",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 229,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_26",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #26",
    "inputs": "5LK(空) > 214PP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>弱K空振り>ODサイクロン\nTC>大スパイクの後。昇竜を詐欺るレシピ。安定して削れるので、Dゲージに余裕があれば強い",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 236,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_27",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #27",
    "inputs": "5MP(空) > 2MP(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>中P空振り>2中P空振り>中段持続当て\nTC>大スパイクの後。字幕は「中P>下中P>中段」。持続当てシリーズその1",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 246,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_28",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #28",
    "inputs": "5MK(空) > 2LK(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>立中K空振り>小足空振り>中段持続当て\nTC>大スパイクの後。持続当てシリーズその2",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 252,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_29",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #29",
    "inputs": "5LK(空) > 5MK(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>弱K空振り>立中K空振り>中段持続当て\nTC>大スパイクの後。字幕は「立K>中K>中段」（立Kは弱Kと解釈）。持続当てシリーズその3",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 258,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_30",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #30",
    "inputs": "後J > j.HK > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>バックジャンプ>J大K>中段持続当て\nTC>大スパイクの後、バックジャンプ大K>中段。持続当てシリーズその4",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 264,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_wV9rvhxz6Go_05",
        "section": "TC始動",
        "youtubeId": "wV9rvhxz6Go",
        "startSec": 21,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "TC大スパイク始動、持続中段7選",
        "notes": "元レシピ: 大スパイク>バックジャンプ>J大K>中段持続当て\nTC>大スパイクの後、バックジャンプ大K。中段を前ステにすれば+5F"
      }
    ]
  },
  {
    "id": "ax_xOZTyewt8Rw_31",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #31",
    "inputs": "パリィ > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>パリィ>中段持続当て\nTC>大スパイクの後。持続当てシリーズその5",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 271,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_wV9rvhxz6Go_07",
        "section": "TC始動",
        "youtubeId": "wV9rvhxz6Go",
        "startSec": 29,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "TC大スパイク始動、持続中段7選",
        "notes": "元レシピ: 大スパイク>パリィ>中段持続当て\nTC>大スパイクの後。中段を前ステにすれば+5F。豊富な選択肢で良い中段ライフを"
      }
    ]
  },
  {
    "id": "ax_xOZTyewt8Rw_32",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #32",
    "inputs": "6HP(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>中段空振り>中段持続当て\nTC>大スパイクの後。持続当てシリーズその6",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 276,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_wV9rvhxz6Go_06",
        "section": "TC始動",
        "youtubeId": "wV9rvhxz6Go",
        "startSec": 25,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "TC大スパイク始動、持続中段7選",
        "notes": "元レシピ: 大スパイク>中段空振り>中段持続当て\nTC>大スパイクの後。中段を前ステにすれば+5F"
      }
    ]
  },
  {
    "id": "ax_xOZTyewt8Rw_33",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #33",
    "inputs": "5HK(空) > DR > 6HK(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>大K空振り>ラッシュ>6大K持続当て\nTC>大スパイクの後。29F式。ラッシュ6大Kがガードでシミーできる+4Fなのは熱い",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 282,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_sSc_of0u80M_03",
        "section": "TC始動",
        "youtubeId": "sSc_of0u80M",
        "startSec": 21,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "持続当てラッシュ6大K4選",
        "notes": "元レシピ: 大スパイク>大K空振り>ラッシュ>6大K持続当て\nTC>大スパイク>大K（消費）>ラッシュ6大Kでガード+4F。Dゲージに優しく手軽にいけるのがメリットで、作者のイチオシ。ヒット時は大Pがつながる。ガード時は投げかシミー（シミーできる+4Fがイケてる）"
      }
    ]
  },
  {
    "id": "ax_xOZTyewt8Rw_34",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #34",
    "inputs": "5MK(空) > LPLK(空) > 2MP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>立中K空振り>投げ消費>2中P持続当て\nTC>大スパイクの後。持続当て。便利だが、他の選択肢の方が強い気はする",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 291,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_35",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #35",
    "inputs": "2MK(空) > 5MP(空) > 6HK(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>中足空振り>中P空振り>6大K持続当て\nTC>大スパイクの後。字幕は「下中K>中P>前大K」。持続当てでガード五分なので、コパンを振っておけば大抵通る",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 300,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_36",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #36",
    "inputs": "6HK(空) > DI",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>6大K空振り>インパクト\nTC>大スパイクの後、前大K>インパクト。パリィ押すな！と念じながら使う",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 308,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_37",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #37",
    "inputs": "5MK(空) > DI",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>立中K空振り>インパクト\nTC>大スパイクの後。汚インパクト。パリィ押せや！と念じながら使う",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 315,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_38",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #38",
    "inputs": "6KK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>フリップ\nTC>大スパイクの後、ディレイ派生フリップ（派生を遅らせる）。超強いけど超難しい",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 323,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_39",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #39",
    "inputs": "バクステ > 236HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>バクステ>大ワール\nTC>大スパイクの後。汚ワール。相手はキレる",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 329,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_40",
    "enderClassId": "ec_weak_eagle_whirl",
    "title": "TC始動 弱スパイク後 #40",
    "inputs": "2LP(空) > 214214K > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 弱スパイク>コパ空振り>イウサール>中段持続当て\nTC>ODサイクロン>強化弱スパイク>コパン>イウサール>中段。操作は難しいが超強い持続当て。ガードされても色々とわちゃりやすいので便利",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 337,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_41",
    "enderClassId": "ec_weak_eagle_whirl",
    "title": "TC始動 弱スパイク後 #41",
    "inputs": "214214K",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 弱スパイク>イウサール\nTC>ODワール>コパン>強化弱スパイク>イウサール。なんとかODワールを使いたくて仕方ないので生まれたレシピ。別に使わなくて良い",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 350,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_42",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #42",
    "inputs": "236LK(溜め)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>溜め弱ワール\nTC>OD溜めワール>コパン>強化大スパイク>溜め弱ワール。前・後ろの両方の飛びを咎められるので、安全にワールをガードさせられる",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 365,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_43",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #43",
    "inputs": "236LK(溜め) > 66 > 5HP > 214HP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>溜め弱ワール>前ステ>大P>大サイクロン持続当て\n強化大スパイク>溜め弱ワールからの派生。サイクロン部分が持続当てになり+3F取れる。デカキャラには無効",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 378,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_44",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #44",
    "inputs": "236LK(溜め) > 微下がり > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>溜め弱ワール>微下がり>中段持続当て\n強化大スパイク>溜め弱ワールからの派生。画面5割ほど移動して持続中段にいけるので見た目がすごい",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 389,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_45",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #45",
    "inputs": "66 > 飛び",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 大スパイク>前ステ>飛び\n強化大スパイク>前ステ>詐欺飛び。Dゲージ削りにいきたい時に強いかもしれない",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 399,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_46",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #46",
    "inputs": "66 > 236MK > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 大スパイク>前ステ>中ワール>投げ\n強化大スパイク>前ステ>中ワール>前投げ。使うことが皆無の中ワールを使う、汚ワール式",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 407,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_47",
    "enderClassId": "ec_weak_nail",
    "title": "TC溜めODワール 弱サイクロンネイル後 #47",
    "inputs": "飛び",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 弱サイクロンネイル>飛び\nTC>溜めODワール>弱スパイク>前中P>弱サイクロンネイル>詐欺飛び。おそらく一番簡単にODワールを使えるルート。SAゲージ回収に優れるので、Dゲージに余裕があれば使ってもOK",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 415,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_49",
    "enderClassId": "ec_strong_mixer",
    "title": "どこでも 大ミキサー後 #49",
    "pattern": "+34F（大P>大サイクロンから）",
    "position": "どこでも",
    "inputs": "5MK(空)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大ミキサー>立中K空振り\n大P>大サイクロン>大ミキサー>立中K。4Fか5Fの投げセット。とりあえずこれを組んでおけばOK",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 446,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_50",
    "enderClassId": "ec_strong_mixer",
    "title": "どこでも 大ミキサー後 #50",
    "pattern": "+34F（大P>大サイクロンから）",
    "position": "どこでも",
    "inputs": "2MK(空) > 2MP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大ミキサー>中足空振り>2中P持続当て\n大P>大サイクロン>大ミキサー>中足>2中P。持続当て。結構シビアで、ミスると鼻くそをほじりたくなる",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 455,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_51",
    "enderClassId": "ec_strong_mixer",
    "title": "どこでも 大ミキサー後 #51",
    "pattern": "+35F（TC>ODサイクロン、TC>溜めODワール>ランK）",
    "position": "どこでも",
    "inputs": "2MK(空) > 2MP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大ミキサー>中足空振り>2中P持続当て\nTC>ODサイクロン>ひゅうひゅーう>大ミキサー>中足>2中P。持続当て。大Pルートと比べて安定するのが素敵",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 465,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_Jag5HEK1Rgw_03",
        "section": "中央",
        "youtubeId": "Jag5HEK1Rgw",
        "startSec": 57,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "大ミキサー後のセットプレイ",
        "notes": "元レシピ: 大ミキサー>中足空振り>2中P持続当て\nTC>ODサイクロン>ひゅうひゅーう>大ミキサーの運搬ルートの後。中足から2中Pで最持続当てできる。立中Kでフレーム消費すると投げがすかるので注意（大Pルートのセットプレイと間違えないように）"
      },
      {
        "id": "ax_JZ5GWGxiJuo_02",
        "section": "TC溜めODワール",
        "youtubeId": "JZ5GWGxiJuo",
        "startSec": 60,
        "ownerLabel": "4shika / Yoshika",
        "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（前編）",
        "notes": "元レシピ: 大ミキサー>中足空振り>2中P持続当て\nTC>溜めODワール>ランK>大ミキサーの後。中足消費で+8F、そこから持続2中P・投げ・シミーの択。大ミキサーは遅らせが要らないので難易度が低めで、かなりのダメージと強い起き攻めを仕掛けられる（同じ起き攻めは TC>溜めODワール>遅らせ弱スパイク>遅らせ弱ミキサー>大ミキサー でもできる）"
      }
    ]
  },
  {
    "id": "ax_xOZTyewt8Rw_52",
    "enderClassId": "ec_strong_mixer_ground",
    "title": "どこでも 大ミキサー後 #52",
    "pattern": "+33F（小足>しゃがコパから）",
    "position": "どこでも",
    "inputs": "5MK(空)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大ミキサー>立中K空振り\n小足>しゃがコパ>大ミキサー>立中K。投げ間合いの外で+3Fのレシピ。様子見したい時に気軽に使いやすい",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 475,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_53",
    "enderClassId": "ec_strong_mixer",
    "title": "どこでも 大ミキサー後 #53",
    "position": "どこでも",
    "inputs": "DR > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大ミキサー>ラッシュ中段持続当て\n持続当て。まず当たらないので、下段か引き延ばしての中段を見せていきたい",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 486,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_Jag5HEK1Rgw_04",
        "section": "中央",
        "youtubeId": "Jag5HEK1Rgw",
        "startSec": 80,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "大ミキサー後のセットプレイ",
        "notes": "元レシピ: 大ミキサー>ラッシュ中段持続当て\n小足始動と大P始動の場合、ラッシュ中段で持続当てできる。中段が本命というよりは、ラッシュを引き延ばしての小足がとても当たるのでオススメ"
      }
    ]
  },
  {
    "id": "ax_xOZTyewt8Rw_54",
    "enderClassId": "ec_weak_skyhigh",
    "title": "中央 弱スカイハイ後 #54",
    "position": "中央",
    "inputs": "6HP(持続当て) or (66 > LPLK)",
    "vsWakeup": {},
    "flags": {
      "mid": true,
      "throw": true
    },
    "notes": "元レシピ: 弱スカイハイ>中段持続当てor前ステ投げ\nTC>大サイクロンストローク>弱スカイハイの後。モダンラシードの定番のセット。中央でいけるのが素敵",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 497,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_55",
    "enderClassId": "ec_strong_skyhigh_pickup",
    "title": "気流ODミキサー 大スカイハイ後 #55",
    "inputs": "j.HK > バクステ > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スカイハイ>J大K>バクステ>中段持続当て\n色々>気流ODミキサー>強スカイハイ>J大K>バクステ>中段。J2強Pのビタ押しコンボにいきたくない時に使う（作者は狙いさえしないので結構使う）",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 509,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_57",
    "enderClassId": "ec_strong_skyhigh_pickup",
    "title": "気流ODミキサー 大スカイハイ後 #57",
    "inputs": "j.MP > 6HP(空) > 2MP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スカイハイ>J中P>中段空振り>2中P持続当て\n気流ODミキサー>強スカイハイ>J中P>中段>2中P。持続当て。まれに使う",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 537,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_58",
    "enderClassId": "ec_throw",
    "title": "どこでも 投げ後 #58",
    "position": "どこでも",
    "inputs": "66 > 5MK(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>前ステ>立中K持続当て\nシンプルイズザベスト。持続当てなので前中Pでコンボにいけて、ガード時の不利も少ない",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 547,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_note_n6fe5f7740e9a_06",
        "section": "端",
        "sourceUrl": "https://note.com/yubibiseth/n/n6fe5f7740e9a",
        "ownerLabel": "ゆば",
        "sourceTitle": "202506ver.画面端　投げ後",
        "notes": "元レシピ: 投げ>前ステ>中K\n持続が重なる。ガードされて-1。6F以上の打撃で打ち返す相手には最速弱Pが勝つ。ヒットなら前中Pから中スパイク"
      },
      {
        "id": "ax_-BuizDoBNkk_02",
        "section": "端",
        "youtubeId": "-BuizDoBNkk",
        "startSec": 10,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "端投げ後の展開方法6選",
        "notes": "元レシピ: 投げ>前ステ>立中K持続当て\n最速で持続当てできる。ヒットで+8Fなので前中Pからコンボへ。ガードで-1Fなので、しれっと中足を打っても案外通る"
      },
      {
        "id": "ax_Tqua5RYeftU_02",
        "section": "端",
        "youtubeId": "Tqua5RYeftU",
        "startSec": 59,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "202506ver. 端投げ後の展開方法",
        "notes": "元レシピ: 投げ>前ステ>立中K持続当て\n最速で重ねて+8F取れるので、安定して前中Pからコンボへいける（基本は中スパイク、リーサルを狙えるならODサイクロンルート）。ガード時も-1Fでそこそこ距離が離れ、悪さがしやすい。バレるまではしれっと中足を振ってもOK（持続で当てている影響か、ランクマで相手が動いてくることはほぼ無かった）"
      }
    ]
  },
  {
    "id": "ax_xOZTyewt8Rw_60",
    "enderClassId": "ec_throw",
    "title": "どこでも 投げ後 #60",
    "position": "どこでも",
    "inputs": "DR > 5LK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>ラッシュ>弱K\nラッシュ立弱Kで、投げ間合いの外で五分。その後の2中P>中Pが自然と当たる位置なのが素敵",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 565,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_61",
    "enderClassId": "ec_back_throw",
    "title": "どこでも 後ろ投げ後 #61",
    "position": "どこでも",
    "inputs": "DR > 6HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 後ろ投げ>ラッシュ>6大K\nDゲージが余っている際に、どうしても攻めを継続したい時に。以前は+2F取れたが、今は+1F",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 576,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_62",
    "enderClassId": "ec_weak_stroke",
    "title": "TC始動 弱サイクロンストローク後 #62",
    "inputs": "6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 弱サイクロンストローク>中段持続当て\nTC>微溜め大ワール>前中P>弱サイクロンストローク>着地>中段。持続レシピ。誰も使っていないので、たまに使うと当たる",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 590,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_xOZTyewt8Rw_64",
    "enderClassId": "ec_weak_nail",
    "title": "気流ODミキサー 弱サイクロンネイル後 #64",
    "pattern": "+42F（気流ODミキサーから）",
    "inputs": "飛び",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 弱サイクロンネイル>飛び\n気流ODミキサー>前中P>弱サイクロンネイル>詐欺飛び。あまり知られていないがかなり強い",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 613,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_WkuFofkpLlU_02",
        "section": "中央",
        "youtubeId": "WkuFofkpLlU",
        "startSec": 124,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "気流ODミキサー後の展開について",
        "notes": "元レシピ: 弱サイクロンネイル>飛び\n気流ODミキサー>前中P>弱サイクロンネイルの後、詐欺飛び。気流ODミキサーをノーキャンセルにして、地上コンボから詐欺飛びを狙う。弱サイクロンネイルは低めで当てないと+43F以上になり、詐欺飛びにならない。前中P>弱サイクロンのコマンドも難しい。ラシードは飛びから大サイクロンを絡めた連携が強いので積極的に狙いたい。MR1600以上にオススメ"
      },
      {
        "id": "ax_6LXR0FoIAaI_01",
        "section": "イウサール",
        "youtubeId": "6LXR0FoIAaI",
        "startSec": 3,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "気流ODミキサーから簡単に詐欺飛びルートへ",
        "notes": "元レシピ: 弱サイクロンネイル>飛び\n配信で視聴者が提案したルート「ランK>イウサール>立中K>前ステ>弱スパイク>ODミキサー>前中P>弱サイクロンネイル」（+42F）を試したもの。気流ODミキサーで追撃せずに前中P>弱サイクロンネイルで締め、詐欺飛びで安全に重ねる。トレモでのダメージは4090。全部最速で入れられて簡単"
      }
    ]
  },
  {
    "id": "ax_xOZTyewt8Rw_65",
    "enderClassId": "ec_weak_eagle",
    "title": "どこでも 弱スパイク後 #65",
    "position": "どこでも",
    "inputs": "飛び or (66 > 6HP)",
    "vsWakeup": {},
    "flags": {
      "mid": true,
      "safeJump": true
    },
    "notes": "元レシピ: 弱スパイク>飛びor前ステ中段\nODサイクロン>前中P>弱スパイク>詐欺飛びor前ステ中段。運ぶうえに状況がとても良く、よく使う",
    "youtubeId": "xOZTyewt8Rw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 622,
    "sourceTitle": "実戦的セットプレイ65選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_ybIAW5Dio18_02",
    "enderClassId": "ec_mid_eagle",
    "title": "中央 中スパイク後 #2",
    "position": "中央",
    "inputs": "バクステ > 236K(最大溜め)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>バクステ>溜めワール\n相手が後ろ受け身をしてきたら、バクステ溜めワールで距離を取ってDゲージ回復を狙ってもOK",
    "youtubeId": "ybIAW5Dio18",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 14,
    "sourceTitle": "中スパイク後の溜め大ワールについて",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_ybIAW5Dio18_03",
    "enderClassId": "ec_mid_eagle",
    "title": "中央 中スパイク後 #3",
    "position": "中央",
    "inputs": "236HK(溜め) > 236LP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中スパイク>溜め大ワール>弱ミキサー\n溜め大ワールの後、相手の動きを様子見しつついけそうなら気流弱ミキサー。雑に+2F取れるのはやはり神",
    "youtubeId": "ybIAW5Dio18",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 21,
    "sourceTitle": "中スパイク後の溜め大ワールについて",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_RUcGCfDJvdQ_02",
    "enderClassId": "ec_weak_eagle",
    "title": "端 弱スパイク後 #2",
    "position": "端",
    "inputs": "5LK > 5LP > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 弱スパイク>弱K>弱P>投げ\n5F投げでシミー不可。春麗の低空百裂やバクステを拒否したい時に使用。基本は1の持続当て優先",
    "youtubeId": "RUcGCfDJvdQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 156,
    "sourceTitle": "セットプレイ10選（Y3）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_RUcGCfDJvdQ_08",
    "enderClassId": "ec_weak_skyhigh",
    "title": "中央 弱スカイハイ後 #8",
    "position": "中央",
    "inputs": "6HP(持続当て) or (66 > LPLK) or 垂直J",
    "vsWakeup": {},
    "flags": {
      "mid": true,
      "throw": true
    },
    "notes": "元レシピ: 弱スカイハイ>中段持続当てOR前ステ投げOR垂直\nモダンの定番の基本コンボから。前ステ投げは+5F（ブログ）。唯一中央で強いセットプレイ。クラシックでは使わず、中スパイクで端へ運ぶ",
    "youtubeId": "RUcGCfDJvdQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 439,
    "sourceTitle": "セットプレイ10選（Y3）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_RUcGCfDJvdQ_09",
    "enderClassId": "ec_strong_skyhigh_pickup",
    "title": "端 大スカイハイ後 #9",
    "position": "端",
    "inputs": "j.HK > バクステ > 6HP(持続当て) or (66 > LPLK)",
    "vsWakeup": {},
    "flags": {
      "mid": true,
      "throw": true
    },
    "notes": "元レシピ: 大スカイハイ>J大K>バクステ>中段持続当てOR前ステ投げ\n主にイウサールやODミキサーで拾った後。最速でバクステしないと持続当てにならない。前ステで5F投げ。操作が簡単なのでまずはこちらから",
    "youtubeId": "RUcGCfDJvdQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 470,
    "sourceTitle": "セットプレイ10選（Y3）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_WkuFofkpLlU_01",
        "section": "中央",
        "youtubeId": "WkuFofkpLlU",
        "startSec": 71,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "気流ODミキサー後の展開について",
        "notes": "元レシピ: 大スカイハイ>J大K>バクステ>中段持続当てOR前ステ投げ\n気流ODミキサー>大スカイハイ（J大K派生）の後。気流ODミキサーからのJ2大Pビタコンボができなくても使える。大スカイハイでダメージを取りながら持続中段を狙う。とにかく簡単で、ダメージ・SAゲージ量にも優れる。バクステ>前ステで+4〜5Fなので、4F・5F投げにも行ける。たまに垂直を見せるのもアリ。プラチナからMR2000付近まで幅広くオススメ"
      }
    ]
  },
  {
    "id": "ax_WuwZWrcPSSE_01",
    "enderClassId": "ec_sa1",
    "title": "中央 SA1後 #1",
    "pattern": "後ろ受け身",
    "position": "中央",
    "inputs": "236HK or 236LK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: SA1>大ワールor小ワール\nSA1はヒット時+1F。後ろ受け身してくれたらかなり楽で、後ろ歩きも安牌。大ワールや小ワールの弾展開が比較的やりやすく、仕切り直しに持っていける。後ろ受け身する相手はすぐ攻めてくることはほぼ無い（攻めてくる人はその場受け身をする）",
    "youtubeId": "WuwZWrcPSSE",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 87,
    "sourceTitle": "SA1を当てた後の展開について",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_WuwZWrcPSSE_02",
    "enderClassId": "ec_sa1",
    "title": "中央 SA1後 #2",
    "pattern": "その場受け身",
    "position": "中央",
    "inputs": "2MK",
    "vsWakeup": {},
    "flags": {
      "low": true
    },
    "notes": "元レシピ: SA1>中足\nその場受け身する相手は+1Fの状況を理解していることが多く、リバサ中足が定番。お互い4F・5F技が届かないことが多い。こちらも中足で対抗できる（ラシードの中足は発生7Fで、6F系の中Pにも相打ちでき、その場受けからの後ろ歩きや様子見にも届く）。ゲージがある時は中足ラッシュ、無ければ中か大サイクロンを入れ込む。受け身方向を確認したら必ず何かボタンを押す（とりあえず下がる・最速で動けないのが一番もったいない）。その場受けOD昇竜やジャスパはされたことがなく、警戒すべきは中足・コパン・立コアの打撃",
    "youtubeId": "WuwZWrcPSSE",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 158,
    "sourceTitle": "SA1を当てた後の展開について",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_WuwZWrcPSSE_03",
    "enderClassId": "ec_sa1",
    "title": "中央 SA1後 #3",
    "pattern": "その場受け身",
    "position": "中央",
    "inputs": "2LP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: SA1>2弱P\nこちらの中足を読まれると、リバサのコパンや立コア系（4F・5F）を擦られて一方負けする。リーチの長い技を持つキャラも狙ってくる。これにはしゃがコパが多い。カウンターを取ったら中足弱スパイクでリターンが高く、4F技を打たれても相打ちで済む。差し返される心配がほぼ無く、リスク小・リターン中で使いやすい",
    "youtubeId": "WuwZWrcPSSE",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 211,
    "sourceTitle": "SA1を当てた後の展開について",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_WuwZWrcPSSE_04",
    "enderClassId": "ec_sa1",
    "title": "中央 SA1後 #4",
    "pattern": "その場受け身",
    "position": "中央",
    "inputs": "5LP > 214LP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: SA1>弱P>弱サイクロン\n立ちコパに弱サイクロンを仕込む。相手の4F技を一方的に潰せるうえ、隙も少ない。しゃがコパと使い分ける",
    "youtubeId": "WuwZWrcPSSE",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 236,
    "sourceTitle": "SA1を当てた後の展開について",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n6fe5f7740e9a_01",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #1",
    "position": "端",
    "inputs": "66 > 微ラン > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 投げ>前ステ>微ラン>投げ\n投げ択。2025-06 の調整で投げ後の距離が離れ、前ステだけでは投げ間合いにならないので微ランで詰める（柔道はできるが難しくなった）。バクステされたら小技がほぼパニカンになる",
    "sourceUrl": "https://note.com/yubibiseth/n/n6fe5f7740e9a",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "202506ver.画面端　投げ後",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n6fe5f7740e9a_02",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #2",
    "position": "端",
    "inputs": "66 > 屈ガード",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>前ステ>屈ガード\nシミー。前ステ後は投げ間合いの外なので、屈ガードで待つと相手の投げが漏れることがある（相手しだい）",
    "sourceUrl": "https://note.com/yubibiseth/n/n6fe5f7740e9a",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "202506ver.画面端　投げ後",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n6fe5f7740e9a_03",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #3",
    "position": "端",
    "inputs": "66 > 微歩き > 微下がり",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>前ステ>微歩き>微下がり\nシミー。微歩きを挟むと相手の投げ仕込みが漏れやすい",
    "sourceUrl": "https://note.com/yubibiseth/n/n6fe5f7740e9a",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "202506ver.画面端　投げ後",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n6fe5f7740e9a_04",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #4",
    "position": "端",
    "inputs": "66 > 微歩き > 5MP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>前ステ>微歩き>中P\n暴れ潰しの打撃。通常ヒットなら弱P、カウンターなら中Pに繋ぐ",
    "sourceUrl": "https://note.com/yubibiseth/n/n6fe5f7740e9a",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "202506ver.画面端　投げ後",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n6fe5f7740e9a_05",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #5",
    "position": "端",
    "inputs": "66 > 2MP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>前ステ>2中P\nその場受け身なら2中Pの持続が重なる",
    "sourceUrl": "https://note.com/yubibiseth/n/n6fe5f7740e9a",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "202506ver.画面端　投げ後",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n6fe5f7740e9a_07",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #7",
    "position": "端",
    "inputs": "66 > 5HP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>前ステ>大P\n持続が重なる。ODワールに繋げられる",
    "sourceUrl": "https://note.com/yubibiseth/n/n6fe5f7740e9a",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "202506ver.画面端　投げ後",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n6fe5f7740e9a_08",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #8",
    "position": "端",
    "inputs": "236MK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>中ワール\n起き上がりに重ねて飛びを防ぐ。ヒットならラッシュから打撃、飛びに刺さればラッシュからコンボ。パリィを見たら様子見",
    "sourceUrl": "https://note.com/yubibiseth/n/n6fe5f7740e9a",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "202506ver.画面端　投げ後",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_K7-u1zEnYH0_22",
        "section": "端",
        "youtubeId": "K7-u1zEnYH0",
        "startSec": 800,
        "ownerLabel": "つのちゃんねる",
        "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
        "notes": "元レシピ: 投げ>中ワール持続当て\n字幕は「（画面端）前投げ→中ワール（持続当て）ヒット+18F ガードそこそこ有利」。ヒット時は ラッシュ弱P>中P>中スパイク、ラッシュ弱P（空中ヒット）>前中P>大スパイク、ラッシュ弱P（空中ヒット）>前中P>弱スパイク>SA3。前のバージョンでは大ワールで似たことができたが、こちらの方が強そう。ジャンプもSA1も咎められる。作者しか使っていなさそう（？）"
      }
    ]
  },
  {
    "id": "ax_note_n6fe5f7740e9a_09",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #9",
    "position": "端",
    "inputs": "236HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>大ワール\nパリィ釣りと飛び防止。パリィからラッシュが来たらODミキサーで止める。ラッシュインパクトには負ける",
    "sourceUrl": "https://note.com/yubibiseth/n/n6fe5f7740e9a",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "202506ver.画面端　投げ後",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n6fe5f7740e9a_11",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #11",
    "position": "端",
    "inputs": "DR > 6HP",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 投げ>ラッシュ>中段\n固まる相手に。遅らせグラップには勝つことがあるが、早いグラップや最速暴れには負ける",
    "sourceUrl": "https://note.com/yubibiseth/n/n6fe5f7740e9a",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "202506ver.画面端　投げ後",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n6fe5f7740e9a_12",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #12",
    "position": "端",
    "inputs": "DR > 6HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>ラッシュ>6大K\n持続重ね。端でヒットした後は中K>中Pが繋がらないので、中Pから必殺技へ",
    "sourceUrl": "https://note.com/yubibiseth/n/n6fe5f7740e9a",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "202506ver.画面端　投げ後",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_note_n6fe5f7740e9a_13",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #13",
    "position": "端",
    "inputs": "DR > 236HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>ラッシュ>大ワール\n無敵技が無く SA1 に頼るしかない相手に",
    "sourceUrl": "https://note.com/yubibiseth/n/n6fe5f7740e9a",
    "sourceType": "shared",
    "ownerLabel": "ゆば",
    "sourceTitle": "202506ver.画面端　投げ後",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_gQjApuW1Dcc_01",
    "enderClassId": "ec_weak_skyhigh",
    "title": "中央 弱スカイハイ後 #1",
    "position": "中央",
    "inputs": "66",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 弱スカイハイ>前ステ\nTC>大サイクロン>ストローク>弱スカイハイの後、前ステで+5F。貴重な中央の5Fセット。モダンの基本コンボでもあるが、クラシックだと中スパイクで運ぶのでほぼ使われない不遇レシピ",
    "youtubeId": "gQjApuW1Dcc",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 0,
    "sourceTitle": "+5Fセットプレイ9選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_K7-u1zEnYH0_17",
        "section": "TC始動",
        "youtubeId": "K7-u1zEnYH0",
        "startSec": 736,
        "ownerLabel": "つのちゃんねる",
        "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
        "notes": "元レシピ: 弱スカイハイ>前ステ\n字幕は「…→弱スカイハイ→前ステ（+5F）」。+5Fで投げ"
      }
    ]
  },
  {
    "id": "ax_gQjApuW1Dcc_02",
    "enderClassId": "ec_weak_eagle",
    "title": "中央 弱スパイク後 #2",
    "position": "中央",
    "inputs": "66 > 66",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 弱スパイク>前ステ2回\n中P>ODサイクロン>前中P>弱スパイクの後、前ステ2回で+5F。貴重な中央の5Fセット＋運びコンボ。シミーもでき、Dゲージに余裕があれば積極的に狙いたい",
    "youtubeId": "gQjApuW1Dcc",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 10,
    "sourceTitle": "+5Fセットプレイ9選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_gQjApuW1Dcc_07",
    "enderClassId": "ec_weak_stroke",
    "title": "どこでも 弱サイクロンストローク後 #7",
    "position": "どこでも",
    "inputs": "66",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 弱サイクロンストローク>前ステ\nTC>微溜めワール>弱サイクロンストロークの後、着地して前ステで+5F。難易度は高いがかなり強い。オカルトだが、ここの前ステから垂直をするとグラップする人がとても多い気がする",
    "youtubeId": "gQjApuW1Dcc",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 56,
    "sourceTitle": "+5Fセットプレイ9選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_gQjApuW1Dcc_09",
    "enderClassId": "ec_strong_mixer",
    "title": "どこでも 大ミキサー後 #9",
    "position": "どこでも",
    "inputs": "5MK(空)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大ミキサー>立中K空振り\n大サイクロン>大ミキサーの後、立中Kで+5F。咄嗟の反撃の後にどうぞ。大ミキサー後は案外レシピが曖昧になりがちなので、ここで覚えておく。補足: 基本的にはシミーできる+5Fの方が強いが、密着+5Fの場合は一部の昇竜を垂直で空かせる",
    "youtubeId": "gQjApuW1Dcc",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 70,
    "sourceTitle": "+5Fセットプレイ9選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_-BuizDoBNkk_01",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #1",
    "position": "端",
    "inputs": "ラン > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 投げ>ラン>投げ\n投げ>投げ>以下ループ。原初の形。ランから投げを重ねるのは少し癖があるが、確実に慣れておきたい",
    "youtubeId": "-BuizDoBNkk",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 0,
    "sourceTitle": "端投げ後の展開方法6選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_Tqua5RYeftU_01",
        "section": "端",
        "youtubeId": "Tqua5RYeftU",
        "startSec": 41,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "202506ver. 端投げ後の展開方法",
        "notes": "元レシピ: 投げ>ラン>投げ\n基本形のラン投げ（柔道はランを経由すれば可能）。調整で難易度は上がったが、元々体感重ねから投げるラシードにはそれほど影響は無い。練習すればほぼミスなくできるので、まずはここから覚える"
      }
    ]
  },
  {
    "id": "ax_-BuizDoBNkk_03",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #3",
    "position": "端",
    "inputs": "歩き > 5HP > 236HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>歩き>大P>大ワール\n作者のお気に入り。Dゲージ削りに優れ、有利Fも取れる。前飛びには対空が間に合うが、インパクトだけは勘弁",
    "youtubeId": "-BuizDoBNkk",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 24,
    "sourceTitle": "端投げ後の展開方法6選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_Tqua5RYeftU_03",
        "section": "端",
        "youtubeId": "Tqua5RYeftU",
        "startSec": 97,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "202506ver. 端投げ後の展開方法",
        "notes": "元レシピ: 投げ>歩き>大P>大ワール\n単に歩いて大P>大ワールもオススメ。調整で歩きによるDゲージ増加量が増え、見逃せない回復量。飛びもほぼ確らず、危ないのはインパクトくらい。ダメージは取れないので、有利状況を作りながらDゲージを回復したり削ったりする用途で使う"
      }
    ]
  },
  {
    "id": "ax_-BuizDoBNkk_04",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #4",
    "position": "端",
    "inputs": "2MP(持続当て) > 2MK",
    "vsWakeup": {},
    "flags": {
      "low": true
    },
    "notes": "元レシピ: 投げ>2中P持続当て>中足\n高難易度だが、安定できれば超強い。ヒット時は中足から、自信があれば中足>弱スパイクでも良いが弱ミキサーが無難。ガード時は中・大サイクロンや微溜めワールを使って固めていく",
    "youtubeId": "-BuizDoBNkk",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 35,
    "sourceTitle": "端投げ後の展開方法6選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_Tqua5RYeftU_04",
        "section": "端",
        "youtubeId": "Tqua5RYeftU",
        "startSec": 124,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "202506ver. 端投げ後の展開方法",
        "notes": "元レシピ: 投げ>2中P持続当て>中足\n同じ役割として、削りにいく時にとてもオススメ。難易度は高め。最大+8F、ガード時+3F。ヒット時はビタで中足がつながるがやめた方が無難（入れ込むならリスクを考えて弱ミキサー）。ガード時は中足から中サイクロン・大サイクロン・微溜めワールの3択がとても強そう。中サイクロンは相手が最速で4F暴れしてきても相打ちが取れ、ファジーで押している場合は8F以上有利（中サイクロンがカウンターヒットしたら立中Kを押しておくのが丸い）。しゃがみガードの相手には+7F取れ、中P系列を連続ガードにできる（デカキャラ・立ちガード・パリィには通じない）。前ジャンプいれっぱにも対応していて、その場合は前中P>弱サイクロン>前中P>弱サイクロンネイルからいつもの飛びにいく。中足が届かなさそうな間合いからの溜めワールは本当によく通る。キャラ限や立ち・しゃがみで状況が変わる"
      }
    ]
  },
  {
    "id": "ax_-BuizDoBNkk_05",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #5",
    "position": "端",
    "inputs": "DR",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>ラッシュ\nラッシュからあれこれ。基本は下段か中段で攻める（上段技を打つのはもったいない）。投げももちろんOK",
    "youtubeId": "-BuizDoBNkk",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 52,
    "sourceTitle": "端投げ後の展開方法6選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_sSc_of0u80M_01",
    "enderClassId": "ec_throw",
    "title": "中央 投げ後 #1",
    "position": "中央",
    "inputs": "LPLK(空) > DR > 6HK(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>投げ消費>ラッシュ>6大K持続当て\n空投げ>ラッシュ6大Kでガード+2F。空投げが得意な人は絶対に覚えておきたい。ラッシュ6大Kがヒットしたら大Pがつながるので、ラッシュを絡めるとダメージが高い（ノーゲージなら中P>中サイクロンでいつもの）。ガード時は本命の投げか、対択のシミーで揺さぶる",
    "youtubeId": "sSc_of0u80M",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 0,
    "sourceTitle": "持続当てラッシュ6大K4選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_sSc_of0u80M_04",
    "enderClassId": "ec_strong_mixer",
    "title": "中央 大ミキサー後 #4",
    "position": "中央",
    "inputs": "DR > 6HK(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大ミキサー>ラッシュ>6大K持続当て\n大P>ODサイクロン>前中P>大ミキサーの後、ラッシュ6大Kでガード+4F。6大Kの代わりに大ワールを打っても+4Fで投げ間合い（SA警戒やDゲージが厳しいとき）。ゲージ運用は重いがとても強い選択肢",
    "youtubeId": "sSc_of0u80M",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 31,
    "sourceTitle": "持続当てラッシュ6大K4選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_PkyCjmyr42c_01",
    "enderClassId": "ec_strong_eagle",
    "title": "対ザンギエフ 大スパイク後 #1",
    "inputs": "5HP(空) > j.HK",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 大スパイク>大P空振り>J大K\n対ザンギエフ。中大TC>大スパイク>大P（F消費）>J大Kの起き攻め。SAが溜まっているザンギには、もにょもにょでも安全飛びでもグルグルされるが、これはSA3・SA2・SA1の全てを回避できる安全な飛び（詐欺飛び）。J大Kを打つタイミングをずらすとジャスパも取られにくい（4Fまでずらせる）。ガードされた後は中Pまでは連続ガードにできるが、その後は運が絡む（後ろ歩きは二回転が当たり、バクステはSA2でシバかれることがある）。なるべく何も起こしたくなければバックジャンプ（SA2・SA3には勝つがSA1には負ける）",
    "youtubeId": "PkyCjmyr42c",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 21,
    "sourceTitle": "対ザンギエフ戦オススメの起き攻め方法",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Jag5HEK1Rgw_01",
    "enderClassId": "ec_strong_mixer_ground",
    "title": "中央 大ミキサー後 #1",
    "pattern": "+33F（小足>しゃがコパから）",
    "position": "中央",
    "inputs": "2MK(空) > 2MP > 5MP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大ミキサー>中足空振り>2中P>中P\n小足>しゃがコパ>大ミキサーの後。中足（空振り）からしゃがんで様子見すると+4Fで投げ間合いの外。2中P>中Pがちょうど当たる距離。同じ大ミキサー〆でも始動で有利Fが違う（小足ルート+33F・大Pルート+34F・TCルート+35F）",
    "youtubeId": "Jag5HEK1Rgw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 21,
    "sourceTitle": "大ミキサー後のセットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Jag5HEK1Rgw_02",
    "enderClassId": "ec_strong_mixer",
    "title": "中央 大ミキサー後 #2",
    "pattern": "+34F（大P>大サイクロンから）",
    "position": "中央",
    "inputs": "5MK or 2MK",
    "vsWakeup": {},
    "flags": {
      "low": true
    },
    "notes": "元レシピ: 大ミキサー>立中Kor中足\n大P>大サイクロン>大ミキサーの後。立中Kで+4か5Fになり投げ。中足からは2中Pで持続当て",
    "youtubeId": "Jag5HEK1Rgw",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 39,
    "sourceTitle": "大ミキサー後のセットプレイ",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_CQgCAy3iKng_04",
    "enderClassId": "ec_mid_eagle",
    "title": "端 中スパイク後 #4",
    "position": "端",
    "inputs": "66 > DR",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 中スパイク>前ステ>ラッシュ\n前ステ>ラッシュから中段・下段・投げ・垂直の4択。中段は持続になりガード+3。下段がとても強い。ゲージが豊富なら積極的に狙いたい（別の動画に詳しい解説あり）",
    "youtubeId": "CQgCAy3iKng",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 60,
    "sourceTitle": "中スパイク締めセットプレイ6選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    },
    "alsoIn": [
      {
        "id": "ax_Lb6O2R2-qv8_09",
        "section": "どこでも",
        "youtubeId": "Lb6O2R2-qv8",
        "startSec": 387,
        "ownerLabel": "ばるぱ",
        "sourceTitle": "中スパイク後の起き攻め・セットプレイ徹底解説",
        "notes": "元レシピ: 中スパイク>前ステ>ラッシュ中段持続当て\n字幕は「前ステ>最速ラッシュ」。ゲージが余っている時におすすめ。最速のラッシュ中段は持続で埋まるので、ノーマルヒットでも立ち強Kがつながる。ガードでも密着+3Fで投げにいける。ラッシュ中段でリーサルが見えたらこれ。ラッシュを伸ばして下段や投げで攻め手を散らせる。ただし中段はジャスパを取られやすい"
      },
      {
        "id": "ax_1kSITEM8Dcg_05",
        "section": "どこでも",
        "youtubeId": "1kSITEM8Dcg",
        "startSec": 112,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "中スパイク後の実用セットプレイ7選",
        "notes": "元レシピ: 中スパイク>前ステ>ラッシュ中段持続当て\n前ステラッシュ中段。ゲージがある時にオススメで、かなり圧がある。持続当てになるので、ヒット時は立中Kがつながってダメージアップ。ガード時も+3F取れる（相手からしたらラッシュ中段をガードしたのに投げ択をしかけられる）。中央でも受け身方向に関わらず持続当てできる。当然下段を打ってもOKで、結構な頻度で当たる。シミーはできないが垂直はイケていて、一部キャラのOD昇竜をすかせる"
      },
      {
        "id": "ax_xOZTyewt8Rw_14",
        "section": "どこでも",
        "youtubeId": "xOZTyewt8Rw",
        "startSec": 133,
        "ownerLabel": "doskonnbu",
        "sourceTitle": "実戦的セットプレイ65選",
        "notes": "元レシピ: 中スパイク>前ステ>ラッシュ中段持続当て\n持続当てでガード+3F取れるのは便利。ただそのまま出すとまず当たらないので、引き伸ばして下段などが強い"
      }
    ]
  },
  {
    "id": "ax_K7-u1zEnYH0_01",
    "enderClassId": "ec_weak_stroke",
    "title": "どこでも 弱サイクロンストローク後 #1",
    "position": "どこでも",
    "inputs": "j.HK",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 弱サイクロンストローク>J大K\n字幕は「5中P→5強K→ノーキャン弱ミキサー→6中P→弱サイクロン→上派生→J強K（詐欺飛び）」。J大Kが詐欺飛び。作者いわく噂の最強で、慣れるまで難しいが中下＋詐欺の最強連携。起き上がり無敵を設定してタイミングを掴む（作者が参考にした人は「もにゅもにゅ」と呼んでいた）。同じ〆にできる始動: 2中K→CR5中K→5中P→5強K→ノーキャン弱ミキサー→6中P→弱サイクロン（中足ラッシュ）、DI（壁ドン）→5中K→弱ミキサー→6中P→弱サイクロン、DI（自分が端）→フリップ→5中K→弱ミキサー→6中P→弱サイクロン、5中P→ODスパイク→弱サイクロン（または →DR6中P→6中P→弱サイクロン）、DI（スタン）→強ワール最大溜め→ODミキサー→ODスカイハイ→6中P→弱サイクロン",
    "youtubeId": "K7-u1zEnYH0",
    "sourceType": "shared",
    "ownerLabel": "つのちゃんねる",
    "startSec": 537,
    "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_K7-u1zEnYH0_02",
    "enderClassId": "ec_weak_stroke",
    "title": "どこでも 弱サイクロンストローク後 #2",
    "position": "どこでも",
    "inputs": "j.HK > 2LK",
    "vsWakeup": {},
    "flags": {
      "low": true
    },
    "notes": "元レシピ: 弱サイクロンストローク>J大K>小足\n字幕は「…→弱サイクロン→上派生→（早め）J強K→2弱K（下段択）」。J大Kを早めに出して着地し、下段で崩す",
    "youtubeId": "K7-u1zEnYH0",
    "sourceType": "shared",
    "ownerLabel": "つのちゃんねる",
    "startSec": 554,
    "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_K7-u1zEnYH0_10",
    "enderClassId": "ec_weak_eagle",
    "title": "どこでも 弱スパイク後 #10",
    "position": "どこでも",
    "inputs": "214LP>4K(持続当て) > j.HP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 弱スパイク>弱サイクロンストローク持続当て>J大P\n字幕は「弱スパイク→弱サイクロン（持続）上派生→J強P（中段）」。弱サイクロンを持続当てして上派生、J大Pが中段。下の竜巻が当たるとJ攻撃もヒットする。作者がこれを一番使っている。下段択や透かし投げもある",
    "youtubeId": "K7-u1zEnYH0",
    "sourceType": "shared",
    "ownerLabel": "つのちゃんねる",
    "startSec": 666,
    "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_K7-u1zEnYH0_11",
    "enderClassId": "ec_weak_eagle",
    "title": "どこでも 弱スパイク後 #11",
    "position": "どこでも",
    "inputs": "214LP>4K(持続当て) > j.LP > 2LK",
    "vsWakeup": {},
    "flags": {
      "low": true
    },
    "notes": "元レシピ: 弱スパイク>弱サイクロンストローク持続当て>J弱P>小足\n字幕は「弱スパイク→弱サイクロン（持続）上派生→J弱P→2弱K（下段）→5弱P→中ミキサー」。上の中段との択になる下段。ヒット時は弱P>中ミキサー",
    "youtubeId": "K7-u1zEnYH0",
    "sourceType": "shared",
    "ownerLabel": "つのちゃんねる",
    "startSec": 670,
    "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_K7-u1zEnYH0_12",
    "enderClassId": "ec_mid_mixer",
    "title": "どこでも 中ミキサー後 #12",
    "position": "どこでも",
    "inputs": "2MK(空) > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 中ミキサー>中足空振り>投げ\n字幕は「中ミキサー→2中K（+4F）」。安全に投げたいならこれ",
    "youtubeId": "K7-u1zEnYH0",
    "sourceType": "shared",
    "ownerLabel": "つのちゃんねる",
    "startSec": 678,
    "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_K7-u1zEnYH0_13",
    "enderClassId": "ec_mid_mixer",
    "title": "どこでも 中ミキサー後 #13",
    "position": "どこでも",
    "inputs": "214HP>4K(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 中ミキサー>大サイクロンストローク持続当て\n字幕は「中ミキサー→強サイクロン（持続）上派生→・・・」。強サイクロンの持続当てで、その後は弱スパイク〆（弱サイクロン持続当て）と同じ（J攻撃の中段と下段の択）",
    "youtubeId": "K7-u1zEnYH0",
    "sourceType": "shared",
    "ownerLabel": "つのちゃんねる",
    "startSec": 684,
    "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_K7-u1zEnYH0_18",
    "enderClassId": "ec_weak_skyhigh",
    "title": "TC始動 弱スカイハイ後 #18",
    "inputs": "66 > 2LK",
    "vsWakeup": {},
    "flags": {
      "low": true
    },
    "notes": "元レシピ: 弱スカイハイ>前ステ>小足\n字幕は「…→弱スカイハイ→前ステ→2弱K（下段択）」",
    "youtubeId": "K7-u1zEnYH0",
    "sourceType": "shared",
    "ownerLabel": "つのちゃんねる",
    "startSec": 745,
    "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_K7-u1zEnYH0_19",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #19",
    "inputs": "バクステ > j.HK",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 大スパイク>バクステ>J大K\n字幕は「5中P→5強K→強スパイク→バクステ→J強K（詐欺飛び）」。J大Kが詐欺飛び。TC強スパイクからはいろいろあるが、正直もにゅもにゅ（この動画の弱サイクロンストローク）でいい、と作者",
    "youtubeId": "K7-u1zEnYH0",
    "sourceType": "shared",
    "ownerLabel": "つのちゃんねる",
    "startSec": 761,
    "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_K7-u1zEnYH0_21",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #21",
    "inputs": "66 > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>前ステ>中段持続当て\n字幕は「…→強スパイク→前ステ→6強P（+4F）」。中段がガードで+4F。中段を見てパリィする人に刺さるのでおもしろい",
    "youtubeId": "K7-u1zEnYH0",
    "sourceType": "shared",
    "ownerLabel": "つのちゃんねる",
    "startSec": 787,
    "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_K7-u1zEnYH0_23",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #23",
    "position": "端",
    "inputs": "236HK > DR > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 投げ>大ワール>ラッシュ>投げ\n字幕は「（画面端）前投げ→強ワール（パリィ釣り）→DR投げ」。大ワールでパリィを釣ってラッシュ投げ。最速暴れには負けるが、6F以上の技なら一方勝ち。最速暴れに負けたことはほとんど無い。パリィ釣りが気持ちいい",
    "youtubeId": "K7-u1zEnYH0",
    "sourceType": "shared",
    "ownerLabel": "つのちゃんねる",
    "startSec": 825,
    "sourceTitle": "実用的コンボ・セットプレイ集 2025年最新版",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_wV9rvhxz6Go_01",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #1",
    "inputs": "2MP(空) > 5MP(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>2中P空振り>中P空振り>中段持続当て\nTC>大スパイクの後。この動画のセットは全て、最後の中段を前ステにすれば+5F。投げを混ぜつつ攻め込む",
    "youtubeId": "wV9rvhxz6Go",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 3,
    "sourceTitle": "TC大スパイク始動、持続中段7選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_wV9rvhxz6Go_02",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #2",
    "inputs": "2LK(空) > 5MK(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>小足空振り>立中K空振り>中段持続当て\nTC>大スパイクの後。中段を前ステにすれば+5F",
    "youtubeId": "wV9rvhxz6Go",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 7,
    "sourceTitle": "TC大スパイク始動、持続中段7選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_wV9rvhxz6Go_03",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #3",
    "inputs": "5MK(空) > 5LK(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>立中K空振り>弱K空振り>中段持続当て\nTC>大スパイクの後。字幕は「立中K>立K>中段」（立Kは弱Kと解釈）。中段を前ステにすれば+5F",
    "youtubeId": "wV9rvhxz6Go",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 11,
    "sourceTitle": "TC大スパイク始動、持続中段7選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_wV9rvhxz6Go_04",
    "enderClassId": "ec_strong_eagle",
    "title": "TC始動 大スパイク後 #4",
    "inputs": "LPLK(空) > 2LK(空) > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>投げ消費>小足空振り>中段持続当て\nTC>大スパイクの後。中段を前ステにすれば+5F",
    "youtubeId": "wV9rvhxz6Go",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 17,
    "sourceTitle": "TC大スパイク始動、持続中段7選",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_FOMDMgeeM3E_01",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #1",
    "pattern": "+63F（TC>溜めODワール>最速大スパイク）",
    "inputs": "5MP(空) > 66 > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大スパイク>中P空振り>前ステ>中段持続当て\n中P消費で+41F、前ステで+23F、そこから前強P（中段）の持続当て。いつもの持続中段とその対択ができる",
    "youtubeId": "FOMDMgeeM3E",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 68,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（後編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_FOMDMgeeM3E_02",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #2",
    "pattern": "+63F（TC>溜めODワール>最速大スパイク）",
    "inputs": "5MP(空) > 66 > 66 > LPLK or 2LK",
    "vsWakeup": {},
    "flags": {
      "low": true,
      "throw": true
    },
    "notes": "元レシピ: 大スパイク>中P空振り>前ステ>前ステ>投げor小足\n中P消費で+41F、前ステ2回で+5F、そこから投げか屈弱K",
    "youtubeId": "FOMDMgeeM3E",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 78,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（後編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_FOMDMgeeM3E_03",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #3",
    "pattern": "+63F（TC>溜めODワール>最速大スパイク）",
    "inputs": "5MP(空) > 前飛び",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 大スパイク>中P空振り>前飛び\n中P消費（+41F）から前ジャンプ攻撃。フレーム的には6F詐欺飛びだが、一部キャラ（ジェイミー・ディージェイ・ガイル・エレナ）を除いて対空無敵技が根本ヒットしないのでガードでき、実質5F詐欺飛びになる",
    "youtubeId": "FOMDMgeeM3E",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 96,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（後編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_FOMDMgeeM3E_04",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #4",
    "pattern": "+63F（TC>溜めODワール>最速大スパイク）",
    "inputs": "6KK > j.HP",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 大スパイク>フリップ>J大P\nフリップで+31F。派生から（目押しの）J強Pをタイミングよく出すと6F詐欺飛びになる",
    "youtubeId": "FOMDMgeeM3E",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 120,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（後編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_FOMDMgeeM3E_05",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #5",
    "pattern": "+63F（TC>溜めODワール>最速大スパイク）",
    "inputs": "6KK > 236HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>フリップ>大ワール\nフリップ（+31F）から強ワール。ヒット時は中サイクロンかTC。ガード時はTCで連続ガードのDゲージ削り連携ができる",
    "youtubeId": "FOMDMgeeM3E",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 136,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（後編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_FOMDMgeeM3E_06",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #6",
    "pattern": "+63F（TC>溜めODワール>最速大スパイク）",
    "inputs": "66 > 214PP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>前ステ>ODサイクロン\n前ステで+45F。ODサイクロンから遅らせ打撃をすると安全重ねになる。ジャスパされても-2Fなので確定反撃が無い",
    "youtubeId": "FOMDMgeeM3E",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 163,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（後編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_FOMDMgeeM3E_07",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #7",
    "pattern": "+63F（TC>溜めODワール>最速大スパイク）",
    "inputs": "66 > 214MP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>前ステ>中サイクロン\n前ステ（+45F）から中サイクロン（-5F）。重なっているように見えて実は重なっていない、パリィ・SA釣りの連携。この起き攻めの前にラン→中サイクロンで重ねる択を見せておくと、より汚さに磨きがかかる",
    "youtubeId": "FOMDMgeeM3E",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 196,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（後編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_FOMDMgeeM3E_08",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #8",
    "pattern": "+63F（TC>溜めODワール>最速大スパイク）",
    "inputs": "214LP>4K",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>弱サイクロンストローク\n字幕は「弱サイク>後K派生>ジャンプ攻撃」。発生の遅い無敵技に対して安全重ねになる。重なっているので、1Fから対空無敵の技を持っていないキャラにも使える",
    "youtubeId": "FOMDMgeeM3E",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 220,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（後編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_FOMDMgeeM3E_09",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #9",
    "pattern": "+63F（TC>溜めODワール>最速大スパイク）",
    "inputs": "214MK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>中スパイク\n中スパイクで+4F。シンプルな密着有利択だが、スパイクでのフレーム消費はなかなか見る機会が無いので、相手にフレームを誤認させられるかもしれない",
    "youtubeId": "FOMDMgeeM3E",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 236,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（後編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_FOMDMgeeM3E_10",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #10",
    "pattern": "+63F（TC>溜めODワール>最速大スパイク）",
    "inputs": "前飛び > DR > 2LP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>前飛び>ラッシュ>2弱P\n前ジャンプ攻撃を空振りして+17F、そこからDR屈弱P。9F以上の発生の無敵技に安全重ねができる",
    "youtubeId": "FOMDMgeeM3E",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 253,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（後編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_FOMDMgeeM3E_11",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #11",
    "pattern": "+63F（TC>溜めODワール>最速大スパイク）",
    "inputs": "前飛び > 2LK(空) > 2LP",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>前飛び>小足空振り>2弱P\n前ジャンプ攻撃の空振り（+17F）から屈弱K>屈弱P。こちらも9F以上の無敵技に安全重ねができる。屈弱Pがヒットしたら屈中Kがつながる",
    "youtubeId": "FOMDMgeeM3E",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 267,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（後編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_FOMDMgeeM3E_12",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #12",
    "pattern": "+60F（TC>溜めODワール>弱P>大スパイク）",
    "inputs": "66 > 飛び",
    "vsWakeup": {},
    "flags": {
      "safeJump": true
    },
    "notes": "元レシピ: 大スパイク>前ステ>飛び\nTC>溜めODワール>（弱P）強スパイクの後。最速の強スパイクより有利Fは減るが、2つの強力なセットプレイができるので先にこちらから覚えてもいいかもしれない。前ステ>前ジャンプ攻撃はシンプルに詐欺飛び",
    "youtubeId": "FOMDMgeeM3E",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 293,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（後編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_FOMDMgeeM3E_13",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #13",
    "pattern": "+60F（TC>溜めODワール>弱P>大スパイク）",
    "inputs": "236LK(溜め)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>溜め弱ワール\nTC>溜めODワール>（弱P）強スパイクの後。射程の長いSAや弾抜け技以外には実質的な安全重ねになる。相手が弱ワールをガードしたと思ったら、ガードを確認して弱ミキサー（連続ガードにできる）",
    "youtubeId": "FOMDMgeeM3E",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 323,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（後編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_FOMDMgeeM3E_14",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #14",
    "pattern": "+63F（TC>溜めODワール>最速大スパイク）",
    "inputs": "溜めODワール",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>溜めODワール\n気流強スパイクからのDゲージ削り連携。字幕は「強スパイク>溜めODワール>（ガード確認）弱ミキサー>中P>ODサイク>SA2>強サイク>前転>立弱K>弱ミキサー>立中P>中スパイクorSA1」。キャミィのSA3・ディージェイのSA2以外に安全重ね。削りは中スパイク〆で1900、SA1〆で2075。もう1つの「強スパイク>前ステ>ODサイク>弱ミキサー>（以下同じ）」はザンギのSA3以外に安全重ね（削り1775 / 1950）",
    "youtubeId": "FOMDMgeeM3E",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 452,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（後編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_UFvlrp39yPQ_01",
    "enderClassId": "ec_weak_nail",
    "title": "端 弱サイクロンネイル後 #1",
    "position": "端",
    "inputs": "j.HK > 前飛び",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 弱サイクロンネイル>J大K>前飛び\n通称もにゅもにゅ（TC>弱ミキサー>前中P>弱サイクロンネイル）の後、J大Kを振って前ジャンプ。ほぼ全ての昇竜・無敵技を透かせる（マノンのSA2や、陽炎の舞も暗転後の三角飛びで避けられる）。春麗やDJなど真上に判定が強い無敵技は基本避けられない。前歩きは案外されず、されたらとりあえず投げで対応。遅らせグラップに勝てるのが大きな利点で、パニカン確認しやすいので落ち着いて立中K始動。表択が強いので、裏択・たまの絡め手として十分実用的",
    "youtubeId": "UFvlrp39yPQ",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 6,
    "sourceTitle": "もにゅもにゅ前ジャンプ一閃",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_JZ5GWGxiJuo_01",
    "enderClassId": "ec_strong_mixer",
    "title": "TC溜めODワール 大ミキサー後 #1",
    "pattern": "+35F（TC>ODサイクロン、TC>溜めODワール>ランK）",
    "inputs": "LPLK(空)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大ミキサー>投げ消費\nTC>溜めODワール>ランK>大ミキサー（35F有利・2900ダメージ）の後。投げ消費で+5F、そこから投げか打撃",
    "youtubeId": "JZ5GWGxiJuo",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 48,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（前編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_JZ5GWGxiJuo_03",
    "enderClassId": "ec_strong_mixer_whirl",
    "title": "TC溜めODワール 大ミキサー後 #3",
    "inputs": "2MP(空) > 2MP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大ミキサー>2中P空振り>2中P持続当て\nコパコパ気流強ミキサー（TC>溜めODワール>コパを2回空振り>大ミキサー。2736ダメージ）の後、+29F。字幕は「屈中P→持続屈中P」",
    "youtubeId": "JZ5GWGxiJuo",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 381,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（前編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_JZ5GWGxiJuo_04",
    "enderClassId": "ec_strong_mixer_whirl",
    "title": "TC溜めODワール 大ミキサー後 #4",
    "inputs": "DR > 6HK(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大ミキサー>ラッシュ>6大K持続当て\nコパコパ気流強ミキサーの後。字幕は「DR前強K（ガード時シミー可）」",
    "youtubeId": "JZ5GWGxiJuo",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 390,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（前編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_JZ5GWGxiJuo_05",
    "enderClassId": "ec_strong_mixer_whirl",
    "title": "TC溜めODワール 大ミキサー後 #5",
    "inputs": "DR > 6HP(持続当て)",
    "vsWakeup": {},
    "flags": {
      "mid": true
    },
    "notes": "元レシピ: 大ミキサー>ラッシュ>中段持続当て\nコパコパ気流強ミキサーの後。字幕は「DR前強P（4F目重ね）」",
    "youtubeId": "JZ5GWGxiJuo",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 399,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（前編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_JZ5GWGxiJuo_06",
    "enderClassId": "ec_strong_mixer_whirl",
    "title": "TC溜めODワール 大ミキサー後 #6",
    "inputs": "5LP(空) > 5LP(空) > LPLK",
    "vsWakeup": {},
    "flags": {
      "throw": true
    },
    "notes": "元レシピ: 大ミキサー>弱P空振り>弱P空振り>投げ\nコパコパ気流強ミキサーの後。字幕は「弱P×2 +5F シミー可」。相手の起き上がりに投げがぴったり重なり、後ろ下がりで投げ抜けを狩ることもできる",
    "youtubeId": "JZ5GWGxiJuo",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 411,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（前編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_JZ5GWGxiJuo_07",
    "enderClassId": "ec_strong_mixer_whirl",
    "title": "TC溜めODワール 大ミキサー後 #7",
    "inputs": "236HK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大ミキサー>大ワール\nコパコパ気流強ミキサーの後。字幕は「強ワール ヒット+12F ガード+4F シミー可」。SA1対策などになる弾重ねで、ヒット時はコンボ。ガードされても投げと打撃の択を仕掛けられ、後ろ下がりでの投げ抜け狩りまでできる。距離と有利Fが絶妙なので多彩なセットプレイを選べるのがこのルートの魅力",
    "youtubeId": "JZ5GWGxiJuo",
    "sourceType": "shared",
    "ownerLabel": "4shika / Yoshika",
    "startSec": 423,
    "sourceTitle": "タゲコン→溜めODワールのコンボとセットプレイ（前編）",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Kvn86yydVIk_01",
    "enderClassId": "ec_strong_eagle_whirl",
    "title": "TC溜めODワール 大スパイク後 #1",
    "inputs": "66 > 5HP > 214HP(持続当て)",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 大スパイク>前ステ>大P>大サイクロン持続当て\nTC>OD溜めワール>コパン（空振り）>大スパイクの後、気流に前ステして大P>大サイクロンを持続当て。立ちガード・しゃがみガードのどちらでも+3Fになる。ここの前ステ位置が神の間合い。デカキャラ以外に",
    "youtubeId": "Kvn86yydVIk",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 3,
    "sourceTitle": "TC溜めODワールを使った大サイクロン持続当て連携",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  },
  {
    "id": "ax_Tqua5RYeftU_05",
    "enderClassId": "ec_throw",
    "title": "端 投げ後 #5",
    "position": "端",
    "inputs": "DR > 2LP or 5LK",
    "vsWakeup": {},
    "flags": {},
    "notes": "元レシピ: 投げ>ラッシュ>コパor弱K\n4ゲージ以上ある時はラッシュを絡めるのもアリ。基本は中段・下段・投げの3択でOK。作者のオススメはコパンと立Kの使い分けで、コパンだと投げ間合い+2F、立Kだと五分の投げ間合い外（ギリギリ投げ間合いの外になっているのがポイント）。シミーを歩きすぎて2中P>中Pのコンボをすかすミスを無くせる。投げにいきたい時はコパン、様子見したい時は立Kで、シミーする必要が無い（ちょうど2中P>中Pが当たってくれる）。逆択の中足が当たらないのも見逃せない。デカキャラには無効（投げ間合いが大きすぎる）。ほかにラッシュ6大Kで+2F、大Kで+3Fも取れるが、ジャスパの仕様的に今のバージョンでは下段・中段にいった方が強いと作者は思っている",
    "youtubeId": "Tqua5RYeftU",
    "sourceType": "shared",
    "ownerLabel": "doskonnbu",
    "startSec": 265,
    "sourceTitle": "202506ver. 端投げ後の展開方法",
    "votes": {
      "good": 0,
      "bad": 0,
      "brokenInCurrentVer": 0
    }
  }
];

// キャラ対策（相手キャラの並び → 新しい動画から）
export const ARCHIVER_MATCHUPS: MatchupEntry[] = [
  {
    "opponent": "Ryu",
    "perspective": "共通",
    "summary": "初中級者でもできる対策と練習方法。波動拳は被弾しないことが一番大事で、タイミングを読んで飛ぶ。大ゴスの後は暴れず、波衝撃は弱と強を見分ける",
    "threats": [
      {
        "name": "波動拳",
        "about": "弾。弾を持たないキャラは特に苦戦する（豪鬼・ガイルなど弾持ちに共通の考え方）"
      },
      {
        "name": "大ゴス",
        "about": "ガードさせてリュウ+3。いきなり密着で有利を取れる強い技。発生は意外と遅い"
      },
      {
        "name": "足刀",
        "about": "かなり強い技。-8 ほどあるが、だいたい反撃が届かない"
      },
      {
        "name": "波衝撃",
        "about": "短い弱と長い強がある。弱はガードで-3、強は+2。声やモーションで見分けられる"
      }
    ],
    "youtubeId": "5xlUdexlw3w",
    "sourceTitle": "リュウ対策",
    "publishedAt": "2026-02-10",
    "patchVersion": "Y3",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_5xlUdexlw3w_ryu_01",
        "threats": [
          "波動拳"
        ],
        "topic": "立ち回り",
        "title": "端の距離の波動拳は、1回前ジャンプで近づく",
        "text": "画面端の距離で撃たれる波動拳は相手にリスクが無く、悪いことしか無い。弾を踏まないように1回前ジャンプで近づく（この距離なら対空されない）",
        "recipes": [],
        "startSec": 15,
        "scenes": [
          47,
          59
        ]
      },
      {
        "id": "mu_5xlUdexlw3w_ryu_02",
        "threats": [
          "波動拳"
        ],
        "topic": "立ち回り",
        "title": "見てから飛ばず、撃ってきそうなタイミングで飛ぶ。撃たないなら歩く",
        "text": "昇龍拳の間合いに入ったら、波動拳を見てから飛ぶと対空される。撃ってきそうなタイミングで、波動拳と同時に飛ばないとジャンプ攻撃は当たらない。飛ぶかもしれないと思わせれば相手は撃たなくなるので、撃たないなら前に歩いて通常技で触りに行く。大事なのは自分のジャンプ攻撃が届く距離を把握すること（目安は端から1回前ジャンプした距離）。撃つ側も1回飛びを通されたら波動拳6発分くらいのダメージを食らう",
        "recipes": [],
        "startSec": 70,
        "scenes": [
          85,
          110,
          130,
          162
        ]
      },
      {
        "id": "mu_5xlUdexlw3w_ryu_03",
        "threats": [
          "波動拳"
        ],
        "topic": "立ち回り",
        "title": "初級は歩いてガード、中級はパリィと垂直ジャンプで避ける",
        "text": "初級: 歩いてガードでジャンプの距離まで近づき、撃つところで飛ぶ。中級: パリィを狙う（ドライブゲージが減らず得）。弾を垂直ジャンプで避けると、画面に弾が残っているあいだ次の波動拳が撃てないので、その間に前に歩ける（慣れるまでは難しいが、地味に大事）",
        "recipes": [],
        "startSec": 187,
        "scenes": [
          200,
          211,
          223
        ]
      },
      {
        "id": "mu_5xlUdexlw3w_ryu_04",
        "threats": [
          "波動拳"
        ],
        "topic": "反撃",
        "title": "上級: ジャストパリィから前ジャンプで、次の波動拳に飛びが確定",
        "text": "体に当たる直前でパリィするとジャストパリィになり、すぐ動けるので、次の波動拳に飛びが確定する（弾キャラ全部に使える）。入力は、パリィを押したらすぐ前斜め上を押してガードに戻す。ジャスパが成功したときだけ前ジャンプが出る。練習はトレモで、弱波動拳と強波動拳を別スロットに記録してランダム再生（再生情報はオフ）。被弾しなければ、連打されても悪いことは起きていない",
        "recipes": [],
        "startSec": 246,
        "scenes": [
          257,
          289,
          300,
          334
        ]
      },
      {
        "id": "mu_5xlUdexlw3w_ryu_05",
        "threats": [
          "大ゴス"
        ],
        "topic": "守り",
        "title": "大ゴスの後は暴れない。インパクトが有効",
        "text": "大ゴスはガードさせてリュウ+3なので、小技などで暴れるのは基本禁止（やるなら無敵技）。その後のしゃがみ中P波動・中Pからのターゲットコンボ・波衝撃には、大ゴスをガードした後のインパクトが勝つ（確定する）。負け筋はキャンセルラッシュからのラッシュと様子見。狙い目はリュウのドライブゲージが2〜3本と少ないとき（キャンセルラッシュをしにくいので、ゲージを使わない攻めが来やすい）",
        "recipes": [],
        "startSec": 425,
        "scenes": [
          438,
          481,
          493,
          516
        ]
      },
      {
        "id": "mu_5xlUdexlw3w_ryu_06",
        "threats": [
          "大ゴス"
        ],
        "topic": "守り",
        "title": "大ゴスの先端をガードしたら、バックジャンプかバクステで逃げる",
        "text": "大ゴスは意外と発生が遅く、実戦では先端をガードする場面が多い。その場合しゃがみ中Pが届かないことがあり、リュウは中足を打ってくるが、バックジャンプやバックステップでかわせる。近いと中足に当たったり、しゃがみ中Pが届いて飛べないのでダメだが、先端気味なら逃げるのがおすすめ",
        "recipes": [],
        "startSec": 536,
        "scenes": [
          551,
          562
        ]
      },
      {
        "id": "mu_5xlUdexlw3w_ryu_07",
        "threats": [
          "足刀",
          "大ゴス"
        ],
        "topic": "立ち回り",
        "title": "足刀と大ゴスには、垂直ジャンプを置く",
        "text": "足刀は-8ほどあるが、だいたい反撃が届かない（とても近ければ中攻撃が届くこともあるので、自キャラで調べる）。共通の対策は垂直ジャンプ。大ゴスや足刀が来そうなタイミングや立ち回りの中で垂直を置いておき、かみ合ったら上から殴る。練習はトレモで、垂直ジャンプから大ゴス・垂直ジャンプから足刀を記録して、相手の着地に合わせて垂直し、ちゃんと反撃できるようにする",
        "recipes": [],
        "startSec": 576,
        "scenes": [
          590,
          601,
          625
        ]
      },
      {
        "id": "mu_5xlUdexlw3w_ryu_08",
        "threats": [
          "波衝撃"
        ],
        "topic": "守り",
        "title": "弱波衝撃の後はボタンを押し、強波衝撃の後は押さない",
        "text": "弱波衝撃はガードさせて-3でこちらのターンなので、中攻撃・中足ラッシュ・近ければ投げなどをしてよい。強波衝撃はリュウ+2なので押すと負ける（やるなら無敵技）。まず弱と強を見分けられるようにする（声でもモーションでも分かる）。練習はトレモで、前ステしゃがみ中Kから弱波衝撃・強波衝撃を記録してガードする",
        "recipes": [],
        "startSec": 652,
        "scenes": [
          667,
          678,
          700
        ]
      },
      {
        "id": "mu_5xlUdexlw3w_ryu_09",
        "threats": [
          "波衝撃"
        ],
        "topic": "守り",
        "title": "弱波衝撃をガードするタイミングで小技を押せば、強波衝撃に割り込める",
        "text": "弱波衝撃をガードするタイミングで発生の早い技を押しておくと、弱波衝撃ならガードになり、強波衝撃には割り込んでコンボに行ける。中足強波衝撃でぼったくられることが無くなる（大Pからの波衝撃も割れる）。ただしリュウが集中モードのときは大P強波衝撃が連続ガードになり、中足強波衝撃は最速4Fでないと割れない",
        "recipes": [],
        "startSec": 754,
        "scenes": [
          780,
          806,
          817
        ]
      }
    ]
  },
  {
    "opponent": "Ryu",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "UPlhQMG9how",
    "sourceTitle": "リュウ戦 vs Nagoya Kun",
    "publishedAt": "2026-04-25",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_UPlhQMG9how_ryu_01",
        "threats": [
          "波動拳"
        ],
        "topic": "立ち回り",
        "title": "リュウ戦の基本はジャスパ飛び",
        "text": "リュウ戦の基本はこのジャスパ飛び（波動をジャストパリィしてからの前飛び。豪鬼戦の対策パネルと同じ考え方）",
        "recipes": [],
        "startSec": 139,
        "scenes": []
      },
      {
        "id": "mu_UPlhQMG9how_ryu_02",
        "threats": [],
        "topic": "守り",
        "title": "端では弱スカイハイとワール溜めでごまかす",
        "text": "画面端では弱スカイハイとワール溜めでごまかしていくスタイル",
        "recipes": [],
        "startSec": 165,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Ryu",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_ryu_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 中央 垂直大K大P、端 中サイクロン",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央は 垂直大K大P、端は 中サイクロン。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央",
            "inputs": "j.8HK > 5HP",
            "recipeJa": "垂直J大K>大P"
          },
          {
            "label": "端",
            "inputs": "214MP",
            "recipeJa": "中サイクロン"
          }
        ],
        "startSec": 114,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Luke",
    "perspective": "共通",
    "summary": "サンドブラストには安全な撃ち方が無く、弾を追うラッシュも無いので、弾だけで負けることはほぼない。本命は生ラッシュと強フラッシュナックル。画面が揺れたらルーク有利",
    "threats": [
      {
        "name": "サンドブラスト",
        "about": "弾速が速い弾。有利フレームが取れないので安全な撃ち方（安全波動）が無い"
      },
      {
        "name": "生ラッシュ・サプレッサー",
        "about": "ルークの本命の攻め。サプレッサーはラッシュ止めの技を潰してくる"
      },
      {
        "name": "強フラッシュナックル",
        "about": "溜められる強攻撃の突進技。ガードさせて有利。上級者はこちらの技をスカすように撃ってくる"
      },
      {
        "name": "弱攻撃3連打",
        "about": "弱攻撃3回から弱サンドブラスト。しゃがみガードだと連続ガードになる"
      },
      {
        "name": "ガードさせて有利な技",
        "about": "大攻撃や膝など。ルーク有利のときは画面が揺れる"
      },
      {
        "name": "投げの後の攻め",
        "about": "中央で投げた後のラッシュや前ステ"
      }
    ],
    "youtubeId": "wNntVNTfdRY",
    "sourceTitle": "最新版ルーク対策",
    "publishedAt": "2026-11-04",
    "patchVersion": "Y4",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_wNntVNTfdRY_luke_01",
        "threats": [
          "サンドブラスト"
        ],
        "topic": "立ち回り",
        "title": "安全な撃ち方が無いので、連打されたらガード後に飛ぶ",
        "text": "普通の波動拳キャラは弱波動を良い距離でガードさせれば次の飛びが確定しない（安全波動）が、サンドブラストは弾速が速いぶん有利フレームが取れず、どうガードさせても次の飛びが確定する。連打してくるならガードした後に飛べばよい。弾を追いかけるラッシュも成立しないので、本命はラッシュ。サンドブラストだけで負ける試合はほぼなく、負けるのは飛びやラッシュ・大Pラッシュなど別の理由。弾は気にしすぎない",
        "recipes": [],
        "startSec": 19,
        "scenes": [
          80,
          139
        ]
      },
      {
        "id": "mu_wNntVNTfdRY_luke_02",
        "threats": [
          "サンドブラスト"
        ],
        "topic": "反撃",
        "title": "弱サンドブラストは、ジャストパリィからラッシュで確定",
        "text": "弱サンドブラストがギリギリ届かないくらいの距離でジャストパリィからラッシュすると確定が取れる（大攻撃でもいける）。中サンドブラストはキャラ差があり、ラッシュが強いキャラならラッシュ4F技が確定する。優先は弱への確定（ほぼどのキャラでも取れる）",
        "recipes": [],
        "startSec": 186,
        "scenes": [
          205,
          238
        ]
      },
      {
        "id": "mu_wNntVNTfdRY_luke_03",
        "threats": [
          "生ラッシュ・サプレッサー"
        ],
        "topic": "守り",
        "title": "サプレッサーには、ラッシュを見て垂直ジャンプ",
        "text": "勝敗の起点はルークの生ラッシュ。普通のラッシュならラッシュ止めを頑張ればよいが、サプレッサーがラッシュ止めを潰してくる。完全な答えは無いが、ラッシュを見たら垂直ジャンプが結構あり（手前で止まられて昇龍を食らうくらいでリスクは小さく、サプレッサーならフルコン）。無理せずパリィもあり。遠めなら長めの技で止める",
        "recipes": [],
        "startSec": 287,
        "scenes": [
          315,
          338
        ]
      },
      {
        "id": "mu_wNntVNTfdRY_luke_04",
        "threats": [
          "強フラッシュナックル"
        ],
        "topic": "守り",
        "title": "強フラッシュナックルの溜めにはインパクト（バックジャンプも）",
        "text": "ガードさせて有利なので、しゃがみ中Pなどから溜めて撃たれると向こうのターンになる。初心者帯は特に、ルークが溜め始めたらインパクトを狙う。バックジャンプもあり。相手にSA3があるとインパクトが負けるので注意",
        "recipes": [],
        "startSec": 353,
        "scenes": [
          375,
          393
        ]
      },
      {
        "id": "mu_wNntVNTfdRY_luke_05",
        "threats": [
          "強フラッシュナックル"
        ],
        "topic": "守り",
        "title": "上級者の強フラッシュナックルは、手を出さずに我慢する",
        "text": "上級者は、こちらが打ち返したくなる場面で撃って、こちらの技をスカして当ててくる（撃った瞬間にこちらが空振っていれば離し、そうでなければ溜める）。サプレッサーもある。とっさに手を出したくなる場面では我慢して、強フラッシュナックルやサプレッサーを待つ（ディージェイのジャックナイフマキシマムと同じ）",
        "recipes": [],
        "startSec": 401,
        "scenes": [
          431,
          469
        ]
      },
      {
        "id": "mu_wNntVNTfdRY_luke_06",
        "threats": [
          "強フラッシュナックル"
        ],
        "topic": "反撃",
        "title": "安定はパリィ。ジャスパならインパクトが入る",
        "text": "安定はパリィ。ジャストパリィが取れればインパクトが入る（たまに入らないことがあるが基本は入る）。ドライブゲージに余裕があれば、ジャスパが取れたら反撃・失敗したらドライブリバーサルもあり",
        "recipes": [],
        "startSec": 484,
        "scenes": [
          503,
          518
        ]
      },
      {
        "id": "mu_wNntVNTfdRY_luke_07",
        "threats": [
          "弱攻撃3連打"
        ],
        "topic": "反撃",
        "title": "3発目を立ちガードすると連続ガードが切れて、インパクトが確定",
        "text": "弱攻撃3回から弱サンドブラスト（-8だが確定を取れる技は一部）は、しゃがみガードだと連続ガード。2発目の後に立って3発目を立ちガードすると連続ガードが切れ、インパクトが確定する。ジャスパも狙える",
        "recipes": [],
        "startSec": 566,
        "scenes": [
          598,
          623
        ]
      },
      {
        "id": "mu_wNntVNTfdRY_luke_08",
        "threats": [
          "ガードさせて有利な技"
        ],
        "topic": "守り",
        "title": "画面が揺れたらルーク有利なので押さない。基本は立ちガード",
        "text": "大攻撃や膝などは、ガードして画面が揺れたらルーク有利なのでボタンを押さない。揺れなければこちら有利か五分なので押す。ガードさせて有利な技の多くは、しゃがみガードだから有利になっているだけで、立ちガードなら有利を取られない。立ちガードとしゃがみガードを混ぜるだけでルークは自由に有利を取れなくなるので、基本は立つ",
        "recipes": [],
        "startSec": 648,
        "scenes": [
          671,
          709,
          739
        ]
      },
      {
        "id": "mu_wNntVNTfdRY_luke_09",
        "threats": [
          "投げの後の攻め"
        ],
        "topic": "守り",
        "title": "中央で投げられた後のラッシュには OD 無敵技、前ステには4F",
        "text": "中央で投げられた後に走ってくるラッシュには、その場受け身からの OD 無敵技が確定で勝つ（後ろ受け身だとラッシュ強フラッシュナックルで潰される）。投げの後の前ステは五分なので、4F の技を押せば相打ち以上。ジャストパリィを狙うのもあり。画面端で投げられた後は柔道なので無理",
        "recipes": [],
        "startSec": 767,
        "scenes": [
          786,
          815,
          835
        ]
      }
    ]
  },
  {
    "opponent": "Luke",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_luke_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 垂直大K大P（中央・端）",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央・端とも 垂直大K大P。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央・端",
            "inputs": "j.8HK > 5HP",
            "recipeJa": "垂直J大K>大P"
          }
        ],
        "startSec": 0,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Jamie",
    "perspective": "共通",
    "threats": [
      {
        "name": "大足",
        "about": "ガードしたときのマイナスがとても大きい"
      }
    ],
    "youtubeId": "-Hb4pK51CoA",
    "sourceTitle": "ワンポイントキャラ対策 part1",
    "publishedAt": "2025-04-09",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_-Hb4pK51CoA_jamie_01",
        "threats": [
          "大足"
        ],
        "topic": "反撃",
        "title": "大足には、他では入らないような大きな反撃が入る",
        "text": "大足への反撃を大足などにしている人が多いが、マイナスがとても大きいので、他のキャラには入らないような大きな反撃が入る（先端は無理）。自キャラで調べておく",
        "recipes": [],
        "startSec": 97,
        "scenes": [
          107,
          119
        ]
      }
    ]
  },
  {
    "opponent": "Jamie",
    "perspective": "共通",
    "summary": "確定反撃をしっかり取る、酔いレベルを簡単に上げさせない、しゃがみガードを固める、の3点。直接飲める距離を作らず、飲むための技はめり込ませてガードして反撃する",
    "threats": [
      {
        "name": "しゃがみ大K",
        "about": "ヒット確認して酔いレベルを上げられる。ガードで-10だがリーチが長い"
      },
      {
        "name": "酔疾歩",
        "about": "突進技。弱・中-6、強-5、OD-1。先端だと-3やジェイミー有利になることも"
      },
      {
        "name": "弱P>弱K>中P",
        "about": "酔いレベル1以上で使える特殊技の連携。2段目で止めると-8"
      },
      {
        "name": "流酔拳",
        "about": "ジェイミーの主力。弱・中・強-6、OD-3。ガード後に2段目・3段目へ派生できる"
      },
      {
        "name": "酔いレベル（飲み）",
        "about": "酔いレベル0だと使える技が少なく、通常技や投げのダメージも低い。まずは1に上げたい"
      },
      {
        "name": "ラッシュ大P",
        "about": "発生が早く多段で、インパクトやアーマーにも強い。ガードさせて+1"
      },
      {
        "name": "流酔脚",
        "about": "画面端で決めて酔いレベルを上げる連携に使う"
      },
      {
        "name": "無影蹴",
        "about": "酔いレベル1以上で使える空中からの急降下技"
      },
      {
        "name": "天辰",
        "about": "酔いレベル3以上で使えるコマンド投げ"
      }
    ],
    "youtubeId": "2hlzmFHWOXg",
    "sourceTitle": "ジェイミー対策",
    "publishedAt": "2023-12-30",
    "patchVersion": "Y1",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_2hlzmFHWOXg_jamie_01",
        "threats": [
          "しゃがみ大K"
        ],
        "topic": "反撃",
        "title": "しゃがみ大Kは-10。しゃがみ大Kなど10F以内の長い技で反撃",
        "text": "まともに反撃できないとジェイミーは連発してくる。-10と隙は大きいがリーチが長いので、キャラによっては難しいが、だいたいこちらもしゃがみ大Kで反撃できる（ルークならしゃがみ大K、近ければ大Pも）。10F以内の長い技で反撃する",
        "recipes": [],
        "startSec": 24,
        "scenes": [
          35,
          55
        ]
      },
      {
        "id": "mu_2hlzmFHWOXg_jamie_02",
        "threats": [
          "酔疾歩"
        ],
        "topic": "反撃",
        "title": "酔疾歩は、前に歩いてめり込ませてガードし、長めの5F〜6Fで反撃",
        "text": "ラウンド序盤に酔いレベルを上げたいジェイミーが狙いがち。弱・中は-6、強は-5、OD は-1で反撃無し。難しければ全部5Fの長めの技で反撃するのが楽（ルークなら立ち弱Kや立ち中K）。先端ガードだと-3、ジェイミー有利になることもあるので、めり込んだときだけ反撃できる。前に歩いてめり込ませるようにガードする",
        "recipes": [],
        "startSec": 77,
        "scenes": [
          80,
          107,
          131
        ]
      },
      {
        "id": "mu_2hlzmFHWOXg_jamie_03",
        "threats": [
          "弱P>弱K>中P"
        ],
        "topic": "反撃",
        "title": "特殊技の2段目まで出したら、8F以内の長い技で反撃",
        "text": "酔いレベル1以上で使える連携で、攻めによく使う。2段目で止めると-8なので、大体のキャラの中攻撃が確定する。3段目まで出されても連続ガードなので、2段目まで派生したのを見たら8F以内の長い技を押して大丈夫",
        "recipes": [],
        "startSec": 158,
        "scenes": [
          168,
          192
        ]
      },
      {
        "id": "mu_2hlzmFHWOXg_jamie_04",
        "threats": [
          "流酔拳"
        ],
        "topic": "反撃",
        "title": "流酔拳は、めり込んだら6Fで反撃。派生を読むか6Fの無敵技で",
        "text": "一番ガードする機会が多い主力技。弱・中・強とも-6（OD は-3で反撃無し）なので、長めの6Fで反撃する。先端は届かないので、めり込んだのを確認してから（怪しければ手を出さない）。ガードされた後に2段目・3段目へ派生でき、反撃しようとすると2段目に潰されることがあるが、3段目までガードすると大きな隙があり大攻撃でも入る。1回反撃した後は様子見を混ぜて派生に反撃する。読み合いをしたくなければ、6Fの無敵技（ルークの OD ライジングアッパーなど）で派生に関係なく反撃",
        "recipes": [],
        "startSec": 208,
        "scenes": [
          228,
          251,
          266,
          298
        ]
      },
      {
        "id": "mu_2hlzmFHWOXg_jamie_05",
        "threats": [
          "酔いレベル（飲み）"
        ],
        "topic": "立ち回り",
        "title": "直接飲める距離を作らず、飲むための技をめり込ませてガードする",
        "text": "ジェイミーは開幕とにかく酔いレベルを1に上げたい。一番楽なのは離れてくれた相手に直接飲むことなので、直接飲みに仕置きできる距離（ラッシュ・弾・長い技など、自キャラで）を意識する。直接飲めないと、しゃがみ大K・流酔拳・後ろ投げ・酔疾歩（OD 含む）を当てて上げようとして無理に技を打ってくるので、前に歩いてめり込ませながらガードして反撃する。中足やしゃがみ大Kを食らわないよう、歩きながらしゃがみガードを固める。弾を持つキャラは弾も有効",
        "recipes": [],
        "startSec": 318,
        "scenes": [
          333,
          357,
          385,
          427
        ]
      },
      {
        "id": "mu_2hlzmFHWOXg_jamie_06",
        "threats": [
          "ラッシュ大P"
        ],
        "topic": "守り",
        "title": "ラッシュ大Pには垂直。ガードしたら後ろ歩き",
        "text": "発生が早く見てから止めるのが難しく、多段なのでインパクトやアーマーにも強く、ガードさせて+1の主力の連携。垂直ジャンプがかみ合えば大Pの隙を上から攻撃できる。ガードしてしまっても+1で投げ間合いではないので慌てなくてよい。ジェイミーは歩いて投げる必要があるので、後ろ歩きで投げをスカして反撃（ラッシュ大Pからのしゃがみ弱Pもガードできる）。その後のしゃがみ中Kには後ろ歩きが負けるが、4Fで勝てるので読み合いになる",
        "recipes": [],
        "startSec": 465,
        "scenes": [
          484,
          505,
          526,
          548
        ]
      },
      {
        "id": "mu_2hlzmFHWOXg_jamie_07",
        "threats": [
          "酔いレベル（飲み）"
        ],
        "topic": "反撃",
        "title": "OD酔疾歩からの飲みには、その場受け身からラッシュで仕置き",
        "text": "OD酔疾歩からレベルを一気に2つ上げてくる人がいる。後ろ受け身だと止めにくいが、その場受け身ならだいたいのキャラで仕置きできる。OD酔疾歩を食らった後は必ずその場受け身にし、飲んでいる時間が長ければラッシュから仕置きする",
        "recipes": [],
        "startSec": 560,
        "scenes": [
          576,
          589
        ]
      },
      {
        "id": "mu_2hlzmFHWOXg_jamie_08",
        "threats": [
          "流酔脚"
        ],
        "topic": "守り",
        "title": "画面端の流酔脚の後はジェイミー不利。最速4Fか投げ",
        "text": "画面端で流酔脚を決めて酔いレベルを上げる連携は、実はジェイミー-1。最速の4Fが安定、または投げなどで自分のターンにする（知らないと攻めを継続される）。ただし酔いレベルが3から4に上がるときと OD 版は、ジェイミーが大幅有利",
        "recipes": [],
        "startSec": 599,
        "scenes": [
          611,
          623,
          646
        ]
      },
      {
        "id": "mu_2hlzmFHWOXg_jamie_09",
        "threats": [
          "無影蹴"
        ],
        "topic": "対空",
        "title": "無影蹴は高めでガードすれば有利。手前落ちの着地を反撃",
        "text": "昇龍拳系の対空があるキャラは普通に対空でよい。通常技対空のキャラは通常ジャンプとの読み合いになるが、キャミィのストライクと同じで、高めでガードすれば基本こちら有利（よほど足元でなければ）。透かしで飛んできて昇龍拳を釣る手前落ちもあるので、レベル1以上になったら意識し、読めたら着地にしっかり反撃（硬直は長い）",
        "recipes": [],
        "startSec": 667,
        "scenes": [
          684,
          708,
          723
        ]
      },
      {
        "id": "mu_2hlzmFHWOXg_jamie_10",
        "threats": [
          "天辰"
        ],
        "topic": "守り",
        "title": "酔いレベル3以上はコマンド投げがある。無敵技・バクステ・垂直を多めに",
        "text": "コマンド投げ（ガードできない）は酔いレベル3以上で使えるので、2以下なら警戒しなくてよい。3以上になるとラッシュからの投げが強力なガチ択になるので、無敵技を多めにしたり、投げを読んでバックステップや垂直を入れる。相手の酔いレベルをしっかり見る",
        "recipes": [],
        "startSec": 748,
        "scenes": [
          760,
          776
        ]
      }
    ]
  },
  {
    "opponent": "Jamie",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "3Wn5IRrBEj4",
    "sourceTitle": "OD無影蹴には2中Pを狙え！",
    "publishedAt": "2026-06-16",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_3Wn5IRrBEj4_jamie_01",
        "threats": [
          "無影蹴"
        ],
        "topic": "対空",
        "title": "OD無影蹴（急降下の逆択）には2中P",
        "text": "OD無影蹴のような急降下の逆択には、2中Pが本当に便利。投げ間合いの外でファジー気味に打てば、勝手に落としてくれる",
        "recipes": [
          {
            "inputs": "2MP",
            "recipeJa": "2中P"
          }
        ],
        "startSec": 7,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Jamie",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "asIqwyrdolI",
    "sourceTitle": "テンペスト反撃集",
    "publishedAt": "2025-10-07",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_asIqwyrdolI_jamie_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "SA・OD無敵技をガードしたら、テンペストで反撃",
        "text": "SA・OD無敵技をガードした後はテンペストで反撃する。テンペスト始動はとてもダメージが高く、大P>大スパイクではもったいない。テンペストでパニカンを取ると「こやつやるな」感を演出できるので、余裕があれば狙いたい",
        "recipes": [
          {
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          }
        ],
        "startSec": 0,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Jamie",
    "perspective": "ラシード",
    "summary": "酒を2杯飲まれるまでは絶対有利、飲まれたら絶対不利。それまでワール主体で体力差をつけ、ワールで前歩きをさせてラッシュを通す",
    "threats": [],
    "youtubeId": "Rdx1N0PC6Cs",
    "sourceTitle": "ジェイミー戦 vs かずのこ",
    "publishedAt": "2025-07-16",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_Rdx1N0PC6Cs_jamie_01",
        "threats": [
          "酔いレベル（飲み）"
        ],
        "topic": "立ち回り",
        "title": "酒2杯までは絶対有利。ワール主体で体力差をつける",
        "text": "酒を2杯飲まれるまで、ジェイミーはワールに対して前飛びかインパクトしかできない。飲まれるまでは絶対有利、2杯飲まれたら立ち回りは絶対不利なので、それまでに体力差をつけておく。飲ませない立ち回り・ワールの打ち方・ラッシュの打ち方が肝心",
        "recipes": [],
        "startSec": 37,
        "scenes": [
          43,
          49,
          56
        ]
      },
      {
        "id": "mu_Rdx1N0PC6Cs_jamie_02",
        "threats": [],
        "topic": "攻め",
        "title": "ワールで前歩きをさせてからラッシュ",
        "text": "ジェイミーは弾を持っていないのでラッシュはかなり通しやすいが、いきなり打っても通りにくい。ワールを打って相手に前歩きをさせるのがとても重要で、相手が弾を嫌がりだしたらラッシュをぶち込む。相手が待つ場合は無闇に突っ込まず、ラインを上げつつ冷静に弾を打つ",
        "recipes": [],
        "startSec": 12,
        "scenes": [
          22,
          27,
          31
        ]
      },
      {
        "id": "mu_Rdx1N0PC6Cs_jamie_03",
        "threats": [],
        "topic": "立ち回り",
        "title": "地上の差し合いは微妙。置き技にワールを打つ",
        "text": "地上の差し合いは微妙（弱体化したとはいえ、ジェイミーの立中Kに勝てる技が無い）。置き技に対してワールを打つイメージで、どこまでいっても弾主体",
        "recipes": [],
        "startSec": 330,
        "scenes": []
      },
      {
        "id": "mu_Rdx1N0PC6Cs_jamie_04",
        "threats": [
          "酔いレベル（飲み）"
        ],
        "topic": "立ち回り",
        "title": "酒2でイウサールを打つと OD爆廻で返されることがある",
        "text": "酒2の状態でイウサールを打つと、OD爆廻で返されることがある。忘れがちなポイントなので注意",
        "recipes": [],
        "startSec": 330,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Jamie",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_jamie_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は テンペスト（中央・端）",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央・端とも テンペスト。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央・端",
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          }
        ],
        "startSec": 10,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Chun-Li",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "xP24FTy4TSk",
    "sourceTitle": "その低空百裂、落とせます",
    "publishedAt": "2026-08-14",
    "patchVersion": "Y4",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_xP24FTy4TSk_chunli_01",
        "threats": [
          "低空百裂"
        ],
        "topic": "対空",
        "title": "低空百裂は2中Pで落とす",
        "text": "上方向に判定が強めな2中P（中攻撃）は、低空百裂のような低空技の迎撃に強い",
        "recipes": [
          {
            "inputs": "2MP",
            "recipeJa": "2中P"
          }
        ],
        "startSec": 12,
        "scenes": [
          19
        ]
      }
    ]
  },
  {
    "opponent": "Chun-Li",
    "perspective": "ラシード",
    "summary": "しゃがコパの暴れと、前に歩いて技を置かせてのワールが軸。2中Pで低空百裂にも対応できる",
    "threats": [],
    "youtubeId": "h9-zBPpKL9E",
    "sourceTitle": "春麗戦で意識している3つのこと",
    "publishedAt": "2026-07-16",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_h9-zBPpKL9E_chunli_01",
        "threats": [
          "立ち弱P・中足"
        ],
        "topic": "守り",
        "title": "立コパ・中足を通し放題にしない。しゃがコパで暴れる",
        "text": "春麗の立ち小P・中足を通し放題にしたら一生勝てない。しゃがみ小Pをしっかり使い、読み負けることはあっても要所で暴れて読み合いにする。前に歩いて相手に技を出させ、それをしゃがみ小Pで潰すのも有効",
        "recipes": [],
        "startSec": 0,
        "scenes": [
          53,
          144,
          332
        ]
      },
      {
        "id": "mu_h9-zBPpKL9E_chunli_02",
        "threats": [],
        "topic": "立ち回り",
        "title": "前に歩いて技を置かせ、そこにワールを当てる",
        "text": "歩いて相手に技を置かせ、そこに弾（ワール）を当てるイメージ。差し返しより簡単。春麗は弾抜けが優秀と思われがちだが、中距離で見てから抜けるのはかなりきついので、弾は十分主力として使える",
        "recipes": [],
        "startSec": 14,
        "scenes": [
          20,
          245,
          252
        ]
      },
      {
        "id": "mu_h9-zBPpKL9E_chunli_03",
        "threats": [
          "低空百裂"
        ],
        "topic": "対空",
        "title": "2中Pで低空百裂に対応する",
        "text": "2中Pは低空百裂にも対応できて便利。これがあるからモダン春麗にも抗える。しゃがみ属性が良い",
        "recipes": [],
        "startSec": 29,
        "scenes": [
          276
        ]
      },
      {
        "id": "mu_h9-zBPpKL9E_chunli_04",
        "threats": [],
        "topic": "立ち回り",
        "title": "最上位帯の春麗に飛びはほぼ通らない",
        "text": "飛びも見せていきたいが、最上位帯の春麗には飛びがほとんど通らない",
        "recipes": [],
        "startSec": 194,
        "scenes": []
      },
      {
        "id": "mu_h9-zBPpKL9E_chunli_05",
        "threats": [
          "ドライブラッシュ"
        ],
        "topic": "守り",
        "title": "端に追い詰めたら、ラッシュを見てから OD ミキサー",
        "text": "端まで追い詰めたら、相手のラッシュを見てからODミキサーで止めるのがとても大事",
        "recipes": [],
        "startSec": 203,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Chun-Li",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "nkyG569q-YI",
    "sourceTitle": "舞のOD昇竜反撃方法はこれ！",
    "publishedAt": "2026-06-28",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_nkyG569q-YI_chunli_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "OD無敵技をガードしたら、中サイクロン>立中K>中P",
        "text": "舞のOD昇竜と同じく、OD無敵技をガードした後に中サイクロン>立中K>中Pが当たる（動画の実演は舞）",
        "recipes": [
          {
            "inputs": "214MP > 5MK > 5MP",
            "recipeJa": "中サイクロン>立中K>中P"
          }
        ],
        "startSec": 15,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Chun-Li",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "-nO3PDmqu_U",
    "sourceTitle": "低空百裂対策 2中P＞大スパイクのススメ",
    "publishedAt": "2026-01-26",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_-nO3PDmqu_U_chunli_01",
        "threats": [
          "低空百裂"
        ],
        "topic": "対空",
        "title": "低空百裂は2中P>大スパイクで落とす",
        "text": "以前は2中Pからの前中Pがオススメだったが、それだと相手に無限に低空百裂を打たれる。大Kで安定して追撃できるがダメージが足りず、SAを使うのはもったいない。そこで2中P>大スパイク。2中Pが空中パニカンしたら大スパイクへ、グラップを狩ったら前中Pへ。確認は難しいのでプレイヤーの頑張りどころ。練習はトレモで遅らせグラップと低空百裂の2つをランダムに打たせる（10分ほどで安定した）",
        "recipes": [
          {
            "label": "空中パニカン",
            "inputs": "2MP > 214HK",
            "recipeJa": "2中P>大スパイク"
          },
          {
            "label": "グラ狩り",
            "inputs": "2MP > 6MP",
            "recipeJa": "2中P>前中P"
          }
        ],
        "startSec": 30,
        "scenes": [
          4,
          48,
          57,
          77
        ]
      }
    ]
  },
  {
    "opponent": "Chun-Li",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "mspBGGdirXY",
    "sourceTitle": "弾抜けが怖い相手には小ワールを軸に",
    "publishedAt": "2025-11-11",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_mspBGGdirXY_chunli_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "OD弾抜けが優秀な相手には、近〜中距離で小ワールを混ぜる",
        "text": "弾抜け技を持っているキャラには、一概に大ワールが強いとは言えない（小ワールの価値が上がり、大ワールのリスクが高まる）。小ワールはラシードの弾の中で最も横の到達点が早いので、弾抜け技の出始めを潰すことが多い（大ワールは軌道の関係で、相手の弾抜けの反応が遅れた場合でもヒットしてしまう）。近〜中距離で小ワールを混ぜるのが強い",
        "recipes": [
          {
            "inputs": "236LK",
            "recipeJa": "弱ワール"
          }
        ],
        "startSec": 30,
        "scenes": [
          44,
          79
        ]
      }
    ]
  },
  {
    "opponent": "Chun-Li",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_chunli_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 中央 大P、端 中サイクロン",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央は 大P、端は 中サイクロン。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央",
            "inputs": "5HP",
            "recipeJa": "大P"
          },
          {
            "label": "端",
            "inputs": "214MP",
            "recipeJa": "中サイクロン"
          }
        ],
        "startSec": 164,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Guile",
    "perspective": "共通",
    "threats": [],
    "youtubeId": "5aQzn0QcC9U",
    "sourceTitle": "ワンポイントキャラ対策 part2",
    "publishedAt": "2025-04-12",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_5aQzn0QcC9U_guile_01",
        "threats": [
          "ソニックブーム"
        ],
        "topic": "守り",
        "title": "ソニック連打でゲージがきついときは、パリィを長押しして2発目を受ける",
        "text": "ソニックを連打されてドライブゲージがきついときは、1回パリィを取ってから押しっぱなしにして2発目を受け止める。1回目はプラマイ0だが、押しっぱなしで2回目を受けるとゲージが大きく回復する（弾キャラ全般、ディージェイなどにも有効）。さらに、パリィを押して一瞬前斜め上を入れてしゃがみガードに戻すと、ジャスパのときだけ前ジャンプが出て、相手が安全と思っている2発目のソニックが安全でなくなる（難しいが練習する価値あり）",
        "recipes": [],
        "startSec": 600,
        "scenes": [
          622,
          633,
          645
        ]
      }
    ]
  },
  {
    "opponent": "Guile",
    "perspective": "共通",
    "summary": "ソニックにはパリィで我慢強く前に歩き、ジャンプかインパクトが届く距離まで近づく。ソニック追いかけラッシュにはパリィ長押し・無敵技・引きつけインパクト。起き攻めはなるべく安全飛びで OD サマーを封じる",
    "threats": [
      {
        "name": "ソニックブーム",
        "about": "ガイルの弾。画面端の距離ではリスク無く撃ち放題"
      },
      {
        "name": "ソニック追いかけラッシュ",
        "about": "ソニックと一緒にドライブラッシュで追いかけて、中段や投げで攻める"
      },
      {
        "name": "ソニックブレイド",
        "about": "強力な設置技。見た目以上に足元にやられ判定が出ている"
      },
      {
        "name": "ODサマーソルト",
        "about": "溜めコマンドの無敵技。起き攻めを躊躇させる"
      }
    ],
    "youtubeId": "kSNq1TYqXjg",
    "sourceTitle": "ガイル対策",
    "publishedAt": "2023-08-24",
    "patchVersion": "Y1",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_kSNq1TYqXjg_guile_01",
        "threats": [
          "ソニックブーム"
        ],
        "topic": "立ち回り",
        "title": "ソニックをパリィしながら前に歩き、ジャンプが届く距離まで近づく",
        "text": "画面端の距離ではソニックにリスクが無い（ジャンプ攻撃が届かない）ので、ジャンプが届く距離に行かないと読み合いにならない。ソニックをパリィしながら前に歩く（ドライブゲージが削れず、ガードバックが短いので前に進みやすい。ケンくらいの歩きなら3〜4回パリィすれば飛びが届く）。そこからジャンプ・インパクト・さらに歩いて技を当てる、の読み合い。端端のソニックには前ジャンプで近づくのもあり（サマーは届かない。ガイルはソニックからラッシュしゃがみ大Pなどで咎めるしかない）",
        "recipes": [],
        "startSec": 20,
        "scenes": [
          42,
          64,
          87,
          98
        ]
      },
      {
        "id": "mu_kSNq1TYqXjg_guile_02",
        "threats": [
          "ソニックブーム"
        ],
        "topic": "反撃",
        "title": "ジャストパリィに前ジャンプを仕込むと、安全なソニックにも飛びが確定",
        "text": "ソニックをガードした後に最速で前ジャンプしてもサマーで対空されるが、ジャストパリィに前ジャンプを仕込んでおく（ジャスパが取れたときだけ前ジャンプが出る）と、一見安全なソニックにもジャンプ攻撃が確定する。難しいが、できるとガイルの安全なソニックが無くなり、勝率が上がる",
        "recipes": [],
        "startSec": 123,
        "scenes": [
          135,
          152
        ]
      },
      {
        "id": "mu_kSNq1TYqXjg_guile_03",
        "threats": [
          "ソニックブーム"
        ],
        "topic": "反撃",
        "title": "飛びよりインパクトの方が通しやすい",
        "text": "ジャンプ攻撃が届くのは35F前後かかるが、インパクトは発生26Fなので、ジャンプでは確定しない距離のソニックにもインパクトなら確定することがある。飛びはサマーで対空されるだけだが、インパクトは返されるとフルコンなのでリスクは高い。強気のインパクトを見せると、ガイルがソニックを撃ちづらくなり、歩いたりラッシュしたりで近づきやすくなる",
        "recipes": [],
        "startSec": 174,
        "scenes": [
          185,
          197,
          220
        ]
      },
      {
        "id": "mu_kSNq1TYqXjg_guile_04",
        "threats": [
          "ソニックブーム"
        ],
        "topic": "立ち回り",
        "title": "飛びやインパクトは、ガイルのリバーサルのタイミングで通りやすい",
        "text": "ガイルが何かの攻撃をガードしたり受けたりして、硬直が解けた瞬間（リバーサルのタイミング）は、一番ソニックを撃ちやすいポイント。リーチの長い技をガードさせた後、波動拳をガードされた後、グラップの後など。グラップの後のソニックにはジャンプ攻撃が確定し、長い技をガードさせた後はインパクトが間に合い、波動拳の後に飛ぶのも確定する。ここを狙うと、ガイルが警戒してその分歩けるようになる",
        "recipes": [],
        "startSec": 237,
        "scenes": [
          248,
          264,
          275,
          287
        ]
      },
      {
        "id": "mu_kSNq1TYqXjg_guile_05",
        "threats": [
          "ソニック追いかけラッシュ"
        ],
        "topic": "守り",
        "title": "ソニック追いかけラッシュには、無敵技・パリィ長押し・引きつけインパクト",
        "text": "ソニックを撃ってドライブラッシュで追いかけ、中段や投げで攻める強い連携。ソニックをガード（パリィ）した後に無敵技をこすっておく（中足を食らわないようにしゃがみながらが理想）。パリィを押しっぱなしにすれば中段も自動的にガードできる（投げは食らうが、無敵技よりリスクが少ない）。ソニックを引きつけてインパクトを出すのも有効で、ガイルは決め打ちで走ってくるのでよく当たる（ラッシュからの前ステにもインパクトがパニッシュカウンターの扱いになる）",
        "recipes": [],
        "startSec": 306,
        "scenes": [
          321,
          344,
          355,
          367,
          398
        ]
      },
      {
        "id": "mu_kSNq1TYqXjg_guile_06",
        "threats": [
          "ソニックブレイド"
        ],
        "topic": "立ち回り",
        "title": "ソニックブレイドは、足元を下段の長い技で潰せる",
        "text": "見た目以上に足元にやられ判定が出ていて、とても遠くからしゃがみ大Kなどが届く。立ち回りでおもむろに置かれたら、下段の長い技で潰せる。自キャラで潰せる技を調べておく",
        "recipes": [],
        "startSec": 463,
        "scenes": [
          470
        ]
      },
      {
        "id": "mu_kSNq1TYqXjg_guile_07",
        "threats": [
          "ODサマーソルト"
        ],
        "topic": "攻め",
        "title": "ガイルへの起き攻めは、安全飛びで OD サマーを封じる",
        "text": "OD サマーが怖くて強気に起き攻めしにくいが、安全飛び（ジャンプ攻撃を重ねても OD サマーをガードできる）を重ねるのがとても有効。OD サマーは溜めコマンドなので、ジャンプ攻撃をガードさせればすぐには打てない。その後の投げやシミー、打撃がやりやすくなる。できるキャラは、多少ダメージが落ちても安全飛びできるコンボを選ぶ方が勝率が上がる",
        "recipes": [],
        "startSec": 490,
        "scenes": [
          504,
          516,
          529
        ]
      }
    ]
  },
  {
    "opponent": "Guile",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_guile_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 端で 中サイクロン",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。端は 中サイクロン。垂直始動もいけるが難しい。中央の始動は字幕に無い。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "端",
            "inputs": "214MP",
            "recipeJa": "中サイクロン"
          }
        ],
        "startSec": 145,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Kimberly",
    "perspective": "共通",
    "threats": [],
    "youtubeId": "-Hb4pK51CoA",
    "sourceTitle": "ワンポイントキャラ対策 part1",
    "publishedAt": "2025-04-09",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_-Hb4pK51CoA_kimberly_01",
        "threats": [
          "肘落とし・しゃがみ中P"
        ],
        "topic": "守り",
        "title": "肘としゃがみ中Pは、ガードしたら絶対にボタンを押す",
        "text": "肘はガードした側が有利なので、ガードしたら絶対にボタンを押す。しゃがみ中Pもガードした方が有利なので押す",
        "recipes": [],
        "startSec": 183,
        "scenes": [
          194
        ]
      }
    ]
  },
  {
    "opponent": "Kimberly",
    "perspective": "共通",
    "summary": "肘落としとしゃがみ中Pの後は、ガードした方が有利なので必ず押す。大P疾駆けには無敵技か4F、弧空のガード後は様子見。キンバリーの立ち回りはパリィで何とかなる技が多い",
    "threats": [
      {
        "name": "肘落とし・しゃがみ中P",
        "about": "ガードした方が有利な技"
      },
      {
        "name": "大P>疾駆け",
        "about": "2024-12 の調整で4Fで割り込めなくなった連携。弧空・派生・急停止投げにつなぐ"
      },
      {
        "name": "ドロン",
        "about": "接近手段。通常版は地上から、OD版は上から出てくる"
      },
      {
        "name": "生ラッシュ",
        "about": "キンバリーの主力。速くて止めにくい"
      },
      {
        "name": "前大K",
        "about": "リーチが伸びた中段"
      },
      {
        "name": "肘（対空釣り）",
        "about": "空中の肘落としで昇龍拳を釣る動き"
      }
    ],
    "youtubeId": "55I5gDJ2CEY",
    "sourceTitle": "キンバリー対策最新版",
    "publishedAt": "2024-12-18",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_55I5gDJ2CEY_kimberly_01",
        "threats": [
          "肘落とし・しゃがみ中P"
        ],
        "topic": "守り",
        "title": "肘落としとしゃがみ中Pの後は、必ずボタンを押す",
        "text": "初期バージョンからずっと一番大事なこと。肘落としをガードした後はガードした方が有利なので、絶対にボタンを押す（未だにキンバリー使いはここで押してくる）。しゃがみ中Pの後もガードした方が有利なので押す",
        "recipes": [],
        "startSec": 10,
        "scenes": [
          21,
          33,
          45
        ]
      },
      {
        "id": "mu_55I5gDJ2CEY_kimberly_02",
        "threats": [
          "大P>疾駆け"
        ],
        "topic": "守り",
        "title": "大P疾駆けには無敵技か4F（急停止は-4）",
        "text": "大Pから疾駆けが4Fで割り込めなくなり、弧空で削ったり、有利を取る派生や急停止からの投げにつないだりする攻めが成立するようになった。一番分かりやすいのは、大P疾駆けを見たら無敵技（弧空に派生すれば確定）。急停止は-4なので、無敵技はガードされるが小パン（4F）が確定する。無敵技か4Fこすりで逆に択をかけられる（キンバリーは OD 疾駆けでないと両方には対応できない）",
        "recipes": [],
        "startSec": 54,
        "scenes": [
          67,
          81,
          102,
          117
        ]
      },
      {
        "id": "mu_55I5gDJ2CEY_kimberly_03",
        "threats": [
          "大P>疾駆け"
        ],
        "topic": "守り",
        "title": "弧空の1段目にジャスパを狙う（急停止投げにはラッシュが出る）",
        "text": "無敵技が無いキャラや入力が難しい場合は、弧空の1段目にジャストパリィを狙う（キンバリーが引っ張らない限りタイミングは一定なので、トレモで練習）。ジャスパしたら6Fまでの技で殴れる（小技から追撃が簡単）。ジャスパ狙いは急停止投げに負けるが、ちゃんと入力すれば弧空にはジャスパ、急停止にはラッシュが出るので、パニカン投げも防げる",
        "recipes": [],
        "startSec": 153,
        "scenes": [
          165,
          176,
          250,
          273
        ]
      },
      {
        "id": "mu_55I5gDJ2CEY_kimberly_04",
        "threats": [
          "ドロン"
        ],
        "topic": "対空",
        "title": "ドロンには、見てから上に判定の強い技",
        "text": "ドロンは接近手段で、特に OD 版が強い。通常版は地上から、OD版は上から出てくるが、上方向に強い技を置いておけばどちらも潰せる（ルークならしゃがみ大P）。自キャラで、通常版にも OD 版にも勝てる技を調べておく（アッパー系や立ち弱攻撃が多くのキャラでできる）",
        "recipes": [],
        "startSec": 304,
        "scenes": [
          320,
          333,
          356,
          368
        ]
      },
      {
        "id": "mu_55I5gDJ2CEY_kimberly_05",
        "threats": [
          "生ラッシュ"
        ],
        "topic": "守り",
        "title": "生ラッシュには、パリィ（ジャスパ狙い）",
        "text": "なんだかんだ主力は生ラッシュで、速くて止めにくい。ラッシュから中Pなどがメインなので、ジャスパできるタイミングでパリィを押しておく（近い距離なら小技で止めてもよいが、小技で止めにくい距離は本当に難しい）。キンバリーはラッシュ投げがあまり強くないので、ラッシュにパリィが強い。パリィを見せるとラッシュから直接投げを狙ってくるので、そうなれば止めやすい",
        "recipes": [],
        "startSec": 385,
        "scenes": [
          398,
          413,
          430,
          445
        ]
      },
      {
        "id": "mu_55I5gDJ2CEY_kimberly_06",
        "threats": [
          "前大K"
        ],
        "topic": "守り",
        "title": "前大Kは、ガードした後に立ち攻撃。パリィならジャスパも",
        "text": "前大Kはリーチが伸びたが、ガードした後は立ち攻撃を押せばほとんどのキャラが弱攻撃などで落とせるので、それほど強い技ではない。立ち回りでパリィを準備しておくと、前大Kや中段がいきなり来てもジャスパになって反撃できる。しゃがみながらパリィを押しておけば、ジャスパにならなくてもパリィから逆に投げを仕掛けられる",
        "recipes": [],
        "startSec": 469,
        "scenes": [
          481,
          497,
          520,
          540
        ]
      },
      {
        "id": "mu_55I5gDJ2CEY_kimberly_07",
        "threats": [
          "大P>疾駆け"
        ],
        "topic": "守り",
        "title": "疾駆け>弧空をガードした後は、様子見してラッシュと前ジャンプに備える",
        "text": "弧空の後の通常のキック派生と投げ派生は、食らってもそれほど減らず、キックはガードすれば余裕の確定、投げもバクステでかわせば余裕の確定なので気にしなくてよい。本命は、派生を嫌がってバックジャンプや前ジャンプをする相手へのラッシュから肘の対空で、食らうととても減る。変にバックジャンプせず、様子見してラッシュをガードし、前ジャンプしてくるなら対空する。画面端の OD 疾駆けからの蹴りと投げだけは本当の2択で痛いので、無敵技か、読み勝ったら最大の反撃（キックはガードで-8）",
        "recipes": [],
        "startSec": 554,
        "scenes": [
          574,
          602,
          622,
          662,
          681
        ]
      },
      {
        "id": "mu_55I5gDJ2CEY_kimberly_08",
        "threats": [
          "肘（対空釣り）"
        ],
        "topic": "対空",
        "title": "肘で昇龍を釣ってくるので、上に強い通常技で対空",
        "text": "肘で昇龍拳を釣ってくる動きに困っている人が多い。キンバリーへの対空は、上に強い通常技にする（ルークならしゃがみ大P）。通常の飛びにも肘にも勝てて、釣られても昇龍拳よりずっと痛くない反撃で済む。肘に勝つと特殊やられになって追撃が入るので、一番痛い追撃を調べておく",
        "recipes": [],
        "startSec": 814,
        "scenes": [
          826,
          850,
          868
        ]
      }
    ]
  },
  {
    "opponent": "Kimberly",
    "perspective": "ラシード",
    "summary": "互いに攻めが強く、立ち回りの時間が少ない組み合わせ。立ち回りは考えすぎず、触れた後の±1F・シミー・投げ抜けの読み合いが100倍重要。OD切り返しに乏しいので端で攻め切る",
    "threats": [],
    "youtubeId": "IVtH87onABQ",
    "sourceTitle": "キンバリー戦",
    "publishedAt": "2025-07-30",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_IVtH87onABQ_kimberly_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "立ち回りは考えすぎない。触れた後の攻防が100倍重要",
        "text": "互いに攻めに特化したキャラなので、実力が拮抗していてもパーフェクト勝ち・負けで終わることが日常の組み合わせで、立ち回りの時間が本当に少ない。立ち回りは考えすぎず、触れた後の攻防（±1Fの動き、シミー、投げ抜けの癖を読む）の方が100倍重要。攻めのターンを得るための受け方が大事で、結局はラシード自身の攻めを強化するのが勝率を安定させる近道",
        "recipes": [],
        "startSec": 6,
        "scenes": [
          12,
          291,
          297,
          324
        ]
      },
      {
        "id": "mu_IVtH87onABQ_kimberly_02",
        "threats": [],
        "topic": "守り",
        "title": "+1Fの読み合いはパリィかコパ。ファジー中足も機能しやすい",
        "text": "キンバリーの+1Fの読み合いでボタンを押すなら、パリィかしゃがみ小P。キンバリーは大Pが超強い影響で、シミーする際にしゃがみガードが疎かになる人がとても多いので、そこにファジー中足を差すのが機能しやすい（人読みもある）",
        "recipes": [],
        "startSec": 33,
        "scenes": [
          29
        ]
      },
      {
        "id": "mu_IVtH87onABQ_kimberly_03",
        "threats": [],
        "topic": "立ち回り",
        "title": "ワールは小・大とも打つ。溜めワールにODドロンをされたら控える",
        "text": "ワールは小・大とも打つ。特に大ワールは肘に当たるとリターンが特大。ただ、溜めワールを見てからODドロンを打つのは立派な対策なので、1回でもされたら以降は控える",
        "recipes": [],
        "startSec": 179,
        "scenes": [
          185
        ]
      },
      {
        "id": "mu_IVtH87onABQ_kimberly_04",
        "threats": [],
        "topic": "攻め",
        "title": "ラッシュは案外通しにくい",
        "text": "キンバリーが立ち回る距離と、こちらのラッシュの位置が噛み合わないことが多く、ラッシュは案外通しにくい",
        "recipes": [],
        "startSec": 0,
        "scenes": []
      },
      {
        "id": "mu_IVtH87onABQ_kimberly_05",
        "threats": [],
        "topic": "対空",
        "title": "ラッシュで飛びを見られたら対空。真下に潜ったら大ミキサー",
        "text": "肘の出しやすさから、ラッシュが噛み合ったときに相手が飛んでいることも多い。ラッシュで飛びを見られたら対空は絶対に出したい。真下に潜り込めたら、とっさに大ミキサー",
        "recipes": [],
        "startSec": 65,
        "scenes": [
          189,
          192
        ]
      },
      {
        "id": "mu_IVtH87onABQ_kimberly_06",
        "threats": [],
        "topic": "攻め",
        "title": "イウサールとインパクトを絡めて端で攻め切る",
        "text": "イウサールとインパクトを絡めた攻めはかなり通るのでオススメ（2大Pからのイウサールも強い）。OD切り返しに乏しいキャラは、端で攻め切るに限る",
        "recipes": [],
        "startSec": 281,
        "scenes": [
          76,
          142
        ]
      }
    ]
  },
  {
    "opponent": "Kimberly",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_kimberly_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 中央 大P、端 中サイクロン",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央は 大P、端は 中サイクロン。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央",
            "inputs": "5HP",
            "recipeJa": "大P"
          },
          {
            "label": "端",
            "inputs": "214MP",
            "recipeJa": "中サイクロン"
          }
        ],
        "startSec": 43,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Juri",
    "perspective": "共通",
    "threats": [
      {
        "name": "立ち中P>しゃがみ中P",
        "about": "ジュリの鉄板の連携"
      }
    ],
    "youtubeId": "-Hb4pK51CoA",
    "sourceTitle": "ワンポイントキャラ対策 part1",
    "publishedAt": "2025-04-09",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_-Hb4pK51CoA_juri_01",
        "threats": [
          "画面端の柔道"
        ],
        "topic": "守り",
        "title": "画面端の柔道は+3しかない。バクステから4F、無敵技も当たりやすい",
        "text": "画面端の投げから前ステの柔道は+3しかないので、バクステが標準のフレームのキャラはバクステから4Fで確定が取れる（ジュリもバクステを読んで中Pを埋めてくることが多いので、バクステがおすすめというわけではない）。大事なのは、この場面では後ろ歩きのシミーができない（投げられてしまう）こと。シミーしようとするとバクステになるので、投げ・打撃・シミーのバクステのすべてに無敵技が勝ちやすい。無敵技を警戒した遅らせ投げには、バックジャンプのレバー（上入れっぱなし）で勝てる",
        "recipes": [],
        "startSec": 380,
        "scenes": [
          386,
          402,
          412,
          438
        ]
      },
      {
        "id": "mu_-Hb4pK51CoA_juri_02",
        "threats": [
          "立ち中P>しゃがみ中P"
        ],
        "topic": "守り",
        "title": "立ち中P>しゃがみ中P は4Fで相打ち。ジャスパや中P後のインパクトも",
        "text": "立ち中P>しゃがみ中P は4Fで相打ちになるので、毎回やってくるなら4Fを押してよい（ジャスパを狙える人はジャスパの方がリターンがある）。4F暴れにはジュリは立ち弱Kで潰してくるが、それにはジャスパかインパクトで勝てる。中Pをガードした後のインパクトは意外とありで、立ち中P・しゃがみ中P・蹴り上げにも勝てる",
        "recipes": [],
        "startSec": 466,
        "scenes": [
          474,
          487,
          497,
          507
        ]
      }
    ]
  },
  {
    "opponent": "Juri",
    "perspective": "共通",
    "summary": "確定反撃と連携への割り込み、歳破衝への考え方。蹴り上げには毎回ボタンを押し、歳破衝には下がらず歩いてガード。開幕は蹴り上げを咎められる距離に近づく。ジュリの柔道はバクステで投げに確定",
    "threats": [
      {
        "name": "蹴り上げ",
        "about": "風破刃のストックを溜める技。弱-4、中-6、強-8。全体34Fで隙が大きい"
      },
      {
        "name": "暗剣殺",
        "about": "ガードで-10"
      },
      {
        "name": "空中から突っ込む技",
        "about": "ガードで最低-2、ほとんどは4F以上の隙"
      },
      {
        "name": "歳破衝",
        "about": "ジュリの弾。中攻撃からの連携や、追いかけるラッシュに使う"
      },
      {
        "name": "起き攻めの前ジャンプ中P",
        "about": "こちらの起き攻めの投げに合わせる前ジャンプ中Pからのキック。しゃがみに当たらない"
      },
      {
        "name": "画面端の柔道",
        "about": "投げから前ステップ投げが埋まっている"
      },
      {
        "name": "風水エンジン（SA2）",
        "about": "発動中の連携は隙間が空いていることが多い"
      }
    ],
    "youtubeId": "ecEAjd2VlQ8",
    "sourceTitle": "ジュリ対策",
    "publishedAt": "2024-03-18",
    "patchVersion": "Y1",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_ecEAjd2VlQ8_juri_01",
        "threats": [
          "蹴り上げ"
        ],
        "topic": "反撃",
        "title": "蹴り上げは6Fで反撃。ガードのタイミングで毎回ボタンを押す",
        "text": "その場の弱・少し前に進む中・遅い強で、それぞれ-4・-6・-8。とりあえず6Fの技を押す（4Fが届くなら4Fでもよい）。モダンジュリの弱アシストコンボ（コパ風破）にも反撃を決めたい。蹴り上げをガードするタイミングで毎回ボタンを押す手癖をつけると、勝手に殴れる",
        "recipes": [],
        "startSec": 11,
        "scenes": [
          25,
          49,
          60,
          71
        ]
      },
      {
        "id": "mu_ecEAjd2VlQ8_juri_02",
        "threats": [
          "暗剣殺"
        ],
        "topic": "反撃",
        "title": "暗剣殺はガード-10。10F以内の痛い技で必ず反撃",
        "text": "暗剣殺は-10なので、ガードしたら10F以内のなるべく痛い技で必ず反撃する。モダンジュリの強アシストコンボの OD 版はよく漏らすので、ここに一番痛い反撃を決める",
        "recipes": [],
        "startSec": 113,
        "scenes": [
          129
        ]
      },
      {
        "id": "mu_ecEAjd2VlQ8_juri_03",
        "threats": [
          "空中から突っ込む技"
        ],
        "topic": "反撃",
        "title": "空中から突っ込んでくる技は、ガードして反撃",
        "text": "一番少なくても-2だが、ほとんどの場合4F以上の隙があるので反撃する。昇龍拳があるキャラは昇龍でよいが、通常技対空のキャラは対空が難しいので、ガードを選んで反撃するのも大事",
        "recipes": [],
        "startSec": 145,
        "scenes": [
          155
        ]
      },
      {
        "id": "mu_ecEAjd2VlQ8_juri_04",
        "threats": [
          "歳破衝"
        ],
        "topic": "守り",
        "title": "中攻撃から歳破衝の連携は、インパクトで割る",
        "text": "中攻撃からしゃがみ中攻撃、歳破衝という連携がとても多いが、インパクトを打つと確定で割り込める。歳破衝をジャストパリィして9F以内の技で反撃もできる（タイミングが一定なので練習すれば狙える）。OD歳破衝にされるとインパクトは負ける。中攻撃をガードした後のインパクトを武器として持っておく",
        "recipes": [],
        "startSec": 167,
        "scenes": [
          179,
          190,
          204,
          224
        ]
      },
      {
        "id": "mu_ecEAjd2VlQ8_juri_05",
        "threats": [
          "歳破衝"
        ],
        "topic": "守り",
        "title": "歳破衝を追いかけるラッシュには、投げか前ジャンプ",
        "text": "歳破衝からラッシュで追いかけて攻める動きは強い。ジュリは歳破衝をガードさせた後に打撃をしたいのでラッシュを引っ張りがちで、そこに投げが通る（初見の相手に有効）。もう少し丸いのは前ジャンプ（ジュリも対空が難しく、リソースを無駄に使わせられる）。下がりつつ、ラッシュしてきたら無敵技もある",
        "recipes": [],
        "startSec": 251,
        "scenes": [
          263,
          284,
          311,
          331
        ]
      },
      {
        "id": "mu_ecEAjd2VlQ8_juri_06",
        "threats": [
          "歳破衝"
        ],
        "topic": "立ち回り",
        "title": "歳破衝に後ろに下がらず、歩いてガードする",
        "text": "歳破衝に後ろに下がるのは実は良くない。ラインが下がり、ジュリがまた蹴り上げで風破を溜めるだけの損になる。前に歩いてガードした方が有利フレームを取られにくい（出された距離によっては有利を取られることもあるが、下がりっぱなしは本当に良くない）。歩いてガードして有利を取らせないのは、ジュリ対策の伝統",
        "recipes": [],
        "startSec": 356,
        "scenes": [
          368,
          391,
          414
        ]
      },
      {
        "id": "mu_ecEAjd2VlQ8_juri_07",
        "threats": [
          "蹴り上げ"
        ],
        "topic": "立ち回り",
        "title": "開幕は、蹴り上げを咎められる距離を保つ",
        "text": "試合開始時はストックが0なので、ジュリはまず蹴り上げで溜めたい。蹴り上げは全体34Fで隙だらけなので、見てから殴れる距離につかず離れずでいると、ジュリは蹴り上げしにくい。確定しなくてもキャンセルラッシュから触れる。基本は距離を取らずに近づく（ダルシムや JP などは例外）。そうなるとジュリは立ち大Kや中足の地上戦を始めるので、そこの勝負。ジュリはよく飛ぶので、飛びも警戒",
        "recipes": [],
        "startSec": 445,
        "scenes": [
          457,
          470,
          491,
          505
        ]
      },
      {
        "id": "mu_ecEAjd2VlQ8_juri_08",
        "threats": [
          "歳破衝"
        ],
        "topic": "反撃",
        "title": "開幕の OD 歳破衝には、前ジャンプが確定",
        "text": "ジュリは開幕に OD 歳破衝を打ちがち（風破を溜めたい・ラッシュや前ジャンプも潰せる・ガードさせれば溜められる）。これには前ジャンプが余裕で確定する。開幕に飛ぶのはあり",
        "recipes": [],
        "startSec": 555,
        "scenes": [
          566
        ]
      },
      {
        "id": "mu_ecEAjd2VlQ8_juri_09",
        "threats": [
          "起き攻めの前ジャンプ中P"
        ],
        "topic": "攻め",
        "title": "起き攻めの投げは、前ジャンプ中Pに注意。後ろ歩きでガードして確定",
        "text": "ジュリの起き上がりに投げを仕掛けると、前ジャンプ中Pからのキックを食らうことがある。しゃがみには当たらず、後ろ歩きでガードすれば-9などで余裕の確定。無敵技を警戒するついでに後ろに歩いてガードし、着地を殴る（シミーを使うとよく起こる）。警戒するなら投げを控えめにしてシミーを多めにすれば、前ジャンプ中Pも OD 技もガードできる",
        "recipes": [],
        "startSec": 589,
        "scenes": [
          602,
          613,
          625,
          636
        ]
      },
      {
        "id": "mu_ecEAjd2VlQ8_juri_10",
        "threats": [
          "画面端の柔道"
        ],
        "topic": "守り",
        "title": "ジュリの柔道は、投げをバクステでかわして4Fで確定",
        "text": "画面端の投げから前ステップ投げは埋まっていて簡単で強いが、明確な弱点がある。投げをバックステップすると4Fの技が確定する。だからジュリは小技を挟んでから投げたり、バクステ連打を一度しゃがみ弱Pで潰してから投げたりするが、しゃがみ弱Pをガードした後は4Fで勝てる。ジェイミーやルーク、昔のケンの柔道に比べるとかなり劣る",
        "recipes": [],
        "startSec": 660,
        "scenes": [
          673,
          686,
          711,
          722
        ]
      },
      {
        "id": "mu_ecEAjd2VlQ8_juri_11",
        "threats": [
          "画面端の柔道"
        ],
        "topic": "反撃",
        "title": "前ステ→バクステ→大P 入れ込みには前ジャンプ",
        "text": "投げ抜け狩りとして、前ステからバクステして大Pを入れ込む人が多い（リターンが高い）。前ジャンプすれば確定が取れる（最速でも、一瞬ガードを入れてからでもよい）。シミーを読んだら前ジャンプも有効。バクステを見てから中足など長い技を押すと安定してターンを奪える",
        "recipes": [],
        "startSec": 744,
        "scenes": [
          755,
          767,
          778,
          792
        ]
      },
      {
        "id": "mu_ecEAjd2VlQ8_juri_12",
        "threats": [
          "風水エンジン（SA2）"
        ],
        "topic": "守り",
        "title": "風水エンジンの連携には、パリィを小刻みに押す",
        "text": "風水エンジン中のよくある連携は隙間が空いていることが多いので、パリィをぽちぽち小刻みに押しておくとよい（立ち中Pの後、前大Kの前、中K>大K など）。全部を把握するのはとても難しいが、ぽちぽちしておくと良いことが起きる。投げ前ステには、見てから昇龍か垂直の逆2択も",
        "recipes": [],
        "startSec": 820,
        "scenes": [
          834,
          846,
          858,
          871
        ]
      }
    ]
  },
  {
    "opponent": "Juri",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "M4Ustoze_gM",
    "sourceTitle": "風水に対して漢のリバサ大ミキサー",
    "publishedAt": "2026-08-31",
    "patchVersion": "Y4",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_M4Ustoze_gM_juri_01",
        "threats": [
          "風水エンジン（SA2）"
        ],
        "topic": "守り",
        "title": "風水中の起き攻めに、リバサ大ミキサー",
        "text": "風水中に起き攻めされるとてもきつい状況にも、起死回生の手がある。こちらの体力が少ないと、風水中は前飛びの率が高いと感じるので、リバサで大ミキサーを打つ。空投げも潰れることがある",
        "recipes": [
          {
            "inputs": "236HP",
            "recipeJa": "大ミキサー"
          }
        ],
        "startSec": 1,
        "scenes": [
          13
        ]
      }
    ]
  },
  {
    "opponent": "Juri",
    "perspective": "ラシード",
    "summary": "ジュリの通常技とは殴り合わない。ワールを主軸に、歳破衝を消しながら溜めワールで展開し、隙あらばラッシュで触る",
    "threats": [],
    "youtubeId": "7DtS0gtL1oA",
    "sourceTitle": "ジュリ戦で通常技を振らなくなった理由",
    "publishedAt": "2026-06-21",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7DtS0gtL1oA_juri_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "通常技を振らない。殴り合わずワールを主軸に",
        "text": "ジュリの通常技に勝てる技は無いので、無理して殴り合わない。通常技は一切振らず（守りのファジー中足などは振る）、ワールを主軸に立ち回り、隙あらばラッシュで触りにいく。独特な戦法だが有力な動き方",
        "recipes": [],
        "startSec": 5,
        "scenes": [
          14,
          38,
          238
        ]
      },
      {
        "id": "mu_7DtS0gtL1oA_juri_02",
        "threats": [
          "歳破衝"
        ],
        "topic": "立ち回り",
        "title": "ジュリの弾をワールで消しながら溜めワール",
        "text": "歳破衝とワールの相性が良く、弾を相殺できる。ジュリが普段どおり弾を出してラインを上げるのはラシード相手にはやりづらく、逆にラシードはジュリの弾を消しながら微溜めワール・最大溜めワールを狙いやすい。距離が取れたらすかさず最大溜めワール（ジュリ側がとがめるのはかなり難しい）。総じてラシード側が弾で展開しやすい組み合わせ",
        "recipes": [],
        "startSec": 19,
        "scenes": [
          28,
          192,
          326
        ]
      },
      {
        "id": "mu_7DtS0gtL1oA_juri_03",
        "threats": [],
        "topic": "攻め",
        "title": "触れたらチャンス。端に運んでインパクト",
        "text": "一度触れたらチャンス。SAで割り込まれたら仕方ないと割り切り、端に運んでインパクトを狙う。負けても相手にSAを吐かせる形になるので、下手にシミーしてわちゃつかせない方がよい。最大溜めワールで触れたら、そのまま強引に固める",
        "recipes": [],
        "startSec": 57,
        "scenes": [
          66,
          197
        ]
      },
      {
        "id": "mu_7DtS0gtL1oA_juri_04",
        "threats": [
          "飛び"
        ],
        "topic": "対空",
        "title": "ジュリの飛びは屈指の強さ。無理せず OD ミキサー",
        "text": "ジュリの飛びは屈指の強さなので、無理せずODミキサーで落としてもよい。ラッシュ主体のプレイヤーは特に対空を頑張りたい（出る・出ないでその後の展開が大違い）",
        "recipes": [],
        "startSec": 245,
        "scenes": [
          233
        ]
      },
      {
        "id": "mu_7DtS0gtL1oA_juri_05",
        "threats": [
          "弱風波〆の後の起き攻め"
        ],
        "topic": "守り",
        "title": "弱風波〆の後は、たまにリバサ投げ",
        "text": "ジュリの弱風波〆の後には、たまにリバサ即投げの暴れを見せたい",
        "recipes": [],
        "startSec": 168,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Juri",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_juri_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 垂直大K立中K（中央・端）",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央・端とも 垂直大K立中K。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央・端",
            "inputs": "j.8HK > 5MK",
            "recipeJa": "垂直J大K>立中K"
          }
        ],
        "startSec": 84,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Ken",
    "perspective": "共通",
    "threats": [],
    "youtubeId": "5aQzn0QcC9U",
    "sourceTitle": "ワンポイントキャラ対策 part2",
    "publishedAt": "2025-04-12",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_5aQzn0QcC9U_ken_01",
        "threats": [
          "迅雷脚"
        ],
        "topic": "反撃",
        "title": "近めの中足迅雷には OD 無敵技が確定。中迅雷にはインパクト",
        "text": "OD 無敵技を持つキャラは、近めなら中足迅雷の初段止めにも下段派生にも確定する距離がある（どの距離なら確定か覚える）。一部のキャラは SA1 でも確定（モダンならワンボタン）。全キャラでできるのは、中迅雷へのインパクト。中足から動いたのを見てからインパクトが理想だが、最初は中足をガードしたら決め打ちで打ってもよい。ケンにはインパクトを狙える場面が多い",
        "recipes": [],
        "startSec": 710,
        "scenes": [
          723,
          758,
          771,
          793
        ]
      }
    ]
  },
  {
    "opponent": "Ken",
    "perspective": "共通",
    "summary": "みんなが困るのは龍尾脚と迅雷脚。龍尾脚は小技で落とすかインパクト、中足からのキャンセルにはインパクト。竜巻からの中段セットプレイは立ちっぱなしで",
    "threats": [
      {
        "name": "龍尾脚",
        "about": "ガードさせて+1。プロでもうっかりガードしてしまう技"
      },
      {
        "name": "迅雷脚",
        "about": "中足からキャンセルで使うことが多い。弱は連続ガード、中は連続ガードではない、強は下段派生まで連続ガード。中段派生-3、下段派生-5"
      },
      {
        "name": "中足",
        "about": "速い歩きからの中足ラッシュが危険"
      },
      {
        "name": "一文字",
        "about": "前大K。パニッシュカウンターから大きく運ばれる。近めでガードすると-5"
      },
      {
        "name": "竜巻からの中段セットプレイ",
        "about": "迅雷竜巻の後、急停止して小パン空振りから中段を重ねる、ヒットでループするセットプレイ"
      },
      {
        "name": "中Kターゲットコンボ",
        "about": "中Kは-5。ヒット確認ミスでターゲットコンボを漏らすことがある"
      },
      {
        "name": "波動拳",
        "about": "弾"
      }
    ],
    "youtubeId": "e0rAg24VQoM",
    "sourceTitle": "ケン対策（龍尾脚・迅雷脚）",
    "publishedAt": "2023-06-21",
    "patchVersion": "Y1",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_e0rAg24VQoM_ken_01",
        "threats": [
          "波動拳"
        ],
        "topic": "立ち回り",
        "title": "波動拳はパリィが一番。読み切ったらジャンプかインパクト",
        "text": "リュウなどと同じで、基本はパリィを取るのが一番よい。タイミングを読み切ったらジャンプかインパクト",
        "recipes": [],
        "startSec": 68,
        "scenes": []
      },
      {
        "id": "mu_e0rAg24VQoM_ken_02",
        "threats": [
          "龍尾脚"
        ],
        "topic": "守り",
        "title": "龍尾脚をガードしたらガード多め。投げてくるなら4F",
        "text": "ガードさせて+1なので、ガードしたら基本ボタンを押せない。ただ+1しかないので、ケンが投げてくるなら4Fの技で勝てる（ケンも直接投げたくない）。打撃が多い場面なので、ガード多めで投げは捨てる方がよく、投げてくるならたまに4Fで暴れる。垂直はジャンプに引っかかることも多く、あまり良いことが起きない",
        "recipes": [],
        "startSec": 76,
        "scenes": [
          86,
          99,
          115
        ]
      },
      {
        "id": "mu_e0rAg24VQoM_ken_03",
        "threats": [
          "龍尾脚"
        ],
        "topic": "対空",
        "title": "龍尾脚は、見てから弱攻撃で落とすか、早めのインパクト",
        "text": "見てからなるべく発生の速い弱攻撃で落とすと、特殊やられになるので拾ってリターンも出せる（反応は難しい）。もう1つはインパクトで、ガードする直前に押すと間に合わないことが多いので、そこそこ早めに反応する。小技の方が少し簡単かもしれない",
        "recipes": [],
        "startSec": 144,
        "scenes": [
          148,
          162,
          180
        ]
      },
      {
        "id": "mu_e0rAg24VQoM_ken_04",
        "threats": [
          "迅雷脚"
        ],
        "topic": "反撃",
        "title": "中足からキャンセルしたらインパクト。出なければ弱迅雷なので打ち返す",
        "text": "中足から弱迅雷は連続ガードで、その下段派生は4Fで割れる。中迅雷は連続ガードではない代わりに、下段派生は4Fで割れない。強迅雷は下段派生まで連続ガード。ガードしても離れて-5で、中段も-3。一番分かりやすい対策は、中足から何かキャンセルしたらインパクト。中迅雷・強迅雷・波動拳にはインパクトが確定し、弱迅雷は連続ガードなのでインパクトが出ない。インパクトが出なかったら弱迅雷なので、4Fや長い5Fの技を打ち返せばよい。中足から何もしないのには釣られないように。中足ドライブラッシュは暗転でインパクトが出ない。キャンセルの見極めが難しければ、中足をガードした後に押してもリスクとリターンは合っている",
        "recipes": [],
        "startSec": 213,
        "scenes": [
          232,
          266,
          284,
          318,
          371
        ]
      },
      {
        "id": "mu_e0rAg24VQoM_ken_05",
        "threats": [
          "迅雷脚"
        ],
        "topic": "守り",
        "title": "上級: 下段派生をガードするタイミングでボタンを押すと、中段派生に勝てる",
        "text": "中迅雷の派生は下段の方が明らかに早いので、下段をガードするタイミングでボタンを押すと、中段には勝てて下段はガードできる。上級者向けの難しい対策",
        "recipes": [],
        "startSec": 465,
        "scenes": [
          478
        ]
      },
      {
        "id": "mu_e0rAg24VQoM_ken_06",
        "threats": [
          "中足"
        ],
        "topic": "立ち回り",
        "title": "中足の間合いを覚え、中足の前では下段ガードを固める",
        "text": "ケンの強みは速い歩きからの中足ドライブラッシュで、ここが危険になることが多い。中足を振られないように、ケンの中足の間合いを覚えて、その前に入ったら下段ガードを固める",
        "recipes": [],
        "startSec": 537,
        "scenes": [
          547
        ]
      },
      {
        "id": "mu_e0rAg24VQoM_ken_07",
        "threats": [
          "一文字"
        ],
        "topic": "反撃",
        "title": "一文字はパニカンを食らわない。めり込んだら5F、スカしたら差し返す",
        "text": "ノーマルヒットなら何も無いが、パニッシュカウンターすると迅雷大昇龍や迅雷竜巻で信じられないほど運ばれる。一文字の前で中途半端に技を振っているとパニカンを食らうので注意。近めでガードした場合は-5なので、5Fの技で反撃（5Fが長いキャラはめり込みガードで）。もしくはスカして差し返す。一文字の先端の距離はあまり良くない",
        "recipes": [],
        "startSec": 556,
        "scenes": [
          568,
          581,
          595
        ]
      },
      {
        "id": "mu_e0rAg24VQoM_ken_08",
        "threats": [
          "竜巻からの中段セットプレイ"
        ],
        "topic": "守り",
        "title": "竜巻からの中段セットプレイは、立ちっぱなし。急停止を見たらしゃがむかグラップ",
        "text": "迅雷竜巻を食らった後、急停止して小パンを空振りしてから迅雷の中段を重ねるセットプレイは、ヒットすればループし、ガードされても投げ間合いの-1でリスクが無い強い連携。パリィで受けようとすると、急停止からの投げでパリィを投げられる。迅雷竜巻からの下段は無いので、立ちっぱなしで中段は絶対に食らわない。急停止はケンがシュッと止まるので見やすく、見たらしゃがみガード・グラップ・前ジャンプ・無敵技など普通の読み合い。見極めが難しければ立ちガードでよい。中段をガードしたら+1なので小技を打ち返す",
        "recipes": [],
        "startSec": 618,
        "scenes": [
          630,
          661,
          678,
          698,
          722
        ]
      },
      {
        "id": "mu_e0rAg24VQoM_ken_09",
        "threats": [
          "中Kターゲットコンボ"
        ],
        "topic": "反撃",
        "title": "中Kは-5で5Fが確定。ターゲットコンボを漏らされたら、しゃがみ攻撃で反撃",
        "text": "ケンの中Kは強いが、ガードで-5なので5Fの技が確定する。厄介なのは、ヒット確認をミスしてターゲットコンボを漏らしたときに立ち攻撃で反撃しようとすると、暴れ潰しになっていて食らうこと。しゃがみ攻撃で反撃すれば当たらない",
        "recipes": [],
        "startSec": 767,
        "scenes": [
          780,
          800
        ]
      }
    ]
  },
  {
    "opponent": "Ken",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "Cs7A6dZxcaU",
    "sourceTitle": "そのSA、ロックしないのじゃ",
    "publishedAt": "2026-07-18",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_Cs7A6dZxcaU_ken_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "ロックしないSAならイウサールは大丈夫",
        "text": "ロックしない技（この場面ではケンのSA）なら、イウサールは大丈夫。そのままリーサルまでいけた。字幕はこの一言なので、場面を見て確かめる",
        "recipes": [],
        "startSec": 9,
        "scenes": [
          14
        ]
      }
    ]
  },
  {
    "opponent": "Ken",
    "perspective": "ラシード",
    "summary": "ケンには前飛びをしない（対空昇竜1発が負けにつながる）。波動はラッシュとワールでねじ込み、Dゲージが少なくOD波動が来ない時は溜めワールを狙う",
    "threats": [],
    "youtubeId": "OIIdhCKoKfI",
    "sourceTitle": "ケン戦で飛ばなくなって勝率が上がった話",
    "publishedAt": "2026-06-06",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_OIIdhCKoKfI_ken_01",
        "threats": [
          "昇龍拳"
        ],
        "topic": "立ち回り",
        "title": "前飛びはしない。対空昇竜1発で10割もありうる",
        "text": "ケンの昇竜はこのゲーム屈指の1F無敵対空で、対空昇竜からラッシュで起き攻めされると強烈。一度対空されると、そこから10割減る可能性もある（対空される>打撃で崩れる>端まで運ばれる、が典型的な負けパターン）。だから前飛びは一切しない（気流飛びは別物）",
        "recipes": [],
        "startSec": 1,
        "scenes": [
          14,
          24,
          32,
          325
        ]
      },
      {
        "id": "mu_OIIdhCKoKfI_ken_02",
        "threats": [
          "波動拳"
        ],
        "topic": "立ち回り",
        "title": "波動はラッシュとワールで強引にねじ込む",
        "text": "ケンの波動はリュウや豪鬼ほど強くなく、ケンは波動拳主軸で立ち回れない。波動はラッシュとワールで強引にねじ込めば案外なんとかなる。中足波動の後はラッシュをよく狙う（立ち弱Kで止められることもあるが、ケン側は難しい）",
        "recipes": [],
        "startSec": 37,
        "scenes": [
          44,
          71
        ]
      },
      {
        "id": "mu_OIIdhCKoKfI_ken_03",
        "threats": [],
        "topic": "立ち回り",
        "title": "Dゲージが少なくOD波動が来ない時は溜めワール",
        "text": "ケンのOD波動は怖いが、OD波動→ラッシュには3ゲージ必要なので、Dゲージが少ない時は撃ってこない。そのときは微溜めワール・最大溜めワールを狙いやすい。相手のDゲージ残量でこちらの立ち回りを変えるのが大事",
        "recipes": [],
        "startSec": 118,
        "scenes": [
          127,
          136,
          447
        ]
      },
      {
        "id": "mu_OIIdhCKoKfI_ken_04",
        "threats": [],
        "topic": "攻め",
        "title": "端の起き攻めよりDゲージを削る",
        "text": "端の起き攻めよりDゲージを削った方が強いと考え、大ミキサー〆からイウサールへ。結果インパクトが通って大ダメージになった。やはりDゲージを削るのが大事",
        "recipes": [],
        "startSec": 456,
        "scenes": [
          474
        ]
      },
      {
        "id": "mu_OIIdhCKoKfI_ken_05",
        "threats": [],
        "topic": "守り",
        "title": "Dゲージが多い時は「ディヤ」にOD無敵",
        "text": "Dゲージが多い時は、ケンの「ディヤ」にOD無敵技を打ちたい",
        "recipes": [],
        "startSec": 404,
        "scenes": []
      },
      {
        "id": "mu_OIIdhCKoKfI_ken_06",
        "threats": [],
        "topic": "対空",
        "title": "ラッシュして相手が飛んでいたら大ミキサー",
        "text": "ラッシュした時に相手が飛んでいたら大ミキサーで落とす（とても大事）",
        "recipes": [],
        "startSec": 442,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Ken",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_ken_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 中央 垂直大K大P、端 中サイクロン",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央は 垂直大K大P、端は 中サイクロン。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央",
            "inputs": "j.8HK > 5HP",
            "recipeJa": "垂直J大K>大P"
          },
          {
            "label": "端",
            "inputs": "214MP",
            "recipeJa": "中サイクロン"
          }
        ],
        "startSec": 154,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Blanka",
    "perspective": "共通",
    "summary": "一番大きいのは中央投げの後の対処（後ろ歩きと4F暴れ）。本当に強いのはラッシュで、そこはリバや無敵技。+1や+2の場面は4F暴れとジャスパの択で、SA2と人形はリバーサルで牽制する",
    "threats": [
      {
        "name": "中央投げの後",
        "about": "中央で投げた後、サプライズフォワードして+3（投げ間合いの外）。そこから歩き投げ・弱電気（暴れ潰し）・中足・ラッシュ"
      },
      {
        "name": "電気",
        "about": "電気の後の前ステなどで+1になる場面が多い"
      },
      {
        "name": "引き中K",
        "about": "ガードさせて+2だが投げ間合いの外。置き技としても使う"
      },
      {
        "name": "しゃがみ大P",
        "about": "とても長い大P。ガードで-5"
      },
      {
        "name": "前大P",
        "about": "ガードで-14前後（距離による）。伏せに派生できる"
      },
      {
        "name": "SA2",
        "about": "発動中はドライブゲージを大きく削る（ガードだけだと3本ほど）。ローリングから斜め派生・真下降りがある"
      },
      {
        "name": "人形",
        "about": "ブランカちゃん人形を絡めた中段・下段の崩し"
      }
    ],
    "youtubeId": "S7LM_psmBIM",
    "sourceTitle": "ブランカ対策",
    "publishedAt": "2026-07-07",
    "patchVersion": "Y3後期",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_S7LM_psmBIM_blanka_01",
        "threats": [
          "中央投げの後"
        ],
        "topic": "守り",
        "title": "後ろ歩きで歩き投げをスカして反撃",
        "text": "中央投げの後は詰みと思われがちだが、サプライズフォワードして+3で、投げ間合いの外。ブランカは少し前に歩いて投げているので、その場でしゃがみガードだと投げられるが、後ろに歩くと投げがスカり、フルコンが入る。中央のサプホ投げには最大のリスクがある。全キャラでできる",
        "recipes": [],
        "startSec": 14,
        "scenes": [
          25,
          36,
          60
        ]
      },
      {
        "id": "mu_S7LM_psmBIM_blanka_02",
        "threats": [
          "中央投げの後"
        ],
        "topic": "守り",
        "title": "後ろ歩きは暴れ潰しの電気も防ぎ、中足には4Fで割る",
        "text": "サプホから弱電気（暴れ潰し）も、後ろ歩きしていればガードになる（電気を見たらパリィしてジャスパも狙える）。後ろ歩きだとサプホからの中足は食らうが、ブランカの中足は8Fで、サプホ+3から5Fの隙間があるので4Fで割れる（ついでに歩き投げにも勝てる）。サプホしてきたら後ろ歩きが相当強く、中足が来るなら4F暴れが通る",
        "recipes": [],
        "startSec": 90,
        "scenes": [
          102,
          133,
          160
        ]
      },
      {
        "id": "mu_S7LM_psmBIM_blanka_03",
        "threats": [
          "中央投げの後"
        ],
        "topic": "守り",
        "title": "本当に強いのはラッシュ。リバか無敵技",
        "text": "本当にやばいのは中央投げの後のラッシュ。後ろ受け身にもラッシュ中段が埋まるのはブランカだけ（完全に埋めるのは難しく、中段・下段の中足は埋めやすい）。ラッシュ中段にも中足にもドライブリバーサルがかかるので、中央投げからのラッシュが嫌ならリバ。ラッシュしてきた時点で中下段か暴れ潰しが来やすいので、無敵技のポイントでもある",
        "recipes": [],
        "startSec": 194,
        "scenes": [
          204,
          245,
          257
        ]
      },
      {
        "id": "mu_S7LM_psmBIM_blanka_04",
        "threats": [
          "電気"
        ],
        "topic": "守り",
        "title": "電気の後の+1は、4F暴れとジャストパリィの択",
        "text": "よくある電気からの前ステなどは+1。そこからの投げは4Fで割れ、暴れ潰しにはジャスパが狙える。+2なら投げが埋まるのでジャスパ狙いはリスキーだが、+1なので4F暴れとジャスパ狙いで逆に択をかけられる",
        "recipes": [],
        "startSec": 279,
        "scenes": [
          289,
          302
        ]
      },
      {
        "id": "mu_S7LM_psmBIM_blanka_05",
        "threats": [
          "引き中K"
        ],
        "topic": "守り",
        "title": "引き中Kの後は、暴れ潰しが安いので4F暴れが強い",
        "text": "引き中Kはガードさせて+2だが投げ間合いの外で、投げを埋めるには前に歩くので暴れが通る。暴れ潰しもできるが、ダメージは1000程度と安い（SA2があると増える）。普通の立ち回りで引き中Kをガードしたら4F暴れは結構強い。ただしラッシュ引き中Kや、起き攻めで持続を重ねられたときは暴れ潰しが痛いので別",
        "recipes": [],
        "startSec": 324,
        "scenes": [
          336,
          365,
          398
        ]
      },
      {
        "id": "mu_S7LM_psmBIM_blanka_06",
        "threats": [
          "しゃがみ大P",
          "前大P"
        ],
        "topic": "反撃",
        "title": "しゃがみ大Pは長い5Fで、前大Pは大足などで確定",
        "text": "しゃがみ大Pはとても長いが-5で、長い5Fの技があれば確定。前大Pは-14前後（ガードした距離による）で、だいたい大足などが確定する。伏せに派生するとパニカンにならなくなるが、それでも確定は取れる（キャラによっては必殺技や発生の早いSAでも）",
        "recipes": [],
        "startSec": 421,
        "scenes": [
          433,
          447,
          459
        ]
      },
      {
        "id": "mu_S7LM_psmBIM_blanka_07",
        "threats": [
          "SA2"
        ],
        "topic": "守り",
        "title": "SA2のローリングからの斜め派生にジャスパ。真下降りはボタンで割る",
        "text": "SA2はドライブゲージを削るのが強い（ガードだけだと3本ほど。ゲージが5〜6本あれば無理しなくてよい）。ローリングからの斜め派生は連続ガードではないので、ここにジャスパを狙う（ノーマルパリィでもゲージが増える）。パリィを狙うと手前に真下降りしての投げで対策されるので、真下降りを見たらボタンを押してターンを奪う。豪鬼・ジュリ・春麗など昇龍系がある一部のキャラは、真下降りにも斜め派生にも勝てる",
        "recipes": [],
        "startSec": 472,
        "scenes": [
          486,
          507,
          537,
          560
        ]
      },
      {
        "id": "mu_S7LM_psmBIM_blanka_08",
        "threats": [
          "SA2"
        ],
        "topic": "守り",
        "title": "SA2発動後、通常技をガードしたらドライブリバーサル",
        "text": "発動した後は、大Pから中ローリングや、OD電気から中足中ローリングなど、通常技を1回挟んでくる。通常技をガードしたらローリングが来るタイミングでドライブリバーサルを打つ（ゲージは2本使うが、どうせガードしても減るので仕切り直した方がいい）。メジャーな対策で、ブランカ側も散らす必要が出てくる",
        "recipes": [],
        "startSec": 610,
        "scenes": [
          622,
          643,
          668
        ]
      },
      {
        "id": "mu_S7LM_psmBIM_blanka_09",
        "threats": [
          "人形"
        ],
        "topic": "守り",
        "title": "人形絡みの中下段は、中段が見えるならガンガード、無理ならリバ",
        "text": "中段をガードできるなら、中段だけ見てガンガードしているのが割と良い。中段も食らってしまう人は、中下段が来るタイミング（電気をガードした後）でドライブリバーサルを打つ。リバを警戒させると、ブランカの攻めはかなり消極的になる",
        "recipes": [],
        "startSec": 678,
        "scenes": [
          691,
          708,
          722
        ]
      },
      {
        "id": "mu_S7LM_psmBIM_blanka_10",
        "threats": [
          "引き中K"
        ],
        "topic": "立ち回り",
        "title": "引き中Kなどの置き技は、長い技か弾で潰す",
        "text": "置き技に中途半端な差し返しをしても、やられ判定が出ていなくて当たらない。やるなら長い技で殴る（確定にならなくても次の技に負けにくい）か、弾で潰す。どちらも無ければ無視",
        "recipes": [],
        "startSec": 733,
        "scenes": [
          744,
          756
        ]
      }
    ]
  },
  {
    "opponent": "Blanka",
    "perspective": "共通",
    "threats": [
      {
        "name": "キャンセルラッシュ",
        "about": "しゃがみ中P からキャンセルラッシュして、投げ・引き中K・無敵技読みのサプライズ系"
      }
    ],
    "youtubeId": "f_YXx7eROZY",
    "sourceTitle": "絶対にやった方が良いサガット対策",
    "publishedAt": "2026-02-12",
    "patchVersion": "Y3",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_f_YXx7eROZY_blanka_01",
        "threats": [
          "キャンセルラッシュ"
        ],
        "topic": "守り",
        "title": "しゃがみ中Pラッシュの後の投げ・引き中Kに、ドライブリバーサル",
        "text": "ブランカのしゃがみ中Pラッシュは長くて強いが、その後はだいたい投げか引き中K（か無敵技読みのサプライズ系）。投げと引き中Kにはドライブリバーサルが余裕で確定する。サプライズされても、この距離ならこちら-15で、そこまで痛い反撃はもらいにくい",
        "recipes": [],
        "startSec": 332,
        "scenes": [
          355,
          367
        ]
      }
    ]
  },
  {
    "opponent": "Blanka",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "GhHbKqsu4s4",
    "sourceTitle": "低空技にやっぱり便利な2中P",
    "publishedAt": "2026-09-13",
    "patchVersion": "Y4",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_GhHbKqsu4s4_blanka_01",
        "threats": [
          "低空技"
        ],
        "topic": "対空",
        "title": "低空技には2中Pが機能する",
        "text": "対ブランカ戦では2中Pが本当に機能する（低空技への対応）",
        "recipes": [
          {
            "inputs": "2MP",
            "recipeJa": "2中P"
          }
        ],
        "startSec": 10,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Blanka",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "niI6lOZzo_g",
    "sourceTitle": "ブランカのOD無敵反撃方法はこれ！",
    "publishedAt": "2026-07-13",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_niI6lOZzo_g_blanka_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "OD無敵技をガードしたら、前飛びJ2強P",
        "text": "ブランカのOD無敵技をガードした後の反撃は、前飛びJ2強Pがオススメ。中サイクロンより減る。このODガード後のコンボはブランカとキャミィ限定",
        "recipes": [
          {
            "inputs": "j.2HP",
            "recipeJa": "J2強P"
          }
        ],
        "startSec": 0,
        "scenes": [
          4,
          12
        ]
      }
    ]
  },
  {
    "opponent": "Blanka",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "asIqwyrdolI",
    "sourceTitle": "テンペスト反撃集",
    "publishedAt": "2025-10-07",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_asIqwyrdolI_blanka_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は、中央テンペスト・端は前ジャンプ2強P",
        "text": "キャミィと同様で、端では前ジャンプ2強Pが最大、中央はテンペスト。端では中サイクロン始動をしている人が多いので、前飛びを意識したい。テンペスト始動はとてもダメージが高く、大P>大スパイクではもったいない。テンペストでパニカンを取ると「こやつやるな」感を演出できるので、余裕があれば狙いたい",
        "recipes": [
          {
            "label": "中央",
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          },
          {
            "label": "端",
            "inputs": "j.2HP",
            "recipeJa": "J2大P"
          }
        ],
        "startSec": 26,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Blanka",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_blanka_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 中央 テンペスト、端 前ジャンプ2大P",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央は テンペスト、端は 前ジャンプ2大P。端の2大Pは前ジャンプから。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央",
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          },
          {
            "label": "端",
            "inputs": "j.2HP",
            "recipeJa": "J2大P"
          }
        ],
        "startSec": 133,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Dhalsim",
    "perspective": "共通",
    "summary": "一番大事なのは、ズームに被弾せずに近づき、ズームに飛びを合わせることを見せて、気持ちよくズームを打たせないこと。テレポは小技で落とし、ファイアとテレポに挟まれる位置にいない。近づけば OD 無敵技が無く好き放題",
    "threats": [
      {
        "name": "テレポート",
        "about": "前にも後ろにも出られるワープ"
      },
      {
        "name": "ファイア→テレポート",
        "about": "ヨガファイアを出してからテレポートし、弾と挟む"
      },
      {
        "name": "ズーム",
        "about": "とても長い手足の攻撃。強ズームなど、ダルシムが自由に打てる"
      },
      {
        "name": "ヨガファイア",
        "about": "弾"
      },
      {
        "name": "SA2",
        "about": "火の弾を吐く。ボタンを押しっぱなしで溜められる"
      },
      {
        "name": "フロート",
        "about": "浮く動き。グラップ狩りなどに使う"
      },
      {
        "name": "ヨガアーチ",
        "about": "ヨガアーチや空中ODコメットなど、空中から無理やり近づく動き"
      },
      {
        "name": "中央での投げとグラップ狩り",
        "about": "中央で触った後の本命は投げとグラップ狩り（打撃はあまり減らない）"
      }
    ],
    "youtubeId": "v76OCJ6WpiM",
    "sourceTitle": "ダルシム対策",
    "publishedAt": "2025-09-30",
    "patchVersion": "Y3",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_v76OCJ6WpiM_dhalsim_01",
        "threats": [
          "テレポート"
        ],
        "topic": "対空",
        "title": "テレポを見たら、反射で小技を押して落とす",
        "text": "ダルシム戦で超大事な技術。テレポートを見たら、とりあえず小技（リュウなら弱P）を反射的に押せるようにする。前のテレポでも後ろのテレポでも落ちる。中Pや引き大Kの方がリターンは出るが、反応がより必要なので、とりあえず小技が無難",
        "recipes": [],
        "startSec": 0,
        "scenes": [
          11,
          39
        ]
      },
      {
        "id": "mu_v76OCJ6WpiM_dhalsim_02",
        "threats": [
          "ファイア→テレポート"
        ],
        "topic": "守り",
        "title": "ファイアとテレポに挟まれる位置にいない。挟まれたらパリィ",
        "text": "ファイアから挟んでくるテレポは、小技を押すとファイアを食らうのでダメ。弾とテレポに挟まれる位置にいないことが大事（見えないし、ダルシム側にリスクが無い）。その位置に行ってしまったら、来ると思ったらパリィを押す（表裏が関係ないので、触られても大ダメージは食らわない）",
        "recipes": [],
        "startSec": 55,
        "scenes": [
          75,
          85
        ]
      },
      {
        "id": "mu_v76OCJ6WpiM_dhalsim_03",
        "threats": [
          "ファイア→テレポート"
        ],
        "topic": "守り",
        "title": "歩きガードや歩きパリィで、挟まれない位置を取る",
        "text": "ちょうどいい位置でガードしなければ挟まれないので、歩いてガードや歩いてパリィをすると、ファイアの後のテレポをずらせる。大きく下がる手もある（ファイアは食らうが、ダルシムはダウンまで持っていけない）。基本は前に行く方がよい（下がらないことが大事）。テレポを見たら飛んで逃げるのも、特にバーンアウト中は大事",
        "recipes": [],
        "startSec": 97,
        "scenes": [
          108,
          121,
          143
        ]
      },
      {
        "id": "mu_v76OCJ6WpiM_dhalsim_04",
        "threats": [
          "ズーム"
        ],
        "topic": "立ち回り",
        "title": "ズームは被弾せず、歩きガードで少しずつ詰める",
        "text": "強ズームなどは前に歩いていると食らうが、1回ガードしたら次のズームをガードできるくらいまで歩く（ステップでもよい）、を繰り返すとだんだん近づける",
        "recipes": [],
        "startSec": 153,
        "scenes": [
          174,
          189,
          199
        ]
      },
      {
        "id": "mu_v76OCJ6WpiM_dhalsim_05",
        "threats": [
          "ズーム"
        ],
        "topic": "立ち回り",
        "title": "ズームに飛びを合わせる距離まで詰めるのが極意",
        "text": "飛びが通る距離（開幕より少し近いくらい）まで近づくと、ダルシムは気持ちよくズームを打てなくなり、飛びを一瞬警戒してから中ズーム、のようになる。飛びを警戒させるとさらに踏み込みやすくなる。ズームは波動拳と思ってよく、飛びは確定する。被弾せずに近づき、ズームに飛びを合わせるぞと見せながら地上から近づいて触る。これがダルシム戦の極意",
        "recipes": [],
        "startSec": 237,
        "scenes": [
          247,
          261,
          274,
          285
        ]
      },
      {
        "id": "mu_v76OCJ6WpiM_dhalsim_06",
        "threats": [
          "ヨガファイア"
        ],
        "topic": "立ち回り",
        "title": "ヨガファイアも歩きガードで詰める。近づけば好き放題",
        "text": "ヨガファイアも歩きガードで近づき、飛びが届く距離まで行けばそんなに撃てない。じりじり歩くのが大事。近づいてしまえば、ダルシムは OD 無敵技も無く SA も弱いので好き放題できる（特に画面端に追い込んだとき）",
        "recipes": [],
        "startSec": 296,
        "scenes": [
          310
        ]
      },
      {
        "id": "mu_v76OCJ6WpiM_dhalsim_07",
        "threats": [
          "SA2"
        ],
        "topic": "攻め",
        "title": "起き攻めは、SA2を持つダルシムにはしゃがみ攻撃を重ねる",
        "text": "SA1には無敵が無く（投げ無敵だけ）、打撃で潰せるので、SA1しかないダルシムには攻め放題。SA2は立ち攻撃や投げを重ねると負けるが、しゃがみ攻撃（しゃがみ中P・しゃがみ大P・しゃがみ小Pでも）を重ねると当たらない。SA2があるダルシムにはしゃがみ攻撃で攻める",
        "recipes": [],
        "startSec": 320,
        "scenes": [
          331,
          343,
          355
        ]
      },
      {
        "id": "mu_v76OCJ6WpiM_dhalsim_08",
        "threats": [
          "SA2"
        ],
        "topic": "反撃",
        "title": "SA2は、火の弾が離れてから投げる。溜めている間は殴る",
        "text": "SA2は反撃しようとすると上から降ってくる火の弾を食らいがち。簡単なのは、火の弾がダルシムから離れたのを見てから投げる（インパクトも確定するが難しい）。ボタン押しっぱなしで溜められるので、離れたのを見てから投げないと食らう。溜めている状態は殴れて、殴れば火の弾も消える。溜め無しには投げ、溜めには殴る、ができると最大の仕置きになる。SA3は完全無敵で詐欺もできないので仕方ない",
        "recipes": [],
        "startSec": 387,
        "scenes": [
          405,
          437,
          449,
          461
        ]
      },
      {
        "id": "mu_v76OCJ6WpiM_dhalsim_09",
        "threats": [
          "中央での投げとグラップ狩り"
        ],
        "topic": "守り",
        "title": "中央で触られたらジャンプで逃げる。グラップは押さず、飛ぶか下がる",
        "text": "ダルシムは攻めも超一流（画面端は弱スラで+5から投げられる）。中央で触られたら、バックジャンプや垂直などで逃げるのが強い。ジャンプを潰そうとする打撃はあまり減らず、いちいちゲージを払うことになる。本命は投げとグラップ狩り（フロートを使ったグラップ狩りもある）なので、うっかりグラップを押すのが一番痛い。グラップするくらいなら、飛ぶかバックステップで投げをかわす",
        "recipes": [],
        "startSec": 505,
        "scenes": [
          516,
          537,
          557,
          566
        ]
      },
      {
        "id": "mu_v76OCJ6WpiM_dhalsim_10",
        "threats": [
          "フロート"
        ],
        "topic": "対空",
        "title": "ガード中に見えたフロートは、必ず対空で落とす",
        "text": "ガードを固めているときにフロートが見えたら、絶対に対空する。フォースダウンなので特殊なコンボも入る。目一杯痛いコンボを決める",
        "recipes": [],
        "startSec": 593,
        "scenes": [
          604
        ]
      },
      {
        "id": "mu_v76OCJ6WpiM_dhalsim_11",
        "threats": [
          "ヨガアーチ"
        ],
        "topic": "守り",
        "title": "空中から無理に近づく技には、付き合わず下がる",
        "text": "ヨガアーチや空中ODコメットなどで無理やり近づいてくる動きは、基本的に無視して下がった方が安全。飛ぼうとしたり変に殴ろうとしたりする方がリスクがある（浮いているダルシムのジャンプ大Pが強すぎる）。ずっと浮いているなら空対空でフォースダウンのコンボを狙うくらいで、これで負けるわけではない",
        "recipes": [],
        "startSec": 623,
        "scenes": [
          644,
          690,
          702
        ]
      }
    ]
  },
  {
    "opponent": "Dhalsim",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "Np32zMbJQm0",
    "sourceTitle": "ダルシムのスラにラッシュ6大K",
    "publishedAt": "2026-07-23",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_Np32zMbJQm0_dhalsim_01",
        "threats": [
          "ヨガアーチ"
        ],
        "topic": "反撃",
        "title": "ヨガアーチ>スラに、見てからラッシュ6大K",
        "text": "ダルシムはヨガアーチ>スラの行動をかなりする。ヨガアーチを見てからラッシュ6大K（下段無敵）を合わせる。負け筋は多いが、当てた時のリターンがとても魅力。何か通さないと勝てない厳しい局面で狙う",
        "recipes": [
          {
            "inputs": "DR > 6HK",
            "recipeJa": "ラッシュ>6大K"
          }
        ],
        "startSec": 6,
        "scenes": [
          12
        ]
      }
    ]
  },
  {
    "opponent": "E. Honda",
    "perspective": "共通",
    "threats": [],
    "youtubeId": "5aQzn0QcC9U",
    "sourceTitle": "ワンポイントキャラ対策 part2",
    "publishedAt": "2025-04-12",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_5aQzn0QcC9U_honda_01",
        "threats": [
          "頭突き"
        ],
        "topic": "反撃",
        "title": "頭突きにはジャストパリィ。ガードした後は発生の早い技",
        "text": "本田で一番困るのは頭突きなので、初心者でもジャスパの練習をした方がいい（練習すれば成功率が上がる。モダンはワンボタン昇龍でもよい）。頭突きをガードした後に押す技も大事で、しゃがみ中Kなどを押すと本田のコパに負ける。押すなら発生の早い技（6Fの中攻撃など。ルークなら中P）。OD頭突きやパリィとの逆択が嫌なら、一瞬下がってガードし、パリィを見たら投げ、OD頭突きなら反撃するのが安定",
        "recipes": [],
        "startSec": 360,
        "scenes": [
          371,
          395,
          407,
          434,
          446
        ]
      },
      {
        "id": "mu_5aQzn0QcC9U_honda_02",
        "threats": [
          "百貫落とし"
        ],
        "topic": "守り",
        "title": "百貫落としはガードしても慌てない。対空は無理しない",
        "text": "ガードしてもそこからコマ投げは届かないので、慌てないことが大事。パリィを押しておいてジャスパになればいいなくらいで、ワンボタン昇龍が優秀なキャラは頑張って落とす。無理に対空しようとするとぐちゃぐちゃになるので、無視する方がリスクは少ない。ガードした後に無敵技もあり",
        "recipes": [],
        "startSec": 463,
        "scenes": [
          475,
          487,
          501
        ]
      }
    ]
  },
  {
    "opponent": "E. Honda",
    "perspective": "共通",
    "summary": "まずは頭突きと百貫落としの対策から。遠い頭突きにはインパクト、近い頭突きにはパリィ、昇龍拳があれば見て昇龍。百貫落としのガード後は読み合いのポイントで、落ちてくるところは対空できる",
    "threats": [
      {
        "name": "頭突き",
        "about": "スーパー頭突き。強いほど遠くまで届く。ガードで-4だが離れるので反撃は無く、ドライブゲージをほぼ1本削る"
      },
      {
        "name": "OD頭突き",
        "about": "1Fからアーマーがあり、弾や打撃を取りながら当てられる。起き上がりの無敵技としても使う"
      },
      {
        "name": "百貫落とし",
        "about": "レバーで飛距離を調整でき、めくりや入れ替えにも使う。ガードさせて本田+2"
      }
    ],
    "youtubeId": "JMLB9blQSiw",
    "sourceTitle": "E.本田の対策（頭突きと百貫落とし）",
    "publishedAt": "2023-06-08",
    "patchVersion": "Y1",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_JMLB9blQSiw_honda_01",
        "threats": [
          "頭突き"
        ],
        "topic": "反撃",
        "title": "遠距離の頭突きは、見てからインパクト",
        "text": "近めだと見てからインパクトをしても確定しないことが多いが、遠い距離ほど到達が遅いので、少し反応が遅れても間に合う。リターンも高い（フルコン）",
        "recipes": [],
        "startSec": 85,
        "scenes": [
          93,
          116,
          126
        ]
      },
      {
        "id": "mu_JMLB9blQSiw_honda_02",
        "threats": [
          "頭突き"
        ],
        "topic": "守り",
        "title": "近距離の頭突きはパリィ（できればジャスト）",
        "text": "近い距離はインパクトで返すのが難しいので、パリィがおすすめ。通常のパリィでもドライブゲージの削りを防げて、後ろを入れながらパリィすれば最悪ガードになる。ジャストパリィが取れたら反撃する。遠い距離でジャスパを狙うと、本田が弱頭突きにしてパリィを釣ってくる（手前に落ちてスカされる）ので、遠距離のパリィはおすすめしない。近距離なら弱頭突きでも届くので、パリィを釣られない",
        "recipes": [],
        "startSec": 143,
        "scenes": [
          150,
          161,
          175,
          195
        ]
      },
      {
        "id": "mu_JMLB9blQSiw_honda_03",
        "threats": [
          "頭突き"
        ],
        "topic": "対空",
        "title": "昇龍拳があるキャラは、頭突きを見てから昇龍拳",
        "text": "昇龍拳を持つキャラは、頭突きを見てから昇龍拳で落とすことが割とできる。モダンはワンボタンで出せるので特におすすめ。クラシックはコマンドを作っておく",
        "recipes": [],
        "startSec": 229,
        "scenes": [
          240
        ]
      },
      {
        "id": "mu_JMLB9blQSiw_honda_04",
        "threats": [
          "OD頭突き"
        ],
        "topic": "攻め",
        "title": "起き上がりの OD 頭突きには、投げを重ねる",
        "text": "本田は起き上がりの無敵技として OD 頭突きをよく使う。投げ無敵は無いので、打撃を重ねると負けるが、投げを重ねれば潰せる。起き攻めは打撃より投げを重ねる方が安全。ガードした場合は隙がとても大きいので、パニッシュカウンターで反撃する",
        "recipes": [],
        "startSec": 270,
        "scenes": [
          284,
          300
        ]
      },
      {
        "id": "mu_JMLB9blQSiw_honda_05",
        "threats": [
          "百貫落とし"
        ],
        "topic": "守り",
        "title": "百貫落としをガードしたら小技はダメ。無敵技かパリィの読み合い",
        "text": "ガードさせて本田+2なので、普通にガードしていると本田のターンが終わらず、小技を出しても負ける。ガードした後は読み合いを仕掛けるポイントで、無敵技やパリィがおすすめ（本田も攻めたいので）。投げ間合いになることはあまり無い",
        "recipes": [],
        "startSec": 318,
        "scenes": [
          343,
          357,
          369
        ]
      },
      {
        "id": "mu_JMLB9blQSiw_honda_06",
        "threats": [
          "百貫落とし"
        ],
        "topic": "対空",
        "title": "百貫落としは、落ちてくるところを上に強い技で対空",
        "text": "落ちてくるところを意外と対空できる（ルークならしゃがみ大Pや昇龍拳など、上に強い技）。上りをガードしてしまっても、タイミングを合わせれば落ちてくるところを対空できる。パニッシュカウンターになるので、キャラによってはさらに追撃も。OD版も少し速いが、反応できれば対空できる",
        "recipes": [],
        "startSec": 389,
        "scenes": [
          400,
          427,
          455,
          465
        ]
      }
    ]
  },
  {
    "opponent": "E. Honda",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "wRXzeCOY0O8",
    "sourceTitle": "百貫落としを落とすコツ",
    "publishedAt": "2026-07-30",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_wRXzeCOY0O8_honda_01",
        "threats": [
          "百貫落とし"
        ],
        "topic": "対空",
        "title": "百貫落としには、バクステで距離を調整して大ミキサー",
        "text": "百貫落としには大ミキサー。バクステで距離を調整しながら大ミキサーを狙うことが多い。めくりになる立ち位置にいないのがコツ。特に端付近は百貫を打ってくる傾向が高いので、落ち着いてバクステして大ミキサーを狙う。バクステしなくても表だと思えば大ミキサー",
        "recipes": [
          {
            "inputs": "バクステ > 236HP",
            "recipeJa": "バクステ>大ミキサー"
          }
        ],
        "startSec": 3,
        "scenes": [
          9,
          14
        ]
      }
    ]
  },
  {
    "opponent": "E. Honda",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_honda_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 中央 大P、端 中サイクロン",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央は 大P、端は 中サイクロン。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央",
            "inputs": "5HP",
            "recipeJa": "大P"
          },
          {
            "label": "端",
            "inputs": "214MP",
            "recipeJa": "中サイクロン"
          }
        ],
        "startSec": 124,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "E. Honda",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "z6LFsR50pRo",
    "sourceTitle": "対本田戦OD頭突き対策",
    "publishedAt": "2025-07-13",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_z6LFsR50pRo_honda_01",
        "threats": [
          "OD頭突き"
        ],
        "topic": "攻め",
        "title": "OD頭突きには、大スパイク>バクステ>J強Pの起き攻め",
        "text": "本田のOD頭突きは特殊な切り返し技で、安全飛びも無効化してくる（もにょもにょも案外OD頭突きで切り返される）。投げなら勝てるが、打撃で行きたいときもある。そこでJ強Pの起き攻め。コツは低めに当てることで、OD頭突きのアーマー部分を取られつつも安全に打撃を重ねられる。通常の安全飛びと同じなのでSA切り返しも無効化できる",
        "recipes": [
          {
            "inputs": "214HK > バクステ > j.HP",
            "recipeJa": "大スパイク>バクステ>J大P"
          }
        ],
        "startSec": 0,
        "scenes": [
          8,
          31,
          46
        ]
      }
    ]
  },
  {
    "opponent": "Dee Jay",
    "perspective": "共通",
    "threats": [
      {
        "name": "ファンキースライサー",
        "about": "こちらの打ち返しをジャスクールでかわしてから当てる突進技"
      }
    ],
    "youtubeId": "5aQzn0QcC9U",
    "sourceTitle": "ワンポイントキャラ対策 part2",
    "publishedAt": "2025-04-12",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_5aQzn0QcC9U_deejay_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "しゃがんで下溜めしているディージェイには飛ばない",
        "text": "しゃがんでいるときの溜め対空が強いので、しゃがみ中Pやしゃがみ大Pを振りながら対空を見ているディージェイには、飛んでも良いことが起きない。近づいてディージェイが下がりたくなり、溜めを解除したタイミングで飛ぶ",
        "recipes": [],
        "startSec": 22,
        "scenes": [
          35,
          45
        ]
      },
      {
        "id": "mu_5aQzn0QcC9U_deejay_02",
        "threats": [
          "ファンキースライサー"
        ],
        "topic": "守り",
        "title": "小不利の場面で手癖で打ち返さず、飛びを被せるかラッシュ",
        "text": "ソバットは-6なので、6Fが長いキャラは確定を意識する。一番気をつけるのは、しゃがみ大P（ディージェイ-2）などの小さな不利の場面で、こちらの打ち返しをジャスクールでかわしてファンキースライサーを当てる狙い。いつも通りに打ち返さず、ジャスクールが来そうなら飛びを被せる（簡単）かラッシュ（カウンターで痛いコンボ）。ジャスクールを見てインパクトもあり（上手いとファンキースライサーを出さないこともある）",
        "recipes": [],
        "startSec": 62,
        "scenes": [
          56,
          78,
          91,
          105,
          127
        ]
      }
    ]
  },
  {
    "opponent": "Dee Jay",
    "perspective": "共通",
    "summary": "弾も飛びも通常技も強い最強候補。ニーショットはしゃがみの上に強い技で対空、ジャスクールは安全ならパリィ・リターンならインパクト。ドライブラッシュには無理に付き合わず打撃を被弾しない。下溜めが無いときは対空が弱く、SAゲージが2本未満なら強気に攻める",
    "threats": [
      {
        "name": "ニーショット",
        "about": "空中からの膝蹴り。昇龍拳の入力中に食らうことも多い"
      },
      {
        "name": "エアスラッシャー",
        "about": "弾。普通にガードするとドライブゲージをどんどん削られる"
      },
      {
        "name": "ジャスクール",
        "about": "崩しに有効。OD版は中段を食らうとフルコン、下段はガードしても反撃が無い。ノーマル版は中段をガードするとディージェイ有利"
      },
      {
        "name": "フェイント",
        "about": "固めに使う3種類のフェイント（ソバット・ソニック・サマーのフェイント）"
      },
      {
        "name": "立ち大K・前中K",
        "about": "強力な通常技。どちらもキャンセルが効かない。前中Kは立ちガードで+1、しゃがみガードで+2"
      },
      {
        "name": "ドライブラッシュ",
        "about": "ディージェイの代名詞。とても速いが距離はそこまで長くない"
      }
    ],
    "youtubeId": "EfeDBESMRkI",
    "sourceTitle": "ディージェイ対策",
    "publishedAt": "2023-06-30",
    "patchVersion": "Y1",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_EfeDBESMRkI_deejay_01",
        "threats": [
          "ニーショット"
        ],
        "topic": "対空",
        "title": "ニーショットは、しゃがみ属性で上に強い技で対空",
        "text": "昇龍拳で対空するのが難しいなら、しゃがみ属性で上に強い技（ケンならしゃがみ大P）で対空すると、反応が遅れても意外と落とせる。できれば通常の飛び込みも落とせる技で対空するのが理想なので、自キャラでどちらも落とせる技を探す",
        "recipes": [],
        "startSec": 28,
        "scenes": [
          43
        ]
      },
      {
        "id": "mu_EfeDBESMRkI_deejay_02",
        "threats": [
          "エアスラッシャー"
        ],
        "topic": "立ち回り",
        "title": "弾はパリィ。連打されたらパリィを押しっぱなし",
        "text": "普通にガードしているとドライブゲージをどんどん削られるので、パリィする。めちゃくちゃ連打してくる場合は、1回パリィを取ってから押しっぱなしにすると、連発してくれる分ドライブゲージが増える",
        "recipes": [],
        "startSec": 61,
        "scenes": [
          75
        ]
      },
      {
        "id": "mu_EfeDBESMRkI_deejay_03",
        "threats": [
          "ジャスクール"
        ],
        "topic": "守り",
        "title": "ODジャスクールは、安全ならパリィ、リターンならインパクト",
        "text": "ローリスクに行くならパリィ（できれば下段派生のタイミングでジャスト）。パリィしておけば中下段で崩されることは無い。リターンを取りたいなら、ODジャスクールを見たらインパクト。中段派生にも下段派生にも確定する（ディージェイが何もしないとインパクトを返されるが、ゲージ2本を使って消極的な行動をしてくれるならそれでもよい）",
        "recipes": [],
        "startSec": 88,
        "scenes": [
          111,
          124,
          136
        ]
      },
      {
        "id": "mu_EfeDBESMRkI_deejay_04",
        "threats": [
          "ジャスクール"
        ],
        "topic": "守り",
        "title": "ノーマルのジャスクールはパリィ。中段をガードしたら手を出さない",
        "text": "ノーマル版は OD 版と違って初段の判定が無いので反応しにくく、インパクトを合わせるのは難しい。見たらパリィが安全。ノーマル版は下段をガードすると-3だが、中段をガードするとなぜかディージェイ有利なので、中段をガードしたら手を出さない",
        "recipes": [],
        "startSec": 156,
        "scenes": [
          166,
          177
        ]
      },
      {
        "id": "mu_EfeDBESMRkI_deejay_05",
        "threats": [
          "フェイント"
        ],
        "topic": "守り",
        "title": "フェイントは意識して、見てから止める",
        "text": "固めに使うフェイントは、ソバットのフェイント・ソニックのフェイント・サマーのフェイントの3種類。正直意識するしかないが、見てから止められるようになるとよい。ソバットのフェイントには見てから小技、ジャックナイフのフェイントには対空（特殊やられなので、通常技対空からの追撃もできる）。甘えた派生にはしっかり仕置きする",
        "recipes": [],
        "startSec": 199,
        "scenes": [
          210,
          222
        ]
      },
      {
        "id": "mu_EfeDBESMRkI_deejay_06",
        "threats": [
          "立ち大K・前中K"
        ],
        "topic": "守り",
        "title": "立ち大K・前中Kにはインパクトが確定。前中Kは立ちガードで投げを4Fで割れる",
        "text": "どちらも大ぶりでキャンセルが効かないので、うまくかみ合えばインパクトが確定する。ぶんぶん振ってくるなら時にはインパクトを見せる。前中Kは立ちガードで+1、しゃがみガードで+2なので、立ちガードしていれば前中Kからの投げを4Fで割れる（しゃがみガードでは割れない）。立ち大Kや前中Kには、この距離で垂直を置いておくと空振りに当てられることもある（前中Kは上にも強く、飛びに引っかかることもある）",
        "recipes": [],
        "startSec": 243,
        "scenes": [
          255,
          266,
          278,
          289,
          311
        ]
      },
      {
        "id": "mu_EfeDBESMRkI_deejay_07",
        "threats": [
          "ドライブラッシュ"
        ],
        "topic": "守り",
        "title": "ドライブラッシュには無理に付き合わない。打撃を被弾しないのが最優先",
        "text": "見てから止めるのはかなり難しく、正解も無いので、あまり付き合わない方がいい。押すならラッシュからの打撃のタイミングでパリィが丸い（ディージェイのラッシュは速いが距離は長くないので、ラッシュから直接投げるのはあまり有効でなく、早い技を打ちたい）。パリィを見せると、次はラッシュから通常投げをするようになり、ようやく止めるのが現実的になる。一番気をつけるのは、無理に止めようとしたり置き技で止めようとしたりしてラッシュの打撃を食らうこと。最悪、投げを受け入れるくらいは安いと思う。垂直を置くのもあり（やりすぎるとラッシュからの対空がある）",
        "recipes": [],
        "startSec": 330,
        "scenes": [
          346,
          368,
          390,
          421,
          432
        ]
      },
      {
        "id": "mu_EfeDBESMRkI_deejay_08",
        "threats": [
          "ドライブラッシュ"
        ],
        "topic": "守り",
        "title": "ダウン中にディージェイを見て、近距離からのラッシュの緑の光に無敵技",
        "text": "中央の通常投げの後は大きく離れるので、ディージェイは弾を撃つか、前ステからドライブラッシュで強引に詰めてくる（だから中央でラッシュから投げを食らってもよい）。ダウン中にディージェイをよく見ておき、緑色に光った（ラッシュした）ら無敵技を打つと確定する。他のキャラでも使えるテクニックで、ディージェイ戦では特に大事",
        "recipes": [],
        "startSec": 443,
        "scenes": [
          466,
          489,
          500
        ]
      },
      {
        "id": "mu_EfeDBESMRkI_deejay_09",
        "threats": [],
        "topic": "攻め",
        "title": "下溜めが無いときは、空ジャンプとめくり気味の飛び",
        "text": "溜めがあればジャックナイフの対空がとても強いが、溜めが無いときの対空は横に短い。下溜めが無いのを確認したら、空ジャンプを混ぜる（スカりに確定も取れる）、めくり気味の飛びも落としにくい。相手の下溜めを確認するのがとても大事",
        "recipes": [],
        "startSec": 531,
        "scenes": [
          546,
          557,
          569,
          580
        ]
      },
      {
        "id": "mu_EfeDBESMRkI_deejay_10",
        "threats": [],
        "topic": "攻め",
        "title": "SA1に無敵が無い。SAゲージが2本未満なら強気に攻める",
        "text": "ディージェイの SA1 には無敵が無いので、SAゲージが2本以上ないと無敵技で割り込めない。ゲージが無いときは露骨に攻めてよい（中央でも）。バーンアウト中でSAゲージが1本しかないときは、大攻撃インパクトが確定する（飛べないし割れない）",
        "recipes": [],
        "startSec": 590,
        "scenes": [
          602,
          614
        ]
      }
    ]
  },
  {
    "opponent": "Manon",
    "perspective": "共通",
    "threats": [
      {
        "name": "キャンセルラッシュ",
        "about": "立ち中P からキャンセルラッシュして、しゃがみ中P かコマ投げ"
      }
    ],
    "youtubeId": "f_YXx7eROZY",
    "sourceTitle": "絶対にやった方が良いサガット対策",
    "publishedAt": "2026-02-12",
    "patchVersion": "Y3",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_f_YXx7eROZY_manon_01",
        "threats": [
          "キャンセルラッシュ"
        ],
        "topic": "守り",
        "title": "立ち中Pラッシュの後のしゃがみ中P・コマ投げに、見てからドライブリバーサル",
        "text": "マノンは立ち中Pからラッシュしてしゃがみ中Pを入れ込む人が多く、キャンセルを見てからでもドライブリバーサルが確定する。キャンセルからのコマ投げにもリバが確定する。リバを見せるとマノンはコパンにしてくる（マノンのコパンは全体16Fで、頑張れば確定することもある）",
        "recipes": [],
        "startSec": 230,
        "scenes": [
          241,
          267
        ]
      }
    ]
  },
  {
    "opponent": "Manon",
    "perspective": "共通",
    "threats": [],
    "youtubeId": "-Hb4pK51CoA",
    "sourceTitle": "ワンポイントキャラ対策 part1",
    "publishedAt": "2025-04-09",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_-Hb4pK51CoA_manon_01",
        "threats": [
          "キャンセルラッシュ"
        ],
        "topic": "守り",
        "title": "中Pラッシュからのしゃがみ中P・コマ投げに、ドライブリバーサル",
        "text": "中Pラッシュからしゃがみ中Pかコマ投げの2択が多いが、しゃがみ中Pなら少し反応が遅れてもドライブリバーサルで返せる。マノンがリバをケアするにはコパンにする必要があるが、ほとんどの人は中Pかコマ投げ。本当は無敵技がよいが難しく、無敵技が無いキャラもいるので、リバがおすすめ",
        "recipes": [],
        "startSec": 134,
        "scenes": [
          143,
          154,
          165
        ]
      }
    ]
  },
  {
    "opponent": "Manon",
    "perspective": "共通",
    "summary": "読み合いの場面は多くないので、どこが読み合いかを理解する（中攻撃ラッシュ後・大P引き寄せ後の+3、引き中K）。アン・オーは見たら立ちガードで、2段目の前に無敵技。ガードさせて有利な通常技は無いので、通常技の後は暴れてよい",
    "threats": [
      {
        "name": "キャンセルラッシュ",
        "about": "リーチの長い立ち中P・中Kからのドライブラッシュ。マノンの本命で、その後はマノン+3"
      },
      {
        "name": "大P引き寄せ",
        "about": "大Pで引き寄せた後はマノン+3"
      },
      {
        "name": "立ち大K",
        "about": "リーチが長く強いが、全体フレームは長い。ガードで-6"
      },
      {
        "name": "アン・オー（引き中K）",
        "about": "引き中Kから中段の派生。2段目は4Fで割れず、ジャンプもできない。下段の択は無い"
      },
      {
        "name": "コマ投げ",
        "about": "メダルが上がるほどダメージが上がるコマンド投げ（最大レベルで3700）"
      },
      {
        "name": "デガジェ",
        "about": "強は-9、弱は-24（奇襲でぶっ込んでくる）"
      },
      {
        "name": "バーンアウト中の中P",
        "about": "こちらがバーンアウト中、ガードさせて+3になる7Fの中P"
      }
    ],
    "youtubeId": "dVDGb7pnJzc",
    "sourceTitle": "マノン対策",
    "publishedAt": "2023-07-07",
    "patchVersion": "Y1",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_dVDGb7pnJzc_manon_01",
        "threats": [
          "立ち大K",
          "デガジェ"
        ],
        "topic": "反撃",
        "title": "確定反撃: 立ち大K -6、強デガジェ -9、弱デガジェ -24 など",
        "text": "マノンは先端ガードを狙ってくるので実戦で反撃できる機会は少ないが、ミスや近めでガードしたときのために覚える。立ち大K -6（めり込めば長めの6F）、強デガジェ -9（近めなら長めの9F以内）、弱デガジェ -24（リーチの長い大攻撃）、打撃投げのランベルセ -20（大攻撃）、-15の技（長めの大攻撃）、中Kの特殊技 -5（5F以内の小技）",
        "recipes": [],
        "startSec": 54,
        "scenes": [
          69,
          80,
          92,
          111,
          124
        ]
      },
      {
        "id": "mu_dVDGb7pnJzc_manon_02",
        "threats": [],
        "topic": "反撃",
        "title": "SA2は2段目をガードしたら反撃、SA3は暗転を見て飛ぶ",
        "text": "SA1は普通にガードして反撃。SA2は最後までガードすると反撃できるが裏に回るので、入れ替えたくなければ2段目をガードしたタイミングで反撃。SA3は投げなのでガードできない。暗転を見てから飛べる（何もしていなければ）ので、飛びからフルコン",
        "recipes": [],
        "startSec": 136,
        "scenes": [
          148,
          172,
          186
        ]
      },
      {
        "id": "mu_dVDGb7pnJzc_manon_03",
        "threats": [
          "キャンセルラッシュ"
        ],
        "topic": "立ち回り",
        "title": "本命は中攻撃からのラッシュ。中攻撃を食らわないように警戒",
        "text": "マノンは通常技のリーチが長く殴り合いは強いが、機動力は低く、遠距離では特にやることが無い。立ち大Kや強デガジェでちくちくしつつ、本命はリーチの長い立ち中P・中Kからのドライブラッシュの2択。大Kは当たればラッキーくらいなので、じっくり戦ってよい。中攻撃の距離になったら中攻撃を食らわないように警戒（弾やリーチの長い技で対応）",
        "recipes": [],
        "startSec": 201,
        "scenes": [
          218,
          230,
          252
        ]
      },
      {
        "id": "mu_dVDGb7pnJzc_manon_04",
        "threats": [
          "立ち大K"
        ],
        "topic": "反撃",
        "title": "立ち大Kは差し返し・垂直・インパクト",
        "text": "リーチが長く強いが、全体フレームが長いので、スカしたら差し返せる。垂直も有効。インパクトも有効で、特に相手の垂直の着地に大Kを合わせてくることが多いので、垂直からインパクトを見せると大Kを振りにくくなる",
        "recipes": [],
        "startSec": 274,
        "scenes": [
          286,
          297
        ]
      },
      {
        "id": "mu_dVDGb7pnJzc_manon_05",
        "threats": [
          "キャンセルラッシュ",
          "大P引き寄せ"
        ],
        "topic": "守り",
        "title": "マノン+3の場面は、無敵技・ジャンプ・ガードの読み合い",
        "text": "読み合いのポイントは多くない。大P引き寄せの後と、中攻撃ラッシュ（立ち中Pが多い）の後はマノン+3で、コマ投げ・打撃・様子見の3択。打撃とコマ投げには無敵技で勝ち、コマ投げを読んだらジャンプして反撃、打撃を読んだらガード。無敵技を見せると、捕まえたチャンスで崩したいマノンへのプレッシャーになり楽になる。中攻撃からラッシュが多いので、ドライブリバーサルを準備しておくのもあり",
        "recipes": [],
        "startSec": 308,
        "scenes": [
          322,
          334,
          379,
          412,
          423
        ]
      },
      {
        "id": "mu_dVDGb7pnJzc_manon_06",
        "threats": [
          "アン・オー（引き中K）"
        ],
        "topic": "守り",
        "title": "アン・オーは見たら立ちガード。2段目の前に無敵技",
        "text": "一番の分からん殺しポイント。引き中K（単発でガードすればマノン-3）からの中段派生、そこからのドライブラッシュ、中段に立とうとする相手へのコマ投げ。2段目は4Fでは割れずジャンプもできない暴れ潰しだが、連続ガードではないので無敵技で割れる。下段の択は基本無い（小足は届くがコンボが届かない）。アン・オーを見たら絶対に立ちガード（しゃがむ理由が無い）、反応できるなら2段目の前に無敵技。2段目が来ると読んだらジャストパリィも",
        "recipes": [],
        "startSec": 452,
        "scenes": [
          472,
          486,
          499,
          521
        ]
      },
      {
        "id": "mu_dVDGb7pnJzc_manon_07",
        "threats": [
          "アン・オー（引き中K）"
        ],
        "topic": "反撃",
        "title": "2段目をガードしたら-11。ラッシュ入れ込みにはドライブリバーサル",
        "text": "2段目までガードすると-11なので反撃できるが、ここからドライブラッシュを入れ込んでくることが多い。何もしなくても無敵技が確定し、ラッシュの後のしゃがみ中Pも連続ガードではないので無敵技を打てる。2段目をガードした後にドライブリバーサルもおすすめ。アン・オーからの強・弱デガジェの中下段も、無敵技やドライブリバーサルで返せる",
        "recipes": [],
        "startSec": 533,
        "scenes": [
          543,
          553,
          572,
          582
        ]
      },
      {
        "id": "mu_dVDGb7pnJzc_manon_08",
        "threats": [
          "コマ投げ"
        ],
        "topic": "守り",
        "title": "コマ投げの後は、立っておいて前ステを見たらボタン",
        "text": "コマ投げの後は距離が離れ、埋まる技は歩いて大K・強デガジェくらいで、どちらにもインパクトで勝てる。マノンはそれを見越して前ステからコマ投げをしてくるが、コマ投げの後の前ステはマノン-3。インパクトをぶっ放すより、強デガジェに備えて立っておき、前ステを見たら6Fくらいまでの技を押す、が安全な守り方（コマ投げも潰せて、攻めも継続されない）。大Kや強デガジェを重ねてくることが多ければインパクト",
        "recipes": [],
        "startSec": 607,
        "scenes": [
          627,
          651,
          664,
          677,
          690
        ]
      },
      {
        "id": "mu_dVDGb7pnJzc_manon_09",
        "threats": [],
        "topic": "守り",
        "title": "ガードさせて有利な通常技は無い。通常技の後は暴れてよい",
        "text": "マノンにはガードさせて有利になる通常技が無いので、通常技をガードしたら4Fの小技で暴れてよい（ドライブラッシュからの打撃はマノン有利なのでダメ）",
        "recipes": [],
        "startSec": 718,
        "scenes": [
          730
        ]
      },
      {
        "id": "mu_dVDGb7pnJzc_manon_10",
        "threats": [
          "バーンアウト中の中P"
        ],
        "topic": "守り",
        "title": "バーンアウト中の中Pは、先端気味なら4Fで暴れてよい",
        "text": "バーンアウト中に中Pをガードすると+3で、7Fの中Pが連続し、黙っているとコマ投げが来る強い連携。4Fで相打ちは取れるが、近めで相打ちするとそこからコンボに行かれる。先端気味の中Pをガードした後なら、相打ちしてもマノンの次が届かないので4Fで暴れてよい。近めはバーンアウトしたことを悔やむしかない",
        "recipes": [],
        "startSec": 741,
        "scenes": [
          752,
          765,
          776
        ]
      }
    ]
  },
  {
    "opponent": "Manon",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "zAsjmsKRrKg",
    "sourceTitle": "マノンSA1にテンペスト反撃",
    "publishedAt": "2026-07-31",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_zAsjmsKRrKg_manon_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "SA1をガードしたら、テンペストで反撃（端まで押し込める）",
        "text": "マノンのSA1にはテンペストで反撃できる。ダメージが高い上に、距離を押し込めるのが特徴。中サイクロン>中P>中サイクロンでは端に届かないことが多いが、テンペストはしっかり押し込む。案外こういう所で勝敗が分かれることもあるので、落ち着いて狙う",
        "recipes": [
          {
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          }
        ],
        "startSec": 4,
        "scenes": [
          9
        ]
      }
    ]
  },
  {
    "opponent": "Manon",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "mspBGGdirXY",
    "sourceTitle": "弾抜けが怖い相手には小ワールを軸に",
    "publishedAt": "2025-11-11",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_mspBGGdirXY_manon_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "OD弾抜けが優秀な相手には、近〜中距離で小ワールを混ぜる",
        "text": "弾抜け技を持っているキャラには、一概に大ワールが強いとは言えない（小ワールの価値が上がり、大ワールのリスクが高まる）。小ワールはラシードの弾の中で最も横の到達点が早いので、弾抜け技の出始めを潰すことが多い（大ワールは軌道の関係で、相手の弾抜けの反応が遅れた場合でもヒットしてしまう）。近〜中距離で小ワールを混ぜるのが強い",
        "recipes": [
          {
            "inputs": "236LK",
            "recipeJa": "弱ワール"
          }
        ],
        "startSec": 30,
        "scenes": [
          44,
          79
        ]
      }
    ]
  },
  {
    "opponent": "Manon",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "asIqwyrdolI",
    "sourceTitle": "テンペスト反撃集",
    "publishedAt": "2025-10-07",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_asIqwyrdolI_manon_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "SA・OD無敵技をガードしたら、テンペストで反撃",
        "text": "SA・OD無敵技をガードした後はテンペストで反撃する。テンペスト始動はとてもダメージが高く、大P>大スパイクではもったいない。テンペストでパニカンを取ると「こやつやるな」感を演出できるので、余裕があれば狙いたい",
        "recipes": [
          {
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          }
        ],
        "startSec": 5,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Manon",
    "perspective": "ラシード",
    "summary": "苦手な人が多い組み合わせだが、本人は勝率60%（動画の時点）。ワールとラッシュだけだと弾抜け・ラッシュ止めで窮屈になるので、しゃがコパと大Pを撒きつつ小ワールとラッシュを混ぜる。J大Kには無理せずODミキサー",
    "threats": [],
    "youtubeId": "qz2enTIw-pc",
    "sourceTitle": "キャラ対策 マノン編",
    "publishedAt": "2025-08-04",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_qz2enTIw-pc_manon_01",
        "threats": [
          "立ち大K"
        ],
        "topic": "立ち回り",
        "title": "しゃがコパをばら撒く（大K対策）",
        "text": "ワールとラッシュをメインに立ち回ると、マノンの弾抜けとラッシュ止めがどちらも優秀なので窮屈になる。そこでしゃがみ小Pをばら撒く。適当に撒ける割にリターンが良く、主にマノンの大K対策（出始めを潰すことが多い。立中Pとは相打ちが多い）。立ち小Pは出始めを潰せても次の立中Pが大抵当たらないのでオススメしない。しゃがみ小Pを撒きつつたまにワールかラッシュを打つと、相手は弾抜けとラッシュ止めが相当やりづらくなる",
        "recipes": [],
        "startSec": 54,
        "scenes": [
          33,
          61,
          75,
          86,
          98
        ]
      },
      {
        "id": "mu_qz2enTIw-pc_manon_02",
        "threats": [
          "立ち中P"
        ],
        "topic": "立ち回り",
        "title": "大Pは立中Pへの置き。中スパイクを仕込んで",
        "text": "大Pは主にマノンの立中Pへの置き技として使う。当てにいくのではなく、当たらない位置で中スパイクを仕込みながらばら撒く。中スパイクまでつながるのが強い。安全に立ち回りたいならしゃがみ小P、リターンを出したいときは大P",
        "recipes": [
          {
            "inputs": "5HP > 214MK",
            "recipeJa": "大P>中スパイク"
          }
        ],
        "startSec": 102,
        "scenes": [
          107,
          110,
          120
        ]
      },
      {
        "id": "mu_qz2enTIw-pc_manon_03",
        "threats": [],
        "topic": "立ち回り",
        "title": "大K・立中Kは封印",
        "text": "大Kは反撃確定が届きやすく、立中Kはマノン相手だとカウンターを取っても前中Pがつながらないことが多いので、どちらも封印推奨。当ててリターンがしっかり出る大Pを振る方がよい",
        "recipes": [],
        "startSec": 120,
        "scenes": [
          125,
          135
        ]
      },
      {
        "id": "mu_qz2enTIw-pc_manon_04",
        "threats": [],
        "topic": "立ち回り",
        "title": "ワールは小（弱）。大ワールはかなりリスク",
        "text": "ワールは小（弱）がオススメ。弾抜けを狙われたとき、小の方が出始めを潰す確率が高い（大ワールはかなりリスク）。しゃがみ小P・大Pを撒きつつワールも適度に打ち、フィニッシャーのラッシュを狙う。少なくとも、ずっと弾抜けやラッシュ止めをされることは無くなる",
        "recipes": [],
        "startSec": 154,
        "scenes": [
          147,
          160,
          166
        ]
      },
      {
        "id": "mu_qz2enTIw-pc_manon_05",
        "threats": [
          "ジャンプ大K"
        ],
        "topic": "対空",
        "title": "マノンのJ大Kは凶器。無理せずODミキサー",
        "text": "飛びへの対応が大事。マノンのJ大Kはもはや凶器で、大ミキサーが一番潰されやすい飛びなので、無理せずODミキサーを使う。飛びを通されたら地上戦で頑張ったことが全部無駄になるので、8割は落としたい",
        "recipes": [],
        "startSec": 179,
        "scenes": [
          184,
          187,
          194,
          199
        ]
      },
      {
        "id": "mu_qz2enTIw-pc_manon_06",
        "threats": [
          "コマ投げ"
        ],
        "topic": "守り",
        "title": "コマ投げを読み切ったら垂直。バックジャンプは厳禁",
        "text": "コマ投げを読み切ったら絶対に垂直ジャンプ。バックジャンプは厳禁（コマ投げキャラ共通の攻略ポイント）。しっかりリスクを負わせる",
        "recipes": [],
        "startSec": 222,
        "scenes": [
          228
        ]
      }
    ]
  },
  {
    "opponent": "Manon",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_manon_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は テンペスト / 垂直大K立中K（中央・端）",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央・端とも テンペスト か 垂直大K立中K。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央・端",
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          },
          {
            "label": "中央・端",
            "inputs": "j.8HK > 5MK",
            "recipeJa": "垂直J大K>立中K"
          }
        ],
        "startSec": 19,
        "scenes": []
      },
      {
        "id": "mu_7ZSY2uXpcwc_manon_02",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "反撃が届かない無敵技は、ガード後バクステ2回から気流",
        "text": "中央・端とも、ガード後にバックステップを2回してから気流（反撃の始動が無い技の場面）",
        "recipes": [],
        "startSec": 32,
        "scenes": [
          35,
          41
        ]
      }
    ]
  },
  {
    "opponent": "Marisa",
    "perspective": "共通",
    "threats": [],
    "youtubeId": "-Hb4pK51CoA",
    "sourceTitle": "ワンポイントキャラ対策 part1",
    "publishedAt": "2025-04-09",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_-Hb4pK51CoA_marisa_01",
        "threats": [
          "グラディウス"
        ],
        "topic": "守り",
        "title": "中P>中P>グラディウスには、中ならインパクト、溜めなら垂直",
        "text": "中P>中P からの中グラディウスにはインパクトで勝てる（中P中P をガードしたらインパクト連打でよい）。溜めグラディウスにされるとインパクトは負けるが、垂直で勝てる。どちらも防御側の方がリターンが高い。SAの発生が早いキャラは、中P中P をガードした時点で、ラッシュされない限り SA が確定する（かなりのキャラが確定を取れる）",
        "recipes": [],
        "startSec": 205,
        "scenes": [
          213,
          224,
          235,
          247
        ]
      }
    ]
  },
  {
    "opponent": "Marisa",
    "perspective": "共通",
    "summary": "ガードさせて有利な技が多いので、まずどの技の後に押してはいけないかを覚える。ファランクスにはインパクトか垂直、溜めグラディウスには下段技で割り込む。スクトゥムは投げで潰し、めくり飛びで攻める",
    "threats": [
      {
        "name": "ガードさせて有利な技",
        "about": "ファランクス+2、溜め大P+3、溜めグラディウス+4、溜め後ろ大P+4、溜め大K+1"
      },
      {
        "name": "ファランクス",
        "about": "上から殴ってくる突進技。ガードさせて+2。OD版はアーマーブレイクでインパクトを潰す"
      },
      {
        "name": "グラディウス",
        "about": "中P>中P のターゲットコンボから入れ込むことが多い。溜め無しはガード側+5、溜めはマリーザ+4でアーマーブレイク"
      },
      {
        "name": "スクトゥム",
        "about": "当て身。通常版は下段以外の打撃を取り、OD版は下段も取る。取ると派生してマリーザ+3"
      }
    ],
    "youtubeId": "SvwOk6ut-1E",
    "sourceTitle": "マリーザ対策（ファランクス＆グラディウス）",
    "publishedAt": "2023-06-15",
    "patchVersion": "Y1",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_SvwOk6ut-1E_marisa_01",
        "threats": [
          "ガードさせて有利な技"
        ],
        "topic": "守り",
        "title": "ファランクス・溜め大P・溜めグラディウス・溜め後ろ大Pの後は押さない",
        "text": "ガードさせて有利な技が多いので、慌ててボタンを押すとボコボコにされる。ファランクス（+2）、溜め大P（溜めないと-3、溜めると+3）、溜めグラディウス（+4。中P のターゲットコンボから多い）、溜め後ろ大P（溜めないと-1、溜めると+4）、溜め大K（+1）の後は、ボタンを押さない",
        "recipes": [],
        "startSec": 50,
        "scenes": [
          67,
          78,
          91,
          123
        ]
      },
      {
        "id": "mu_SvwOk6ut-1E_marisa_02",
        "threats": [
          "ファランクス"
        ],
        "topic": "守り",
        "title": "ファランクスには、インパクトか垂直の置き",
        "text": "連打されて困るならインパクト（同時か少し遅れくらいで出せば確定。見てからもいけるがシビア）。ただし OD ファランクスはアーマーブレイクでインパクトを潰すので、ゲージがある相手には注意。おすすめは垂直の置きで、ファランクスが来そうなタイミングで垂直を置くと着地に確定が取れる（タイミングが悪いとジャンプの上りに食らうが、リスクとリターンは勝っている）",
        "recipes": [],
        "startSec": 164,
        "scenes": [
          175,
          192,
          206
        ]
      },
      {
        "id": "mu_SvwOk6ut-1E_marisa_03",
        "threats": [
          "グラディウス"
        ],
        "topic": "守り",
        "title": "溜め無しグラディウスはガード側有利。溜めには下段技で割り込む",
        "text": "中P>中P からのグラディウスは、溜め無しならガード側+5なので、ボタンを押して自分のターンにする（確定は長い5Fが無いと難しい）。溜めグラディウスはマリーザ+4で、インパクトも潰すアーマーブレイク（3000ほど減る）。ただし溜め版は下段技にアーマーが付いていないので、下段属性の攻撃（中足など、下半身を殴る技）で割れる。自キャラで割れる技を調べる。溜め無しのときに割り込もうとすると、中P>中P>弱グラディウスの暴れ潰しを食らうので、溜め無しはガードしてから動く",
        "recipes": [],
        "startSec": 237,
        "scenes": [
          251,
          284,
          312,
          333,
          357
        ]
      },
      {
        "id": "mu_SvwOk6ut-1E_marisa_04",
        "threats": [
          "グラディウス"
        ],
        "topic": "反撃",
        "title": "中P>中P のターゲットコンボは-8。8F以内の無敵SAで確定",
        "text": "中P>中P のターゲットコンボはそこで止めると-8で、基本は必殺技にキャンセルするが連続ガードではない。ゲージがあれば、ターゲットコンボをガードしたタイミングで8F以内の無敵がある SA を打てば勝てる（キャラによってはファランクスに負ける。ルークは SA2 ならグラディウスに勝ち、SA3 なら全勝ち）",
        "recipes": [],
        "startSec": 373,
        "scenes": [
          383,
          395,
          420
        ]
      },
      {
        "id": "mu_SvwOk6ut-1E_marisa_05",
        "threats": [],
        "topic": "守り",
        "title": "固められたら、ガードよりパリィ",
        "text": "気づくと画面端で固められてバーンアウトしているので、最悪でもパリィすることをおすすめする（ジャストが取れればラッキー）。ガードするならパリィの方がまし",
        "recipes": [],
        "startSec": 465,
        "scenes": [
          476
        ]
      },
      {
        "id": "mu_SvwOk6ut-1E_marisa_06",
        "threats": [
          "スクトゥム"
        ],
        "topic": "攻め",
        "title": "スクトゥムは下段か投げで潰す。取られた後はマリーザ+3の読み合い",
        "text": "通常版の当て身は下段以外の打撃を取るので、下段（下の方を殴る技）か投げで潰せる。OD版は下段も取るが、投げでは勝てる。当て身を取られて殴られた後はマリーザ+3の密着で、当て身からのコマ投げかジャンプ防止の打撃の読み合い。展開が速いので焦らず、コマ投げを読んで飛ぶか、打撃を読んでガードするか、無敵技。起き攻めでは打撃より投げを重ねる方が安定",
        "recipes": [],
        "startSec": 501,
        "scenes": [
          529,
          544,
          565,
          588
        ]
      },
      {
        "id": "mu_SvwOk6ut-1E_marisa_07",
        "threats": [],
        "topic": "攻め",
        "title": "マリーザはめくり飛びに弱い",
        "text": "マリーザの対空は怖くないが、少し横に短く、めくりが落としにくい（しゃがみ大Pでもめくり気味の軌道は落ちにくい）。攻めるときは真上・めくり気味の飛びを意識する",
        "recipes": [],
        "startSec": 618,
        "scenes": [
          630
        ]
      }
    ]
  },
  {
    "opponent": "Marisa",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "makM1ZelG0g",
    "sourceTitle": "マリーザ戦はのらりくらりと立ち回る",
    "publishedAt": "2026-10-21",
    "patchVersion": "Y4",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_makM1ZelG0g_marisa_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "逃げ溜めワールで時間を稼いでよい",
        "text": "ダウンを取った後は、Dゲージ回復も兼ねてイウサール発動が鉄板だが、対マリーザ戦では逃げ溜めワールで時間を稼いでもよい。相手のDゲージがMAXだと、こちらのDゲージだけが回復するので特においしい",
        "recipes": [],
        "startSec": 3,
        "scenes": [
          14
        ]
      },
      {
        "id": "mu_makM1ZelG0g_marisa_02",
        "threats": [],
        "topic": "攻め",
        "title": "SAを温存して、SA3でリーサル",
        "text": "SAを温存するとリーサルを取りやすい。SA3はコンボ火力が大幅に上がり、確定ダメージになるのが良い。イウサールは案外確定ダメージにならない場面がある",
        "recipes": [],
        "startSec": 22,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Marisa",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "asIqwyrdolI",
    "sourceTitle": "テンペスト反撃集",
    "publishedAt": "2025-10-07",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_asIqwyrdolI_marisa_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "SAガード後のテンペストは見た目以上にシビア",
        "text": "マリーザへのテンペスト反撃は見た目以上にシビア。やるなら慎重に。テンペスト始動はとてもダメージが高く、大P>大スパイクではもったいない。テンペストでパニカンを取ると「こやつやるな」感を演出できるので、余裕があれば狙いたい",
        "recipes": [
          {
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          }
        ],
        "startSec": 50,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Marisa",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_marisa_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 端で テンペスト",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。端は テンペスト。地味に難しいので注意。中央の始動は字幕に無い。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "端",
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          }
        ],
        "startSec": 54,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "JP",
    "perspective": "共通",
    "summary": "JPの弱点を突く: しゃがみ大P対空をスカして殴る、大P弾のタイミングでインパクト、めくり飛び。シューティングはフェイントにパリィせず、ワープは絶対に落とす。アムネジアには当て投げ、ラヴーシュカはしゃがみパリィ",
    "threats": [
      {
        "name": "しゃがみ大P対空",
        "about": "通常技対空として優秀だが、横へのリーチが短い"
      },
      {
        "name": "大P弾",
        "about": "大Pからトルバランなどの弾。少し有利なときの打ち返しにもよく使う"
      },
      {
        "name": "アムネジア",
        "about": "当て身。起き上がりなどに使う強力な防御"
      },
      {
        "name": "中足",
        "about": "とても長く、ガードされても-3で隙が少ない"
      },
      {
        "name": "ラヴーシュカ（SA2）",
        "about": "最強のSA2と呼ばれる。上から降ってくる中段の弾がある"
      },
      {
        "name": "シューティング（トルバラン）",
        "about": "トルバランなどの弾を撃ち続ける立ち回り。フェイントやワープを混ぜる"
      }
    ],
    "youtubeId": "HRAZ0BZ7XjY",
    "sourceTitle": "最新版JP対策",
    "publishedAt": "2025-07-03",
    "patchVersion": "Y3",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_HRAZ0BZ7XjY_jp_01",
        "threats": [
          "しゃがみ大P対空"
        ],
        "topic": "立ち回り",
        "title": "しゃがみ大P対空を、空ジャンプでスカして着地を殴る",
        "text": "しゃがみ大Pは横へのリーチが短いので、ギリギリ届かないくらいからあえて飛び込み、ジャンプ攻撃を出さない空ジャンプで対空を空振りさせて着地を殴る（上級者もよく使う）。応用として、起き攻めで小技を2回ガードさせてから垂直ジャンプすると、JP はほぼしゃがみ大Pを出すので、そこを殴る（ジャンプ攻撃は出さない）",
        "recipes": [],
        "startSec": 14,
        "scenes": [
          35,
          59,
          79
        ]
      },
      {
        "id": "mu_HRAZ0BZ7XjY_jp_02",
        "threats": [
          "大P弾"
        ],
        "topic": "反撃",
        "title": "大P弾を打ってくるところでインパクト",
        "text": "透かしの前ジャンプなど対空できない場面で、着地に大Pトルバランをガードさせてドライブゲージを削ってくるところにインパクトがとても刺さる（大Pだけでも、どの必殺技キャンセルでも確定）。負ける選択肢はラッシュだけで、ドライブゲージの少ない相手はラッシュしにくい。少し有利なときの大P弾の打ち返しもよく来るので、毎回打ってくるポイントを見極めてインパクト。無難なのはジャスパだが、大Pは発生が遅く難しい",
        "recipes": [],
        "startSec": 148,
        "scenes": [
          164,
          188,
          211,
          236
        ]
      },
      {
        "id": "mu_HRAZ0BZ7XjY_jp_03",
        "threats": [],
        "topic": "攻め",
        "title": "めくり飛びを狙う。通した後はアムネジアと投げ抜けにバクステ",
        "text": "JP は昇龍拳が無く、しゃがみ大P対空ではめくり飛びが落とせない。近づいて小技2発などで崩せなかったら、めくり飛びを狙う。めくり飛びを通した後はアムネジアを打たれやすいので、中央なら投げるか、投げ抜けとアムネジアのどちらにも勝つ垂直（原人狩り）かバクステ（垂直より対空されにくい）",
        "recipes": [],
        "startSec": 260,
        "scenes": [
          269,
          292,
          304
        ]
      },
      {
        "id": "mu_HRAZ0BZ7XjY_jp_04",
        "threats": [
          "アムネジア"
        ],
        "topic": "攻め",
        "title": "画面端で直接投げを重ねない。小技を挟んだ当て投げ",
        "text": "画面端で直接投げを重ねるのはリスクとリターンが合わない。投げないと崩せないので、1回小技をガードさせてから投げる（アムネジアされても小技を取られるだけで済む）。アムネジアを取られた後の対処は、ほぼ全キャラに良い方法があるので、上手い人の動きを調べる（例: ケンは小技2回ガードさせてパリィしてジャンプ中P で2個目のトゲが当たらない）。起き上がりに露骨に垂直やバクステばかりだと崩せないので、当て投げが基本",
        "recipes": [],
        "startSec": 324,
        "scenes": [
          341,
          357,
          390,
          421
        ]
      },
      {
        "id": "mu_HRAZ0BZ7XjY_jp_05",
        "threats": [
          "中足"
        ],
        "topic": "守り",
        "title": "中足を連打されたら5Fで割るか飛ぶ（カウンターヒットだと割れない）",
        "text": "中足はとても長く-3で隙も少ないので、スカそうとするとラインが下がる。食らった後にどうするかが大事。ノーマルヒットの後の中足連打は5Fで割れ（ケンの中Pなど）、飛ぶこともできる（前飛びはめくりで重なることもある）。バクステより飛ぶ方がよい。カウンターヒットした後は5Fで割れないので注意。中足の後の大Pトルバランの連携も、ノーマルヒットからなら飛べる（カウンターだと飛べない）。インパクトや、丸いのはジャスパ。自キャラで何が勝つか調べておく",
        "recipes": [],
        "startSec": 433,
        "scenes": [
          454,
          475,
          490,
          514
        ]
      },
      {
        "id": "mu_HRAZ0BZ7XjY_jp_06",
        "threats": [
          "ラヴーシュカ（SA2）"
        ],
        "topic": "守り",
        "title": "ラヴーシュカは、しゃがみながらパリィ。中段の弾のときだけ立つ",
        "text": "分かりやすいのは、しゃがみガードしながらパリィ。投げ以外はあまり食らわない（連続ガードで中段の弾を降らせる連携には潰される）。一歩上の対策は、上から降ってくる2発目と4発目の弾（中段）のときだけ立つ。もう1つはドライブリバーサルで、JP が崩しのしゃがみ弱Pやしゃがみ中Kを打っていればリバが確定する。投げだけで済めば2000ダメージほどでそれほど痛くない。バーンアウト中に打たれたら諦める",
        "recipes": [],
        "startSec": 576,
        "scenes": [
          590,
          614,
          650,
          662,
          694
        ]
      },
      {
        "id": "mu_HRAZ0BZ7XjY_jp_07",
        "threats": [
          "シューティング（トルバラン）"
        ],
        "topic": "守り",
        "title": "トルバランを引きつけ、フェイントでないのを確認してからパリィ",
        "text": "シューティングで気づいたらバーンアウトしている人は、ほとんどトルバランのフェイントやワープにパリィしてしまっている。飛んでくる弾をなるべく引きつけて、フェイントでないことを確認してからパリィを押すのを徹底すれば、そんなにバーンアウトしない",
        "recipes": [],
        "startSec": 726,
        "scenes": [
          745,
          765,
          793
        ]
      },
      {
        "id": "mu_HRAZ0BZ7XjY_jp_08",
        "threats": [
          "シューティング（トルバラン）"
        ],
        "topic": "対空",
        "title": "ワープは絶対に落とす。少し後ろの位置をキープ",
        "text": "ワープだけは絶対に落とす（ワープ来いと待つくらいの気持ち）。特殊やられなので痛いコンボが入るので、自キャラの最大の仕置きを準備しておく（ルークならしゃがみ大Pからフラッシュナックルのコンボなど）。ワープの少し後ろにいると一番対空しやすく、真下にいると難しい。真下や設置と挟まれた場合は、めくり属性のジャンプ攻撃で割と落とせる。シューティングの時間は嫌だが、ドライブゲージもそれほど減っておらず、JP もいずれワープや前に出てくるので、そこを迎撃する",
        "recipes": [],
        "startSec": 807,
        "scenes": [
          828,
          863,
          887,
          918
        ]
      },
      {
        "id": "mu_HRAZ0BZ7XjY_jp_09",
        "threats": [
          "シューティング（トルバラン）"
        ],
        "topic": "立ち回り",
        "title": "キャラ別のシューティング対策（ラッシュで弾を抜ける技など）",
        "text": "字幕で聞き取れたもの: ルーク ラッシュ前大P（画面端からでも届く）／ジェイミー ラッシュ前大K／マノン・ザンギ・リュウ ラッシュが弱く苦しい（リュウはラッシュ大足、命がけの竜巻も）／キンバリー ドロン、ラッシュ大P／マリーザ ラッシュ大P、ファランクス／リリー ラッシュ前P／ジュリ ラッシュが速く、ラッシュ前Pや大Kで抜けやすい／ディージェイ 自分も弾を撃つ（強弾は貫通）、ラッシュしゃがみ中K／キャミィ ナックル／本田 頭突き（トルバランを貫通）／ブランカ OD ローリング／ガイル 弾（ODソニック）、近ければラッシュ膝／ケン ラッシュ大足・ラッシュ中K・ラッシュ大P／春麗 強覇山蹴（モダンには無い）／ザンギ SAが溜まるまで我慢／ダルシム 大P・ズーム・テレポ／ラシード ラッシュ前大K／A.K.I. ラッシュ中攻撃・ラッシュ前大K／エド ラッシュしゃがみ大P／豪鬼 ラッシュ前大P、OD 百鬼襲／ベガ OD サイコクラッシャー、ラッシュ大P、強ダブルニー／テリー ラッシュ大K、バーンナックル／舞 OD 花蝶扇、ラッシュ大K／エレナ ラッシュ大P、転がり",
        "recipes": [],
        "startSec": 984,
        "scenes": [
          1017,
          1028,
          1077,
          1122,
          1144,
          1206,
          1260,
          1290,
          1335,
          1355,
          1425,
          1475,
          1525,
          1583
        ]
      }
    ]
  },
  {
    "opponent": "JP",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "Gy5xUCpanE0",
    "sourceTitle": "アムネジアにはワール！",
    "publishedAt": "2026-07-26",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_Gy5xUCpanE0_jp_01",
        "threats": [
          "アムネジア"
        ],
        "topic": "攻め",
        "title": "キャンセルを見てアムネジアを仕込む相手にワール",
        "text": "上手い JP ほど、ラシードのキャンセルモーションを見てアムネジアを仕込みがち。そこを逆手に取って、図々しくワールを打つ。弾で有利Fを取れるのが強い",
        "recipes": [],
        "startSec": 4,
        "scenes": [
          11
        ]
      }
    ]
  },
  {
    "opponent": "JP",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "FLptrKcRrUY",
    "sourceTitle": "JP戦にスラはアリ？",
    "publishedAt": "2026-06-11",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_FLptrKcRrUY_jp_01",
        "threats": [
          "シューティング（トルバラン）"
        ],
        "topic": "立ち回り",
        "title": "端を背負って弾を撃つ JP にスラ",
        "text": "JP は端を背負ってシューティングモードになりがちなので、スラがかなりあり。リスクはそこそこあるが、当てた時の火力が高く、リスクリターンが合っている。パニカンしたスラには大Pがつながる（動画の中ではできていない）。狙いすぎは厳禁だが、弾撃ちを制限できる",
        "recipes": [
          {
            "inputs": "66>6P > 5HP",
            "recipeJa": "スライディング>大P"
          }
        ],
        "startSec": 7,
        "scenes": [
          23
        ]
      }
    ]
  },
  {
    "opponent": "JP",
    "perspective": "ラシード",
    "summary": "ODアムネジアへの対応は3つ。特に1つ目（ウニ1発目をガードして2発目の隙間にJ中K）は中央でかなりの安定択",
    "threats": [],
    "youtubeId": "1UfrKwMIA8g",
    "sourceTitle": "ODアムネジア対策",
    "publishedAt": "2025-09-11",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_1UfrKwMIA8g_jp_01",
        "threats": [
          "アムネジア"
        ],
        "topic": "守り",
        "title": "ウニ1発目をガードし、2発目の隙間にJ中K",
        "text": "ODアムネジアのウニ1発目をガード（パリィ）し、2発目の隙間にJ中K（J中Pも可）。JP側がこれにリスクを負わせようとすると読み合いになる。まずはこれを覚える。中央ではかなりの安定択",
        "recipes": [
          {
            "inputs": "j.MK",
            "recipeJa": "J中K"
          }
        ],
        "startSec": 6,
        "scenes": [
          54
        ]
      },
      {
        "id": "mu_1UfrKwMIA8g_jp_02",
        "threats": [
          "アムネジア"
        ],
        "topic": "守り",
        "title": "大P>中サイクロンで、1発目をカウンターで食らって入れ替えを阻止",
        "text": "大P>中サイクロンで、1発目をカウンターで食らうことで入れ替えを阻止できる。場合によっては中P>中サイクロンもあるが、アムネジアをどの打撃で取られたかで吹っ飛び方が変わってややこしいので、条件の無い大P>中サイクロンの方が楽",
        "recipes": [
          {
            "inputs": "5HP > 214MP",
            "recipeJa": "大P>中サイクロン"
          },
          {
            "label": "場合によって",
            "inputs": "5MP > 214MP",
            "recipeJa": "中P>中サイクロン"
          }
        ],
        "startSec": 16,
        "scenes": [
          27
        ]
      },
      {
        "id": "mu_1UfrKwMIA8g_jp_03",
        "threats": [
          "アムネジア"
        ],
        "topic": "守り",
        "title": "ゲージがあればイウサールでウニをかき消す",
        "text": "ゲージがあればイウサールもあり。ウニをかき消せる。相手は2ゲージ払った後なので、ほぼバーンアウトまで持っていける",
        "recipes": [],
        "startSec": 37,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "JP",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_jp_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 中央 大P、端 中サイクロン",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央は 大P、端は 中サイクロン。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央",
            "inputs": "5HP",
            "recipeJa": "大P"
          },
          {
            "label": "端",
            "inputs": "214MP",
            "recipeJa": "中サイクロン"
          }
        ],
        "startSec": 72,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Zangief",
    "perspective": "共通",
    "summary": "コマ投げの圧に負けず、フレームと読み合いを理解して、意思を持って行動する。投げ読みのバックジャンプは NG で、バクステか前ジャンプ。ザンギは守りが弱いので、起き攻めは強気に（投げ間合いの広さとバクステスクリューに注意）",
    "threats": [
      {
        "name": "ヘッドバット",
        "about": "ザンギ+4。その後はスクリューとヘルスタブの2択"
      },
      {
        "name": "スクリュー後の起き攻め",
        "about": "スクリューを食らった後にラッシュで攻めてくる"
      },
      {
        "name": "中P（ターゲットコンボ）",
        "about": "中P自体は-2だが、中P>中P のターゲットコンボの2発目が早い"
      },
      {
        "name": "大P（アーマー）",
        "about": "溜めると上半身にアーマーがつき、1発受け止める。リーチがとても長い"
      },
      {
        "name": "大足",
        "about": "とても長い。ガードで-13だが反撃が届きにくい。今のバージョンでは当たっても受け身が取れる"
      },
      {
        "name": "ラッシュ",
        "about": "ラッシュ止めに強いラッシュ大P（アーマー）と、下段をスカすラッシュ膝の2択になる"
      },
      {
        "name": "リバーサルSA",
        "about": "起き攻めのときのSA2・SA3"
      }
    ],
    "youtubeId": "DoIfMep9Pu4",
    "sourceTitle": "最新バージョン対応ザンギエフ対策",
    "publishedAt": "2025-07-17",
    "patchVersion": "Y3",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_DoIfMep9Pu4_zangief_01",
        "threats": [
          "ヘッドバット"
        ],
        "topic": "守り",
        "title": "ヘッドバットの後は、投げとヘルスタブの2択。無敵技が分かりやすい",
        "text": "ヘッドバットの後はザンギ+4で、スクリューも埋まり、小技暴れにも勝ち、怖がってジャンプで逃げるとヘルスタブからヒット確認でダブルラリアットまでつながる、完全な2択。一番分かりやすい答えは無敵技（ODやSA）。様子見されると負けるが、2択から3択にできる。毎回無敵技だと読まれるので、ガードやスクリューをかわす選択肢も混ぜる",
        "recipes": [],
        "startSec": 47,
        "scenes": [
          58,
          79,
          91
        ]
      },
      {
        "id": "mu_DoIfMep9Pu4_zangief_02",
        "threats": [
          "ヘッドバット"
        ],
        "topic": "守り",
        "title": "投げ読みはバクステか前ジャンプ。バックジャンプは NG",
        "text": "スクリューが来ると思ったときにバックジャンプするのは本当に弱い。反撃を取れないキャラが多く、読み勝ってもリスクを負わせられない。一番いいのはバックステップで、何でも入る（大攻撃も、インパクトも）。垂直は様子見されるとダブルラリアットで対空されるのでリスクが上がる。画面端では前ジャンプで位置を入れ替えて反撃。バクステの唯一の弱点は、ヘッドバットのお代わり（地上で食らってコンボされる）なので、ヘッドバットが来そうなら垂直か前ジャンプ",
        "recipes": [],
        "startSec": 103,
        "scenes": [
          117,
          129,
          166,
          186,
          233
        ]
      },
      {
        "id": "mu_DoIfMep9Pu4_zangief_03",
        "threats": [
          "スクリュー後の起き攻め"
        ],
        "topic": "守り",
        "title": "スクリューの後の起き攻めは、ラッシュ弱が本命。それ以外ならジャンプ",
        "text": "スクリューの後に走ってくる起き攻めは、打撃の択はあまり強くない。一番強いのはラッシュ立ち弱Kで、埋まっていて飛べず暴れにも勝つが、ザンギはもう1回ラッシュするしかなく、ドライブゲージをかなり使う。こちらの体力が残り3割などで、相手のゲージが潤沢な終盤によく来るので、そのときはジャンプせずにガードを固めるか、ジャスパを狙う。それ以外の状況ならジャンプでよい",
        "recipes": [],
        "startSec": 252,
        "scenes": [
          268,
          280,
          303,
          326
        ]
      },
      {
        "id": "mu_DoIfMep9Pu4_zangief_04",
        "threats": [
          "スクリュー後の起き攻め"
        ],
        "topic": "反撃",
        "title": "ジャンプ逃げを潰すラッシュ大足は、読んだらインパクト",
        "text": "スクリューからのラッシュ大足も、埋まっていて飛べないジャンプ逃げ潰し（ゲージも使わず、ガードさせて-9でこの距離なら反撃もほぼ無い）。ラッシュ大足が来そうならインパクトが確定する。パリィやジャスパは、ラッシュから様子見されるとスクリューで投げられるので、一点読みならインパクト（スクリューに負けてもそれほど痛くない）。基本はジャンプで逃げ、ラッシュ大足とラッシュ弱Kに勝つ選択肢（インパクト・無敵技）を認識しておく",
        "recipes": [],
        "startSec": 359,
        "scenes": [
          372,
          385,
          405,
          421
        ]
      },
      {
        "id": "mu_DoIfMep9Pu4_zangief_05",
        "threats": [],
        "topic": "対空",
        "title": "ザンギは飛びが強いので、対空を意識する",
        "text": "ザンギはよく飛んできて、ジャンプ中Kが下に判定が強く、通常技で対空しようとすると負けることもある。対空は意識すべきで、通常技対空のキャラ（ブランカ・ベガなど）は特に。昇龍拳のキャラはそれほど気にしなくてよい",
        "recipes": [],
        "startSec": 460,
        "scenes": [
          472,
          482
        ]
      },
      {
        "id": "mu_DoIfMep9Pu4_zangief_06",
        "threats": [
          "中P（ターゲットコンボ）"
        ],
        "topic": "反撃",
        "title": "中攻撃始動のターゲットコンボは、インパクト確定",
        "text": "地上戦の本命は中P・大P・大足。中P自体はガードで-2だが、中P>中P のターゲットコンボをヒット確認で3発目まで出してくる。不利だと思って中足などを押すと2発目に潰される（2発目に6Fなら相打ち、5Fなら勝ちだがリーチが長いので届きにくい）。このターゲットコンボは、2発目で止めても3発目まで出してもインパクトが確定する。毎回2発目まで出してくるならインパクトを狙う",
        "recipes": [],
        "startSec": 505,
        "scenes": [
          517,
          540,
          562
        ]
      },
      {
        "id": "mu_DoIfMep9Pu4_zangief_07",
        "threats": [
          "大P（アーマー）"
        ],
        "topic": "守り",
        "title": "大Pには下段で攻めてアーマーを取らせない。取られたらインパクト",
        "text": "溜めた大Pは上半身アーマーで1発受け止める（2発なら割れる）。下段や下半身を殴る技には勝てないので、ザンギには中足ラッシュが有効と言われる（ただしリーチが長すぎて中足が届かないことも多い。ワンボタンのグラディウスのようなもの）。アーマーを取られたと思ったらインパクトを打てると一番偉い。溜めを多用するなら読みでインパクト（溜め無しに反応すると確定しないこともある。最大溜めなら見てからも狙える）。丸いのはパリィ",
        "recipes": [],
        "startSec": 572,
        "scenes": [
          583,
          605,
          629,
          663
        ]
      },
      {
        "id": "mu_DoIfMep9Pu4_zangief_08",
        "threats": [
          "大足"
        ],
        "topic": "反撃",
        "title": "大足は-13だが長いので、反撃が届くかを自キャラで必ず調べる",
        "text": "大足はとても長く、ガードで-13だが技が届かないことが多い。字幕で聞き取れた反撃の例: ルーク 大P（先端は届かない）、ジェイミー ほぼ無し（SA）、マノン 大足、キンバリー 弱ルテンから大P、マリーザ 大P、リリー 無し、JP ほぼ中攻撃、ジュリ・キャミィ・リュウ・本田・ブランカ SAくらい、ディージェイ 大K、ケン 大K（パニカン）、ダルシム しゃがみ中Pラッシュ、ラシード 大K、A.K.I. しゃがみ大P、エド しゃがみ大K（先端以外）、豪鬼 前大P、ベガ 弱ダブルニー、テリー 大K、エレナ 大足",
        "recipes": [],
        "startSec": 689,
        "scenes": [
          702,
          714,
          728,
          753,
          777
        ]
      },
      {
        "id": "mu_DoIfMep9Pu4_zangief_09",
        "threats": [
          "大足",
          "ラッシュ"
        ],
        "topic": "守り",
        "title": "大足の後は受け身が取れる。ラッシュには無敵技やインパクト",
        "text": "今のバージョンから大足の後に受け身が取れるようになり、ザンギはラッシュしないと起き攻めに行けなくなった。ラッシュしてきたら無敵技で切り返すのがかなり有効。ザンギのラッシュは、ラッシュ止めに強いラッシュ大P（アーマー）と、下段をスカすラッシュ膝の2択で厄介だが、ラッシュを見てインパクトは膝にもラッシュ大Pにも基本勝てる（溜めが早いと受け止められる）。ラッシュ中Pにも確定する。負け筋はラッシュ小Pくらい",
        "recipes": [],
        "startSec": 810,
        "scenes": [
          821,
          843,
          868,
          883,
          903
        ]
      },
      {
        "id": "mu_DoIfMep9Pu4_zangief_10",
        "threats": [],
        "topic": "攻め",
        "title": "ザンギへの起き攻めは強気に。投げ間合いの広さとバクステスクリューに注意",
        "text": "バックステップの全体が長く無敵技も無いので、起き攻めは積極的に（ゲージが無いときは投げでも打撃でも好きに）。注意はザンギの通常投げの間合いが広いことで、シミーしようとして投げられることがある。体力が多いので、投げ読みの前ジャンプやバクステスクリューなど強気の防御をしがち。投げるなら+4投げなどバクステスクリューが確定しないフレームで投げ、バクステを見たら打つか飛ぶ癖をつける",
        "recipes": [],
        "startSec": 926,
        "scenes": [
          937,
          950,
          970,
          990
        ]
      },
      {
        "id": "mu_DoIfMep9Pu4_zangief_11",
        "threats": [
          "リバーサルSA"
        ],
        "topic": "攻め",
        "title": "SA3を持つザンギには、起き攻めのふりをしてバックジャンプ",
        "text": "SA3を持つザンギへの起き攻めは、打撃でも投げでも負けて半分減るので勇気がいる。リスクを抑えたいときにバクステする人がいるが、SA2に負ける（SA2はザンギ側の投げ+バクステ読み）。おすすめは攻めるふりをしてバックジャンプ。ジャンプ攻撃でSA2を潰せてコンボに行け、SA3もかわせる",
        "recipes": [],
        "startSec": 1016,
        "scenes": [
          1029,
          1041,
          1064,
          1084
        ]
      },
      {
        "id": "mu_DoIfMep9Pu4_zangief_12",
        "threats": [
          "ラッシュ"
        ],
        "topic": "守り",
        "title": "練習: ザンギのラッシュを見て、無敵技かドライブリバーサル",
        "text": "ザンギの攻めの起点は、弱攻撃ラッシュからの中攻撃と、弱攻撃ラッシュスクリュー。トレモでこれを記録し、ラッシュを見たら無敵技かドライブリバーサルを打つ練習をすると勝率に影響する（全キャラできる）。起き攻めでバックステップされたらジャンプする癖付けもおすすめ",
        "recipes": [],
        "startSec": 1133,
        "scenes": [
          1143,
          1177
        ]
      }
    ]
  },
  {
    "opponent": "Zangief",
    "perspective": "ラシード",
    "summary": "SAを持ったザンギへの起き攻めは、投げればフルパワー、バクステすればSA2、垂直すればSA1を食らう。中スパイク>弱K>J大Kなら全てのリバサSAとODダブラリをケアできる",
    "threats": [],
    "youtubeId": "xKY7iqV72nM",
    "sourceTitle": "ザンギ戦オススメ起き攻め方法",
    "publishedAt": "2026-02-10",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_xKY7iqV72nM_zangief_01",
        "threats": [
          "リバーサルSA"
        ],
        "topic": "攻め",
        "title": "中スパイク>弱K>J大K で、全てのリバサSAをケア",
        "text": "SAを持ったザンギへの起き攻めは困りもの（5F有利から投げればフルパワー、バクステすればSA2、垂直すればSA1を食らう）。そこで中スパイク>弱K>J大K。ザンギ限定の起き攻めで（他のキャラにやるとその場受け身に当たらなかったり、昇竜で落とされたりする）、リバサSA3・SA2・SA1を避けられ、リバサODダブラリも発生前に潰せて、確実にJ大攻撃を重ねられる。両受け身に対応しているのが素晴らしいところで、後ろ受け身にも攻撃が届き、その場起きにもめくりにならず表で当てられる。+5F〜8F取れるので、その後は中攻撃を入れつつ様子を見ながら攻めを継続する",
        "recipes": [
          {
            "inputs": "214MK > 5LK > j.HK",
            "recipeJa": "中スパイク>弱K>J大K"
          }
        ],
        "startSec": 42,
        "scenes": [
          11,
          19,
          28,
          47,
          58,
          64,
          78,
          84,
          93
        ]
      },
      {
        "id": "mu_xKY7iqV72nM_zangief_02",
        "threats": [],
        "topic": "攻め",
        "title": "端に着いたら TC>大スパイク>大P>J大K",
        "text": "端でも使えるが、端に着いたときは TC>大スパイク>大P>J大K（マニアックながら素晴らしい起き攻め）。このレシピもフルパワーを避けられ、SA2・SA1・ダブラリもOK。中スパイクで締めるよりダメージ・ゲージ効率共に優秀",
        "recipes": [
          {
            "inputs": "中大TC > 214HK > 5HP > j.HK",
            "recipeJa": "中大TC>大スパイク>大P>J大K"
          }
        ],
        "startSec": 109,
        "scenes": [
          116,
          124,
          131
        ]
      },
      {
        "id": "mu_xKY7iqV72nM_zangief_03",
        "threats": [],
        "topic": "攻め",
        "title": "負け筋はジャスパ。J攻撃は低めに当てる",
        "text": "唯一の負け筋はジャストパリィだが、J攻撃を3〜4Fほどずらせるので、そうそう取られることは無いはず。J攻撃を高めで当てるパターンと低めで当てるパターンを気分で使い分けるとよいが、低めで当てた場合は-3Fで済むので、基本は低め当てを推奨",
        "recipes": [],
        "startSec": 142,
        "scenes": [
          148,
          154,
          160
        ]
      }
    ]
  },
  {
    "opponent": "Zangief",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "asIqwyrdolI",
    "sourceTitle": "テンペスト反撃集",
    "publishedAt": "2025-10-07",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_asIqwyrdolI_zangief_01",
        "threats": [
          "リバーサルSA"
        ],
        "topic": "反撃",
        "title": "SA2ガード後のテンペストはシビア。ミスりたくないなら大P・中サイクロン",
        "text": "ザンギエフのSA2へのテンペスト反撃もシビア（収録時にミスした）。ミスしたくないときは大Pや中サイクロンで反撃する。テンペスト始動はとてもダメージが高く、大P>大スパイクではもったいない。テンペストでパニカンを取ると「こやつやるな」感を演出できるので、余裕があれば狙いたい",
        "recipes": [
          {
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          },
          {
            "label": "安定",
            "inputs": "5HP",
            "recipeJa": "大P"
          },
          {
            "label": "安定",
            "inputs": "214MP",
            "recipeJa": "中サイクロン"
          }
        ],
        "startSec": 55,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Zangief",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_zangief_01",
        "threats": [
          "リバーサルSA"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 端で テンペスト",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。端は テンペスト。地味に難しいので注意。中央の始動は字幕に無い。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "端",
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          }
        ],
        "startSec": 172,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Lily",
    "perspective": "共通",
    "threats": [],
    "youtubeId": "-Hb4pK51CoA",
    "sourceTitle": "ワンポイントキャラ対策 part1",
    "publishedAt": "2025-04-09",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_-Hb4pK51CoA_lily_01",
        "threats": [
          "しゃがみ大P>コンドルウインド"
        ],
        "topic": "反撃",
        "title": "大Pからのコンドルウインドにインパクト。弱ウインドならラッシュから大攻撃",
        "text": "大Pからのコンドルウインド（モダンの強アシストコンボもこれ）にはインパクトが一番分かりやすい。リリーが弱ウインドで返してくるなら、ラッシュから何でも入る（ラッシュ大攻撃も余裕で入るので、なるべく痛いのを）。少し溜めて離す対策もあるが、インパクトでも勝てるし、後ろ下がりでスカして確定を取ることもできる",
        "recipes": [],
        "startSec": 260,
        "scenes": [
          271,
          284,
          294,
          316
        ]
      }
    ]
  },
  {
    "opponent": "Lily",
    "perspective": "共通",
    "summary": "コンドルウインドで風をまとい、突進から打撃とコマ投げの2択を仕掛けるキャラ。コンドルウインドを気持ちよく撃たせない（割り込み・インパクト・パリィからラッシュ）。守りは弱いので、打撃を重ねて攻める",
    "threats": [
      {
        "name": "コンドルウインド",
        "about": "攻撃判定のある中・強で風をまとう。近めでガードすると-8"
      },
      {
        "name": "コンドルダイブ",
        "about": "空中からの突進。少し離れるので反撃が難しい"
      },
      {
        "name": "コマ投げ",
        "about": "コマンド投げ。バックステップでかわすとパニッシュカウンター（隙60F）"
      },
      {
        "name": "しゃがみ大P>コンドルウインド",
        "about": "小技3発からしゃがみ大Pの先端、そこからコンドルウインドで風をまとう、よくある連携"
      },
      {
        "name": "コンドルスパイア",
        "about": "風をまとった版はガードさせて+1（OD は+2）。そこから4Fの技で暴れを潰すかコマ投げ"
      }
    ],
    "youtubeId": "785kLPBDFcE",
    "sourceTitle": "リリー対策",
    "publishedAt": "2023-07-05",
    "patchVersion": "Y1",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_785kLPBDFcE_lily_01",
        "threats": [
          "コンドルウインド",
          "コンドルダイブ"
        ],
        "topic": "反撃",
        "title": "コンドルウインドは近めなら8Fで、コンドルダイブはラッシュから反撃",
        "text": "中・強のコンドルウインドは、近くでガードすると-8なので、長めの8F以内の技で反撃（リリーは先端を狙ってくるので、先端だと反撃できないことが多い）。空中から突進するコンドルダイブは少し離れて反撃が難しいが、ガードした後にドライブラッシュを使うと、全キャラ比較的簡単に反撃できて、コンボダメージも高い。風をまとっていないときのコンドルダイブは近めでガードすれば-8前後で隙が大きい",
        "recipes": [],
        "startSec": 52,
        "scenes": [
          65,
          78,
          93,
          105
        ]
      },
      {
        "id": "mu_785kLPBDFcE_lily_02",
        "threats": [
          "コマ投げ"
        ],
        "topic": "反撃",
        "title": "コマ投げをバクステでかわしたら、パニカンの大コンボ",
        "text": "コマ投げを垂直でかわしたときは分かりやすいが、バックステップでかわしたときの反撃が安い人が多い。パニッシュカウンターになり、隙も60Fあるので大コンボを入れる。理想は、バクステでかわしたら前ステしてから反撃",
        "recipes": [],
        "startSec": 116,
        "scenes": [
          128,
          140
        ]
      },
      {
        "id": "mu_785kLPBDFcE_lily_03",
        "threats": [
          "しゃがみ大P>コンドルウインド"
        ],
        "topic": "守り",
        "title": "小技3発からのしゃがみ大Pを割れる技を調べておく",
        "text": "小技3発からしゃがみ大Pの先端、そこからコンドルウインド、がとても多い連携。小技3発の後のしゃがみ大Pの発生前を、立ち中Pなどで割れる（キャラによっては中足でも）。リリー側も3発からのコンドルダイブなどを混ぜるが、これを潰せる技を1つ覚えておく",
        "recipes": [],
        "startSec": 183,
        "scenes": [
          194,
          215,
          226
        ]
      },
      {
        "id": "mu_785kLPBDFcE_lily_04",
        "threats": [
          "しゃがみ大P>コンドルウインド"
        ],
        "topic": "守り",
        "title": "しゃがみ大Pからのコンドルウインドに、インパクトで割り込む",
        "text": "しゃがみ大Pをガードした後にインパクトを押すと、中・強のコンドルウインドには確定する。お手軽でおすすめ。ただし弱のコンドルウインドにされるとインパクトを返される",
        "recipes": [],
        "startSec": 249,
        "scenes": [
          260,
          271
        ]
      },
      {
        "id": "mu_785kLPBDFcE_lily_05",
        "threats": [
          "しゃがみ大P>コンドルウインド"
        ],
        "topic": "反撃",
        "title": "上級: パリィしてすぐラッシュで、弱にも中・強にも対応",
        "text": "中のコンドルウインドのタイミングでパリィを押し（できればジャスト）、押してすぐラッシュする。中ならジャストパリィになり、弱ならラッシュからの小技が確定する。難しく遅れると間に合わないが、ジャスパが取れなくてもパリィでドライブの削りを防げて、確定しなくてもこちらのターンにできる。リリーは中・強をわずかに溜めてタイミングをずらせるが、それならインパクトが確定する。とにかく気持ちよくコンドルウインドを撃たせない",
        "recipes": [],
        "startSec": 283,
        "scenes": [
          293,
          305,
          316,
          337
        ]
      },
      {
        "id": "mu_785kLPBDFcE_lily_06",
        "threats": [
          "コンドルスパイア"
        ],
        "topic": "守り",
        "title": "風まといのコンドルスパイアをガードしたら、無敵技・ガード・飛ぶの読み合い",
        "text": "風まといのコンドルスパイアはガードさせて+1（OD は+2）で、そこから4Fの技で暴れを潰すかコマ投げ。ガードしてしまったら、無敵技を打つか、打撃を読んでガードかパリィ、コマ投げを読んで垂直・バクステ・前ジャンプ、の読み合いをしっかり回す。ゲージや体力に余裕があれば、特に OD 版にはドライブリバーサルもあり（相手も風ストックとゲージ2本を使っている）。ただしこちらのゲージも2本使う。コマ投げの後は間合いが大きく離れて攻めがあまり続かないので、ガード多めの方が安定しやすい",
        "recipes": [],
        "startSec": 388,
        "scenes": [
          404,
          415,
          436,
          447
        ]
      },
      {
        "id": "mu_785kLPBDFcE_lily_07",
        "threats": [],
        "topic": "攻め",
        "title": "リリーは守りが弱い。打撃を重ね、小技を細かく刻む",
        "text": "OD トマホークバスターは無敵がありそうに見えて打撃無敵は無い（投げには勝つ）ので、打撃を重ねるのが安牌。SAには無敵があるが発生が13Fと遅いので、全体硬直の少ない小技をうまく重ねればガードが間に合う",
        "recipes": [],
        "startSec": 532,
        "scenes": [
          543,
          555,
          572
        ]
      }
    ]
  },
  {
    "opponent": "Lily",
    "perspective": "ラシード",
    "summary": "どこまで行っても安定させにくい組み合わせ（リリー側も安定して勝ちにくい）。殴り合いの間合いを外し、弱ワールで嫌がらせして、前歩きにラッシュ。結局ワールとラッシュで択るいつもの形でよい",
    "threats": [],
    "youtubeId": "bL8_coxeKhM",
    "sourceTitle": "リリー戦 vs ひびき",
    "publishedAt": "2025-07-20",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_bL8_coxeKhM_lily_01",
        "threats": [
          "コンドルウインド"
        ],
        "topic": "立ち回り",
        "title": "弱ワールを超打つ（置き技・風溜めへの嫌がらせ）",
        "text": "リリー戦は弱ワールを超打つ（いつもは大ワールがメインだが、この組み合わせは小が強い）。リリーの置き技や風溜めに、嫌がらせのように出すイメージ。近〜中間距離なら、見てからODスパイアをされることは無い。ワールを積極的に打って立ち回りの主導権を握る",
        "recipes": [],
        "startSec": 26,
        "scenes": [
          33,
          69
        ]
      },
      {
        "id": "mu_bL8_coxeKhM_lily_02",
        "threats": [],
        "topic": "攻め",
        "title": "殴り合いの間合いを外し、前歩きにラッシュ",
        "text": "中距離の殴り合いでは絶対に勝てないので、その間合いを外しつつワールで嫌がらせ。ワールばかり打たれると相手は前歩きが多めになるので、そこをラッシュで攻めるのが基本形。リリーは近距離は微妙なので、攻めはぼったくり多めに強気でよい",
        "recipes": [],
        "startSec": 39,
        "scenes": [
          44
        ]
      },
      {
        "id": "mu_bL8_coxeKhM_lily_03",
        "threats": [],
        "topic": "立ち回り",
        "title": "ホーンブレイク・2強Pへの差し返しを狙いすぎない",
        "text": "差し返しやすくなったとはいえ、ホーンブレイクや2強Pへの差し返しを狙いすぎない。間合いを調整すると6強Pで触られることが多く、そもそもリリー側が打撃を空振ることがあまり無い",
        "recipes": [],
        "startSec": 49,
        "scenes": [
          55,
          61
        ]
      },
      {
        "id": "mu_bL8_coxeKhM_lily_04",
        "threats": [
          "コンドルスパイア"
        ],
        "topic": "守り",
        "title": "中距離スパイアのリバ用にDゲージを残す",
        "text": "中距離からのスパイアにリバーサルで対応できるよう、Dゲージを残しておく",
        "recipes": [],
        "startSec": 0,
        "scenes": []
      },
      {
        "id": "mu_bL8_coxeKhM_lily_05",
        "threats": [
          "コマ投げ"
        ],
        "topic": "守り",
        "title": "コマ投げを読んだら垂直。バックジャンプはダメ",
        "text": "コマ投げを読んだら、バックジャンプではなく垂直ジャンプ（超超大事）",
        "recipes": [],
        "startSec": 148,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Lily",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_lily_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は テンペスト（中央・端）",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央・端とも テンペスト。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央・端",
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          }
        ],
        "startSec": 66,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Cammy",
    "perspective": "共通",
    "threats": [],
    "youtubeId": "5aQzn0QcC9U",
    "sourceTitle": "ワンポイントキャラ対策 part2",
    "publishedAt": "2025-04-12",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_5aQzn0QcC9U_cammy_01",
        "threats": [
          "キャノンストライク"
        ],
        "topic": "守り",
        "title": "打ち返しにストライクを合わせてくる。打点の高い技か垂直・バクステ",
        "text": "中足をガードした後の中攻撃など、いつも通りの打ち返しをストライクで狩ってくる。打点の高い技（中Pや大Pなど）で打ち返すとストライクを潰せる。毎回ストライクを打ってくると読んだら垂直が一番リターンがある。相手の小不利でバクステするのもあり。ノーマルストライクはめちゃくちゃ足元でない限りキャミィ有利にならないので、ちゃんとボタンを押す（OD は五分以上になることが多い）。理想は、自分有利なら通常技を押し、相手有利のストライクには無敵技",
        "recipes": [],
        "startSec": 156,
        "scenes": [
          167,
          177,
          198,
          208,
          230
        ]
      }
    ]
  },
  {
    "opponent": "Cammy",
    "perspective": "共通",
    "summary": "分からん殺しは少なく、単純にやっていることが強いキャラ。強い行動を1つずつ潰す方針で: ストライクは足元以外ならガード側有利、フーリガンは上に強いしゃがみ技、強以外のスピンナックルは打ち返す",
    "threats": [
      {
        "name": "キャノンストライク",
        "about": "空中からの急降下キック。本当に足元に当てないとキャミィ有利にならない。パニッシュカウンターなら必ずコンボ"
      },
      {
        "name": "立ち大K",
        "about": "リーチが長く判定も強い。ガードでドライブゲージを0.6ほど削られる。-4"
      },
      {
        "name": "フーリガンコンビネーション",
        "about": "派生が5つ（何もしない＝スライディング、投げ、キック＝ストライク、中段のリバースエッジ、フェイント）"
      },
      {
        "name": "大P>大K>ストライク",
        "about": "よくある連携。一見強そうだが割れる"
      },
      {
        "name": "スピンナックル",
        "about": "弱-3、中-2、強だけ+3、OD-2"
      },
      {
        "name": "画面端の起き攻め",
        "about": "キャミィの守りが強く、ODスパイクと OD ストライクの逆択になる"
      }
    ],
    "youtubeId": "c0nCiW7XB1E",
    "sourceTitle": "キャミィ対策",
    "publishedAt": "2023-07-18",
    "patchVersion": "Y1",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_c0nCiW7XB1E_cammy_01",
        "threats": [
          "キャノンストライク"
        ],
        "topic": "守り",
        "title": "ストライクは足元以外ならガード側有利。腰より上なら4Fを打ち返す",
        "text": "ノーマルのストライクでガードに対して有利を取るのは難しい。お腹くらいに当たってもガード側有利、ふくらはぎで五分、膝くらいでやっと+1。腰より上でガードしたら基本ガード側有利なので4Fを打ち返してよい（五分までなら打ち返してよい）",
        "recipes": [],
        "startSec": 56,
        "scenes": [
          66,
          78,
          101,
          128
        ]
      },
      {
        "id": "mu_c0nCiW7XB1E_cammy_02",
        "threats": [
          "キャノンストライク"
        ],
        "topic": "反撃",
        "title": "足元狙いのストライクを後ろ歩きでスカして、着地の硬直を殴る",
        "text": "足元に当てようとすると、相手が少し後ろに下がるだけでスカる。空振りの硬直が結構あるので、後ろ歩きでスカして着地を殴るのがとても大事",
        "recipes": [],
        "startSec": 114,
        "scenes": [
          125,
          137
        ]
      },
      {
        "id": "mu_c0nCiW7XB1E_cammy_03",
        "threats": [
          "キャノンストライク"
        ],
        "topic": "守り",
        "title": "ストライクが来そうなタイミングで、垂直ジャンプかバクステを置く",
        "text": "垂直を置いておくと、ストライクの空振りの硬直を上から踏んでパニッシュカウンターで確定を取れる。バクステを置いておくと、足元狙いのストライクをスカして硬直を殴れる。小技を刻んでから足元狙いのストライク、という連携によく効く",
        "recipes": [],
        "startSec": 172,
        "scenes": [
          184,
          206,
          216
        ]
      },
      {
        "id": "mu_c0nCiW7XB1E_cammy_04",
        "threats": [
          "キャノンストライク"
        ],
        "topic": "対空",
        "title": "通常飛びとストライクの混ぜは読み合い。ストライクのガード後は-4なので焦らない",
        "text": "通常飛びとストライクを混ぜてくるのが一番強く、対策は難しい。通常技対空のキャラなら、ストライクはガードするつもりで通常飛びを引きつけて対空、などで対応できるが、遅らせストライクに負けることもあり読み合い。遅らせストライクもキャミィのリスクは大きい（-4）ので、ストライクをガードしてもずっと攻められ続けるわけではないと分かっていればよい。ストライクにうまく対応すると、相手は通常飛びにしてくるので、そこを対空",
        "recipes": [],
        "startSec": 239,
        "scenes": [
          250,
          261,
          272
        ]
      },
      {
        "id": "mu_c0nCiW7XB1E_cammy_05",
        "threats": [
          "立ち大K"
        ],
        "topic": "反撃",
        "title": "立ち大Kは-4。めり込んだら4Fで確定、空振りは殴る",
        "text": "リーチが長く判定も強く、ガードするとドライブゲージを0.6ほど削られるので、画面端などでずっとガードしているとゲージが無くなる（できればガードもしたくない）。前に進むので、近めでガードすると-4に4Fが届くことが多い（4Fが長いキャラは歩きガードでめり込ませる）。大攻撃なので空振りの隙も大きく、スカしたら殴る。大Kをよく振るキャミィには垂直も有効",
        "recipes": [],
        "startSec": 294,
        "scenes": [
          304,
          316,
          329,
          340
        ]
      },
      {
        "id": "mu_c0nCiW7XB1E_cammy_06",
        "threats": [
          "フーリガンコンビネーション"
        ],
        "topic": "対空",
        "title": "フーリガンは、上に強いしゃがみ技でほぼ全部落とせる",
        "text": "派生は全部で5つ（何もしない＝スライディング（ガードでキャミィ有利）、投げ（立っている相手だけ）、キック＝ストライク、中段のリバースエッジ、パンチ＝フェイント）。上に強いしゃがみ技（ルークならしゃがみ大P）を出せば、ストライク・投げ・リバースエッジ・スライディングはだいたい全部落ちる。フェイントで手前に落ちられるとしゃがみ攻撃が空振るので、それをしてくるようになったらフェイントのところを殴る。弱フーリガンは高さが高いので、なるべく打点の高いしゃがみ技で",
        "recipes": [],
        "startSec": 374,
        "scenes": [
          385,
          406,
          418,
          432,
          448
        ]
      },
      {
        "id": "mu_c0nCiW7XB1E_cammy_07",
        "threats": [
          "大P>大K>ストライク"
        ],
        "topic": "守り",
        "title": "大P>大K>ストライクは、しゃがみ弱Pで割れる",
        "text": "よくやられるが、ぼったくり。全部しゃがみ弱Pなどで割れる（ODでも割れる。中Pなどでも）。特殊やられになるので追撃もできる",
        "recipes": [],
        "startSec": 499,
        "scenes": [
          511,
          523
        ]
      },
      {
        "id": "mu_c0nCiW7XB1E_cammy_08",
        "threats": [
          "スピンナックル"
        ],
        "topic": "守り",
        "title": "スピンナックルは強だけキャミィ有利。弱・中・OD は打ち返す",
        "text": "弱-3、中-2、強だけ+3、OD-2。有利を取れるのは一番遠くまで行く強だけなので、強以外をガードしたら打ち返す（OD を有利と勘違いしている人が多い）。強は一番発生が遅く当たるまでが遅いので、たくさん撃ってくるならできれば止めるか、インパクト（読み合い）。ガードした後に打ち返してよいのは強以外、を見分けるのが大事",
        "recipes": [],
        "startSec": 548,
        "scenes": [
          559,
          571,
          593,
          616
        ]
      },
      {
        "id": "mu_c0nCiW7XB1E_cammy_09",
        "threats": [
          "画面端の起き攻め"
        ],
        "topic": "攻め",
        "title": "画面端の起き攻めは、ODスパイクをガードするタイミングでインパクトを押す",
        "text": "画面端で起き攻めすると、ODスパイクを食らえば入れ替えられ、無敵技をガードしようと遅らせ投げをするとリバーサルの OD ストライクが飛んでくる、という逆択が強い。この2つには両対応できる。少し後ろに下がりながら（投げられないように）、ODスパイクをガードするタイミングでインパクトを押すと、ODスパイクはガードでき、OD ストライクにはインパクトが確定する",
        "recipes": [],
        "startSec": 683,
        "scenes": [
          694,
          718,
          739
        ]
      },
      {
        "id": "mu_c0nCiW7XB1E_cammy_10",
        "threats": [
          "画面端の起き攻め"
        ],
        "topic": "攻め",
        "title": "上級: ガードを入れてから打点の高い技で、ODストライクと遅らせグラップにも勝つ",
        "text": "ODスパイクをガードするタイミングでガードを入れてから、打点の高い技（立ち弱Pや中Pなど）を押すと、ODスパイクはガードになり、OD ストライクは出がかりを叩き落とし（特殊やられで追撃も）、遅らせグラップも狩れる（タイミングが遅いと OD ストライクに負ける。キャラでやりやすさが違う）。前ジャンプされると入れ替わるので万能ではない",
        "recipes": [],
        "startSec": 771,
        "scenes": [
          783,
          796,
          820
        ]
      }
    ]
  },
  {
    "opponent": "Cammy",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "niI6lOZzo_g",
    "sourceTitle": "ブランカのOD無敵反撃方法はこれ！",
    "publishedAt": "2026-07-13",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_niI6lOZzo_g_cammy_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "OD無敵技をガードしたら、前飛びJ2強P",
        "text": "OD無敵技をガードした後の前飛びJ2強Pからのコンボは、ブランカとキャミィ限定で入る（動画の実演はブランカ）。中サイクロンより減る",
        "recipes": [
          {
            "inputs": "j.2HP",
            "recipeJa": "J2強P"
          }
        ],
        "startSec": 12,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Cammy",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "BCufyUwkxI4",
    "sourceTitle": "逆択ストライク対策について",
    "publishedAt": "2025-10-25",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_BCufyUwkxI4_cammy_01",
        "threats": [
          "キャノンストライク"
        ],
        "topic": "対空",
        "title": "逆択ストライクは、動かずに遅らせ2中P",
        "text": "今まではシミー2中Pをやっていたが、動かずに遅らせ2中Pの方が良さそう。昇竜もケアでき、遅らせグラップにも結構勝てる（最速投げには負ける）。シミーしてストライクを通されるのはあまりにも寒いので、どうせ最速投げに負けるならその場で遅らせる方が強い。安定して最大コンボを入れられるのが良い。理想は大スパイクかもしれないが、難しそうなので遅らせ2中Pメイン",
        "recipes": [
          {
            "inputs": "2MP",
            "recipeJa": "2中P"
          }
        ],
        "startSec": 4,
        "scenes": [
          14,
          21,
          30,
          40,
          64
        ]
      }
    ]
  },
  {
    "opponent": "Cammy",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "asIqwyrdolI",
    "sourceTitle": "テンペスト反撃集",
    "publishedAt": "2025-10-07",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_asIqwyrdolI_cammy_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は、中央テンペスト・端は前ジャンプ2強P",
        "text": "無敵技をガードした後、端では前ジャンプ2強Pが最大。中央もテンペストが入る。テンペスト始動はとてもダメージが高く、大P>大スパイクではもったいない。テンペストでパニカンを取ると「こやつやるな」感を演出できるので、余裕があれば狙いたい",
        "recipes": [
          {
            "label": "中央",
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          },
          {
            "label": "端",
            "inputs": "j.2HP",
            "recipeJa": "J2大P"
          }
        ],
        "startSec": 10,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Cammy",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_cammy_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 中央 テンペスト、端 前ジャンプ2大P",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央は テンペスト、端は 前ジャンプ2大P。端の2大Pは前ジャンプから。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央",
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          },
          {
            "label": "端",
            "inputs": "j.2HP",
            "recipeJa": "J2大P"
          }
        ],
        "startSec": 104,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Rashid",
    "perspective": "共通",
    "summary": "ラシードの強みは、遠距離の溜めワールからの気流、速いドライブラッシュ、強サイクロンで有利を取る攻めの継続。イーグルスパイクには必ず確定反撃。気流にはバックジャンプ、強サイクロンにはジャンプ",
    "threats": [
      {
        "name": "イーグルスパイク",
        "about": "画面端からでも届く飛び蹴り。ガードで-36（弱・中・強・OD とも）"
      },
      {
        "name": "溜めワールからの気流",
        "about": "遠距離で溜めワールから気流を出し、気流に乗った攻め（風に乗るミキサーで+2、気流に乗ったイーグルはほぼ反撃無しでドライブを削る）"
      },
      {
        "name": "ドライブラッシュ",
        "about": "とても速い。ただしラッシュから伸びる技が少なく、ガードさせても投げ間合いになりにくい"
      },
      {
        "name": "アラビアンサイクロン",
        "about": "強サイクロンから転がって+1。中サイクロンが暴れ潰しになる"
      },
      {
        "name": "空中サイクロン",
        "about": "空中でサイクロンを使い、いつ落ちてくるか分からない動き"
      }
    ],
    "youtubeId": "c4I7ZVYJBg4",
    "sourceTitle": "ラシード対策",
    "publishedAt": "2023-07-28",
    "patchVersion": "Y1",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_c4I7ZVYJBg4_rashid_01",
        "threats": [
          "イーグルスパイク"
        ],
        "topic": "反撃",
        "title": "イーグルスパイクは-36。前ステ大攻撃・ラッシュ大攻撃・インパクトで反撃",
        "text": "一見強そうだが、ガードさせて-36（弱・中・強・OD とも）なので何でも入る。これを覚えないとこれだけでやられる。一番コスパがいいのは前ステからの大攻撃。最速の判断が難しければドライブラッシュから大攻撃（少し遅れても間に合い、高いコンボが入ることも）。インパクトも、少し歩いてから打てるくらい余裕がある",
        "recipes": [],
        "startSec": 160,
        "scenes": [
          170,
          194,
          216
        ]
      },
      {
        "id": "mu_c4I7ZVYJBg4_rashid_02",
        "threats": [
          "溜めワールからの気流"
        ],
        "topic": "守り",
        "title": "気流が出たタイミングでバックジャンプ",
        "text": "お互い画面端くらいの距離で狙ってくる。気流が出たタイミングでバックジャンプしておくと、相手のミキサーは上から殴れ、イーグルキックもジャンプしておけば上から殴るか、スカして着地に反撃できる。溜めワールが弱だった場合は、空中でワールを食らわないよう、ワールが通り過ぎたあたりでバックジャンプする（早すぎると引っかかる）",
        "recipes": [],
        "startSec": 239,
        "scenes": [
          254,
          278,
          290
        ]
      },
      {
        "id": "mu_c4I7ZVYJBg4_rashid_03",
        "threats": [
          "ドライブラッシュ"
        ],
        "topic": "守り",
        "title": "ドライブラッシュは投げ間合いになりにくい。慌てず下段に注意",
        "text": "とても速く止めるのは現実的でない。ただしラッシュからの中Pなどはかなり離れるので、ガードしてもすぐ投げの択にはならない（かなり近い距離の弱Pは別）。普通にガードを固め、ラッシュ小足やラッシュ中足の下段を食らわないように注意すれば、ラッシュから崩されることはあまり無い。慌ててグラップしない",
        "recipes": [],
        "startSec": 311,
        "scenes": [
          322,
          345,
          357
        ]
      },
      {
        "id": "mu_c4I7ZVYJBg4_rashid_04",
        "threats": [
          "ドライブラッシュ"
        ],
        "topic": "守り",
        "title": "遠距離からのラッシュ前大Kは、発生が遅いので止める",
        "text": "もう少し離れた距離からのラッシュでは前大Kを選びがちで、当たると密着+1で投げ間合いと強いが、発生がとても遅いので止めやすい。遠距離から走ってきたら、中攻撃を置いて止めるか、飛びを置いておく",
        "recipes": [],
        "startSec": 368,
        "scenes": [
          380,
          390,
          402
        ]
      },
      {
        "id": "mu_c4I7ZVYJBg4_rashid_05",
        "threats": [
          "アラビアンサイクロン"
        ],
        "topic": "守り",
        "title": "強サイクロンにはジャンプ。中サイクロンでも被害が小さい",
        "text": "立ち大Pなどから強サイクロンで転がって+1はとても強い連携。強サイクロン自体は隙間が空いていて8F以内の技で割り込めるが、中サイクロンが暴れ潰しになり、カウンターすると中Pまで入る。簡単な対策は、強サイクロンに対してバックジャンプ（隙間で飛べて、ジャンプ攻撃からフルコン）。中サイクロンだった場合も、ジャンプ中なのでカウンターにならず、中Pからのコンボには行かれにくい",
        "recipes": [],
        "startSec": 412,
        "scenes": [
          426,
          436,
          467,
          488
        ]
      },
      {
        "id": "mu_c4I7ZVYJBg4_rashid_06",
        "threats": [
          "アラビアンサイクロン"
        ],
        "topic": "守り",
        "title": "上級: 2〜4F遅らせた4Fの技で、中はガードしつつ強に割り込む",
        "text": "マニアックな対策として、4Fの技を2〜4F遅らせて押すと、中サイクロンはガードになり、強サイクロンには割り込める（5F以上遅れると強に相打ちになる）。体感で練習が必要",
        "recipes": [],
        "startSec": 527,
        "scenes": [
          539,
          556
        ]
      },
      {
        "id": "mu_c4I7ZVYJBg4_rashid_07",
        "threats": [
          "空中サイクロン"
        ],
        "topic": "対空",
        "title": "空中サイクロンは、落ちてくる着地を慌てず対空",
        "text": "昇龍拳を普通に出してもだいたい落ちるし、通常技対空に出されても着地をもう一度対空できる。空中で2段ジャンプした後に対空するとパニッシュカウンターのフォースダウンになって追撃ができる。落ちてくるまで時間があるので、着地に合わせて上に強い技を出し、フォースダウン用のコンボを準備しておく",
        "recipes": [],
        "startSec": 584,
        "scenes": [
          598,
          620,
          633
        ]
      }
    ]
  },
  {
    "opponent": "Rashid",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "qbcq7rfi5yA",
    "sourceTitle": "ラシード戦 vs TsuneHERO",
    "publishedAt": "2026-04-17",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_qbcq7rfi5yA_rashid_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "ミラーでは気流飛びがしにくい。相手の大ミキサーが間に合う",
        "text": "ラシードミラーでは、相手の大ミキサーが対空に間に合ってしまうので、気流飛びがしにくい",
        "recipes": [],
        "startSec": 122,
        "scenes": []
      },
      {
        "id": "mu_qbcq7rfi5yA_rashid_02",
        "threats": [
          "弱スパイク〆の後の起き攻め"
        ],
        "topic": "守り",
        "title": "中央の弱スパイク〆の後は、その場受け身から即投げ",
        "text": "中央で弱スパイクで締められた後は、その場受け身からの即投げが結構あり",
        "recipes": [],
        "startSec": 292,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Rashid",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_rashid_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 垂直大K立中K（中央・端）",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央・端とも 垂直大K立中K。リーサルを狙えるときは気流でもよい（Year 3 からの新コンボ）。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央・端",
            "inputs": "j.8HK > 5MK",
            "recipeJa": "垂直J大K>立中K"
          }
        ],
        "startSec": 180,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Aki",
    "perspective": "共通",
    "summary": "毒つきのシミー大Kを食らわない（グラップしない）、決め打ちの大Kにリスク。通常の紫煙砲には見てからジャンプかインパクト、画面端では前ジャンプを通さない。めくり飛びとインパクトが有効",
    "threats": [
      {
        "name": "OD凶襲突",
        "about": "とても速い突進技。ガードさせて+2で、投げも打撃も埋まる"
      },
      {
        "name": "OD紫煙砲",
        "about": "OD の弾。ここから攻められると割とどうしようもない"
      },
      {
        "name": "紫煙砲",
        "about": "通常の弾。全体52Fと長い"
      },
      {
        "name": "シミー大K",
        "about": "毒をつけてからのシミー大K。通すと火力がとても高い（ノーゲージで3000ほど）"
      },
      {
        "name": "画面端の前ジャンプ",
        "about": "画面端に追い詰めたときの前ジャンプ（ジャンプ大Pがめくりとして強い）と、打撃無敵の OD 蛇軽功"
      },
      {
        "name": "大Kからの伏せ",
        "about": "大Kから伏せて、キックか投げ"
      },
      {
        "name": "ラッシュ中段・持続中段",
        "about": "いろいろな所からのラッシュ中段と持続中段。コンボに行ける"
      },
      {
        "name": "有利を取る技",
        "about": "前K・しゃがみ中K・大K の後は A.K.I. 有利（+2）"
      }
    ],
    "youtubeId": "WSpdUFuHpc0",
    "sourceTitle": "A.K.I.対策",
    "publishedAt": "2024-08-03",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_WSpdUFuHpc0_aki_01",
        "threats": [
          "OD凶襲突"
        ],
        "topic": "対空",
        "title": "OD凶襲突は、上に強い通常技で対空",
        "text": "ガードさせて+2で投げも打撃も埋まる強い技。対空したいが速すぎて昇龍拳は難しいので、上に強い通常技（ケンならしゃがみ大P）で対空を狙う。コマンドがいらず簡単で、技によってはすれ違っても確定が取れる。自キャラで対空できる通常技を調べる",
        "recipes": [],
        "startSec": 11,
        "scenes": [
          38,
          52,
          63,
          106
        ]
      },
      {
        "id": "mu_WSpdUFuHpc0_aki_02",
        "threats": [
          "OD紫煙砲"
        ],
        "topic": "守り",
        "title": "OD紫煙砲は強い。引きつけて前ジャンプも",
        "text": "OD の弾から攻められるのは割とどうしようもない（弾抜け技を持つ一部のキャラは見てから狙える）。A.K.I. は OD 紫煙砲から決め打ち気味にラッシュしてくることが多いので、たまに弾を引きつけて前ジャンプすると凌げることもある（対空されることもあるが、通せば相手3ゲージ使った状態で攻められる）",
        "recipes": [],
        "startSec": 130,
        "scenes": [
          142,
          154,
          165
        ]
      },
      {
        "id": "mu_WSpdUFuHpc0_aki_03",
        "threats": [
          "紫煙砲"
        ],
        "topic": "反撃",
        "title": "通常の紫煙砲は、見てからインパクトかジャンプ",
        "text": "通常の弾は全体52F（ケンの波動拳の49Fより長い）とそれほど強くない。連打してくるなら見てからインパクト。見てからのジャンプは確定させにくいが、A.K.I. が対空できないフレームになることが多いので有効（A.K.I. はジャスパを狙うしかなくなる）",
        "recipes": [],
        "startSec": 188,
        "scenes": [
          198,
          221,
          233,
          255
        ]
      },
      {
        "id": "mu_WSpdUFuHpc0_aki_04",
        "threats": [
          "シミー大K"
        ],
        "topic": "守り",
        "title": "A.K.I. にはグラップしない。決め打ちの大Kにはジャンプかバクステ",
        "text": "A.K.I. 戦で一番大事なこと。毒をつけてからのシミー大Kの火力がとにかく高いので、グラップしない方がいい。投げ抜けを見てから大Kを押すのは難しいので、決め打ちで下がり大Kを打つ人が多い。垂直・前ジャンプでリスクを負わせられ、バクステなら大Kの空振り（-18）に何でも確定してリスクも少なめ。前ジャンプは入れ替えも狙える",
        "recipes": [],
        "startSec": 267,
        "scenes": [
          280,
          303,
          314,
          337,
          361
        ]
      },
      {
        "id": "mu_WSpdUFuHpc0_aki_05",
        "threats": [],
        "topic": "守り",
        "title": "A.K.I. にはインパクトが有効な場面が多い",
        "text": "立ち回りでいきなりインパクトをぶっ放すのは博打だが、前大Kなどの強い技もインパクトに負ける。リスクの少ない固めとして使う、立ち弱攻撃から凶襲突などへの連携にもインパクトで割り込める。A.K.I. はインパクトに弱めなので、固めの最中のインパクトは要所で見せる",
        "recipes": [],
        "startSec": 398,
        "scenes": [
          409,
          420,
          434
        ]
      },
      {
        "id": "mu_WSpdUFuHpc0_aki_06",
        "threats": [
          "画面端の前ジャンプ"
        ],
        "topic": "攻め",
        "title": "画面端の A.K.I. の前ジャンプを通さない。OD蛇軽功には投げ",
        "text": "画面端に追い詰めたら前ジャンプを最大限警戒する（ジャンプ大Pがめくりとして強く、どの A.K.I. も前ジャンプする）。打撃を重ねるか、重ねないなら下がって対空できるようにする。OD 蛇軽功は打撃無敵で投げ無敵が無いので投げで勝てるが、投げを増やすと前ジャンプされる、という読み合いになるので、投げるときも対空の意識を持つ",
        "recipes": [],
        "startSec": 456,
        "scenes": [
          468,
          481,
          493,
          515
        ]
      },
      {
        "id": "mu_WSpdUFuHpc0_aki_07",
        "threats": [
          "大Kからの伏せ"
        ],
        "topic": "守り",
        "title": "伏せたら無敵技。または伏せキックをガードするタイミングでコパン",
        "text": "大Kからの伏せ→キックか投げは、2択に見えて厳密には2択になっていない。伏せたら無敵技を打てば、投げにも打撃にも様子見にも勝てる（弱攻撃からの技で無敵技を釣る選択肢もあるが、それをされるまでは安定）。もう1つは、伏せキックをガードするくらいのタイミングでコパンなどを押しておくと、投げは潰せて早い伏せキックはガードになる（キックを遅らされると負けるが、A.K.I. 側も難しい）",
        "recipes": [],
        "startSec": 527,
        "scenes": [
          541,
          561,
          582,
          598
        ]
      },
      {
        "id": "mu_WSpdUFuHpc0_aki_08",
        "threats": [
          "ラッシュ中段・持続中段"
        ],
        "topic": "守り",
        "title": "ラッシュ中段と持続中段を常に警戒",
        "text": "いろいろな所からラッシュ中段と、持続の中段でコンボに行ける。攻められるときは中段を常に警戒し、見てから立ちガードかパリィが理想。中下段のガードが難しいなら、パリィや無敵技で凌ぐ（どのコンボの締めからも中段は来る）",
        "recipes": [],
        "startSec": 639,
        "scenes": [
          649,
          661
        ]
      },
      {
        "id": "mu_WSpdUFuHpc0_aki_09",
        "threats": [
          "有利を取る技"
        ],
        "topic": "守り",
        "title": "前K・しゃがみ中K・大K の後は暴れない（押すなら無敵技）",
        "text": "前K（+2）・しゃがみ中K（+2）・大K の後は A.K.I. 有利なので、通常技はあまり押さない。有利の後に4Fの技から必殺技で暴れを潰そうとしてくるので、押すなら無敵技やインパクトが攻めにくくさせるポイント",
        "recipes": [],
        "startSec": 672,
        "scenes": [
          684,
          705
        ]
      },
      {
        "id": "mu_WSpdUFuHpc0_aki_10",
        "threats": [],
        "topic": "攻め",
        "title": "A.K.I. はめくり飛びに弱い",
        "text": "A.K.I. の対空は弱くないが、めくりへの対空はかなり弱いので、飛び込むときはめくり飛びが有効",
        "recipes": [],
        "startSec": 744,
        "scenes": [
          756
        ]
      }
    ]
  },
  {
    "opponent": "Aki",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "armU8YOV8lw",
    "sourceTitle": "弾抜けを警戒しつつスラ",
    "publishedAt": "2026-07-15",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_armU8YOV8lw_aki_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "遠くから弾を撃つのは危険",
        "text": "対A.K.I.戦では、遠くから弾を撃つのは危険。トッド削りも慎重にいく",
        "recipes": [],
        "startSec": 0,
        "scenes": []
      },
      {
        "id": "mu_armU8YOV8lw_aki_02",
        "threats": [
          "構え"
        ],
        "topic": "立ち回り",
        "title": "構えを見てからスラ",
        "text": "A.K.I.の構えを見てから、案外スラがいける。弾抜けを警戒しつつ狙えるので有効。気流は機能しづらいが、その代わりスラは当てやすい組み合わせなので、足元をすくっていく",
        "recipes": [],
        "startSec": 4,
        "scenes": [
          7
        ]
      }
    ]
  },
  {
    "opponent": "Aki",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "asIqwyrdolI",
    "sourceTitle": "テンペスト反撃集",
    "publishedAt": "2025-10-07",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_asIqwyrdolI_aki_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "SA1をガードしたら、テンペストで反撃",
        "text": "A.K.I.のSA1も硬直が長めなので、テンペストで反撃できる。テンペスト始動はとてもダメージが高く、大P>大スパイクではもったいない。テンペストでパニカンを取ると「こやつやるな」感を演出できるので、余裕があれば狙いたい",
        "recipes": [
          {
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          }
        ],
        "startSec": 37,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Aki",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_aki_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は テンペスト（中央・端）",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央・端とも テンペスト。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央・端",
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          }
        ],
        "startSec": 204,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Ed",
    "perspective": "共通",
    "summary": "最優先は OD サイコフリッカー対策（パリィ・インパクト・後ろ歩き）。画面端の引き寄せ柔道はパリィで読み合いにする。表裏や中下は無く投げと投げ抜け狩りの2択なので、グラップせず我慢",
    "threats": [
      {
        "name": "ODサイコフリッカー",
        "about": "一番強い技。密着まで引き寄せられる"
      },
      {
        "name": "弾（サイコスパーク）",
        "about": "弾系の技。近ければ下段のやられ判定が出ている"
      },
      {
        "name": "昇龍拳対空",
        "about": "対空は強いが横にとても短い"
      },
      {
        "name": "溜めパンチ",
        "about": "最大溜めでガードさせて有利。キルステップで派生できる"
      },
      {
        "name": "画面端の引き寄せ柔道",
        "about": "画面端から少し引き離して引き寄せ、投げと投げ抜け狩りをループする。バクステや前ジャンプ、無敵技で逃げられない"
      },
      {
        "name": "無敵技（SA・OD）",
        "about": "発生が遅い（13F）。ODサイコアッパーはガードで-28、SAは-32"
      }
    ],
    "youtubeId": "F-7Z2IhY-dQ",
    "sourceTitle": "エド対策",
    "publishedAt": "2024-03-02",
    "patchVersion": "Y1",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_F-7Z2IhY-dQ_ed_01",
        "threats": [
          "ODサイコフリッカー"
        ],
        "topic": "守り",
        "title": "ODサイコフリッカーは、パリィかインパクト",
        "text": "一番強い技なので、まずこれを何とかする。丸いのはパリィで、密着まで引き寄せられず、ジャストパリィなら確定も取れる。インパクトも確定する。見てからジャンプは引っかかるので難しい",
        "recipes": [],
        "startSec": 11,
        "scenes": [
          22,
          38
        ]
      },
      {
        "id": "mu_F-7Z2IhY-dQ_ed_02",
        "threats": [
          "ODサイコフリッカー"
        ],
        "topic": "反撃",
        "title": "先端気味なら、後ろ歩きでスカして反撃",
        "text": "長いので難しいが、先端気味に狙ってくるなら後ろ歩きでスカせる。全体60Fもあるので、ドライブラッシュが長いキャラなら反撃に行ける",
        "recipes": [],
        "startSec": 50,
        "scenes": [
          62
        ]
      },
      {
        "id": "mu_F-7Z2IhY-dQ_ed_03",
        "threats": [
          "弾（サイコスパーク）"
        ],
        "topic": "反撃",
        "title": "弾は近ければしゃがみ技で殴り、サイコスパークを見たら前ジャンプ",
        "text": "近ければ下段のやられ判定が出ているので、ガイルのソニックブレードのようにしゃがみ技（大足や中足）で殴れる。サイコスパークを見たら前ジャンプすれば、弾を撃っていれば確定（撃たずに見られることもある）",
        "recipes": [],
        "startSec": 77,
        "scenes": [
          88,
          99,
          112,
          124
        ]
      },
      {
        "id": "mu_F-7Z2IhY-dQ_ed_04",
        "threats": [
          "昇龍拳対空"
        ],
        "topic": "立ち回り",
        "title": "昇龍拳対空は横に短い。空ジャンプとめくり気味の飛び",
        "text": "昇龍拳の対空は強いが横にとても短いので、空ジャンプが有効。めくり気味に飛んで、着地からもう一度ジャンプするのも（昇龍の発生が遅いので）有効",
        "recipes": [],
        "startSec": 134,
        "scenes": [
          144,
          155
        ]
      },
      {
        "id": "mu_F-7Z2IhY-dQ_ed_05",
        "threats": [
          "溜めパンチ"
        ],
        "topic": "守り",
        "title": "溜めパンチは、インパクトで対処",
        "text": "モーションが見づらいが、最大溜めだと有利を取られる。殴ってくるならインパクトが一番いい。キルステップで派生できるので、それだけ注意",
        "recipes": [],
        "startSec": 168,
        "scenes": [
          178
        ]
      },
      {
        "id": "mu_F-7Z2IhY-dQ_ed_06",
        "threats": [
          "画面端の引き寄せ柔道"
        ],
        "topic": "守り",
        "title": "画面端の引き寄せ柔道は、パリィで読み合いにする",
        "text": "画面端でサイコで引き寄せてから投げる柔道がとても強い。わざと画面端から少し引き離すので、投げを読んでもバクステから確定を取ったり前ジャンプで入れ替えたりできず、無敵技でも逃げられず、インパクトも返される。分かりやすい対策はパリィ（密着にならないので引き寄せられず、ジャスパなら+16ほど）。キルステップからの投げがあるので安定ではないが、何もせず毎回受け入れるより読み合いになる。距離の長い SA なら確定する",
        "recipes": [],
        "startSec": 191,
        "scenes": [
          204,
          215,
          242,
          256,
          280
        ]
      },
      {
        "id": "mu_F-7Z2IhY-dQ_ed_07",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "攻め",
        "title": "無敵技は発生が遅いので、小技重ねが安定",
        "text": "無敵技の発生が13F（SAも13F）と遅いので（キンバリーやリリーと同じ）、起き攻めでちゃんと小技を重ねればガードが間に合う。小技を重ねて詰めるのが比較的安定",
        "recipes": [],
        "startSec": 315,
        "scenes": [
          327
        ]
      },
      {
        "id": "mu_F-7Z2IhY-dQ_ed_08",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "ODサイコアッパーとSAはガード後にインパクトで反撃",
        "text": "OD サイコアッパーはガードすると-28で、2段技で時間も長いので、考えてからでもインパクトで反撃できる（相手のドライブゲージを3.5本ほど減らせる）。SA も-32あるので、ガードしたらインパクトから確定を取る",
        "recipes": [],
        "startSec": 339,
        "scenes": [
          351,
          361,
          383
        ]
      },
      {
        "id": "mu_F-7Z2IhY-dQ_ed_09",
        "threats": [],
        "topic": "守り",
        "title": "表裏や中下は無い。グラップせず我慢してガード",
        "text": "エドは表裏や中段・下段の崩しがあるキャラではなく、引き寄せて投げと投げ抜け狩りの2択を繰り返す。グラップせずに我慢してガードを固めていれば、すごく痛いダメージはもらわない",
        "recipes": [],
        "startSec": 437,
        "scenes": [
          451
        ]
      }
    ]
  },
  {
    "opponent": "Ed",
    "perspective": "ラシード",
    "summary": "気流への対応が甘い相手には、下がって気流を狙うだけでよい。地上戦ではワールを強気に打ち、ラッシュを通す。ファジー中足は最強",
    "threats": [],
    "youtubeId": "vLc1zEU8HnI",
    "sourceTitle": "エド戦",
    "publishedAt": "2025-07-24",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_vLc1zEU8HnI_ed_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "気流対策が甘い相手には、ガン下がりして気流",
        "text": "エド側が気流への対応に慣れていなければ、ずっと下がって気流を狙い、立ち回りを放棄してよい。エドが超強い近〜中間距離で立ち回る必要はない（気流対策が完璧な相手には、慣れない地上戦をやらされる）",
        "recipes": [],
        "startSec": 6,
        "scenes": [
          16
        ]
      },
      {
        "id": "mu_vLc1zEU8HnI_ed_02",
        "threats": [],
        "topic": "立ち回り",
        "title": "地上戦ではワールを強気に。ラッシュは超大事",
        "text": "地上戦をやるときはワールを強気に打つ（打たなければ始まらない。ケンや豪鬼戦よりリスクは低い）。ワールでごまかしつつラッシュをぶち込む。ラッシュは超大事で、当てなければ勝てない（打つタイミングは対戦を重ねて慣れるしかない）",
        "recipes": [],
        "startSec": 22,
        "scenes": []
      },
      {
        "id": "mu_vLc1zEU8HnI_ed_03",
        "threats": [],
        "topic": "立ち回り",
        "title": "ODワールはエド戦だけはそこそこ打つ",
        "text": "ODワールは基本使わないが、エド戦だけはそこそこ打つ。紐などと相性が良い",
        "recipes": [],
        "startSec": 164,
        "scenes": []
      },
      {
        "id": "mu_vLc1zEU8HnI_ed_04",
        "threats": [],
        "topic": "守り",
        "title": "ファジー中足は最強",
        "text": "エド使いはシミーするときにしゃがむ人が少ない印象なので、ファジー中足は常に意識したい",
        "recipes": [],
        "startSec": 57,
        "scenes": [
          55
        ]
      },
      {
        "id": "mu_vLc1zEU8HnI_ed_05",
        "threats": [],
        "topic": "攻め",
        "title": "安全に攻めたいときは、6F有利のしゃがコパ持続",
        "text": "安全に攻めたいときは、6F有利になるしゃがみ小Pの持続当て（自分はリターン重視の攻め方なので、あまり使わない）",
        "recipes": [],
        "startSec": 0,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Ed",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_ed_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 中央 大P、端 中サイクロン",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央は 大P、端は 中サイクロン。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央",
            "inputs": "5HP",
            "recipeJa": "大P"
          },
          {
            "label": "端",
            "inputs": "214MP",
            "recipeJa": "中サイクロン"
          }
        ],
        "startSec": 217,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Ed",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "QUFnm9Uhb70",
    "sourceTitle": "対エド戦しゃがこぱ安全重ね4選",
    "publishedAt": "2025-07-03",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_QUFnm9Uhb70_ed_01",
        "threats": [],
        "topic": "攻め",
        "title": "しゃがコパの安全重ね4選",
        "text": "エドの起き上がりにしゃがみ小Pを安全に重ねる4パターン。1. 弱スパイク締めの後は中足>しゃがコパ、2. 大サイクロン>大ミキサーの後は立中K>しゃがコパ、3. J中P>大スカイハイJ2強Pの後は前ダッシュ>しゃがコパ、4. インパクト>…大ミキサー締めの後はフリップ>しゃがコパ",
        "recipes": [
          {
            "label": "弱スパイク〆後",
            "inputs": "2MK > 2LP",
            "recipeJa": "中足>2弱P"
          },
          {
            "label": "大サイクロン>大ミキサー後",
            "inputs": "5MK > 2LP",
            "recipeJa": "立中K>2弱P"
          },
          {
            "label": "J中P>大スカイハイJ2強P後",
            "inputs": "66 > 2LP",
            "recipeJa": "前ステ>2弱P"
          },
          {
            "label": "インパクト>…大ミキサー〆",
            "inputs": "6KK > 2LP",
            "recipeJa": "フリップ>2弱P"
          }
        ],
        "startSec": 0,
        "scenes": [
          12,
          30,
          43
        ]
      }
    ]
  },
  {
    "opponent": "Akuma",
    "perspective": "共通",
    "summary": "最低限押さえる注意すべき技と、代表的なセットプレイの対策。ガード後に豪鬼有利の技では暴れない、斬空は引きつけて対空、朧は垂直で避ける。画面端の安全飛びに無敵技は NG",
    "threats": [
      {
        "name": "ガードさせて有利な技",
        "about": "立ち中P、立ち大K（しゃがみには当たらない）、溜め波動拳・OD波動拳、百鬼襲からのチョップ・スライディング（低めでガードすると豪鬼有利）など"
      },
      {
        "name": "斬空波動拳",
        "about": "空中からの弾。昇龍拳もタイミングが悪いと潰され、通常技対空はほとんど潰される"
      },
      {
        "name": "波動拳",
        "about": "弱が遅く強が速く、弾速の差が大きい"
      },
      {
        "name": "朧",
        "about": "足払いから投げに派生する技（投げなのでガードできない）。モーションが波動拳に似ている"
      },
      {
        "name": "竜巻からのセットプレイ",
        "about": "弱竜巻からしゃがみ大K で締めて前ステ前ステ投げ（+4 で投げが埋まる）。画面端や近めでは安全飛び"
      },
      {
        "name": "ラッシュ中段",
        "about": "発生が早く強力（モダンには無い）。対空昇龍の後や画面端の投げの後に埋まっている"
      },
      {
        "name": "金剛灼火",
        "about": "弱-8、中-4、強-2、OD-3"
      }
    ],
    "youtubeId": "tPF5EfzgcRs",
    "sourceTitle": "豪鬼対策",
    "publishedAt": "2024-05-24",
    "patchVersion": "Y1",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_tPF5EfzgcRs_akuma_01",
        "threats": [
          "ガードさせて有利な技"
        ],
        "topic": "守り",
        "title": "ガード後に豪鬼有利の技では暴れない",
        "text": "立ち中Pと立ち大K（しゃがみには当たらないが、立ちガードすると豪鬼有利）、ほとんどの位置で豪鬼有利の波動、百鬼襲からのチョップと下段スライディング（キャミィのストライクのように、高めでガードすればガード側有利、低めだと豪鬼有利）、溜め波動拳と OD 波動拳。これらをガードした後は通常技で暴れない",
        "recipes": [],
        "startSec": 11,
        "scenes": [
          21,
          43,
          64
        ]
      },
      {
        "id": "mu_tPF5EfzgcRs_akuma_02",
        "threats": [
          "金剛灼火"
        ],
        "topic": "反撃",
        "title": "前大Kと弱竜巻の空振り、しゃがみ大K、金剛灼火に確定反撃",
        "text": "前大Kはしゃがんでいると2発目がスカるので、しゃがみガードできたら反撃（できれば中攻撃などで）。弱竜巻はしゃがみに当たらず、ミスで空振ることがあるので反撃。しゃがみ大Kは-12なので、しゃがみ大Kなどリーチの長い技で反撃。金剛灼火は弱-8・中-4・強-2・OD-3で、中と強の見分けが難しいが全部ガード側有利なので、ガード後に4Fの技を押しておけば弱と中には反撃が取れる",
        "recipes": [],
        "startSec": 76,
        "scenes": [
          88,
          104,
          123,
          136
        ]
      },
      {
        "id": "mu_tPF5EfzgcRs_akuma_03",
        "threats": [
          "斬空波動拳"
        ],
        "topic": "対空",
        "title": "斬空波動拳は、引きつけて対空する",
        "text": "いつものタイミングで早めに対空技を出すと斬空に負ける（特にモダンの人は早出ししがち）。攻撃さえ当てれば弾の判定は無くなるので、なるべく引きつけて対空する（ルークならライジングアッパー、クラシックは強昇龍を引きつけるか、対空無敵の長い弱昇龍）",
        "recipes": [],
        "startSec": 160,
        "scenes": [
          171,
          183,
          195
        ]
      },
      {
        "id": "mu_tPF5EfzgcRs_akuma_04",
        "threats": [
          "斬空波動拳"
        ],
        "topic": "対空",
        "title": "通常技対空のキャラは、前ジャンプを合わせるか、読んでインパクト",
        "text": "通常技対空がメインのキャラは斬空がかなり大変。少し遠めからの斬空なら、相手の前ジャンプに自分も前ジャンプを合わせると、斬空の終わり際を上から攻撃できる。斬空ばかりしてくると読めたら、飛びを見てインパクトも対策になる（普通の飛びに打ってしまうリスクはあるがリターンは大きい）",
        "recipes": [],
        "startSec": 217,
        "scenes": [
          228,
          238,
          248
        ]
      },
      {
        "id": "mu_tPF5EfzgcRs_akuma_05",
        "threats": [
          "波動拳"
        ],
        "topic": "立ち回り",
        "title": "波動拳に明確な対策は無い。モダンの強波動連打にはガード後に前ジャンプ",
        "text": "弱が遅く強が速いので、パリィもジャンプを合わせるのも難しく、対空が間に合ってしまうことが多い。明確な対策は無く、ゆっくり歩いてジャンプが届くところまで近づき、波動拳のタイミングでジャンプかインパクトを狙うのが基本。モダン豪鬼のワンボタン波動拳は強なので、強ばかり撃ってくるなら開幕くらいの距離で1回ガードしてから前ジャンプが確定する（弱にされると確定しない）",
        "recipes": [],
        "startSec": 258,
        "scenes": [
          272,
          296,
          308,
          330
        ]
      },
      {
        "id": "mu_tPF5EfzgcRs_akuma_06",
        "threats": [
          "朧"
        ],
        "topic": "守り",
        "title": "朧は垂直ジャンプで避けて、上から最大反撃",
        "text": "足払いから投げに派生する朧は、投げなのでガードできない。理想は垂直ジャンプで避けて最大反撃。モーションが見えたら弱攻撃など発生の早い技で潰すこともできる。バックジャンプでかわすと反撃が安く難しくなる。波動拳とモーションが似ていてうっかりパリィしがちなので、無理に波動拳にパリィを狙わずに朧を見ておく",
        "recipes": [],
        "startSec": 353,
        "scenes": [
          366,
          377,
          388
        ]
      },
      {
        "id": "mu_tPF5EfzgcRs_akuma_07",
        "threats": [
          "竜巻からのセットプレイ"
        ],
        "topic": "守り",
        "title": "弱竜巻からの投げ重ねは、中央なら受け入れる",
        "text": "弱竜巻からしゃがみ大Kで締めて前ステ前ステ投げは、+4 から投げが完全に埋まっていて、弱攻撃で暴れることも歩くこともできない。無敵技もリスクがある状況。幸い豪鬼は投げの後があまり強くない（ラッシュで攻め続けられない）ので、中央なら投げを受け入れる方が丸い",
        "recipes": [],
        "startSec": 400,
        "scenes": [
          412,
          424,
          436
        ]
      },
      {
        "id": "mu_tPF5EfzgcRs_akuma_08",
        "threats": [
          "竜巻からのセットプレイ"
        ],
        "topic": "守り",
        "title": "画面端の安全飛びには無敵技 NG。中央の安全飛びにはその場受け身",
        "text": "画面端の弱竜巻しゃがみ大K締めからは前ジャンプで安全飛びができるので、無敵技は NG。ジャンプ攻撃へのジャストパリィ、ガードを固める、ジャンプ攻撃をガードした後に無敵技、で対策する。弱竜巻を近めで当てると中央でも安全飛びができる。その場合は後ろ受け身ではなくその場受け身がおすすめ（後ろ受け身だとジャスパしても投げ間合いの外。その場受け身ならジャスパから投げで+2が取れる）",
        "recipes": [],
        "startSec": 447,
        "scenes": [
          458,
          480,
          506
        ]
      },
      {
        "id": "mu_tPF5EfzgcRs_akuma_09",
        "threats": [
          "ラッシュ中段"
        ],
        "topic": "守り",
        "title": "クラシック豪鬼のラッシュ中段は、対空昇龍の後と画面端の投げの後に警戒",
        "text": "ドライブラッシュからの中段は発生が早く強力（モダンには無い）。クラシックがラッシュで攻めてくるときは、かなり高い確率で来る。一番多いのは対空の昇龍拳の後（ラッシュ中段が埋まっている）。画面端の投げの後も、柔道に加えてラッシュ中段が埋まっていて暴れられない。無敵技、パリィ、見てから立つ、で対応する",
        "recipes": [],
        "startSec": 529,
        "scenes": [
          541,
          553,
          562,
          573
        ]
      }
    ]
  },
  {
    "opponent": "Akuma",
    "perspective": "ラシード",
    "summary": "波動はジャスパからの前飛びと、パリィしながらのラッシュで攻略する。豪鬼は中央で火力が出ないので、こちらの端攻めの時間を多く取る",
    "threats": [],
    "youtubeId": "d5yIiCBpMTk",
    "sourceTitle": "豪鬼戦 vs カワノ",
    "publishedAt": "2025-07-18",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_d5yIiCBpMTk_akuma_01",
        "threats": [
          "波動拳"
        ],
        "topic": "立ち回り",
        "title": "波動はジャスパしてから前飛び",
        "text": "基本は、波動をジャストパリィしてからの前飛びを軸にする",
        "recipes": [],
        "startSec": 3,
        "scenes": []
      },
      {
        "id": "mu_d5yIiCBpMTk_akuma_02",
        "threats": [
          "波動拳"
        ],
        "topic": "攻め",
        "title": "波動にパリィしながらラッシュ",
        "text": "波動にパリィしながらラッシュを狙う。距離を取ってワールを溜めてもよい",
        "recipes": [],
        "startSec": 3,
        "scenes": []
      },
      {
        "id": "mu_d5yIiCBpMTk_akuma_03",
        "threats": [
          "斬空波動拳"
        ],
        "topic": "立ち回り",
        "title": "斬空にはODミキサー。できれば中ミキサー",
        "text": "斬空にはODミキサーを打ってよい。可能なら中ミキサー、もっと頑張れるなら前ダッシュ",
        "recipes": [],
        "startSec": 3,
        "scenes": []
      },
      {
        "id": "mu_d5yIiCBpMTk_akuma_04",
        "threats": [],
        "topic": "攻め",
        "title": "端で攻める時間を多く取る。中央は時間を使ってよい",
        "text": "理想は、攻めているときだけ端にいるイメージ。豪鬼は中央では火力が出ず、運び距離はこちらに分があるので、こちらの端攻めの時間をいかに多く取るかが重要。中央では時間を使ってもよいが、百鬼や斬空が厳しければ攻め重視でいく",
        "recipes": [],
        "startSec": 250,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Akuma",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_akuma_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 中央 垂直大K大P、端 中サイクロン",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央は 垂直大K大P、端は 中サイクロン。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央",
            "inputs": "j.8HK > 5HP",
            "recipeJa": "垂直J大K>大P"
          },
          {
            "label": "端",
            "inputs": "214MP",
            "recipeJa": "中サイクロン"
          }
        ],
        "startSec": 227,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "M. Bison",
    "perspective": "共通",
    "summary": "マインはどこかで付けられる前提で、付けられ方ごとに受け身と対処を使い分ける。強マインの後はその場受け身、弱・中マインの後は後ろ受け身でパリィ。マイン付きサイコのガード後はドライブリバーサルで拒否",
    "threats": [
      {
        "name": "強マイン",
        "about": "ダブルニーやキャンセルラッシュから付けてくる、一番強く一番多いサイコマイン"
      },
      {
        "name": "弱・中マイン",
        "about": "ダブルニーのカウンターヒットからの弱フィストなどで付く"
      },
      {
        "name": "画面端の弱フィスト後の攻め",
        "about": "画面端で弱フィストからの攻め。しゃがみ中Pからのサイコなど"
      },
      {
        "name": "マイン付きサイコ",
        "about": "マインを付けた状態のサイコクラッシャー。ガードしてもドライブゲージをどんどん削られる"
      },
      {
        "name": "様子見",
        "about": "フィストの後などに、一番安全な様子見をするベガ"
      }
    ],
    "youtubeId": "vjR-z10Dv8I",
    "sourceTitle": "更に進化したベガ対策",
    "publishedAt": "2024-11-15",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_vjR-z10Dv8I_bison_01",
        "threats": [
          "強マイン"
        ],
        "topic": "守り",
        "title": "強マインの後は、後ろ受け身ではなくその場受け身",
        "text": "ダブルニーやキャンセルラッシュからの強マインの後は、その場受け身にした方がいい。後ろ受け身だと、ベガはラッシュからしゃがみガードを入れているだけでシミーが成立して楽。その場受け身なら投げ間合いになるので、ベガもマインが消えるのを嫌ってグラップを入れざるを得ず、垂直やファジーが通ったりして楽に凌げなくなる",
        "recipes": [],
        "startSec": 41,
        "scenes": [
          52,
          65,
          90
        ]
      },
      {
        "id": "mu_vjR-z10Dv8I_bison_02",
        "threats": [
          "強マイン"
        ],
        "topic": "守り",
        "title": "ベガのゲージが少ないときは、受け身を散らす",
        "text": "ゲージが少ないベガは強マインの後に走りたくないので、前ステからの攻めなどにしてくる。これは後ろ受け身だと反撃が無い（全キャラ）が、その場受け身をすると隙間ができる。その場受け身を読まれると前ステから攻められるので、基本はその場受け身で相手に楽をさせず、その場を読まれていそうなら後ろ受け身、と散らすのが大事",
        "recipes": [],
        "startSec": 127,
        "scenes": [
          139,
          152,
          177
        ]
      },
      {
        "id": "mu_vjR-z10Dv8I_bison_03",
        "threats": [
          "弱・中マイン"
        ],
        "topic": "守り",
        "title": "弱・中マインの後は、後ろ受け身でパリィを狙う",
        "text": "一番多いのはダブルニーのカウンターヒットからの弱フィスト。弱・中フィストの後は、後ろ受け身にするとラッシュ投げが埋まらないので、ベガは暴れられたくなくて弱攻撃や中足などの打撃を埋めてくる。そこにパリィを狙うのはリスクが少なく、ジャスパが取れれば最高。後ろ受け身からジャスパを狙うのがとても強い。パリィを嫌がってラッシュ投げをしてくるなら、投げが埋まっていないので暴れが通る",
        "recipes": [],
        "startSec": 200,
        "scenes": [
          212,
          236,
          258,
          281
        ]
      },
      {
        "id": "mu_vjR-z10Dv8I_bison_04",
        "threats": [
          "画面端の弱フィスト後の攻め"
        ],
        "topic": "守り",
        "title": "画面端の弱フィスト後のしゃがみ中P>サイコは連続ガードではない。パリィとインパクト",
        "text": "画面端で弱フィストから中Pでガードさせて有利、という攻めの、しゃがみ中Pからのサイコは連続ガードではないので、パリィを狙える。ジャスパが取れればインパクトが入る（OD でも取れる）。ジャスパに失敗しても、パリィが取れていれば得",
        "recipes": [],
        "startSec": 315,
        "scenes": [
          326,
          338,
          361
        ]
      },
      {
        "id": "mu_vjR-z10Dv8I_bison_05",
        "threats": [
          "マイン付きサイコ"
        ],
        "topic": "守り",
        "title": "マイン付きサイコをガードしたら、ドライブリバーサルで拒否",
        "text": "マインを付けた後のサイコをガードしてしまうと、膝が連続ガードで、こういう連携でドライブゲージがどんどん削られて3本などになってしまう。どうせ削られるなら、確定するドライブリバーサルで拒否した方がいい（リバしてもゲージの減りはだいたい同じ）",
        "recipes": [],
        "startSec": 374,
        "scenes": [
          384,
          395,
          420,
          432
        ]
      },
      {
        "id": "mu_vjR-z10Dv8I_bison_06",
        "threats": [
          "様子見"
        ],
        "topic": "攻め",
        "title": "様子見のベガには、中足ラッシュからシミー",
        "text": "フィストの後などベガが一番安全な様子見をするところに、中足ラッシュなどのキャンセルラッシュを1回通す。その後のベガは、投げられるとマインが消えるのでとにかく投げられたくない。ここでのシミーがとてもよく通る（上手いベガはバックジャンプもするが、それを潰す選択肢もあるので結局は択）。ベガ使いのグラップ漏れは必然とも言える",
        "recipes": [],
        "startSec": 463,
        "scenes": [
          476,
          488,
          500,
          551
        ]
      }
    ]
  },
  {
    "opponent": "M. Bison",
    "perspective": "ラシード",
    "summary": "前はきついと思っていたが、今は結構いける部類（座談会での話）。ニーと中Kに動かされ、待たれるとワールを撃ちづらいのが苦手なところ。ベガは守りが弱いので端に持っていきたい",
    "threats": [],
    "youtubeId": "5cKuIfU9nXE",
    "sourceTitle": "座談会切り抜き ベガ対策",
    "publishedAt": "2026-09-30",
    "patchVersion": "Y4",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_5cKuIfU9nXE_bison_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "待たれるとワールが撃ちづらい。見られてインパクトを取られる",
        "text": "ベガ側がかなり待てる組み合わせで、ワールがすごく撃ちづらい。待っているところにワールを見られて、インパクトを確定で取られるイメージが強い",
        "recipes": [],
        "startSec": 74,
        "scenes": [
          135,
          142,
          148
        ]
      },
      {
        "id": "mu_5cKuIfU9nXE_bison_02",
        "threats": [
          "ダブルニープレス"
        ],
        "topic": "立ち回り",
        "title": "ニーと中Kに動かされる",
        "text": "ニーと中Kにすごく動かされて、立ち回りが不自由に感じる。苦手にしているポイント",
        "recipes": [],
        "startSec": 101,
        "scenes": [
          68
        ]
      },
      {
        "id": "mu_5cKuIfU9nXE_bison_03",
        "threats": [
          "ジャンプ大P"
        ],
        "topic": "対空",
        "title": "立ち回り中のジャンプ大Pに注意",
        "text": "ベガの飛びは少し落としづらい。ジャンプ大Pがノイズで、立ち回りの最中に急に飛ばれて対空をミスし、そこから負けることが多い（ODを撃てばよいが…）",
        "recipes": [],
        "startSec": 79,
        "scenes": [
          89,
          92
        ]
      },
      {
        "id": "mu_5cKuIfU9nXE_bison_04",
        "threats": [],
        "topic": "攻め",
        "title": "ベガは守りが弱い。端に持っていく",
        "text": "ベガは守りが弱いので、端にさえ持っていければ…",
        "recipes": [],
        "startSec": 109,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "M. Bison",
    "perspective": "ラシード",
    "summary": "ワール・垂直・ラッシュの3つをバランスよく使う。ベガは見てから弾を抜けにくいので、ワールは弱ワールで撃つ",
    "threats": [],
    "youtubeId": "t2AlV4WprOI",
    "sourceTitle": "ベガ戦、この3つだけ意識しています",
    "publishedAt": "2026-07-01",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_t2AlV4WprOI_bison_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "ワールはかなり機能する。対ベガは弱ワール",
        "text": "ワールはかなり機能する。弾抜けが怖いかもしれないが、ベガ側が見てから弾を抜けるのはとても難しく、ODサイコは読みで出してくることが多い。他のキャラには大ワールを撃つ場面でも、ベガには弱ワールにする（ODサイコを結構潰せる）。大ワールを良い位置で当てるとラッシュでコンボにいける（狙ってできるものではないが、ベガ戦ではよく起こる）",
        "recipes": [],
        "startSec": 0,
        "scenes": [
          48,
          177,
          221
        ]
      },
      {
        "id": "mu_t2AlV4WprOI_bison_02",
        "threats": [],
        "topic": "立ち回り",
        "title": "垂直ジャンプは雑にばらまいてよい",
        "text": "垂直ジャンプは雑にばらまいてよい。ベガ側が垂直にリスクを負わせようとすると一点読みくらいしかない。垂直でぴょんぴょんしつつラッシュを混ぜ、ダブルニーに付き合わない。垂直からフルコンにいけることもあり、ベガ側はかなり面倒",
        "recipes": [],
        "startSec": 7,
        "scenes": [
          53,
          189
        ]
      },
      {
        "id": "mu_t2AlV4WprOI_bison_03",
        "threats": [
          "ダブルニープレス"
        ],
        "topic": "攻め",
        "title": "ラッシュでダブルニー・大Pの発生前を潰す",
        "text": "ラッシュはとても有効で、ダブルニーや大Pの発生前を潰せることも多い",
        "recipes": [],
        "startSec": 13,
        "scenes": [
          34
        ]
      },
      {
        "id": "mu_t2AlV4WprOI_bison_04",
        "threats": [],
        "topic": "立ち回り",
        "title": "3つをバランスよく。ふらふら立ち回って的を絞らせない",
        "text": "ワール・垂直・ラッシュの3つをバランスよく使って立ち回る。ワール>垂直>ラッシュから差し返し気味の中足など、ふらふらと立ち回って相手に的を絞らせない",
        "recipes": [],
        "startSec": 17,
        "scenes": [
          119,
          253
        ]
      }
    ]
  },
  {
    "opponent": "M. Bison",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "mspBGGdirXY",
    "sourceTitle": "弾抜けが怖い相手には小ワールを軸に",
    "publishedAt": "2025-11-11",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_mspBGGdirXY_bison_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "OD弾抜けが優秀な相手には、近〜中距離で小ワールを混ぜる",
        "text": "弾抜け技を持っているキャラには、一概に大ワールが強いとは言えない（小ワールの価値が上がり、大ワールのリスクが高まる）。小ワールはラシードの弾の中で最も横の到達点が早いので、弾抜け技の出始めを潰すことが多い（大ワールは軌道の関係で、相手の弾抜けの反応が遅れた場合でもヒットしてしまう）。近〜中距離で小ワールを混ぜるのが強い",
        "recipes": [
          {
            "inputs": "236LK",
            "recipeJa": "弱ワール"
          }
        ],
        "startSec": 30,
        "scenes": [
          44,
          79
        ]
      }
    ]
  },
  {
    "opponent": "M. Bison",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "asIqwyrdolI",
    "sourceTitle": "テンペスト反撃集",
    "publishedAt": "2025-10-07",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_asIqwyrdolI_bison_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "SAをガードしたら、テンペストで反撃",
        "text": "ベガのSAもA.K.I.と同様に硬直が長めで、テンペストで反撃できる。キンバリーやキャミィなど、SAをガードしても隙が短いキャラにはやらないよう注意。テンペスト始動はとてもダメージが高く、大P>大スパイクではもったいない。テンペストでパニカンを取ると「こやつやるな」感を演出できるので、余裕があれば狙いたい",
        "recipes": [
          {
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          }
        ],
        "startSec": 42,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "M. Bison",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_bison_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は テンペスト（中央・端）",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央・端とも テンペスト。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央・端",
            "inputs": "66>6K",
            "recipeJa": "テンペスト"
          }
        ],
        "startSec": 238,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Terry",
    "perspective": "共通",
    "summary": "本命はパワーウェイブではなくバーンナックル。垂直とバクステでリスクを負わせ、ガードしたら画面の揺れで有利不利を判断する。ガードさせて有利な通常技は無いので、ラッシュが絡まなければ暴れてよい",
    "threats": [
      {
        "name": "バーンナックル",
        "about": "テリーの立ち回りの肝。先端を当てるとテリー有利。有利のときは画面が揺れる"
      },
      {
        "name": "パワーウェイブ",
        "about": "弾速が遅く性能が良い弾。全体は49F"
      },
      {
        "name": "パワーチャージ",
        "about": "ガードで弱・中・強とも-9以上"
      },
      {
        "name": "クイックバーン",
        "about": "振り下ろしの2段目が中段。ガードで-5"
      },
      {
        "name": "クラックシュート",
        "about": "ガードで-1〜-2。反撃は無い"
      },
      {
        "name": "ファイヤーキック（中足TC）",
        "about": "しゃがみ中K>大K のターゲットコンボ"
      },
      {
        "name": "ラウンドウェイブ",
        "about": "ガードさせてテリー有利（先端でも+5）"
      },
      {
        "name": "バーンナックル後のラッシュ中段",
        "about": "バーンナックルを食らった後、ラッシュ中段がきれいに埋まるセオリーの攻め"
      }
    ],
    "youtubeId": "tWYecYU1_ME",
    "sourceTitle": "テリー対策",
    "publishedAt": "2024-09-26",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_tWYecYU1_ME_terry_01",
        "threats": [
          "パワーチャージ",
          "クイックバーン"
        ],
        "topic": "反撃",
        "title": "パワーチャージは中攻撃以上、クイックバーンは弱攻撃で反撃",
        "text": "パワーチャージは弱・中・強とも-9以上なので、小技でなく中攻撃（キャラによっては大攻撃）で痛い反撃を入れる。小技から入れ込まれることが多いクイックバーンは、振り下ろしの2段目が中段なので見たら立ちガード。-5で距離も近いので、どのキャラでも弱攻撃で反撃できる",
        "recipes": [],
        "startSec": 0,
        "scenes": [
          11,
          39,
          61
        ]
      },
      {
        "id": "mu_tWYecYU1_ME_terry_02",
        "threats": [
          "バーンナックル"
        ],
        "topic": "反撃",
        "title": "近めのバーンナックルは弱攻撃で反撃",
        "text": "先端を当てるとテリー有利になるくらい強いが、近めで撃たれた場合は反撃がある（実際は-3や-5になったりする）。近めでガードしたら弱攻撃で反撃する",
        "recipes": [],
        "startSec": 72,
        "scenes": [
          86
        ]
      },
      {
        "id": "mu_tWYecYU1_ME_terry_03",
        "threats": [
          "クラックシュート",
          "ファイヤーキック（中足TC）"
        ],
        "topic": "守り",
        "title": "クラックシュートの後は小技でターンを奪う。ファイヤーキックは4Fで割る",
        "text": "クラックシュートは-1〜-2で反撃は無いが、ガードした方が有利なので小技でターンを奪う。しゃがみ中K>大K のファイヤーキックは、ガードしたら何を出されても4Fの技で割り込める。キャンセルラッシュもできるが、ラッシュした時点で無敵技が確定する（パリィすら連続ガードにならない）ぼったくり連携",
        "recipes": [],
        "startSec": 98,
        "scenes": [
          110,
          124,
          138
        ]
      },
      {
        "id": "mu_tWYecYU1_ME_terry_04",
        "threats": [
          "ラウンドウェイブ"
        ],
        "topic": "守り",
        "title": "通常技の後は暴れてよい。ラウンドウェイブの後だけ押さない",
        "text": "テリーにはガードさせて有利になる通常技が無いので、ラッシュが絡まなければ通常技をガードした後は暴れてよい。1つだけ注意はラウンドウェイブで、ガードさせてテリー有利（先端でも+5）なので、この後は通常技を押さない。ただし強Pからのラウンドウェイブなどは割り込めるので、強引に固めてくるなら小技で暴れて割り込む",
        "recipes": [],
        "startSec": 174,
        "scenes": [
          183,
          198,
          210
        ]
      },
      {
        "id": "mu_tWYecYU1_ME_terry_05",
        "threats": [
          "バーンナックル"
        ],
        "topic": "守り",
        "title": "バーンナックルには、垂直かバクステ",
        "text": "スタンダードに見えて、弾を持ったベガのようなキャラ。弾は時間稼ぎで、本命はバーンナックル。対策はベガのダブルニーと同じく、来そうなタイミングで垂直を置き、一番痛い反撃を入れるか、バクステで空振りを殴る。パワーウェイブを良い距離でガードさせてからのバーンナックルには垂直が間に合わないので、バクステの方が取りやすい。遠くから撃ってくる強バーンナックルには見てからインパクトがおすすめ（中を見てからは難しい）",
        "recipes": [],
        "startSec": 233,
        "scenes": [
          244,
          268,
          289,
          309
        ]
      },
      {
        "id": "mu_tWYecYU1_ME_terry_06",
        "threats": [
          "バーンナックル"
        ],
        "topic": "守り",
        "title": "ガードしたら画面の揺れを見る。揺れなければ4Fを押す",
        "text": "バーンナックルをガードしないのは難しいので、ガードした後の有利不利を判断する。画面（カメラ）が揺れたらテリー有利なので押さない。揺れなければ4Fを押してよい。慣れれば分かる",
        "recipes": [],
        "startSec": 365,
        "scenes": [
          389,
          400,
          414
        ]
      },
      {
        "id": "mu_tWYecYU1_ME_terry_07",
        "threats": [
          "パワーウェイブ"
        ],
        "topic": "立ち回り",
        "title": "パワーウェイブには無理にパリィしない。撃ってくるならジャンプ",
        "text": "弾速が遅く性能が良いが、全体は49Fと長いので、撃ってくるならジャンプもあり。中のパワーウェイブは届かないので、来たと思ってパリィすると漏らしてラッシュ投げを食らうことが実戦でよく起きる。無理にパリィしない。パリィを押してしまったら走るのもあり（ラッシュ投げしようとした相手を潰せる）。中足のリーチも長いので、中足ラッシュを食らわないように",
        "recipes": [],
        "startSec": 449,
        "scenes": [
          460,
          471,
          484
        ]
      },
      {
        "id": "mu_tWYecYU1_ME_terry_08",
        "threats": [
          "バーンナックル後のラッシュ中段"
        ],
        "topic": "守り",
        "title": "バーンナックルを食らった後のラッシュは、中段に注意して立ちガード多め",
        "text": "立ち回りの突然のバーンナックルや、小パン小パンからのバーンナックルの後のラッシュ中段は、きれいに埋まっているセオリーのセットプレイ。バーンナックルを食らった後にラッシュしてきたら中段に注意して、立ちガード多めでもよい（投げも埋まる。無敵技はガードされる）",
        "recipes": [],
        "startSec": 512,
        "scenes": [
          528,
          549
        ]
      }
    ]
  },
  {
    "opponent": "Terry",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "VTLlec-F52s",
    "sourceTitle": "テリー戦は弾抜けを狙っていこう！",
    "publishedAt": "2026-06-22",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_VTLlec-F52s_terry_01",
        "threats": [
          "パワーウェイブ"
        ],
        "topic": "反撃",
        "title": "弱・中の弾は ODスパイクで抜ける。OD弾は割り切る",
        "text": "テリーの弱弾は見てからでもそこそこ猶予があり、ODスパイクで抜けられる（頑張れば中・大スパイクでもいけるが、ODが無難）。位置によっては中弾も避けられる。判定が残っていると引っかかるので注意。OD弾は光ったのを見てから確認するのはまず無理なので、読み負けと割り切る。ずっと弾抜けを意識するのは弱いので、ここぞという場面で狙う",
        "recipes": [
          {
            "inputs": "214KK",
            "recipeJa": "ODスパイク"
          }
        ],
        "startSec": 3,
        "scenes": [
          10,
          21,
          26
        ]
      }
    ]
  },
  {
    "opponent": "Terry",
    "perspective": "ラシード",
    "summary": "テリーの弾はワールと相殺するので、テリー側は弾を撃ちにくい。そのぶんベタ足の地上戦になりやすく、中Pを主軸に地上戦を頑張る",
    "threats": [],
    "youtubeId": "cnpMw2MHnZI",
    "sourceTitle": "テリー戦 弾より地上戦が大事な理由",
    "publishedAt": "2026-06-14",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_cnpMw2MHnZI_terry_01",
        "threats": [
          "パワーウェイブ"
        ],
        "topic": "立ち回り",
        "title": "テリーの弱・中の弾はワールと相殺し、ODスパイクで抜けられる",
        "text": "テリーの弾は地面を這うので普通は相殺しないが、ラシード戦ではワールと相殺が起きる。そのためテリー側は弱弾で展開を作りにくい。弱・中の弾はODスパイクを使えば割と簡単に抜けられるので、テリーはラシードに対して弾撃ちにかなり気を使う",
        "recipes": [],
        "startSec": 7,
        "scenes": [
          17,
          26
        ]
      },
      {
        "id": "mu_cnpMw2MHnZI_terry_02",
        "threats": [],
        "topic": "立ち回り",
        "title": "ワールに頼らず、ベタ足の地上戦。中Pを主軸に",
        "text": "ラシード側もワール主軸で立ち回るのは事故の元。ベタ足の地上戦になりやすく、通常技のリーチはほぼ差が無いので地上戦を頑張る。固めは中Pを主軸にする（中Pがとても強い）",
        "recipes": [],
        "startSec": 39,
        "scenes": [
          46,
          96,
          320
        ]
      },
      {
        "id": "mu_cnpMw2MHnZI_terry_03",
        "threats": [
          "ファイヤーキック（中足TC）"
        ],
        "topic": "守り",
        "title": "中足TCの入れ込みには、ラッシュならOD無敵、それ以外はコパ",
        "text": "中足TCを入れ込まれたら、ラッシュにはOD無敵技、その他のキャンセルにはしゃがみ小Pを押しておきたい",
        "recipes": [],
        "startSec": 133,
        "scenes": []
      },
      {
        "id": "mu_cnpMw2MHnZI_terry_04",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "攻め",
        "title": "起き攻めで飛ぶなら前飛び。テリーのODは垂直には当たる",
        "text": "もにょもにょからの前飛びの場面。テリーのODは垂直ジャンプには当たるが、前飛びには当たらない",
        "recipes": [],
        "startSec": 194,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Terry",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_terry_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 垂直大K大P（中央・端）",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央・端とも 垂直大K大P。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央・端",
            "inputs": "j.8HK > 5HP",
            "recipeJa": "垂直J大K>大P"
          }
        ],
        "startSec": 251,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Mai",
    "perspective": "共通",
    "summary": "OD花蝶扇や溜め花蝶扇の対策は難しいので、比較的簡単で勝率が上がる所から: 触られたら後ろ下がりか暴れ、昇龍を空ジャンプで釣る、グラップの後は前ジャンプ、溜め花蝶扇は前ジャンプで咎める",
    "threats": [
      {
        "name": "大P花蝶扇",
        "about": "大Pから花蝶扇。ドライブゲージを削る打ち返しによく使う"
      },
      {
        "name": "龍炎舞",
        "about": "昇龍拳のような技。横に短い"
      }
    ],
    "youtubeId": "NVckT4RZVi8",
    "sourceTitle": "簡単に出来て実戦的な不知火舞対策",
    "publishedAt": "2025-03-10",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_NVckT4RZVi8_mai_01",
        "threats": [],
        "topic": "守り",
        "title": "触られたら後ろ下がりか4F暴れ",
        "text": "固めの通常技が少ないので、触られると当て投げが増える。後ろ下がりで投げをスカして痛い反撃を決める（ここまでセット）。4Fで暴れるのも投げに勝つ。どちらも負けたときのダメージは1000程度と安く（暴れ潰しは小技になるので）、読み勝てばリターンが大きい。画面端では下がれないが、暴れや前ジャンプが有効",
        "recipes": [],
        "startSec": 40,
        "scenes": [
          57,
          72,
          93,
          159
        ]
      },
      {
        "id": "mu_NVckT4RZVi8_mai_02",
        "threats": [
          "龍炎舞"
        ],
        "topic": "立ち回り",
        "title": "昇龍は横に短いので、遠めからの空ジャンプが有効",
        "text": "舞の昇龍は横にとても短いので、遠めからジャンプしておくと、弱昇龍で落とされても500程度しか減らない（特にモダン相手に有効）。舞側は昇龍を出すとリスクが大きいので出したくない距離",
        "recipes": [],
        "startSec": 206,
        "scenes": [
          219,
          233,
          243
        ]
      },
      {
        "id": "mu_NVckT4RZVi8_mai_03",
        "threats": [
          "大P花蝶扇"
        ],
        "topic": "反撃",
        "title": "大P花蝶扇を打ってきそうな場面でインパクト",
        "text": "大P花蝶扇は強いので、打ってきやすい場面が分かりやすい。空ジャンプの着地にとりあえずドライブゲージを削りに打つ、少し有利なとき（ベガのダブルニーをガードした後など）に打ち返す、などの場面でインパクトを狙う（OD でも勝てる）。毎回打ってくるタイミングが分かったら狙う。ホムラストックがあると弾が2発になって負けるので注意",
        "recipes": [],
        "startSec": 271,
        "scenes": [
          279,
          307,
          320,
          380
        ]
      },
      {
        "id": "mu_NVckT4RZVi8_mai_04",
        "threats": [],
        "topic": "守り",
        "title": "グラップが発生したら前ジャンプ",
        "text": "舞はグラップの後に OD 花蝶扇を撃ちたがるので、グラップが発生したら前ジャンプがとても強い。騙されたと思ってやってほしいレベル（対空されるリスクくらい）",
        "recipes": [],
        "startSec": 418,
        "scenes": [
          429,
          451
        ]
      },
      {
        "id": "mu_NVckT4RZVi8_mai_05",
        "threats": [
          "ムササビの舞"
        ],
        "topic": "対空",
        "title": "ムササビからの前ジャンプ攻撃（安全飛び）は、弱昇龍で返せる",
        "text": "ムササビの舞からの前ジャンプ攻撃は、いわゆる安全飛びで、お手軽なので初心者も多用する。4Fの昇龍（弱昇龍）なら返せる（ルークの弱昇龍などほとんどの昇龍キャラ。リリーは風が無いとダメ）",
        "recipes": [],
        "startSec": 471,
        "scenes": [
          490,
          515,
          526
        ]
      },
      {
        "id": "mu_NVckT4RZVi8_mai_06",
        "threats": [
          "溜め花蝶扇"
        ],
        "topic": "守り",
        "title": "溜め花蝶扇は、見たら前ジャンプで絶対に咎める",
        "text": "なんだかんだ一番の負け筋は溜め花蝶扇を通すこと。溜めを見たら前ジャンプする練習をする。インパクトでもよいが、早く撃ちすぎると溜め無しにも出て返される。前ジャンプは失敗しても扇を食らうだけで済む（インパクトは返されるとリスクが大きい）",
        "recipes": [],
        "startSec": 557,
        "scenes": [
          574,
          584,
          607,
          622
        ]
      }
    ]
  },
  {
    "opponent": "Mai",
    "perspective": "共通",
    "summary": "まずは各必殺技の確定反撃と、花蝶扇（溜め・OD）から好き勝手にやられないこと。溜め花蝶扇は通さず、OD花蝶扇の後はバクステ",
    "threats": [
      {
        "name": "龍炎舞",
        "about": "弱は-4、中以上は-6（強はしゃがみに当たらない）。ガードバックが小さい"
      },
      {
        "name": "必殺忍蜂",
        "about": "突進技。弱-9、中-12、強-13、OD-12"
      },
      {
        "name": "ムササビの舞",
        "about": "空中から降りてくる技。当たる高さで有利不利が変わる"
      },
      {
        "name": "ホムラストック",
        "about": "溜まった状態（舞が炎をまとう）だと、一部の技のフレームが良くなる"
      },
      {
        "name": "OD花蝶扇",
        "about": "連続ガードで、落ちてくる扇まで確定する。そこから投げ・シミー・ラッシュ"
      },
      {
        "name": "溜め花蝶扇",
        "about": "通すと密着の攻めが始まる花蝶扇"
      },
      {
        "name": "乱れ花蝶扇",
        "about": "溜めて4つの扇を投げる。中段も下段もある"
      }
    ],
    "youtubeId": "S16gH-FZJDk",
    "sourceTitle": "不知火舞対策",
    "publishedAt": "2025-02-09",
    "patchVersion": "Y2",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_S16gH-FZJDk_mai_01",
        "threats": [
          "龍炎舞"
        ],
        "topic": "反撃",
        "title": "弱龍炎舞は4F、中以上は6Fで反撃",
        "text": "中足や中Pから入れ込んでくることもある。弱は-4で、ガードバックがほとんど無いので4Fがほとんどのキャラで届く（リリーなどは届かないかも）。中以上は-6なので6Fの技で反撃する",
        "recipes": [],
        "startSec": 13,
        "scenes": [
          25,
          37
        ]
      },
      {
        "id": "mu_S16gH-FZJDk_mai_02",
        "threats": [
          "必殺忍蜂"
        ],
        "topic": "反撃",
        "title": "必殺忍蜂は9F以内の技で反撃。攻めで重ねてきた忍蜂は舞有利",
        "text": "弱-9、中-12、強-13で最低でも-9なので、立ち回りで飛んできた忍蜂には9F以内の技（6〜7Fの中攻撃がベター）で反撃する。起き攻めで持続を重ねてくる忍蜂は舞+3などで反撃できないので注意。OD版も-12。コンボミスで空振った OD 忍蜂は、着地を待っていると空中攻撃で殴られることがある",
        "recipes": [],
        "startSec": 60,
        "scenes": [
          71,
          84,
          106,
          122
        ]
      },
      {
        "id": "mu_S16gH-FZJDk_mai_03",
        "threats": [
          "ムササビの舞"
        ],
        "topic": "反撃",
        "title": "ムササビの舞は、高い位置で当たれば4Fで反撃",
        "text": "基本的にガードしたら反撃がある。足元に当たると-1〜-3で反撃が無いこともあるが、腰以上に当たれば-4以上なので4Fの技を打つ。確定でなくても、こちらが有利なので反撃する",
        "recipes": [],
        "startSec": 146,
        "scenes": [
          157
        ]
      },
      {
        "id": "mu_S16gH-FZJDk_mai_04",
        "threats": [
          "ホムラストック"
        ],
        "topic": "反撃",
        "title": "ホムラストックがあるとフレームが変わる",
        "text": "ホムラストックが溜まって舞が炎をまとっていると、一部の技のフレームが良くなる。弱龍炎舞は-4から-2に（ガード側有利は変わらないのでボタンは押してよい）。ムササビの舞は足元で最大+2、高めでも-2〜-4になり反撃しにくい",
        "recipes": [],
        "startSec": 168,
        "scenes": [
          179,
          189
        ]
      },
      {
        "id": "mu_S16gH-FZJDk_mai_05",
        "threats": [
          "OD花蝶扇"
        ],
        "topic": "守り",
        "title": "遠めの OD 花蝶扇は、1回ガードした後にバクステ",
        "text": "花蝶扇の対策が最優先。遠くからの OD 花蝶扇を大人しくガードしていると、密着で近づかれて投げやシミーの択をかけられる。1回ガードした後にバックステップして、落ちてくる扇をガードしないようにする（バックジャンプは引っかかる）。溜め花蝶扇でも同じ",
        "recipes": [],
        "startSec": 212,
        "scenes": [
          234,
          246,
          255
        ]
      },
      {
        "id": "mu_S16gH-FZJDk_mai_06",
        "threats": [
          "OD花蝶扇"
        ],
        "topic": "守り",
        "title": "OD花蝶扇からのラッシュには、しゃがむか無敵技",
        "text": "後ろを連打してバクステしようとしていると、ラッシュ中足を食らって扇が降ってきてコンボされる。バクステを入力しておき、ラッシュしてきたらしゃがむ。ラッシュしてくるなら無敵技もあり（相打ちでもダメージで大きく勝ち、ゲージも相手3本・こちら2本）",
        "recipes": [],
        "startSec": 278,
        "scenes": [
          289,
          302,
          313
        ]
      },
      {
        "id": "mu_S16gH-FZJDk_mai_07",
        "threats": [
          "OD花蝶扇"
        ],
        "topic": "守り",
        "title": "ガード後の下段は、立たずにしゃがむ",
        "text": "扇が上から落ちてきて上から攻められる感じがするので、立ってしまって下段を食らう人がとても多い（食らうと扇が降ってきてコンボ）。しっかりしゃがむ。ラッシュ中段もあるので、しゃがみながら中段を見たら立つかパリィ",
        "recipes": [],
        "startSec": 323,
        "scenes": [
          336,
          347,
          361
        ]
      },
      {
        "id": "mu_S16gH-FZJDk_mai_08",
        "threats": [
          "OD花蝶扇"
        ],
        "topic": "守り",
        "title": "パリィは押しっぱなしにしない。ジャスパ狙いも",
        "text": "ラッシュからの投げもあるので、パリィを押しっぱなしにするとパニッシュカウンターの投げを食らう。1回押してしゃがみ、打撃なら降ってくるところでもう一度パリィを狙う。難しいが、OD花蝶扇をジャストパリィできれば、ラッシュしてくる舞を逆に殴れる",
        "recipes": [],
        "startSec": 374,
        "scenes": [
          385,
          396,
          409
        ]
      },
      {
        "id": "mu_S16gH-FZJDk_mai_09",
        "threats": [
          "溜め花蝶扇"
        ],
        "topic": "守り",
        "title": "溜め花蝶扇は通さない。溜め無しをガードするタイミングでインパクト",
        "text": "溜め無しをガードしている分にはドライブゲージを削られるくらいだが、溜め花蝶扇を通すと一気に触られて密着の攻めが始まる。最速の溜め無しをガードするくらいのタイミングでインパクトを押しておくと、溜め無しならガード、溜めならインパクトになる（ちょい溜めで返されることもあるが、舞側も難しい）",
        "recipes": [],
        "startSec": 420,
        "scenes": [
          433,
          443,
          476
        ]
      },
      {
        "id": "mu_S16gH-FZJDk_mai_10",
        "threats": [
          "溜め花蝶扇"
        ],
        "topic": "守り",
        "title": "インパクトの代わりにジャンプを仕込む",
        "text": "同じタイミングでジャンプを仕込むのもおすすめ。溜め無しはガードになり、溜めにはジャンプが出る。リターンも十分高く、ちょい溜めをされてもジャンプの出がかりに扇を食らうだけで済むので、インパクトよりリスクが少ない",
        "recipes": [],
        "startSec": 499,
        "scenes": [
          512,
          538
        ]
      },
      {
        "id": "mu_S16gH-FZJDk_mai_11",
        "threats": [
          "OD花蝶扇"
        ],
        "topic": "守り",
        "title": "OD花蝶扇は連続ガード。ガードしたらバクステ、画面端は受け入れる",
        "text": "OD花蝶扇は連続ガードで、降ってくる扇まで確定してしまう。そのまま固まるよりバクステすれば、扇と一緒に攻められることは無くなる（大先端ならバクステを止める方法も無い。舞や本田のようにバクステが短いキャラはガードになることもあるが、それでもした方がよい）。画面端では溜め花蝶扇へのファジージャンプやファジーインパクトは有効だが、OD花蝶扇は受け入れるしかない（相手も2ゲージ払っている）",
        "recipes": [],
        "startSec": 551,
        "scenes": [
          562,
          584,
          607
        ]
      },
      {
        "id": "mu_S16gH-FZJDk_mai_12",
        "threats": [
          "乱れ花蝶扇"
        ],
        "topic": "守り",
        "title": "乱れ花蝶扇の後は、中段と下段に注意",
        "text": "普通の OD 花蝶扇から中段・下段はあまり来ないが、溜めて4つの扇を投げる乱れ花蝶扇をガードしてしまったら、中段も下段もあるので注意。ゲージがあればパリィで凌ぐのもあり",
        "recipes": [],
        "startSec": 641,
        "scenes": [
          654
        ]
      }
    ]
  },
  {
    "opponent": "Mai",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "nkyG569q-YI",
    "sourceTitle": "舞のOD昇竜反撃方法はこれ！",
    "publishedAt": "2026-06-28",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_nkyG569q-YI_mai_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "OD昇竜をガードしたら、中サイクロン>立中K>中P",
        "text": "舞のOD昇竜をガードした後は、中サイクロン>立中K>中Pが当たる。地味だがキャラ限定で、ダメージが結構伸びる。春麗・サガットにも同じ反撃ができる（他のキャラは未確認）",
        "recipes": [
          {
            "inputs": "214MP > 5MK > 5MP",
            "recipeJa": "中サイクロン>立中K>中P"
          }
        ],
        "startSec": 6,
        "scenes": [
          15
        ]
      }
    ]
  },
  {
    "opponent": "Mai",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_mai_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 垂直大K大P（中央・端）",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央・端とも 垂直大K大P。J大K>立中Kも当たるが、空振ることが多め。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央・端",
            "inputs": "j.8HK > 5HP",
            "recipeJa": "垂直J大K>大P"
          }
        ],
        "startSec": 261,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Elena",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "TV2xCdqG0mc",
    "sourceTitle": "エレナ戦 vs Sako",
    "publishedAt": "2025-12-07",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_TV2xCdqG0mc_elena_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "溜めワールは厳禁",
        "text": "エレナ戦では溜めワールは厳禁",
        "recipes": [],
        "startSec": 13,
        "scenes": []
      },
      {
        "id": "mu_TV2xCdqG0mc_elena_02",
        "threats": [],
        "topic": "立ち回り",
        "title": "立ち回りで弱ミキサーが有効",
        "text": "最近は立ち回りで弱ミキサーが有効ではないかと思っている。動画の弱ミキサーの打ち方を参考に",
        "recipes": [
          {
            "inputs": "236LP",
            "recipeJa": "弱ミキサー"
          }
        ],
        "startSec": 19,
        "scenes": [
          23,
          43
        ]
      }
    ]
  },
  {
    "opponent": "Elena",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "mspBGGdirXY",
    "sourceTitle": "弾抜けが怖い相手には小ワールを軸に",
    "publishedAt": "2025-11-11",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_mspBGGdirXY_elena_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "OD弾抜けが優秀な相手には、近〜中距離で小ワールを混ぜる",
        "text": "弾抜け技を持っているキャラには、一概に大ワールが強いとは言えない（小ワールの価値が上がり、大ワールのリスクが高まる）。小ワールはラシードの弾の中で最も横の到達点が早いので、弾抜け技の出始めを潰すことが多い（大ワールは軌道の関係で、相手の弾抜けの反応が遅れた場合でもヒットしてしまう）。近〜中距離で小ワールを混ぜるのが強い",
        "recipes": [
          {
            "inputs": "236LK",
            "recipeJa": "弱ワール"
          }
        ],
        "startSec": 30,
        "scenes": [
          44,
          79
        ]
      }
    ]
  },
  {
    "opponent": "Elena",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "7ZSY2uXpcwc",
    "sourceTitle": "SA・OD無敵技反撃集",
    "publishedAt": "2025-07-14",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_7ZSY2uXpcwc_elena_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "無敵技ガード後は 中央 垂直大K大P、端 中サイクロン",
        "text": "SA・OD無敵技をガードした後の反撃の始動技。中央は 垂直大K大P、端は 中サイクロン。慣れるまでは大P一本でもよいが、確実に火力が上がるところなので練習したい",
        "recipes": [
          {
            "label": "中央",
            "inputs": "j.8HK > 5HP",
            "recipeJa": "垂直J大K>大P"
          },
          {
            "label": "端",
            "inputs": "214MP",
            "recipeJa": "中サイクロン"
          }
        ],
        "startSec": 276,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Sagat",
    "perspective": "共通",
    "threats": [
      {
        "name": "キャンセルラッシュ",
        "about": "しゃがみ中P・立ち中P からキャンセルラッシュして、中足・肘（ドライブを削りたいとき）・投げ・シミー"
      }
    ],
    "youtubeId": "f_YXx7eROZY",
    "sourceTitle": "絶対にやった方が良いサガット対策",
    "publishedAt": "2026-02-12",
    "patchVersion": "Y3",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_f_YXx7eROZY_sagat_01",
        "threats": [
          "キャンセルラッシュ"
        ],
        "topic": "守り",
        "title": "ラッシュの後は中攻撃なので、見てからドライブリバーサル",
        "text": "サガットの基本の攻めは、しゃがみ中P・立ち中P からキャンセルラッシュして中足か肘、または投げ・シミー。ラッシュの後は中攻撃なので、ラッシュを見てからでもドライブリバーサルが余裕で間に合う。リバを見せないと、ガードできてもサガットが強い攻めを続けられる。リバを見せるとサガットは小技にせざるを得ない（サガットの小パンは全体15Fで、リバを確定させやすい部類）。ドライブゲージの収支でも得をする（相手3本・こちら2本）。練習はトレモでしゃがみ中P>ラッシュ>肘 を記録して、見てリバする。読みを外したときや小技だったときは勝率が大きく下がるので注意",
        "recipes": [],
        "startSec": 65,
        "scenes": [
          105,
          127,
          143,
          193,
          307
        ]
      }
    ]
  },
  {
    "opponent": "Sagat",
    "perspective": "共通",
    "summary": "サガットは自分から相手を追う力が弱く、待っている方が強い。こちらは1回攻めて失敗したら下がる。ラッシュ中段とシミー以外にまともな崩しが無いので、それを食らわなければ大きなダメージはもらわない",
    "threats": [
      {
        "name": "ステロ",
        "about": "サガットから近づく手段の1つ（タイガーニーと並ぶ）"
      }
    ],
    "youtubeId": "I3mM9z70aRM",
    "sourceTitle": "タイガー対策（サガット）",
    "publishedAt": "2025-09-14",
    "patchVersion": "Y3",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_I3mM9z70aRM_sagat_01",
        "threats": [],
        "topic": "立ち回り",
        "title": "追う力が弱いので、1回攻めたら下がる",
        "text": "サガットは相手を追う能力が弱いので、待っている方が楽。キャンセルラッシュで1回攻めて、失敗したら下がってドライブゲージを回復する。下がっている間はしゃがみガードを多めにしてステロを食らわないようにする",
        "recipes": [],
        "startSec": 0,
        "scenes": [
          23
        ]
      },
      {
        "id": "mu_I3mM9z70aRM_sagat_02",
        "threats": [
          "上弾（タイガーショット）"
        ],
        "topic": "立ち回り",
        "title": "遠い上弾はパリィ、近づいたらしゃがんでくぐる",
        "text": "上弾は、ほとんどのキャラが中足やスライディングでしゃがんでくぐれる。遠い間合いではパリィでよいが、ある程度近づいたらしゃがんで中足などで抜ける。これが超大事",
        "recipes": [],
        "startSec": 44,
        "scenes": []
      },
      {
        "id": "mu_I3mM9z70aRM_sagat_03",
        "threats": [
          "下弾（グランドタイガーショット）"
        ],
        "topic": "反撃",
        "title": "下弾は硬直が長いので飛びが確定しやすい。ジャスパからのラッシュも確定",
        "text": "上弾をしゃがまれると下弾を撃つようになるが、下弾は硬直が50F前後と長く、飛びが確定しやすい。ジャストパリィからのラッシュも確定する（ラッシュが標準くらいの速さのキャラなら）。ジャスパラッシュは難しいが、弾の速さが一定なので練習する価値がある",
        "recipes": [],
        "startSec": 69,
        "scenes": [
          80,
          92
        ]
      },
      {
        "id": "mu_I3mM9z70aRM_sagat_04",
        "threats": [
          "ステロ",
          "タイガーニー"
        ],
        "topic": "守り",
        "title": "ステロとタイガーニーには垂直ジャンプ",
        "text": "サガットから近づく手段はステロとタイガーニー。どちらにも垂直ジャンプが有効で、確定も取れる。来そうな場面で垂直を置く。しゃがんでステロをガードしようとしていて、タイガーニーだったらジャストパリィを狙うとさらに良い（難しい）",
        "recipes": [],
        "startSec": 125,
        "scenes": [
          151
        ]
      },
      {
        "id": "mu_I3mM9z70aRM_sagat_05",
        "threats": [],
        "topic": "守り",
        "title": "崩しはラッシュ中段とシミーだけ。弾は見たらパリィ",
        "text": "弾を見たらパリィを押すのは得なのでやる。サガットはラッシュ中段以外にまともな崩しが無く、画面端の柔道も弱いので、シミーとラッシュ中段を食らわなければ大きなダメージはもらわない",
        "recipes": [],
        "startSec": 178,
        "scenes": []
      },
      {
        "id": "mu_I3mM9z70aRM_sagat_06",
        "threats": [
          "立ち中P"
        ],
        "topic": "守り",
        "title": "中攻撃を2回ガードしたら暴れる（1回目の後は暴れない）",
        "text": "中攻撃で固め続ける連携が多いが、ガードしても特に何も来ないので怯えずに下がってよい。1回目の立ち中Pをガードした後に暴れるのは良くない。立ち中P>しゃがみ中P の連携は4Fで割れるので、2回ガードしたら暴れる。ここで暴れないと、また固めが続く",
        "recipes": [],
        "startSec": 189,
        "scenes": [
          201,
          224
        ]
      },
      {
        "id": "mu_I3mM9z70aRM_sagat_07",
        "threats": [
          "立ち中P"
        ],
        "topic": "守り",
        "title": "遠めの立ち中Pの後は、下がるか暴れる",
        "text": "離れた位置の立ち中Pをガードした後は、暴れるか後ろに下がるのが有効。下がれば、立ち中Pからの歩き投げにリスクを負わせられる（下がりにはサガットがリスクを負わせにくい）。投げをスカしたら殴る。中Pを連打してくるなら暴れる",
        "recipes": [],
        "startSec": 260,
        "scenes": [
          282,
          293
        ]
      },
      {
        "id": "mu_I3mM9z70aRM_sagat_08",
        "threats": [
          "タイガーネクサス"
        ],
        "topic": "反撃",
        "title": "立ちガードしておき、中段なら確定反撃、上段で有利を取られたら無敵技",
        "text": "一番簡単で実戦的なのは、立ちガードしておいて、中段派生なら確定反撃、上段派生で有利を取られたら無敵技を打つこと。中段を打つ人が圧倒的に多いので、まず中段派生への反撃を練習する。有利を取って様子見してくるサガットはあまりいない。コパン暴れやファジーコパンは一番弱く、暴れるならしゃがみ大Pなどの方がよい。この対策だと初段止めには確定を取れなくなるが、初段止めはサガット側も強気に攻められないので気にしなくてよい",
        "recipes": [],
        "startSec": 335,
        "scenes": [
          347,
          360,
          365,
          425,
          438
        ]
      },
      {
        "id": "mu_I3mM9z70aRM_sagat_09",
        "threats": [
          "タイガーネクサス"
        ],
        "topic": "守り",
        "title": "難しい対策: 中段をガードするタイミングで、しゃがみ中P・しゃがみ大P",
        "text": "中段派生をガードするタイミングでしゃがみ中Pやしゃがみ大Pを押すと、理論上は中段にも上段にも対応できる。ただしサガット側が中段派生をディレイするとこの対策はできない（あまりやられてはいない）",
        "recipes": [],
        "startSec": 384,
        "scenes": [
          394,
          405
        ]
      },
      {
        "id": "mu_I3mM9z70aRM_sagat_10",
        "threats": [
          "ステハイ（前大K）"
        ],
        "topic": "守り",
        "title": "SA3の後のステハイ重ねは、リバサのしゃがみ技で勝つ",
        "text": "SA3の後、サガットは起き上がりにステハイを重ねてくる（ガードさせて+4、ヒットならコンボ）。起き上がりの立ちモーションに当たるので、しゃがんでいてもガードになる。リバーサルでしゃがみ技を出せば勝てる（対策されるとステロを混ぜてくる）",
        "recipes": [],
        "startSec": 474,
        "scenes": [
          488,
          505
        ]
      }
    ]
  },
  {
    "opponent": "Sagat",
    "perspective": "共通",
    "summary": "飛び道具と対空で戦うスタンダードなキャラだが、突進技のタイガーニーが一番の注意点。弾は上下で対処を変え、タイガーニーはなるべく立ちガード、タイガーネクサスは中段派生に確定反撃を取る",
    "threats": [
      {
        "name": "タイガーニー",
        "about": "前に突進する膝蹴り（ベガのダブルニープレスの強化版のような技）。しゃがみガードさせるとサガット有利。サガット有利のときは画面が揺れる"
      },
      {
        "name": "タイガーネクサス",
        "about": "膝蹴りから、中段派生・上段派生（しゃがみに当たらない）・しゃがみにも当たる上段派生がある"
      },
      {
        "name": "上弾（タイガーショット）",
        "about": "上の軌道の弾。硬直が短く、しゃがみには当たらない"
      },
      {
        "name": "下弾（グランドタイガーショット）",
        "about": "下の軌道の弾。全体フレームが長く隙が大きい"
      },
      {
        "name": "OD上弾",
        "about": "ガードさせて+6"
      },
      {
        "name": "立ち中P",
        "about": "ガードさせて有利な中攻撃（モダンには無い）"
      },
      {
        "name": "ステハイ（前大K）",
        "about": "ガードさせて+4（投げ間合いの外ギリギリ）。しゃがみには当たらない"
      },
      {
        "name": "立ち中K・立ち大P",
        "about": "リーチが長いが、空振りの隙が大きい通常技"
      },
      {
        "name": "ターゲットコンボ",
        "about": "立ち中K・立ち大P から大K につながるターゲットコンボ"
      }
    ],
    "youtubeId": "7EQbwKtB_fk",
    "sourceTitle": "サガット対策",
    "publishedAt": "2025-08-07",
    "patchVersion": "Y3",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_7EQbwKtB_fk_sagat_01",
        "threats": [
          "下弾（グランドタイガーショット）"
        ],
        "topic": "立ち回り",
        "title": "下弾はパリィするか、ガードした後に飛ぶ",
        "text": "下の弾は波動拳と同じくパリィを取るのがよい。全体フレームが長く隙も大きいので、1回ガードしたら飛ぶ。飛びが届く距離なら、ガードした後のジャンプ攻撃が確定する。強い弾ではない",
        "recipes": [],
        "startSec": 34,
        "scenes": [
          45
        ]
      },
      {
        "id": "mu_7EQbwKtB_fk_sagat_02",
        "threats": [
          "上弾（タイガーショット）"
        ],
        "topic": "立ち回り",
        "title": "上弾はパリィせず、しゃがんでかわす",
        "text": "上の弾は下の弾より硬直がだいぶ短く、パリィしてから飛んでも間に合わない（上弾を多く撃つ相手に飛びは有効でない）。しゃがみには当たらないので、パリィもせずにしゃがんでかわす。ガードやパリィをするとドライブゲージの収支でサガットが得をするが、しゃがめば得をさせない",
        "recipes": [],
        "startSec": 69,
        "scenes": [
          94
        ]
      },
      {
        "id": "mu_7EQbwKtB_fk_sagat_03",
        "threats": [
          "上弾（タイガーショット）"
        ],
        "topic": "反撃",
        "title": "近ければ、しゃがんでかわしてしゃがみ攻撃で確定を取る",
        "text": "近い場合は、しゃがんでかわした上弾にしゃがみ技で反撃できる（リュウなら中足くらい）。スライディング系の技を持つキャラ（ブランカ・ダルシム）は上弾をくぐって確定を取れる。中足や大足が長いキャラ（ザンギ・エレナ・ベガ・マノンなど）は中足も有効",
        "recipes": [],
        "startSec": 116,
        "scenes": [
          128,
          138
        ]
      },
      {
        "id": "mu_7EQbwKtB_fk_sagat_04",
        "threats": [
          "立ち中P"
        ],
        "topic": "守り",
        "title": "立ち中Pをガードしたら暴れない（サガット有利）",
        "text": "立ち中Pはガードさせてサガット有利。立ち中P>立ち中P などの連携に4Fの技で暴れても負けるので、ガードした後は暴れない",
        "recipes": [],
        "startSec": 161,
        "scenes": []
      },
      {
        "id": "mu_7EQbwKtB_fk_sagat_05",
        "threats": [
          "ステハイ（前大K）"
        ],
        "topic": "反撃",
        "title": "ステハイは、しゃがんでスカして反撃",
        "text": "前大K（ハイキック。いわゆるステハイ）は立ちガードするとサガット+4。しゃがんでいれば当たらないので、しゃがんでスカして反撃する（豪鬼の大Kやガイルの前Pと同じ）",
        "recipes": [],
        "startSec": 175,
        "scenes": []
      },
      {
        "id": "mu_7EQbwKtB_fk_sagat_06",
        "threats": [
          "OD上弾"
        ],
        "topic": "守り",
        "title": "OD上弾をガードしたら、ボタンを押さない",
        "text": "OD上弾はガードさせてサガット+6とかなり有利。画面端などでキャンセルして攻めを続けるのに使ってくる。この後はサガットのターンなので、ボタンを押さずにガードする。何かするなら無敵技",
        "recipes": [],
        "startSec": 200,
        "scenes": [
          211
        ]
      },
      {
        "id": "mu_7EQbwKtB_fk_sagat_07",
        "threats": [
          "タイガーニー"
        ],
        "topic": "守り",
        "title": "タイガーニーは立ちガードで受ける",
        "text": "サガットで一番強い技。しゃがみガードするとだいたいサガット有利になるが、立ちガードすれば近めなら反撃でき、遠めでもあまり有利を取られない。サガット有利のときは画面が揺れる（テリーのバーンナックルと同じ）。下段の選択肢は中足やステハイ程度でサガット側のリスクもあるので、基本はタイガーニーを警戒して立ちガードしておく",
        "recipes": [],
        "startSec": 233,
        "scenes": [
          258,
          270,
          281
        ]
      },
      {
        "id": "mu_7EQbwKtB_fk_sagat_08",
        "threats": [
          "タイガーニー"
        ],
        "topic": "守り",
        "title": "キャンセルやODのタイガーニーも立ちガード",
        "text": "しゃがみ中Pの先端などからキャンセルで出してくるタイガーニーも、しゃがみガードするとサガット有利。立ちガードすればこちらが+3で、後ろ投げなどを通せる。ODタイガーニーはかなり遠くから届いて反撃は無いが、立ちガードできればだいたいこちら有利",
        "recipes": [],
        "startSec": 302,
        "scenes": [
          315,
          348
        ]
      },
      {
        "id": "mu_7EQbwKtB_fk_sagat_09",
        "threats": [
          "タイガーニー"
        ],
        "topic": "守り",
        "title": "タイガーニーを読んだら垂直ジャンプ。見てからインパクトかジャスパも",
        "text": "開幕の距離などでよく撃ってくるので、読んだら垂直ジャンプ（ベガやマリーザの突進と同じ）。多く撃ってくる相手には垂直を置いておくのも有効。見てからインパクトもできるが引きつけが難しいので自信がある人向けで、無難なのはジャストパリィ。キャンセルで出してくるタイガーニーには、読んだらインパクトで確定が取れる（キャンセルのタイガーニーへのジャスパはかなり難しい）",
        "recipes": [],
        "startSec": 360,
        "scenes": [
          381,
          394,
          405,
          451
        ]
      },
      {
        "id": "mu_7EQbwKtB_fk_sagat_10",
        "threats": [
          "タイガーネクサス"
        ],
        "topic": "反撃",
        "title": "中段派生は立ちガードして、5Fの技で確定反撃（-5）",
        "text": "膝蹴りから中段派生・上段派生（しゃがみに当たらない）・しゃがみにも当たる上段派生がある。中段を打ってくる人が多いので、まず立ちガードしておく。中段派生は-5なので5Fの技で反撃する。派生しない（膝蹴りだけ）ときも-5なので、派生しなくなったら最速の小技で確定",
        "recipes": [],
        "startSec": 461,
        "scenes": [
          487,
          498,
          509
        ],
        "caution": "2026-08-03 の調整で、OD版の中段派生はガード時 -3 になり、5Fの技で確定反撃が取れるのは通常版だけになった（あくあ総研の注記による。公式の調整内容は未確認）"
      },
      {
        "id": "mu_7EQbwKtB_fk_sagat_11",
        "threats": [
          "タイガーネクサス"
        ],
        "topic": "守り",
        "title": "上段派生は、しゃがんでスカすか小技で割る",
        "text": "上段派生はサガット+4で、立ちガードしている相手に強い選択肢。しゃがめば当たらないので、しゃがんでスカして反撃する。上段派生は小技など発生の早い技で割り込めるので、上段派生が来そうなら派生の前に割る。中段・上段・無派生のすべてにファジーで対応するのは、たぶんできない",
        "recipes": [],
        "startSec": 532,
        "scenes": [
          545,
          556,
          594
        ]
      },
      {
        "id": "mu_7EQbwKtB_fk_sagat_12",
        "threats": [
          "立ち中K・立ち大P"
        ],
        "topic": "反撃",
        "title": "空振りは、リーチの長い技（中足か大足）で差し返す",
        "text": "リーチが長いが空振りの隙は大きいので、差し返しを狙うのも有効。短い技では難しいので中足か大足で。立ち大Pはやられ判定が大きく残るので何でも当たるが、空振りを狙うとラインが下がるので、ガードしてから届く技で打ち返す方がよい",
        "recipes": [],
        "startSec": 628,
        "scenes": [
          650,
          664
        ]
      },
      {
        "id": "mu_7EQbwKtB_fk_sagat_13",
        "threats": [
          "ターゲットコンボ"
        ],
        "topic": "反撃",
        "title": "ターゲットコンボは、2発目をガードしたら反撃",
        "text": "立ち中K のターゲットコンボは、2発目まで出してきたらガードして-8なので8Fの技で反撃。立ち大P>大K は-12で、大攻撃でも反撃できる。難しければどちらも中攻撃で反撃してよい",
        "recipes": [],
        "startSec": 694,
        "scenes": [
          705,
          726
        ]
      }
    ]
  },
  {
    "opponent": "Sagat",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "nkyG569q-YI",
    "sourceTitle": "舞のOD昇竜反撃方法はこれ！",
    "publishedAt": "2026-06-28",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_nkyG569q-YI_sagat_01",
        "threats": [
          "無敵技（SA・OD）"
        ],
        "topic": "反撃",
        "title": "OD無敵技をガードしたら、中サイクロン>立中K>中P",
        "text": "舞のOD昇竜と同じく、OD無敵技をガードした後に中サイクロン>立中K>中Pが当たる（動画の実演は舞）",
        "recipes": [
          {
            "inputs": "214MP > 5MK > 5MP",
            "recipeJa": "中サイクロン>立中K>中P"
          }
        ],
        "startSec": 15,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Sagat",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "TcJaAOStnhU",
    "sourceTitle": "サガット立中Pへの対応方法",
    "publishedAt": "2025-09-02",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_TcJaAOStnhU_sagat_01",
        "threats": [
          "立ち中P"
        ],
        "topic": "守り",
        "title": "立中Pをガードしたら、立コパで暴れる",
        "text": "サガットの中Pハラスメントは非常に強力だが、ラシードは比較的抗いやすい。中Pをガードした後に立ち小Pで暴れる。大抵のキャラはこの状況で暴れると痛い反撃を食らうが、ラシードの立ち小Pにはサガット側が一番狙いたい相打ちの2中Pが届かない（しゃがみ小Pカウンター+7Fからの2中Pも届かない）。サガットがしゃがみ小Pで防御した時点で押し返し安定。端でも同様。注意点として、持続当ての中Pには負ける（特に端では狙われやすい）が、基本は暴れ安定",
        "recipes": [
          {
            "inputs": "5LP",
            "recipeJa": "弱P"
          }
        ],
        "startSec": 11,
        "scenes": [
          30,
          35,
          62,
          68,
          82
        ]
      }
    ]
  },
  {
    "opponent": "Sagat",
    "perspective": "ラシード",
    "summary": "サガットは足が遅い・対空が微妙・弾が弱いの三重苦で、受けがとてもきつい。その弱点を突いて、ラッシュや手前飛びでとっとと攻める（攻めている間のニー・ステロー・中Pは鬼強なので、じりじりしすぎない）。登場1週間足らずの時点の対策",
    "threats": [],
    "youtubeId": "OElf5ob7J0w",
    "sourceTitle": "キャラ対策 サガット編",
    "publishedAt": "2025-08-10",
    "patchVersion": "Y3",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_OElf5ob7J0w_sagat_01",
        "threats": [
          "上弾（タイガーショット）"
        ],
        "topic": "攻め",
        "title": "ラッシュが基本。下段を軸に、上弾を空かしながら",
        "text": "サガットには置きに使える判定の強い6F技が無く、ラッシュを止めづらい（サガット側から見るとラシードのラッシュは鬼きつ）。ラッシュは下段を軸に打てば、上弾を空かしながら攻撃できる。基本はラッシュで、触ってフレームを押し付けていればまず負けない。サガットがきつい人はラッシュが足りていない",
        "recipes": [],
        "startSec": 93,
        "scenes": [
          86,
          176,
          180,
          190
        ]
      },
      {
        "id": "mu_OElf5ob7J0w_sagat_02",
        "threats": [
          "上弾（タイガーショット）",
          "下弾（グランドタイガーショット）"
        ],
        "topic": "立ち回り",
        "title": "ラッシュ先端の距離まで前歩き。上弾はしゃがみ、下弾はガード",
        "text": "ラッシュを打てる距離まで前歩きでじりじり詰める。その際、上弾はしゃがみ、下弾はガード（パリィ）で凌ぐ。下弾は硬直がとても長いので、ガードするだけで有利フレームを取れることが多い。JPと違って制圧力が低いので容易に踏み込める。ラッシュ先端の距離を維持する",
        "recipes": [],
        "startSec": 108,
        "scenes": [
          112,
          117,
          155,
          159
        ]
      },
      {
        "id": "mu_OElf5ob7J0w_sagat_03",
        "threats": [],
        "topic": "立ち回り",
        "title": "技振り・ワールは少なめ。端端の溜めワールはやめる",
        "text": "技振りは少なめでよく、ワールもそこまで振らなくてよい（ニーに噛み合ったり、上弾と相打ちしたりと技の相性が悪い）。端端でも溜めワールはやめておく。気流飛びに大弾を合わせられたり、弾が速すぎて2溜めで相殺が間に合わなかったりと、あかんことが起こりやすい",
        "recipes": [],
        "startSec": 130,
        "scenes": [
          136,
          142,
          145,
          194
        ]
      },
      {
        "id": "mu_OElf5ob7J0w_sagat_04",
        "threats": [
          "タイガーニー",
          "ステロ"
        ],
        "topic": "攻め",
        "title": "じりじりしすぎない。ニーとステローの2択になる前に動く",
        "text": "じりじりやりすぎると、ニーとステローの2択がだるい。ニーを通されて肘を小突かれて負けるのがサガットの勝ちパターン。ニーはしゃがみでガードしたくないし、全部立ちガードするのは無理なので、攻められそうな場面では飛び・手前飛び・ラッシュでとっととアクションを起こす",
        "recipes": [],
        "startSec": 165,
        "scenes": [
          170,
          197,
          207,
          210
        ]
      }
    ]
  },
  {
    "opponent": "C. Viper",
    "perspective": "共通",
    "summary": "フレームを覚えるだけでだいぶ変わる。ガードさせて有利な通常技は立ち中Pだけ。生命線のバーニングキックは不利だが、キック派生は+2なので見てインパクト。OD無敵技が無いので強気に起き攻めする",
    "threats": [
      {
        "name": "立ち中P",
        "about": "ガードさせてヴァイパー+1。ガードさせて有利な通常技はこれだけ"
      },
      {
        "name": "セービングフォース",
        "about": "当て身（攻撃を受け止めて反撃する）。前ステップでキャンセルできる"
      },
      {
        "name": "サンダーナックル",
        "about": "弱は-4、中は-3、強は対空無敵がある昇龍拳のような技"
      },
      {
        "name": "バーニングキック",
        "about": "ヴァイパーの生命線。地上版・ハイジャンプキャンセル版があり、ガードすれば基本ヴァイパー不利。地上版から KK 派生（+2）と PP 派生（-15）が出せる"
      },
      {
        "name": "起き攻めのバーニングキック",
        "about": "画面端で柔道と見せかけて、前ステップからバーニングキック。グラップを潰す"
      },
      {
        "name": "強アシストコンボ（モダン）",
        "about": "自動でヒット確認がつき火力も高い、モダンの最強クラスのアシストコンボ"
      }
    ],
    "youtubeId": "00mCD30qGvc",
    "sourceTitle": "ヴァイパー対策",
    "publishedAt": "2025-10-24",
    "patchVersion": "Y3",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_00mCD30qGvc_viper_01",
        "threats": [
          "立ち中P"
        ],
        "topic": "守り",
        "title": "立ち中Pの後は押さない。他の通常技の後は押してよい",
        "text": "立ち中Pはガードさせて+1で、そこから立ち中Pなどで固めてくるので、暴れずにボタンを押さない（打つなら無敵技）。逆に言えば有利を取れる通常技はこれだけで、大Pやしゃがみ大Pからのキャンセルの後などはボタンを押して大丈夫（中攻撃などでだいたい勝てる）",
        "recipes": [],
        "startSec": 0,
        "scenes": [
          21,
          36
        ]
      },
      {
        "id": "mu_00mCD30qGvc_viper_02",
        "threats": [
          "セービングフォース"
        ],
        "topic": "反撃",
        "title": "セービングフォースは、大攻撃で確定反撃",
        "text": "マリーザのスクトゥムのような当て身。ガードしたら-10前後で、ほとんどのキャラの大攻撃が確定するので、見たら大攻撃で反撃する",
        "recipes": [],
        "startSec": 48,
        "scenes": [
          59,
          71
        ]
      },
      {
        "id": "mu_00mCD30qGvc_viper_03",
        "threats": [
          "セービングフォース"
        ],
        "topic": "守り",
        "title": "セービングフォースの前ステップキャンセルは、見て小技で止める",
        "text": "前ステップでキャンセルでき、出しておいて何もしなければ前ステから投げるなど、展開の速さでごまかしてくる。セービングフォースを見たら、一旦前ステだけを見てガードし、前ステが来たら小技で止める。前ステのやられ中はパニッシュカウンターになるので、パニカン用のコンボもできればなお良い",
        "recipes": [],
        "startSec": 83,
        "scenes": [
          94,
          106
        ]
      },
      {
        "id": "mu_00mCD30qGvc_viper_04",
        "threats": [
          "サンダーナックル"
        ],
        "topic": "反撃",
        "title": "弱は-4で4F確定、中は押してよく、強は無敵技と同じ反撃",
        "text": "弱サンダーナックルは-4で、めり込めば4Fの技で確定（先端気味だと届かない）。中は-3で確定は無いがボタンは押してよい。強は対空無敵があるだけの昇龍拳のような技で、ガードしたら隙が大きいので、無敵技をガードしたときと同じ反撃をする",
        "recipes": [],
        "startSec": 119,
        "scenes": [
          130,
          145,
          159
        ]
      },
      {
        "id": "mu_00mCD30qGvc_viper_05",
        "threats": [
          "バーニングキック"
        ],
        "topic": "守り",
        "title": "バーニングキックはガードすれば不利。小技で打ち返してよい",
        "text": "ふわっと浮く地上版はガードで-2前後（持続で当たって-1になることもある）で、有利になることはほぼない。ハイジャンプキャンセルから突っ込んでくる版も基本不利で、-4のこともある。ガードした後は小技などで打ち返してよい",
        "recipes": [],
        "startSec": 173,
        "scenes": [
          189,
          200
        ]
      },
      {
        "id": "mu_00mCD30qGvc_viper_06",
        "threats": [
          "バーニングキック"
        ],
        "topic": "守り",
        "title": "KK派生は+2なので押さない。PP派生は大攻撃で確定",
        "text": "地上版からの KK 派生（ドロップキックのような技）はガードさせてヴァイパー+2なので、ガードしたらボタンを押さない。PP 派生の振り下ろすパンチは本来コンボパーツで、ガードの上から出してきたら-15なので大攻撃から確定",
        "recipes": [],
        "startSec": 221,
        "scenes": [
          233,
          245
        ]
      },
      {
        "id": "mu_00mCD30qGvc_viper_07",
        "threats": [
          "バーニングキック"
        ],
        "topic": "反撃",
        "title": "キック派生は、空中で動いたのを見てインパクト",
        "text": "キック派生の対策を知らないと、これだけで固められて負ける。バーニングキックから空中で動いたらインパクトを押すと、ほぼ確定する（反応が遅れると確定しない）。ジャンプで逃げたり通常技で割ったりはできない。見てからジャスパの方が遅めに反応しても大丈夫だが難しいので、インパクトがおすすめ。練習はトレモで、強バーニングキックの何もしない版とキック派生版を記録して、空中で動いたらインパクトを押す",
        "recipes": [],
        "startSec": 257,
        "scenes": [
          272,
          286,
          298,
          324
        ]
      },
      {
        "id": "mu_00mCD30qGvc_viper_08",
        "threats": [
          "起き攻めのバーニングキック"
        ],
        "topic": "守り",
        "title": "起き攻めのバーニングキックには、バックジャンプか、一瞬ガードしてからインパクト",
        "text": "画面端で柔道と見せかけて前ステップからバーニングキックをすると、グラップを潰せて、グラップしていなくてもキック派生で有利を取られる強い連携。来そうなら、バックジャンプ（上から踏める。投げもかわせる）か、起き上がりに一瞬ガードしてからインパクト（ファジーインパクト）。インパクト連打だと柔道にインパクトが出てゲージを減らされるので、一瞬ガードを挟む",
        "recipes": [],
        "startSec": 354,
        "scenes": [
          374,
          394,
          413
        ]
      },
      {
        "id": "mu_00mCD30qGvc_viper_09",
        "threats": [
          "強アシストコンボ（モダン）"
        ],
        "topic": "反撃",
        "title": "モダンの強アシストは、しゃがみ大Pに前ジャンプ、ガード後は-10に反撃",
        "text": "強アシストコンボは自動でヒット確認がついて火力も高い。しゃがみ大Pをガードしたら前ジャンプすると、ジャンプ攻撃が確定する。近めでアシストコンボをガードすると-10なので、しゃがみ大Kなどが確定し、近ければしゃがみ大Pも入る。あえてガードしに行って反撃を取るか、ジャンプで上から反撃を取る。モダンは対空もワンボタンで横に長く痛いので、あまり飛ばず、地上の牽制は無視してガードする",
        "recipes": [],
        "startSec": 468,
        "scenes": [
          489,
          505,
          536
        ]
      },
      {
        "id": "mu_00mCD30qGvc_viper_10",
        "threats": [],
        "topic": "攻め",
        "title": "OD無敵技が無いので、強気に起き攻め",
        "text": "OD無敵技が無い。ODセービングアタックも一見強そうだがマリーザのスクトゥムより弱く、投げられるし、アーマーが1Fからではないので打撃を重ねれば潰せる。無敵はSAだけなので、強気に起き攻めする",
        "recipes": [],
        "startSec": 573,
        "scenes": [
          585,
          600
        ]
      }
    ]
  },
  {
    "opponent": "Alex",
    "perspective": "共通",
    "summary": "よくある負け方は、キャンセルラッシュに反応できないことと、構えているアレックスを殴りに行くこと。キャンセルラッシュにはドライブリバーサル、構えにはバックジャンプ、そもそも構えさせないように生ラッシュで攻める",
    "threats": [
      {
        "name": "キャンセルラッシュ",
        "about": "しゃがみ中K・立ち中P からのキャンセルラッシュ。その後はコマ投げか引き中Kが多い"
      },
      {
        "name": "構えからの起き攻め",
        "about": "起き上がりに構えて、打撃・コマ投げ・小ジャンプなどを選ぶ"
      }
    ],
    "youtubeId": "RzvS0bkwvAM",
    "sourceTitle": "リプレイで見るアレックス対策",
    "publishedAt": "2026-09-20",
    "patchVersion": "Y4",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_RzvS0bkwvAM_alex_01",
        "threats": [
          "キャンセルラッシュ"
        ],
        "topic": "守り",
        "title": "キャンセルラッシュには、少し遅れてもドライブリバーサル",
        "text": "キャンセルラッシュに全く反応できないのが負け筋の1つ。理想は無敵技だが、ドライブリバーサルでよい。その後に小技を打ってくるアレックスは少なく、コマ投げか引き中Kが多いので、リバが少し遅れても間に合う（コマ投げ・通常投げ・引き中Kに勝てる）。全キャラで使える",
        "recipes": [],
        "startSec": 109,
        "scenes": [
          127,
          144,
          189,
          213
        ]
      },
      {
        "id": "mu_RzvS0bkwvAM_alex_02",
        "threats": [
          "構え"
        ],
        "topic": "守り",
        "title": "構えているアレックスを殴りに行かない。バックジャンプが安全",
        "text": "構えを殴りに行くのは間違い（ラリアットが強く、リスクとリターンが合わない）。構えを見たら、悪いことが起きにくいのはバックジャンプ。垂直はスタンプに最大反撃できるが、他の派生に狙われることもある。前ジャンプは肩で対空されるのでダメ",
        "recipes": [],
        "startSec": 165,
        "scenes": [
          176,
          237,
          261,
          290
        ]
      },
      {
        "id": "mu_RzvS0bkwvAM_alex_03",
        "threats": [
          "構え"
        ],
        "topic": "守り",
        "title": "バックジャンプを見せるとカサカサが増えるので、そこを止める",
        "text": "構えを見るとすぐバックジャンプする相手には、アレックスは構えのままカサカサと前に移動してラインを上げてくる。カサカサが増えてきたら殴って止める（反応が遅いと間に合わないので練習）",
        "recipes": [],
        "startSec": 316,
        "scenes": [
          330,
          341
        ]
      },
      {
        "id": "mu_RzvS0bkwvAM_alex_04",
        "threats": [
          "スタンプ"
        ],
        "topic": "守り",
        "title": "スタンプをガードした後に、手を止めない",
        "text": "スタンプへのジャストパリィは難しく、アレックス側もかわせるので、できたら良いくらい。大事なのはガードした後に手を止めないこと。コマ投げを通さないようにバクステ・垂直・前ジャンプ（無敵技があるキャラは無敵技でよい）。打撃が来そうならガードと、意思を持って選ぶ",
        "recipes": [],
        "startSec": 355,
        "scenes": [
          368,
          389,
          406
        ]
      },
      {
        "id": "mu_RzvS0bkwvAM_alex_05",
        "threats": [
          "構えからの起き攻め"
        ],
        "topic": "守り",
        "title": "構え起き攻めは、見てから返せる行動（小ジャンプ）に集中",
        "text": "構え起き攻めは超強い。打撃とコマ投げの読み合いは仕方ないので、見てから返せる行動に集中する。アレックスの本命の小ジャンプ（無敵技をかわし、グラップにも勝つ）は、見ていれば昇龍拳や空対空で落とせる。ガードを選んだら小ジャンプは必ず対空する。着地を殴るのでもよい。読み負けは仕方ない",
        "recipes": [],
        "startSec": 431,
        "scenes": [
          442,
          463,
          484,
          509
        ]
      },
      {
        "id": "mu_RzvS0bkwvAM_alex_06",
        "threats": [
          "構え"
        ],
        "topic": "攻め",
        "title": "構えさせないのが一番。生ラッシュで攻める",
        "text": "身も蓋も無いが、構えたいアレックスには生ラッシュで攻めるのが一番簡単。地上戦もそれほど強くないので、長い攻撃で殴れる距離にいたり適度にラッシュしたりして、簡単に構えられないようにする。構えには打点の高い技が当たらないので、低い技で突っ込む",
        "recipes": [],
        "startSec": 591,
        "scenes": [
          610,
          622,
          644
        ]
      }
    ]
  },
  {
    "opponent": "Alex",
    "perspective": "共通",
    "summary": "最重要はスタンプ（構えからの派生）。ため大K・ため大Pも要注意で、垂直・バクステ・インパクトでやりたいことを封じる。アレックスは OD 無敵技が無くバクステも遅いので、自分のターンは攻めてよい",
    "threats": [
      {
        "name": "スタンプ",
        "about": "構えからの派生で、本田の百貫落としの強化版のような技。ヒットでダウン、パニカンで追撃、ガードでもアレックス有利（投げ間合いの内側）でコマ投げが来る。アレックスの最強技"
      },
      {
        "name": "構え",
        "about": "伏せる構え。スタンプなどに派生する。カサカサと前に移動する動きもある"
      },
      {
        "name": "ため大K",
        "about": "溜めるとガードさせてアレックス+2になる大K（溜めないと-4）。リーチが長い"
      },
      {
        "name": "ため大P",
        "about": "溜めるとガードさせて+2になる大P（溜めないと-3）。強ラリアットを入れ込んできて、連続ガードでドライブゲージを1.5本削る"
      },
      {
        "name": "中フラッシュアックス",
        "about": "ガードさせて-6だが距離が離れる"
      },
      {
        "name": "フライングクロスチョップ",
        "about": "通常技対空を潰す技。ガードすると隙が大きい"
      }
    ],
    "youtubeId": "_cusIwZk4Ck",
    "sourceTitle": "アレックス対策",
    "publishedAt": "2026-03-22",
    "patchVersion": "Y3後期",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu__cusIwZk4Ck_alex_01",
        "threats": [
          "中フラッシュアックス"
        ],
        "topic": "反撃",
        "title": "中フラッシュアックスは、長い5〜6Fの技で確定",
        "text": "弱は-3で反撃が無いが、中は-6。距離が離れるので、しゃがみ中Pの先端から出されると反撃が届かないこともあるが、長めの5Fや6Fの技があれば確定が取れる",
        "recipes": [],
        "startSec": 0,
        "scenes": [
          14
        ]
      },
      {
        "id": "mu__cusIwZk4Ck_alex_02",
        "threats": [
          "フライングクロスチョップ"
        ],
        "topic": "反撃",
        "title": "フライングクロスチョップと伏せ中の下段派生は反撃する",
        "text": "フライングクロスチョップはガードすると-11前後（位置で変わる）で、だいたい中攻撃が確定する。伏せ中に出る下段派生もガードすれば反撃できるが、打点の高い技は当たらないので低めを殴る技で反撃する",
        "recipes": [],
        "startSec": 42,
        "scenes": [
          57,
          71
        ]
      },
      {
        "id": "mu__cusIwZk4Ck_alex_03",
        "threats": [
          "スタンプ",
          "構え"
        ],
        "topic": "守り",
        "title": "構えを見たら飛ぶ。モダンは対空技を準備",
        "text": "スタンプは構えの後の派生なので、構えが見えたら飛ぶ（反応が遅れると間に合わないので、伏せたらすぐ飛ぶくらい）。モダンの人は特に、伏せたら対空技（昇龍拳など）を準備して、飛んだら打つ。バクステもまあまあ有効で、かわしたところを殴る",
        "recipes": [],
        "startSec": 126,
        "scenes": [
          138,
          166,
          188
        ]
      },
      {
        "id": "mu__cusIwZk4Ck_alex_04",
        "threats": [
          "スタンプ"
        ],
        "topic": "対空",
        "title": "小ジャンプのような動きは対空を釣られやすい",
        "text": "浮き上がって手前で小さく跳ね、対空を釣る動きもある。横に長い昇龍拳なら両方に対応できるが、通常技対空だと怖い。着地際を対空するか、付き合いたくなければバクステか前に飛ぶ。空中にいればそれほど悪いことは起きない",
        "recipes": [],
        "startSec": 204,
        "scenes": [
          226
        ]
      },
      {
        "id": "mu__cusIwZk4Ck_alex_05",
        "threats": [
          "ため大K",
          "ため大P"
        ],
        "topic": "守り",
        "title": "ため大K・ため大Pは、垂直ジャンプ・バクステ・インパクトで封じる",
        "text": "ため大Kはガードするとアレックス+2で、ここからコマ投げが来る。ため大Pも+2で、強ラリアットまで入れ込まれると連続ガードでドライブゲージを1.5本削られ、その後も+2。どちらもリーチは長いが垂直に弱いので、垂直をばらまくのが有効。アレックスが大攻撃を打ちたそうな距離でバックステップを置くのもよい。溜めていれば見てからインパクトもいける（やりすぎるとため大Pからインパクト返しをされるので注意）",
        "recipes": [],
        "startSec": 256,
        "scenes": [
          274,
          307,
          318,
          331
        ]
      },
      {
        "id": "mu__cusIwZk4Ck_alex_06",
        "threats": [
          "スタンプ"
        ],
        "topic": "守り",
        "title": "スタンプをガードしたら、バクステか垂直で逃げる",
        "text": "スタンプはどこかで必ずガードしてしまう。ガードした後の本命はコマ投げなので、バクステか垂直がおすすめ。この後の打撃は実は弱く、中アックスなどは跳んでいると空中で食らって確定が取れる。ジャンプにリスクを負わせられるのは弱攻撃からのアックスくらいで、ダメージは940程度",
        "recipes": [],
        "startSec": 374,
        "scenes": [
          389,
          407,
          427
        ]
      },
      {
        "id": "mu__cusIwZk4Ck_alex_07",
        "threats": [],
        "topic": "攻め",
        "title": "アレックスは守りが弱いので、攻めてよい",
        "text": "OD無敵技が無くSAだけ、バクステも25Fと遅いので、自分が攻めるときは自由に攻めてよい。まれにいるカサカサ動く構えの間は殴りに行ってよい（打点の高い技は当たらないので低い技で）",
        "recipes": [],
        "startSec": 442,
        "scenes": [
          466
        ]
      },
      {
        "id": "mu__cusIwZk4Ck_alex_08",
        "threats": [],
        "topic": "守り",
        "title": "ガードさせて有利な技の後は暴れない",
        "text": "ため大K・ため大P・スタンプ・後ろ中Kは、ガードさせてアレックス有利なので、この後はあまり暴れない",
        "recipes": [],
        "startSec": 488,
        "scenes": [
          499
        ]
      }
    ]
  },
  {
    "opponent": "Alex",
    "perspective": "ラシード",
    "summary": "構え対策さえしておけば、アレックスはラッシュ・飛び・リーチ共に平凡。弾＋コマンド突進技を持つラシードは技の相性が良く、アレックス側から見るとかなりきつい組み合わせ。構えに無限にカサカサ・スタンプされないよう、しっかり咎める",
    "threats": [],
    "youtubeId": "472NWOnWQNo",
    "sourceTitle": "対アレックス専用起き攻め＋構え対策",
    "publishedAt": "2026-03-25",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_472NWOnWQNo_alex_01",
        "threats": [
          "構え"
        ],
        "topic": "守り",
        "title": "構えを見たら、弱か中スパイクをぶっこむ",
        "text": "アレックス対策といえば構えへの対応。用意しておかないと無限にカサカサされる。簡単かつ効果的なのが、構えを見てから弱か中スパイクをぶっこむこと。当てたときのリターンも高い",
        "recipes": [
          {
            "label": "弱",
            "inputs": "214LK",
            "recipeJa": "弱スパイク"
          },
          {
            "label": "中",
            "inputs": "214MK",
            "recipeJa": "中スパイク"
          }
        ],
        "startSec": 116,
        "scenes": [
          121,
          125
        ]
      },
      {
        "id": "mu_472NWOnWQNo_alex_02",
        "threats": [
          "構え"
        ],
        "topic": "守り",
        "title": "慣れた相手の構えには OD ワール。見えたら大スパイクまで入れ込む",
        "text": "アレックス側も慣れてきており、スパイクを咎める動きをしてくる。その場合は単に ODワールを打つのが有効。追撃も大きいのが入るので、構えが見えていたら大スパイクまで入れ込む",
        "recipes": [
          {
            "inputs": "236KK > 214HK",
            "recipeJa": "ODワール>大スパイク"
          }
        ],
        "startSec": 132,
        "scenes": [
          138,
          142
        ]
      },
      {
        "id": "mu_472NWOnWQNo_alex_03",
        "threats": [
          "構え"
        ],
        "topic": "守り",
        "title": "ラッシュ6大Kも後ろ移動に当たりやすい",
        "text": "その他、ラッシュ6大Kも構えの後ろ移動に当たりやすい。これらでしっかり咎めておかないと、無限にスタンプされる",
        "recipes": [
          {
            "inputs": "DR > 6HK",
            "recipeJa": "ラッシュ>6大K"
          }
        ],
        "startSec": 153,
        "scenes": [
          158
        ]
      },
      {
        "id": "mu_472NWOnWQNo_alex_04",
        "threats": [],
        "topic": "立ち回り",
        "title": "構え対策をしたら、落ち着いてワールで相手を動かす",
        "text": "構え対策さえしておけば、アレックスはラッシュ・飛び・リーチ共に平凡。落ち着いてワールを打って相手を動かす。構えでぼられないように注意",
        "recipes": [],
        "startSec": 163,
        "scenes": [
          173,
          179
        ]
      },
      {
        "id": "mu_472NWOnWQNo_alex_05",
        "threats": [],
        "topic": "攻め",
        "title": "中央でも使える起き攻め: 中スパイク後にコパン>J大K",
        "text": "中スパイクの後にコパン>J大Kで、その場受け身・後ろ受け身の両方にJ大Kを安全に重ねられる。デカキャラ＋SAが遅い組＋昇竜が特殊なアレックス限定の起き攻めで、全てのSAをケアでき、リバサ昇竜も当たらない。弱点は後ろ受け身に投げ間合いの外になることなので、微歩きを入れつつ攻めを継続したい。中央で使えるレシピで、端にも対応している",
        "recipes": [
          {
            "inputs": "214MK > 5LP > j.HK",
            "recipeJa": "中スパイク>弱P>J大K"
          }
        ],
        "startSec": 3,
        "scenes": [
          9,
          18,
          34
        ]
      },
      {
        "id": "mu_472NWOnWQNo_alex_06",
        "threats": [],
        "topic": "攻め",
        "title": "端の弱スパイク後は、小足>ラッシュ小足も強い",
        "text": "端では弱スパイクの後に小足>ラッシュ小足も強い。10F詐欺のレシピなので SA1 は食らうが、SA2・SA3 はケアできる。ヒット確認は難しいが、ここからの攻めは強烈（当て投げなど）。下段択なので相手が崩れることも多く、その場合は攻めをループできる。散々下段を見せて中段をぶっこむのもあり",
        "recipes": [
          {
            "inputs": "214LK > 2LK > DR > 2LK",
            "recipeJa": "弱スパイク>2弱K>ラッシュ>2弱K"
          }
        ],
        "startSec": 67,
        "scenes": [
          72,
          78,
          90,
          105
        ]
      }
    ]
  },
  {
    "opponent": "Ingrid",
    "perspective": "共通",
    "summary": "対策が必須なのは弾・ビーム・ワープ。ワープは見たらボタンかバックジャンプ、シンボル2個以上のビームは1回吐かせてから近づく。弾の後のチャージやラッシュ大Kには引きつけた前ジャンプ",
    "threats": [
      {
        "name": "ワープ",
        "about": "上から降ってくるヒップアタック、ドロップキック、後ろへのワープの3つ。ヒップアタックはガードさせて+2で、投げもシミーもできる"
      },
      {
        "name": "弾→ワープ",
        "about": "弾を出してからワープ。落とせず、連続ガードになることもある"
      },
      {
        "name": "サンフレア（ビーム）",
        "about": "シンボルが2個以上あるときはとても強い（速く、火力が高く、追撃も痛い。SA3まで5000ほど）"
      },
      {
        "name": "弾",
        "about": "上弾を撃ってからのチャージ、弾からのラッシュ大Kなどの起点"
      },
      {
        "name": "弾ラッシュ大K",
        "about": "弾を撃ってからラッシュ大K。ガードさせて+2で、投げ間合いでシミーもできる"
      },
      {
        "name": "画面端の固め",
        "about": "画面端で弱弾・中足・立ち中Kを絡める固め。弾をガードした時点でイングリッド有利"
      },
      {
        "name": "前大P",
        "about": "とてもリーチの長い大P。ガードで-4"
      },
      {
        "name": "サンライズ",
        "about": "回転する蹴り技。ガードするとかなり不利（OD版は-3）"
      },
      {
        "name": "ターゲットコンボ",
        "about": "中P>中K のターゲットコンボ。ここで止めると-11"
      },
      {
        "name": "SA2",
        "about": "大PからSA2、投げで浮かせてコンボなどに使う"
      }
    ],
    "youtubeId": "TC5iK3yiOXk",
    "sourceTitle": "イングリッド対策",
    "publishedAt": "2026-06-02",
    "patchVersion": "Y3後期",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_TC5iK3yiOXk_ingrid_01",
        "threats": [
          "前大P"
        ],
        "topic": "反撃",
        "title": "前大Pは-4。とりあえず4Fを押す",
        "text": "リーチがとても長いが、ガードすると-4で4Fが届けば確定（先端は届かない）。長いぶんめり込むので、とりあえず4Fを押しておくのがおすすめ。そこからOD空中レーザーなどを入れ込んでくる場合も、4Fを押しておけば潰せる",
        "recipes": [],
        "startSec": 0,
        "scenes": [
          26,
          44
        ]
      },
      {
        "id": "mu_TC5iK3yiOXk_ingrid_02",
        "threats": [
          "サンライズ",
          "ターゲットコンボ"
        ],
        "topic": "反撃",
        "title": "サンライズは大攻撃で確定、中P>中K で止めたら中攻撃で確定",
        "text": "回転する蹴り（サンライズ）は全部ガードするとかなり不利なので、大攻撃始動で確定を取る。OD版は-3で確定は無いが、ボタンは押してよい。中P>中K のターゲットコンボは基本的に必殺技でキャンセルしてくるが、ここで止めた場合は-11で中攻撃などが確定",
        "recipes": [],
        "startSec": 55,
        "scenes": [
          72,
          83
        ]
      },
      {
        "id": "mu_TC5iK3yiOXk_ingrid_03",
        "threats": [
          "ワープ"
        ],
        "topic": "対空",
        "title": "ワープを見たら、とりあえず立ち技を押す（後ろワープでもリスク無し）",
        "text": "上から降ってくるヒップアタックはガードさせて+2で、そこから投げもシミーもできるので、そもそもガードしたくない。ワープを見たら立ち技（キャラによっては中攻撃でも）を押しておく。判定は意外と弱く、通常技で簡単に落ちて、特殊やられなので追撃もできる（ダルシムのテレポ対策に似ている）。前のワープでも落ちるし、後ろのワープでも押してリスクは無いので、ワープを見たら押す癖をつける",
        "recipes": [],
        "startSec": 116,
        "scenes": [
          131,
          144,
          160
        ]
      },
      {
        "id": "mu_TC5iK3yiOXk_ingrid_04",
        "threats": [
          "ワープ"
        ],
        "topic": "対空",
        "title": "ワープを見たらバックジャンプ。成功時のリターンが高い",
        "text": "もう1つの対策は、ワープを見たらバックジャンプ。ジャンプ攻撃からフルコンに行けるのでリターンはこちらの方が高い。上のワープは大丈夫で、前のワープも反応よく早めに飛べばいける。後ろのワープは仕切り直し",
        "recipes": [],
        "startSec": 179,
        "scenes": [
          188,
          199
        ]
      },
      {
        "id": "mu_TC5iK3yiOXk_ingrid_05",
        "threats": [
          "弾→ワープ"
        ],
        "topic": "守り",
        "title": "弾を出してからのワープには、弾の発射に合わせてジャンプ。ガードしたら暴れない",
        "text": "弾を出してからのワープは落とせず、連続ガードになることもある。使ってくると思ったら、弾の発射に合わせてバックジャンプか垂直ジャンプを置いておく（バックジャンプは弾を踏むことがある）。ガードしてしまったら相手が先に動けるので、4F暴れは弱い。投げ抜けかバックジャンプかガード",
        "recipes": [],
        "startSec": 217,
        "scenes": [
          233,
          247
        ]
      },
      {
        "id": "mu_TC5iK3yiOXk_ingrid_06",
        "threats": [
          "サンフレア（ビーム）"
        ],
        "topic": "守り",
        "title": "シンボル2個以上のビームは、歩きガードで1回吐かせてから近づく",
        "text": "シンボルが2個以上あるときのビームは、速くて火力も高く追撃も痛い（SA3まで5000ほど）ので絶対に食らえない。見てから対応するのは難しいので、ストックが2個あるときはビームを警戒して歩きガードし、1回吐かせてから前に歩く。ガードされるとイングリッド側はストック2個とゲージ2本を払ってかなり寒い。溜めてくるなら、ラッシュで溜めを殴れる距離まで歩きガードで詰める",
        "recipes": [],
        "startSec": 271,
        "scenes": [
          288,
          304,
          317
        ]
      },
      {
        "id": "mu_TC5iK3yiOXk_ingrid_07",
        "threats": [
          "サンフレア（ビーム）",
          "ワープ"
        ],
        "topic": "対空",
        "title": "ODビームからの追撃のワープは、冷静に落とす",
        "text": "ビームからワープで追撃できるが、ヒット確認せずにワープまで入れ込んでいる人が多い。ODビームの後はワープがセットで来ることが多いので、冷静に落とす",
        "recipes": [],
        "startSec": 328,
        "scenes": [
          342,
          355
        ]
      },
      {
        "id": "mu_TC5iK3yiOXk_ingrid_08",
        "threats": [
          "弾"
        ],
        "topic": "反撃",
        "title": "上弾からのチャージには、弾を引きつけて前ジャンプ",
        "text": "上弾を撃ってからチャージする動きがとても多い。弾を引きつけてから前ジャンプすると、チャージに余裕で確定が取れる（真下では無理だが、少し遠めなら意外と飛べる）",
        "recipes": [],
        "startSec": 388,
        "scenes": [
          401,
          411
        ]
      },
      {
        "id": "mu_TC5iK3yiOXk_ingrid_09",
        "threats": [
          "弾ラッシュ大K"
        ],
        "topic": "守り",
        "title": "弾ラッシュ大Kには、引きつけた前ジャンプか、パリィ押しっぱなしからリバ",
        "text": "弾を撃ってガードしそうならラッシュ大K（ガードさせて+2、投げ間合いでシミーもできる）はとても強い。引きつけて前ジャンプすると、めくりの対空が難しいので割と良い。パリィを押しっぱなしにしておくとドライブゲージが1.5本ほど回復し、ドライブリバーサルが確定する。そうなるとラッシュから投げる読み合いになるが、パリィからのグラップで凌ぎやすくなる",
        "recipes": [],
        "startSec": 424,
        "scenes": [
          431,
          448,
          472
        ]
      },
      {
        "id": "mu_TC5iK3yiOXk_ingrid_10",
        "threats": [
          "画面端の固め"
        ],
        "topic": "守り",
        "title": "画面端の弱弾の固めは、ボタンを押さずにインパクトか前飛び",
        "text": "画面端での弱弾・中足・弱弾・立ち中K・弱弾のような動きは、弾をガードさせた時点でイングリッド有利で、ボタンを押すと負ける。中足弾や立ち中K弾にはインパクトが確定する。弾を見てから前に飛ぶこともでき、うまくめくりで飛べばあまり落とされない（強弾やOD弾にはインパクト返しもされるので、そこからは読み合い）",
        "recipes": [],
        "startSec": 506,
        "scenes": [
          519,
          530,
          558
        ]
      },
      {
        "id": "mu_TC5iK3yiOXk_ingrid_11",
        "threats": [
          "SA2"
        ],
        "topic": "守り",
        "title": "SA2の後の投げ・シミーには、ドライブリバーサルかジャンプ",
        "text": "大PからSA2、そこから投げで浮かせてコンボ、という使い方がメジャー。発動の後は、とりあえずドライブリバーサル（様子見以外にはだいたい勝てる）。ゲージが少なくリバしたくなければジャンプ。今のところ打撃より、投げかシミーか連続ガードの削りが多い",
        "recipes": [],
        "startSec": 587,
        "scenes": [
          602,
          613,
          633
        ]
      }
    ]
  },
  {
    "opponent": "Ingrid",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "JqWXVTKY0HM",
    "sourceTitle": "対イングリッドTC＞ビーム対策",
    "publishedAt": "2026-08-18",
    "patchVersion": "Y4",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_JqWXVTKY0HM_ingrid_01",
        "threats": [
          "ターゲットコンボ",
          "サンフレア（ビーム）"
        ],
        "topic": "守り",
        "title": "TC＞ビームには、少しガードしてからファジー弱スパイク",
        "text": "TCをガードしたら数フレームガードしてから、ファジーで弱スパイクを打つ。ビームならガードでき、ワープなら弱スパイクで落とせる。後ろワープにも弱スパイクが当たる（動画内では撮れていない）ので、甘えたワープを咎められる",
        "recipes": [
          {
            "inputs": "214LK",
            "recipeJa": "弱スパイク"
          }
        ],
        "startSec": 0,
        "scenes": [
          12
        ]
      }
    ]
  },
  {
    "opponent": "Ingrid",
    "perspective": "ラシード",
    "threats": [],
    "youtubeId": "DuYVdcTcVfo",
    "sourceTitle": "イングリッドのワープは2中Pで落とそう！",
    "publishedAt": "2026-06-04",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_DuYVdcTcVfo_ingrid_01",
        "threats": [
          "ワープ"
        ],
        "topic": "対空",
        "title": "ワープは2中Pで落とす",
        "text": "イングリッドのワープは2中Pで落とす。連続ガードでない限り、ワープ落としは頑張りどころ",
        "recipes": [
          {
            "inputs": "2MP",
            "recipeJa": "2中P"
          }
        ],
        "startSec": 0,
        "scenes": [
          4
        ]
      }
    ]
  },
  {
    "opponent": "Ingrid",
    "perspective": "ラシード",
    "summary": "ラシードはイングリッドに有効な技が揃っている側。シンボル1の間は微溜めワールで主導権を取り、弾でダウンを取られたらスラで咎める。ワープは常に警戒する",
    "threats": [],
    "youtubeId": "IsZxH5IqaH4",
    "sourceTitle": "イングリッド戦で意識している3つのこと",
    "publishedAt": "2026-06-01",
    "patchVersion": "Y3後期",
    "ownerLabel": "doskonnbu",
    "blog": "https://doskonnbu-rashid-lab.blogspot.com/2026/06/63.html",
    "points": [
      {
        "id": "mu_IsZxH5IqaH4_ingrid_01",
        "threats": [
          "弾"
        ],
        "topic": "反撃",
        "title": "弾でダウンを取られた後は、次の弾を見てからスラ",
        "text": "イングリッドは弾でダウンを取った後、もう一度弾を撃って展開を作ろうとすることが多い。弾を見てからスラが確定するので、起き上がりにひとまず前ダッシュを仕込んでおき、スラでパニカン・確反を狙う。スラはビームも避けられる。前ステを入れ込みつつ状況を見るのも大事",
        "recipes": [],
        "startSec": 35,
        "scenes": [
          145,
          243,
          375,
          387
        ]
      },
      {
        "id": "mu_IsZxH5IqaH4_ingrid_02",
        "threats": [],
        "topic": "立ち回り",
        "title": "シンボル1の間は微溜めワールで展開を作る",
        "text": "相手のシンボルがまだ1の間に、どれだけワールを展開できるかが鍵。微溜めワールは相手の弾を消せて、シンボルを溜めさせず、こちらが有利な展開を作りやすい。隙あらば最大溜めワールも混ぜて触りにいく。一度触れば攻め倒せる。シンボルが無い時は強気に弾を撃てるが、相手のシンボル数を見ずに撃つのはNG",
        "recipes": [],
        "startSec": 272,
        "scenes": [
          235,
          283,
          299,
          370
        ]
      },
      {
        "id": "mu_IsZxH5IqaH4_ingrid_03",
        "threats": [
          "ワープ"
        ],
        "topic": "守り",
        "title": "シンボル2からはワープを警戒する。落とすのは気合",
        "text": "シンボルが2まで溜まったら、ビームを見つつワープを警戒する。ワープを通していたら勝てない。連続ガードになっていない隙間でのワープ落としは頑張りどころ。スラを入れ込んでおけばワープされても位置が入れ替わるだけでリスクは少ないが、毎回入れ込むのは安定しない",
        "recipes": [],
        "startSec": 395,
        "scenes": [
          9,
          172
        ]
      },
      {
        "id": "mu_IsZxH5IqaH4_ingrid_04",
        "threats": [],
        "topic": "攻め",
        "title": "起き攻めは重ね優先",
        "text": "イングリッドの当身はJPほど性能が高くないので、起き攻めは基本的に重ねを優先する",
        "recipes": [],
        "startSec": 18,
        "scenes": []
      },
      {
        "id": "mu_IsZxH5IqaH4_ingrid_05",
        "threats": [],
        "topic": "立ち回り",
        "title": "イウサールはいつも通りに使ってよい",
        "text": "ビームはイウサールを貫けず、イングリッドには弾抜け技も無いので、イウサールはいつも通りの運用でOK",
        "recipes": [],
        "startSec": 86,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Arjun",
    "perspective": "共通",
    "summary": "弾を持っているかラッシュが速いキャラはやりやすい（弾が無くラッシュも弱いキャラは少し面倒）。張り手の派生が光ったら飛ぶ、設置はラッシュで止める、張り手には垂直、タックルにはパリィ",
    "threats": [],
    "youtubeId": "l4RxMDlLYs8",
    "sourceTitle": "アルジュン対策 実践編",
    "publishedAt": "2026-10-23",
    "patchVersion": "Y4",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_l4RxMDlLYs8_arjun_01",
        "threats": [
          "張り手"
        ],
        "topic": "守り",
        "title": "張り手の派生が光ったら飛ぶ",
        "text": "張り手の派生（黄色く光る）を見たら飛ぶ。本当はインパクトしたいが、無理しなくてよい",
        "recipes": [],
        "startSec": 36,
        "scenes": [
          51
        ]
      },
      {
        "id": "mu_l4RxMDlLYs8_arjun_02",
        "threats": [
          "当て身"
        ],
        "topic": "攻め",
        "title": "固めのフレームに気をつけないと、当て身で割られる",
        "text": "固めの連携のフレームを気にしないと、当て身で割り込まれる（決まった連携が当て身で割られる）",
        "recipes": [],
        "startSec": 123,
        "scenes": [
          785
        ]
      },
      {
        "id": "mu_l4RxMDlLYs8_arjun_03",
        "threats": [],
        "topic": "攻め",
        "title": "バックステップが遅いので、投げを重ねてよい",
        "text": "バックステップが25Fと遅いので、画面端では投げを重ねまくってよい",
        "recipes": [],
        "startSec": 171,
        "scenes": []
      },
      {
        "id": "mu_l4RxMDlLYs8_arjun_04",
        "threats": [
          "岩（設置）"
        ],
        "topic": "攻め",
        "title": "岩が怖ければ、キャンセルラッシュで攻める",
        "text": "ODで何かが起きるわけではないので攻めてよい。岩が怖ければキャンセルラッシュで攻めてしまう",
        "recipes": [],
        "startSec": 256,
        "scenes": []
      },
      {
        "id": "mu_l4RxMDlLYs8_arjun_05",
        "threats": [
          "岩（設置）"
        ],
        "topic": "反撃",
        "title": "設置はラッシュで止める。当て身からの設置にはその場受け身から",
        "text": "設置はラッシュで止める。当て身からの設置にはその場受け身がおすすめ。立ち回りで設置を見てラッシュするだけで大きなリターンになる（ジェイミーが生で酒を飲むのと同じ）",
        "recipes": [],
        "startSec": 309,
        "scenes": [
          356,
          688
        ]
      },
      {
        "id": "mu_l4RxMDlLYs8_arjun_06",
        "threats": [
          "張り手"
        ],
        "topic": "守り",
        "title": "張り手には垂直ジャンプ",
        "text": "張り手には垂直。張り手を読んだ垂直にアルジュン側が勝てるのはSAだけ。相手にSA3があるときは、張り手の派生へのインパクトは微妙",
        "recipes": [],
        "startSec": 334,
        "scenes": [
          405,
          881
        ]
      },
      {
        "id": "mu_l4RxMDlLYs8_arjun_07",
        "threats": [],
        "topic": "立ち回り",
        "title": "近めの前ジャンプは、アルジュン側が落とせない",
        "text": "垂直を置いていると相手は大K対空をしたくなるが、そこで近めの前ジャンプが来ると落とせない。投げの後の張り手には前ジャンプで勝てる。通常技で対空するキャラなので、めくりのジャンプ大Pが強い",
        "recipes": [],
        "startSec": 416,
        "scenes": [
          531,
          543
        ]
      },
      {
        "id": "mu_l4RxMDlLYs8_arjun_08",
        "threats": [
          "タックル"
        ],
        "topic": "守り",
        "title": "タックルが見えたらパリィ。張り手にパリィを狙うとインパクトを食らう",
        "text": "タックルが見えたらパリィしておけば大丈夫。張り手にパリィを狙っていると、インパクトのほうが早くて食らう",
        "recipes": [],
        "startSec": 456,
        "scenes": [
          605
        ]
      },
      {
        "id": "mu_l4RxMDlLYs8_arjun_09",
        "threats": [
          "岩（設置）"
        ],
        "topic": "立ち回り",
        "title": "ラッシュが弱いキャラは、設置の止め方を考えておく",
        "text": "ラッシュが弱いキャラは、設置を何で止めるかを考えておく（春麗ならOD覇山蹴など）",
        "recipes": [],
        "startSec": 881,
        "scenes": [
          897
        ]
      }
    ]
  },
  {
    "opponent": "Arjun",
    "perspective": "共通",
    "summary": "設置はラッシュで確定を取る。張り手の派生は見てからインパクト。困ったら飛ぶ（対空は弱く、されても安い）。当て身設置や投げ設置はラッシュで止める",
    "threats": [
      {
        "name": "岩（設置）",
        "about": "離れた位置に岩を設置する。設置した岩は少し後に地面から生えてくる"
      },
      {
        "name": "張り手",
        "about": "立ち回りで通常技のように使う技。追加（派生）がある"
      },
      {
        "name": "シューティングモード",
        "about": "武器（弾）を連打するモード。白ダメージも取られる"
      },
      {
        "name": "岩タックル",
        "about": "吹き飛ばした後、足元に岩を置いてからのタックル"
      },
      {
        "name": "タックル",
        "about": "突進技。岩がある状態だと、岩を持ち上げて振り回す派生になる"
      }
    ],
    "youtubeId": "E5IUpL8Xl8w",
    "sourceTitle": "アルジュン対策『完成版』",
    "publishedAt": "2026-10-19",
    "patchVersion": "Y4",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_E5IUpL8Xl8w_arjun_01",
        "threats": [
          "岩（設置）"
        ],
        "topic": "反撃",
        "title": "設置のモーションを見たら、ラッシュで確定",
        "text": "立ち回りでの岩の設置は、モーションを見てからラッシュで確定が取れる（一見安全そうな位置でも殴れる）。一番大事で、全キャラでできる。ラッシュが弱いマノンはデガジェで止める手もある",
        "recipes": [],
        "startSec": 26,
        "scenes": [
          56,
          67
        ]
      },
      {
        "id": "mu_E5IUpL8Xl8w_arjun_02",
        "threats": [
          "張り手"
        ],
        "topic": "守り",
        "title": "張り手には、ボタンを置くか垂直ジャンプ",
        "text": "張り手は通常技のように使ってくる。ガードのタイミングでボタンを押しておけば、届かなければ差し返しになる（届かなかったとき用にラッシュまで仕込めればなお良い）。垂直を置いておくのも有効",
        "recipes": [],
        "startSec": 120,
        "scenes": [
          149
        ]
      },
      {
        "id": "mu_E5IUpL8Xl8w_arjun_03",
        "threats": [
          "張り手"
        ],
        "topic": "守り",
        "title": "4Fが届く張り手には4Fが安定。届かない張り手は強い",
        "text": "4Fの技が届く距離なら4Fが安定（張り手の初段からSA1やジャスパ狙いをされなければ）。4Fが届かない距離の張り手は、4F以外の技に全部勝つので強い（飛べないし、6Fの技を出すと負ける）",
        "recipes": [],
        "startSec": 159,
        "scenes": [
          182,
          196
        ]
      },
      {
        "id": "mu_E5IUpL8Xl8w_arjun_04",
        "threats": [
          "張り手"
        ],
        "topic": "反撃",
        "title": "張り手の追加は、見てからインパクト",
        "text": "張り手の明確な弱点は、追加を出すか出さないか。追加は見てからインパクトが間に合う（思ったより猶予がある）。間違えて出したときと、相手にSA3があるときは注意",
        "recipes": [],
        "startSec": 206,
        "scenes": [
          231,
          245
        ]
      },
      {
        "id": "mu_E5IUpL8Xl8w_arjun_05",
        "threats": [
          "シューティングモード"
        ],
        "topic": "立ち回り",
        "title": "連打モードを連発されたら飛ぶ。真上に撃ってきたらラッシュ",
        "text": "武器の連打モードは白ダメージも取られて強い。連発してくるなら飛ぶ（斜めには勝てる）。真上に撃ってくるならラッシュが確定する（難しい）",
        "recipes": [],
        "startSec": 245,
        "scenes": [
          257,
          268
        ]
      },
      {
        "id": "mu_E5IUpL8Xl8w_arjun_06",
        "threats": [],
        "topic": "立ち回り",
        "title": "飛びは有効。しゃがみ大Pの対空は安く、その後はジャスパか無敵技",
        "text": "飛びは有効で、しゃがみ大Pの対空は安い（大Kの対空だけは痛いが、それは飛びを読まれすぎ）。しゃがみ大P対空からキャンセルしてくるならジャスパを狙えるし、無敵技も強い。設置にはリターンも取れるので、困ったら飛んでよい",
        "recipes": [],
        "startSec": 295,
        "scenes": [
          316,
          327,
          339
        ]
      },
      {
        "id": "mu_E5IUpL8Xl8w_arjun_07",
        "threats": [
          "岩タックル"
        ],
        "topic": "守り",
        "title": "足元に岩を置かれたらパリィを一瞬押し、岩を受け止めたら離す",
        "text": "張り手で吹き飛ばされて岩タックルの状況になり、足元に岩を置かれたら、すぐにパリィを押す。岩をパリィで受け止めたら離す（押しっぱなしだとタックルから投げられる）。こうすれば中タックルなどで投げられることは無く、むしろ確定が取れることもある",
        "recipes": [],
        "startSec": 362,
        "scenes": [
          386,
          420
        ]
      },
      {
        "id": "mu_E5IUpL8Xl8w_arjun_08",
        "threats": [
          "岩タックル",
          "タックル"
        ],
        "topic": "守り",
        "title": "岩の後のタックルは見てパリィ。岩の前にいれば4Fで確定",
        "text": "画面端で岩を置かれた後は、キャンセルのタックルにパリィ（ジャスパでなくてよい）。タックルにパリィさえ押せれば痛いことは起きない。岩より前にいればタックルは岩を持ち上げる派生にならないので、4Fで確定（派生する場合は連続ガード）",
        "recipes": [],
        "startSec": 431,
        "scenes": [
          456,
          470,
          493
        ]
      },
      {
        "id": "mu_E5IUpL8Xl8w_arjun_09",
        "threats": [
          "岩（設置）"
        ],
        "topic": "反撃",
        "title": "当て身や投げからの設置は、その場受け身からラッシュで確定",
        "text": "当て身を取られた後や投げた後の設置（OD設置も）は、その場受け身からラッシュで確定（足が遅いキャラはできないこともある）。画面端で岩を置いてからの連携も、ラッシュが強いキャラなら確定が取れる",
        "recipes": [],
        "startSec": 511,
        "scenes": [
          519,
          547,
          572
        ]
      },
      {
        "id": "mu_E5IUpL8Xl8w_arjun_10",
        "threats": [],
        "topic": "立ち回り",
        "title": "まとめ: 設置はラッシュ、派生はインパクト、困ったら飛ぶ",
        "text": "設置はラッシュで確定を取る。派生は見てからインパクト。垂直も前ジャンプも強く、対空はそれほど強くない。当て身設置や投げ設置はぼったくりなのでラッシュで止める。画面端の起き攻めは強いが、それ以外はそうそう困らない",
        "recipes": [],
        "startSec": 598,
        "scenes": [
          632
        ]
      }
    ]
  },
  {
    "opponent": "Arjun",
    "perspective": "共通",
    "summary": "仕組みが分からず固まって負けている人が多い。足元の岩には（タックルではなく）岩にパリィ、生えた岩は怖くない、遠距離は歩いて詰める、対空が弱いので垂直と前ジャンプが有効",
    "threats": [
      {
        "name": "息（弾消し）",
        "about": "こちらの弾を消す技。消した後、アルジュンの弾は出ない"
      }
    ],
    "youtubeId": "9B94QZH6I2k",
    "sourceTitle": "アルジュン対策の質問に答える",
    "publishedAt": "2026-10-16",
    "patchVersion": "Y4",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_9B94QZH6I2k_arjun_01",
        "threats": [
          "岩タックル"
        ],
        "topic": "守り",
        "title": "パリィはタックルではなく岩に合わせる（先に押しておく）",
        "text": "吹き飛ばされて足元に岩を設置された後は、岩のタイミングでパリィを先に押しておく（損が無い）。岩をガードしてからパリィを押すと、中・弱タックルから投げられる。岩をパリィすれば、タックルが来ても連続でパリィになり、手前からは投げられない。目の前に設置されたとき（マークで場所が分かる）だけパリィする。前の動画の「タックルにパリィ」はこちらに訂正",
        "recipes": [],
        "startSec": 87,
        "scenes": [
          111,
          160,
          316
        ]
      },
      {
        "id": "mu_9B94QZH6I2k_arjun_02",
        "threats": [
          "岩タックル"
        ],
        "topic": "守り",
        "title": "岩をパリィしたら離して、投げ抜けも狙う",
        "text": "岩をパリィしたら離す。強タックルならそのままパリィが続き、手前のタックルからの投げには、離していれば投げ抜けできる（暴れることもできる）。これで強タックルで大きく削られることも、手前のタックルでパリィを投げられることも無くなる",
        "recipes": [],
        "startSec": 207,
        "scenes": [
          233,
          256
        ]
      },
      {
        "id": "mu_9B94QZH6I2k_arjun_03",
        "threats": [
          "岩（設置）"
        ],
        "topic": "立ち回り",
        "title": "岩は生えた後には攻撃判定が無い",
        "text": "岩は設置するときに短い攻撃判定があり（かなり密着でないと届かない）、生えてくるときにも攻撃判定がある。生えた後はただのオブジェクトで攻撃判定は無いので、怖がらなくてよい（歩いて距離を詰めてもいい）",
        "recipes": [],
        "startSec": 452,
        "scenes": [
          476,
          487
        ]
      },
      {
        "id": "mu_9B94QZH6I2k_arjun_04",
        "threats": [
          "タックル"
        ],
        "topic": "反撃",
        "title": "岩の前に出れば、タックルは4Fで確定反撃",
        "text": "岩がある状態のタックルは岩を持ち上げて振り回す派生になるが、相手より奥に岩があるときは派生しない。派生しないタックルは4Fで確定反撃。岩の前に出てしまえば、強タックル以外は確定が取れる。岩より手前にいればインパクトでもいける",
        "recipes": [],
        "startSec": 501,
        "scenes": [
          545,
          591,
          654
        ]
      },
      {
        "id": "mu_9B94QZH6I2k_arjun_05",
        "threats": [
          "タックル"
        ],
        "topic": "守り",
        "title": "タックルに置き技は割に合わない",
        "text": "突進を置き技で止めるのはリスクとリターンが合わない（特に岩があるとき）。見てから出せる無敵技やSAはあり",
        "recipes": [],
        "startSec": 616,
        "scenes": [
          627
        ]
      },
      {
        "id": "mu_9B94QZH6I2k_arjun_06",
        "threats": [
          "シューティングモード"
        ],
        "topic": "立ち回り",
        "title": "遠距離は弾にパリィせず、前に歩く",
        "text": "生えた岩は怖くないので、歩いて距離を詰める。弾は斜め上もあって見間違えるのでパリィはおすすめしない。前飛びも斜めがあるので微妙。前に歩く。弾を持っているキャラは楽",
        "recipes": [],
        "startSec": 700,
        "scenes": [
          728,
          757
        ]
      },
      {
        "id": "mu_9B94QZH6I2k_arjun_07",
        "threats": [
          "息（弾消し）"
        ],
        "topic": "立ち回り",
        "title": "息の後は弾を撃ってよい。岩設置で弾を消されたら撃たない",
        "text": "息で弾を消された後はアルジュンの弾が出ないので、こちらが弾を撃ってよい（ガイルやエドのように普通の波動拳で押し切れる）。ただし岩設置の衝撃で弾を消された場合は設置が成立していて奥から岩が生えてくるので、撃たずにパリィするか前に出る",
        "recipes": [],
        "startSec": 822,
        "scenes": [
          830,
          884,
          935
        ]
      },
      {
        "id": "mu_9B94QZH6I2k_arjun_08",
        "threats": [],
        "topic": "立ち回り",
        "title": "対空が弱いので、垂直と前ジャンプが有効",
        "text": "対空はしゃがみ大Pの通常対空。主力のしゃがみ大攻撃・立ち中攻撃・生の張り手は、垂直がかみ合うと大ダメージ。垂直を止めるには歩いて大Kなどをするしかないので、垂直と前ジャンプは全キャラで有効",
        "recipes": [],
        "startSec": 1017,
        "scenes": [
          1033,
          1065
        ]
      },
      {
        "id": "mu_9B94QZH6I2k_arjun_09",
        "threats": [
          "岩（設置）"
        ],
        "topic": "反撃",
        "title": "生の岩設置は、見てからラッシュで咎める",
        "text": "生の岩設置は、見てからラッシュでダメージが取れる（ブランカの人形設置やジェイミーの酒と同じ）。強い連携でも、連発するならどこかで前ジャンプが通る",
        "recipes": [],
        "startSec": 1095,
        "scenes": [
          1124
        ]
      },
      {
        "id": "mu_9B94QZH6I2k_arjun_10",
        "threats": [],
        "topic": "立ち回り",
        "title": "仕組みが分からず固まらない。困ったら飛ぶかラッシュ",
        "text": "岩や息の仕組みが分からず固まって負けている人が多い。長めの技には垂直、弾が少なければラッシュ（ラッシュ止めは強くない）、当て身が多ければ投げる。とりあえず勝ちたいなら飛びまくる・ラッシュしまくる",
        "recipes": [],
        "startSec": 1270,
        "scenes": [
          1290,
          1380
        ]
      },
      {
        "id": "mu_9B94QZH6I2k_arjun_11",
        "threats": [],
        "topic": "立ち回り",
        "title": "キャラ別のコツ（ベガ・ザンギ・本田・A.K.I.・リリー・ガイル・JP）",
        "text": "ベガ: ODサイコクラッシャーで遠距離戦を壊せるので殴り合う。ODサイコを構えつつ、弾が少なければダブルニーやラッシュ。ザンギ: シューティングモードはきついが早めに近づけるので、ゆっくり歩く。生の岩設置の初段をガードするかスカしたら攻撃。本田: ゆっくり歩いて近づき普通に殴り合う。前飛びもしてよい。A.K.I.: OD弾が強く、ラッシュも速いので設置に見てからラッシュ。リリー: 風を溜める。ガイル: いつも通り弾で（ドライブが少なければ弾で回復）。JP: シューティングでよい（トリグラフが強い）",
        "recipes": [],
        "startSec": 1383,
        "scenes": [
          1159,
          1433,
          1481,
          1543,
          1563,
          1626
        ]
      },
      {
        "id": "mu_9B94QZH6I2k_arjun_12",
        "threats": [
          "張り手"
        ],
        "topic": "守り",
        "title": "画面端では、張り手をガードしたら4F",
        "text": "画面端で攻められているときは、だいたいどこかで張り手を入れ込んでくるので、張り手をガードしたらターン終わり。その後に派生を出してくるなら4Fで割れる。張り手を食らったら、ほぼ派生してくるのでインパクトで割る（無敵技も）",
        "recipes": [],
        "startSec": 1705,
        "scenes": [
          1769,
          1799
        ]
      }
    ]
  },
  {
    "opponent": "Arjun",
    "perspective": "共通",
    "summary": "アルジュンの本命は、遠くからの弾・岩・タックル。タックルはガードせずパリィで受ける。SA以外に無敵技が無いので起き攻めし放題。全部の技で白ダメージが溜まるので、パリィとインパクトで凌ぎ、触ったら攻める",
    "threats": [
      {
        "name": "コマ投げ",
        "about": "キャンセルラッシュから来ることが多い"
      },
      {
        "name": "当て身",
        "about": "構えている間はほぼ無敵。飛び道具もSAも受け止め、打撃を取ると派生する。投げには弱い"
      }
    ],
    "youtubeId": "eN5pcZRbhQ8",
    "sourceTitle": "アルジュンとりこれ対策",
    "publishedAt": "2026-10-13",
    "patchVersion": "Y4",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_eN5pcZRbhQ8_arjun_01",
        "threats": [
          "タックル"
        ],
        "topic": "守り",
        "title": "タックルはガードせず、パリィで受ける",
        "text": "ガードしているだけだと白ダメージ2200とドライブゲージ1.8本を取られるので、ガードは正解ではない。離れた位置からのタックルを見たらパリィ。そうすれば何も起きず、仕切り直しになる（確定反撃は無い）",
        "recipes": [],
        "startSec": 25,
        "scenes": [
          35,
          47
        ]
      },
      {
        "id": "mu_eN5pcZRbhQ8_arjun_02",
        "threats": [
          "タックル"
        ],
        "topic": "守り",
        "title": "タックルに飛ぶのとインパクトは避ける",
        "text": "タックルを読んで飛ぶと引っかかって大きく減る。インパクトも、タックルの最中に押すと派生で潰される。押すなら読みで早めに。基本はパリィ",
        "recipes": [],
        "startSec": 61,
        "scenes": [
          78
        ]
      },
      {
        "id": "mu_eN5pcZRbhQ8_arjun_03",
        "threats": [
          "張り手"
        ],
        "topic": "守り",
        "title": "弱張り手の最初をガードしたら、4Fで割る",
        "text": "小技から弱張り手を入れ込んでくるが、最初をガードした後は4Fの小技で割れる",
        "recipes": [],
        "startSec": 108,
        "scenes": [
          134
        ]
      },
      {
        "id": "mu_eN5pcZRbhQ8_arjun_04",
        "threats": [
          "張り手"
        ],
        "topic": "守り",
        "title": "弱張り手を食らった後は、ガードかインパクト",
        "text": "弱張り手を食らった後は4Fでも勝てないので、大人しくガードするか、インパクト（当たれば大体派生してくるので割り込める）。無敵技もあり",
        "recipes": [],
        "startSec": 151,
        "scenes": [
          173,
          184
        ]
      },
      {
        "id": "mu_eN5pcZRbhQ8_arjun_05",
        "threats": [
          "コマ投げ"
        ],
        "topic": "守り",
        "title": "コマ投げはキャンセルラッシュから来る。飛んで反撃",
        "text": "長い中攻撃からのキャンセルラッシュコマ投げや、ラッシュコパンからのコマ投げが来る。来ると思ったら飛ぶ（垂直・前ジャンプ・バックステップ）で反撃する",
        "recipes": [],
        "startSec": 194,
        "scenes": [
          210,
          233
        ]
      },
      {
        "id": "mu_eN5pcZRbhQ8_arjun_06",
        "threats": [],
        "topic": "攻め",
        "title": "無敵技が無いので起き攻めし放題。めくり飛びが有効",
        "text": "SA以外に無敵技が無いので起き攻めし放題。対空もそれほど強くなく、特にめくり飛びへの対空は弱い",
        "recipes": [],
        "startSec": 246,
        "scenes": [
          256,
          268
        ]
      },
      {
        "id": "mu_eN5pcZRbhQ8_arjun_07",
        "threats": [
          "当て身"
        ],
        "topic": "守り",
        "title": "当て身はほぼ無敵。見たら近づいて投げる",
        "text": "当て身は構えている間ほぼ無敵で、飛び道具もSAも受け止め、打撃を取ると勝手に派生する。投げには弱いので、見たらジャンプやラッシュで近づいて投げる。JPのアブニマーチやブランカのワイルドハントなど、投げ属性の技でも勝てる",
        "recipes": [],
        "startSec": 279,
        "scenes": [
          302,
          315
        ]
      },
      {
        "id": "mu_eN5pcZRbhQ8_arjun_08",
        "threats": [
          "当て身"
        ],
        "topic": "守り",
        "title": "当て身からの派生は、ジャンプでかわす",
        "text": "当て身から派生する技（ガードさせてアルジュン有利で、結構削られる）は、動いたのを見たらジャンプでかわせる。発生が遅いので近づいて投げるのも大体間に合う。遠すぎるとこれに潰されるので、ジャンプで近づいてジャンプ攻撃で潰すか投げる",
        "recipes": [],
        "startSec": 325,
        "scenes": [
          350,
          375
        ]
      },
      {
        "id": "mu_eN5pcZRbhQ8_arjun_09",
        "threats": [],
        "topic": "守り",
        "title": "パリィを使わないと削られる。パリィとインパクトで凌ぐ",
        "text": "全部の技で白ダメージが溜まっていくので、パリィをうまく使って攻めを凌ぐ（普段パリィを使わない人も、アルジュン戦では使わないと削られる）。パリィされるとアルジュン側も何も起きず、インパクトにも弱いので、困ったらインパクト。飛びも有効。触ったらどんどん攻める",
        "recipes": [],
        "startSec": 408,
        "scenes": [
          437,
          451
        ]
      }
    ]
  },
  {
    "opponent": "Arjun",
    "perspective": "ラシード",
    "summary": "とにかく岩に当たらないことが最重要（岩ゲー）。岩さえ事故らなければ、溜めワール・気流・ラッシュで立ち回れる。まだ数戦の段階のざっくりした対策（動画の冒頭より）",
    "threats": [],
    "youtubeId": "hIHNWH2sNlI",
    "sourceTitle": "アルジュン戦で意識したい2つのポイント",
    "publishedAt": "2026-10-17",
    "patchVersion": "Y4",
    "ownerLabel": "doskonnbu",
    "points": [
      {
        "id": "mu_hIHNWH2sNlI_arjun_01",
        "threats": [
          "岩（設置）"
        ],
        "topic": "守り",
        "title": "岩に当たらない。1発もらうとそのラウンドはほぼ負け",
        "text": "勝った試合は岩に当たっておらず、負けた試合は岩で事故っている。岩からのコンボを1発でももらうと、その後の展開も含めてほぼ無理ゲーになり、そのラウンドはほぼ負ける。弾の打ち方・飛び方を岩に合わせ、中途半端な距離なら岩の無い所まで下がって溜めワール。自分から岩に当たりにいくのはNG。岩さえ事故らなければ、白ゲージで削られても案外体力は持つ",
        "recipes": [],
        "startSec": 47,
        "scenes": [
          178,
          220,
          228,
          342,
          443
        ]
      },
      {
        "id": "mu_hIHNWH2sNlI_arjun_02",
        "threats": [
          "シューティングモード"
        ],
        "topic": "立ち回り",
        "title": "シューティングモードには溜めワール。気流が出たらめくり気味に飛ぶ",
        "text": "気流と溜めワールがよく機能する組み合わせ。アルジュンのシューティングモードに溜めワールが刺さりやすく、溜めワールが出せたらめくり気味に飛ぶのが熱い。アルジュンはめくりへの対空が弱い。ワールを打つには近すぎる距離では距離をとって耐え、離れたらワールで追い返す（最大溜めまでいければベスト）",
        "recipes": [],
        "startSec": 12,
        "scenes": [
          28,
          255,
          266,
          377
        ]
      },
      {
        "id": "mu_hIHNWH2sNlI_arjun_03",
        "threats": [],
        "topic": "攻め",
        "title": "岩が無い時のラッシュは止めづらい",
        "text": "岩が生えていない時のラッシュは超有効で、相手はかなり止めづらい。ラッシュを通して突っ込んで殴る。ラッシュが潰されるのは事故に近いので、あまり気にしない",
        "recipes": [],
        "startSec": 97,
        "scenes": [
          146,
          165
        ]
      },
      {
        "id": "mu_hIHNWH2sNlI_arjun_04",
        "threats": [
          "アーマー技"
        ],
        "topic": "立ち回り",
        "title": "イウサールはアルジュンのアーマーを貫ける",
        "text": "イウサールは案外アルジュンのアーマーを貫ける",
        "recipes": [],
        "startSec": 67,
        "scenes": [
          435
        ]
      },
      {
        "id": "mu_hIHNWH2sNlI_arjun_05",
        "threats": [
          "アーマー技"
        ],
        "topic": "攻め",
        "title": "アーマーを取られたら投げ",
        "text": "こちらの技をアーマーで取られたら、大抵は投げにいける",
        "recipes": [],
        "startSec": 391,
        "scenes": []
      }
    ]
  },
  {
    "opponent": "Yasmine",
    "perspective": "共通",
    "summary": "まずブーメラン（手裏剣）を好き勝手に投げさせない。突進やラッシュの後のヤスミン+1の場面は、後ろ下がりや4F暴れで凌ぐ。技がいつ終わるか分からず分からん殺しされがちなので、ガード後にボタンを押せる技を覚える",
    "threats": [
      {
        "name": "ブーメラン",
        "about": "上に飛んで戻ってくる手裏剣（ブーメラン）を投げる技。出ると画面の制圧力がすごい"
      },
      {
        "name": "突進技",
        "about": "中はガードで-3、強はガードさせてヤスミン+1、ODは-12"
      },
      {
        "name": "ラッシュ大P",
        "about": "発生9Fだがリーチがとても長く、止めにくい。ガードさせて+1（ジェイミーのラッシュ大Pに近い）"
      },
      {
        "name": "初段で止められる派生技",
        "about": "初段止めは-6。派生しても連続ガードで、ヤスミンが有利になることは無い"
      },
      {
        "name": "大K",
        "about": "長くて強い。ガードで-4"
      },
      {
        "name": "百鬼襲のような技",
        "about": "キャミィの技に近く、ガードした高さで有利不利が変わる"
      },
      {
        "name": "画面端のブーメランセットプレイ",
        "about": "画面端でブーメランを投げ終わった状態でヤスミン+2"
      },
      {
        "name": "SA2の専用技",
        "about": "SA2の間だけ増える、相手を貫く技。一部の状況ではめくりになる"
      }
    ],
    "youtubeId": "9KlWaIvVS-w",
    "sourceTitle": "ヤスミン対策",
    "publishedAt": "2026-08-06",
    "patchVersion": "Y4",
    "ownerLabel": "ACQUA",
    "points": [
      {
        "id": "mu_9KlWaIvVS-w_yasmine_01",
        "threats": [
          "初段で止められる派生技"
        ],
        "topic": "反撃",
        "title": "初段止めには6F以下の技で確定。派生してもヤスミンは有利にならない",
        "text": "初段で止めると-6なので、中攻撃などから入れ込んできたら6F以下の技で確定。派生してきた場合は連続ガードなので、ボタンを押しっぱなしで大丈夫。派生はストックが溜まっていると確定が無くなることもあるが、-1や-3などでヤスミンが有利になることは絶対に無い。ガードしたらボタンを押してよい",
        "recipes": [],
        "startSec": 1,
        "scenes": [
          14,
          54
        ]
      },
      {
        "id": "mu_9KlWaIvVS-w_yasmine_02",
        "threats": [
          "突進技"
        ],
        "topic": "反撃",
        "title": "中の突進の後は押してよく、強の後は押さない。OD突進は確定",
        "text": "中の突進は-3で確定は無い。強はヤスミン有利。見分けられるなら、中の後はボタンを押し、強の後は押さない。OD突進は-12なので確定が取れる",
        "recipes": [],
        "startSec": 67,
        "scenes": [
          81,
          93
        ]
      },
      {
        "id": "mu_9KlWaIvVS-w_yasmine_03",
        "threats": [
          "大K"
        ],
        "topic": "反撃",
        "title": "大Kは-4。めり込んだら4Fで確定",
        "text": "大Kは長くて強いが-4なので、4Fの技が届けば確定。長いぶん前に進むので意外とめり込むことがあり、めり込んだら4Fで確定を取る",
        "recipes": [],
        "startSec": 108,
        "scenes": [
          120
        ]
      },
      {
        "id": "mu_9KlWaIvVS-w_yasmine_04",
        "threats": [
          "百鬼襲のような技"
        ],
        "topic": "守り",
        "title": "腰より上でガードしたらヤスミン不利、低い位置ならヤスミン有利",
        "text": "有利不利が分かりにくい技だが、キャミィのイメージに近く、腰より上の高い位置でガードした場合はヤスミン不利なのでボタンを押してよい。低い位置ならヤスミン有利。最初はガード後にボタンを押してみて、どの高さならよいか覚える",
        "recipes": [],
        "startSec": 133,
        "scenes": [
          154
        ]
      },
      {
        "id": "mu_9KlWaIvVS-w_yasmine_05",
        "threats": [
          "ブーメラン"
        ],
        "topic": "守り",
        "title": "ブーメランはガードしない。戻ってくるところをバックジャンプでかわす",
        "text": "一番注意したい技。出てしまうと画面の制圧力がすごいので、とにかくガードしない（パリィも微妙）。上に飛んで戻ってくるところをバックジャンプでかわすのが安牌",
        "recipes": [],
        "startSec": 180,
        "scenes": [
          189,
          201
        ]
      },
      {
        "id": "mu_9KlWaIvVS-w_yasmine_06",
        "threats": [
          "ブーメラン"
        ],
        "topic": "反撃",
        "title": "投げた瞬間の隙に、ラッシュから長めの技で確定",
        "text": "ブーメランを投げた瞬間は結構隙があるので、ラッシュから発生が早く長めの技で簡単に確定が取れる。確定しなくても、戻ってくるブーメランは画面が押し出されて当たらないことが多い",
        "recipes": [],
        "startSec": 210,
        "scenes": [
          234
        ]
      },
      {
        "id": "mu_9KlWaIvVS-w_yasmine_07",
        "threats": [
          "ブーメラン"
        ],
        "topic": "反撃",
        "title": "投げや対空の後のブーメランには、その場受け身からラッシュ",
        "text": "中央で投げた後（前投げでも後ろ投げでも）や、昇龍拳で対空した後に何気なくブーメランを投げてくる人がいる。その場受け身からラッシュで確定（ラッシュがある程度速いキャラならだいたいいける。キャミィのスパイラルアローやブランカのローリングなど突進技でも取れる）。ヤスミン戦は後ろ受け身をせずに、その場受け身からブーメランに確定を取る意識が大事",
        "recipes": [],
        "startSec": 248,
        "scenes": [
          262,
          289,
          332,
          353
        ]
      },
      {
        "id": "mu_9KlWaIvVS-w_yasmine_08",
        "threats": [
          "突進技"
        ],
        "topic": "守り",
        "title": "強突進のガード後は、4F暴れかガードの逆2択。無敵技もあり",
        "text": "強の突進をガードするとヤスミン+1。そこから投げてくるなら4Fで暴れ、暴れを潰しに来そうならガードという逆2択になる（4Fにジャスパを合わせてくることもある）。ヤスミンが攻めたい場面なので無敵技も強い。突進にパリィやインパクトを押したいが、めくりが多くインパクトも確定しにくいので、突進で突っ込んでくる人にはボタンを押して止める方が簡単かもしれない",
        "recipes": [],
        "startSec": 363,
        "scenes": [
          384,
          412,
          428
        ]
      },
      {
        "id": "mu_9KlWaIvVS-w_yasmine_09",
        "threats": [
          "ラッシュ大P"
        ],
        "topic": "守り",
        "title": "ラッシュ大Pをガードしたら後ろ下がり。中足などには4F暴れ",
        "text": "ラッシュ大Pはリーチがとても長く止めにくく、食らうとフルコン。ガードさせて+1だが、その後の投げは後ろ歩きでスカせる（ジェイミーのラッシュ大Pと似た状況）。後ろ歩きしていればヤスミンの弱攻撃もガードになり、この距離からはコパンも届かない。後ろ下がりを読んで中足などをしてくるなら、フレームが緩いので4F暴れで勝てる",
        "recipes": [],
        "startSec": 457,
        "scenes": [
          475,
          496,
          527,
          556
        ]
      },
      {
        "id": "mu_9KlWaIvVS-w_yasmine_10",
        "threats": [
          "画面端のブーメランセットプレイ"
        ],
        "topic": "守り",
        "title": "画面端のブーメランセットプレイは、怖がらずにガードか無敵技",
        "text": "画面端でブーメランを投げ終わった状態でヤスミン+2で、投げも打撃もでき、読み負けてもブーメランが戻ってきて攻めが続く。ただし中段・下段の崩しや投げからのコンボがあるわけではなく、ガードしていれば投げしか食らわない。シンプルに無敵技も強い。ガードしているとドライブゲージは削られる",
        "recipes": [],
        "startSec": 573,
        "scenes": [
          604,
          622,
          643
        ]
      },
      {
        "id": "mu_9KlWaIvVS-w_yasmine_11",
        "threats": [
          "SA2の専用技"
        ],
        "topic": "守り",
        "title": "SA2の専用技はめくりになることがある。パリィで受ける",
        "text": "SA2の間だけ使える相手を貫く技は、普通に使うと正面からの攻撃だが、画面端の前投げの後や昇龍拳で追撃した後などはめくりになり、知らないと分からん殺しされる。表裏が関係ないパリィをしておけば一旦大丈夫（速いので見てから押すのは難しい）。インパクトでも勝てるが一点読みになる",
        "recipes": [],
        "startSec": 662,
        "scenes": [
          686,
          703,
          722
        ]
      }
    ]
  }
];

// 対応表で変換できなかった語、または〆技・始動技・位置を推定できなかったもの
export const ARCHIVER_UNRESOLVED: ArchiverUnresolved[] = [
  {
    "id": "ax_eXUug9kjcVQ_08",
    "kind": "combo",
    "title": "コンボ20選 #8",
    "recipeJa": "始動技>キャンセルラッシュ2大P>大P>弱スパイク>SA3",
    "unresolvedTerms": [],
    "enderUnknown": false,
    "starterUnknown": true,
    "positionUnknown": false
  },
  {
    "id": "ax_eXUug9kjcVQ_10",
    "kind": "combo",
    "title": "コンボ20選 #10",
    "recipeJa": "始動技>中P>中サイクロン>弱P>キャンセルラッシュ立弱P>立中K>中大TC>微溜めワール>前中P>中ミキサー>SA1",
    "unresolvedTerms": [],
    "enderUnknown": false,
    "starterUnknown": true,
    "positionUnknown": false
  },
  {
    "id": "ax_eXUug9kjcVQ_13",
    "kind": "combo",
    "title": "コンボ20選 #13",
    "recipeJa": "垂直J8大K>大K>J前中P>大スカイハイ>J2大P",
    "unresolvedTerms": [],
    "enderUnknown": true,
    "starterUnknown": false,
    "positionUnknown": false
  },
  {
    "id": "ax_eXUug9kjcVQ_15",
    "kind": "combo",
    "title": "コンボ20選 #15",
    "recipeJa": "J大K>立中K>いつもの",
    "unresolvedTerms": [],
    "enderUnknown": true,
    "starterUnknown": false,
    "positionUnknown": false
  },
  {
    "id": "ax_kDldjC2G2QE_04",
    "kind": "combo",
    "title": "イウサールコンボ8選 #4",
    "recipeJa": "前ステ>溜めODワール>立中K>大スパイク>フリップ>J中K",
    "unresolvedTerms": [],
    "enderUnknown": true,
    "starterUnknown": false,
    "positionUnknown": false
  },
  {
    "id": "ax_kDldjC2G2QE_07",
    "kind": "combo",
    "title": "イウサールコンボ8選 #7",
    "recipeJa": "前飛び>大スカイハイ>J2大P>中段",
    "unresolvedTerms": [],
    "enderUnknown": true,
    "starterUnknown": false,
    "positionUnknown": false
  },
  {
    "id": "ax_-p3ajb0VlQY_09",
    "kind": "combo",
    "title": "実用コンボ18選 #9",
    "recipeJa": "始動技>中Pか大P>キャンセルラッシュ2大P>大P>中スパイク",
    "unresolvedTerms": [],
    "enderUnknown": false,
    "starterUnknown": true,
    "positionUnknown": false
  }
];
