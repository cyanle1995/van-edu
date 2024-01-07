export const USER_LIST = "/";
export const PERSON_IN_CHARGE = "/pic";
export const GROUP_SETTING = "/group";
export const MASTER_SETTING = "/master-setting";
export const FACILITY_INFORMATION_SETTING = "/facility";
export const DIAPER_TYPE_SETTING = "/diaper-type";
export const DEVICE_SETTING = "/device";
export const USER_SETTING = "/user";
export const PASSWORD_SETTING = "/password";
export const LOGOUT = "/logout";

export const menuList = [
  {
    key: "USER_LIST",
    title: "利用者一覧",
    url: USER_LIST,
    childs: [],
  },
  {
    key: "PERSON_IN_CHARGE",
    title: "担当者設定",
    url: PERSON_IN_CHARGE,
    childs: [],
  },
  {
    key: "GROUP_SETTING",
    title: "グループ設定",
    url: GROUP_SETTING,
    childs: [],
  },
  {
    key: "MASTER_SETTING",
    title: "マスタ設定",
    url: MASTER_SETTING,
    childs: [
      {
        key: "FACILITY_INFORMATION_SETTING",
        title: "施設情報設定",
        url: FACILITY_INFORMATION_SETTING,
        childs: [],
      },
      {
        key: "USER_SETTING",
        title: "利用者設定",
        url: USER_SETTING,
        childs: [],
      },
    ],
  },
  {
    key: "PASSWORD_SETTING",
    title: "パスワード設定",
    url: PASSWORD_SETTING,
    childs: [],
  },
  {
    key: "LOGOUT",
    title: "ログアウト",
    url: LOGOUT,
    childs: [],
  },
];
export const menuListAdmin = [
  {
    key: "USER_LIST",
    title: "利用者一覧",
    url: USER_LIST,
    childs: [],
  },
  {
    key: "PERSON_IN_CHARGE",
    title: "担当者設定",
    url: PERSON_IN_CHARGE,
    childs: [],
  },
  {
    key: "GROUP_SETTING",
    title: "グループ設定",
    url: GROUP_SETTING,
    childs: [],
  },
  {
    key: "MASTER_SETTING",
    title: "マスタ設定",
    url: MASTER_SETTING,
    childs: [
      {
        key: "FACILITY_INFORMATION_SETTING",
        title: "施設情報設定",
        url: FACILITY_INFORMATION_SETTING,
        childs: [],
      },
      {
        key: "DIAPER_TYPE_SETTING",
        title: "おむつ種類設定",
        url: DIAPER_TYPE_SETTING,
        childs: [],
      },
      {
        key: "DEVICE_SETTING",
        title: "発信機設定",
        url: DEVICE_SETTING,
        childs: [],
      },
      {
        key: "USER_SETTING",
        title: "利用者設定",
        url: USER_SETTING,
        childs: [],
      },
    ],
  },
  {
    key: "PASSWORD_SETTING",
    title: "パスワード設定",
    url: PASSWORD_SETTING,
    childs: [],
  },
  {
    key: "LOGOUT",
    title: "ログアウト",
    url: LOGOUT,
    childs: [],
  },
];
