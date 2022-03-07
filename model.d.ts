import E from "./enum";

export type Banks = {
  code: string;
  name: string;
  order: string;
  hideFlag: boolean;
};

export type Banners = {
  bannerId: number;
  imageId: number;
  uri: string;
  value: number;
  authFlag: boolean;
  activeFlag: boolean;
  expiredDate: string;

  // image?: Images;
};
export type Codes = {
  code: string;
  name: string;
  subGroupCode: string;
  subGroupName: string;
  groupCode: string;
  groupName: string;
};

export type Contacts = {
  contactId: number;
  userId: string;
  type: string;
  title: string;
  content: string;
  answerTitle: string;
  answerContent: string;
  answerFlag: boolean;
  contactDate: string;
  answerDate: string;

  user?: Users;
};

export type CouponIssueHistories = {
  couponIssueHistoryId: number;
  couponId: number;
  userId: string;
  deviceId: string;
};

export type Coupons = {
  couponId: number;
  placeId: number;
  sectorId: number;
  name: string;
  price: number;
  placePrice: number;
  dropinPrice: number;
  json: any;
  overlapFlag: boolean;
  code: string;
  amount: number;
  expirationValue: string;
  expirationType: string;
  expirationUnit: string;

  userHasCoupons?: UserHasCoupons[];
  place?: Places;
  sector?: Sectors;
};

export type Dates = {
  date: string;
  month: string;

  reservations?: Reservations[];
  holidays?: PlaceHolidays[];
};

export type HostConfigs = {
  hostId: string;
  reservationNotiFlag: boolean;
  marketingNotiFlag: boolean;
};

export type Hosts = {
  hostId: string;
  code: string;
  phone: string;
  name: string;
  pushToken: string;
  type: "KAKAO | APPLE";

  places?: Places[];
  config?: HostConfigs;
};

export type HostsHavePlaces = {
  hostId: string;
  placeId: number;
  role: string;
};

export type Images = {
  imageId: number;
  name: string;
  type: string;
  size: number;
  category: string;
  path: string;
  uri: string;

  places?: Places[];
  reviews?: Reviews[];
  seatGroups?: SeatGroups[];
};

export type Months = {
  month: string;
  start: string;
  end: string;

  dates?: Dates[];
};

export type Notices = {
  noticeId: number;
  title: string;
  content: string;
  writeDate: string;
  target: "ALL | USER | HOST";
  hideFlag: boolean;
};

export type Payments = {
  paymentId: number;
  placeId: number;
  userId: string;
  price: number;
  originPrice: number;
  discountPrice: number;
  dropinCouponPrice: number;
  placeCouponPrice: number;
  settlementPrice: number;
  commissionPrice: number;
  usePoint: number;
  savePoint: number;
  status: string;
  sid: string;
  tid: string;
  type: string;
  orderKey: string;
  readyDate: string;
  readyJSON: any;
  approveDate: string;
  approveJSON: any;
  cancelDate: string;
  cancelJSON: any;
  reservationId: number;

  place?: Places;
  user?: Users;
  reservation?: Reservations;
};

export type PlaceBusinesses = {
  placeId: number;
  registrationNumber: string;
  name: string;
  representationName: string;
  address: string;
  category: string;
  item: string;
  managerName: string;
  managerContact: string;
  managerEmail: string;
  bankName: string;
  bankCode: string;
  accountholder: string;
  account: string;
};

export type PlaceCommissionSchedules = {
  placeCommissionScheduleId: number;
  placeId: number;
  from: string;
  to: string;
  changeDate: string;
  applyFlag: boolean;
  appliedBy: "ADMIN" | "SCHEDULER";
  appliedDate: string;

  place?: Places;
};

export type PlaceHolidays = {
  placeHolidayId: number;
  placeId: number;
  date: string;
  alldayFlag: boolean;
  startTime: string;
  endTime: string;
};

export type PlaceOptions = {
  placeOptionId: number;
  placeId: number;
  wifiFlag: boolean;
  outletFlag: boolean;
  parkingFlag: boolean;
  beverageFlag: boolean;
  foodFlag: boolean;
  alcoholFlag: boolean;
  parking: string;
};

export type Places = {
  placeId: number;
  name: string;
  address: string;
  addressDetail: string;
  contact: string;
  benefit: string;
  longitude: string;
  latitude: string;
  activeFlag: boolean;
  ratingAverage: string;
  ratingCount: number;
  favoriteCount: number;
  operationHour: [string, string, boolean][];
  description: string;
  guide: string;
  guide2: string;
  tags: string;
  query: string;
  code: string;
  commission: string;
  sectorId: number;
  kakaoPlaceId: string;

  business?: PlaceBusinesses;
  options?: PlaceOptions;
  seats?: Seats[];
  seatGroups?: SeatGroups[];
  reservations?: Reservations[];
  reviews?: Reviews[];
  holidays?: PlaceHolidays[];
  payments?: Payments[];
  commissionSchedules?: PlaceCommissionSchedules[];
  sector?: Sectors;
  images?: Images[];
  favoriteUsers?: Users[];
  hosts?: Hosts[];
  zones?: Zones[];
};

export type PlacesHaveImages = {
  placeId: number;
  imageId: number;
  value: number;
};

export type PlacesHaveZones = {
  placeId: number;
  zoneId: number;
};

export type PushNotifications = {
  pushNotificationId: number;
  target: E.PUSH_TARGET;
  title: string;
  content: string;
  actionType: string;
  actionValue: string;
  sendDatetime: string;
  scheduleFlag: boolean;
  sendFlag: boolean;
  successCount: number;
  failCount: number;
};

export type RecommendPlaces = {
  recommendPlaceId: number;
  placeId: number;
  imageId: number;
  postId: string;
  title: string;
  subTitle: string;
  description: string;
  summary: string;
  footer: string;
  overlayColor: string;
  value: number;
  expirationDate: string;

  place?: Places;
  image?: Images;
};

export type Reservations = {
  reservationId: number;
  placeId: number;
  userId: string;
  seatId: number;
  date: string;
  userHasCouponId: number;
  payFlag: boolean;
  subscriberFlag: boolean;
  cancelFlag: boolean;
  endFlag: boolean;
  startTime: string;
  endTime: string;
  yyyymm: string;
  usePoint: number;
  canceledUserId: string;
  canceledAt: string;
  canceledReason: string;

  place?: Places;
  user?: Users;
  seat?: Seats;
  userHasCoupon?: UserHasCoupons;
  review?: Reviews;
  payment?: Payments;
};

export type ReviewComments = {
  reviewCommentId: number;
  reviewId: number;
  userId: string;
  content: string;
};

export type ReviewReports = {
  reviewReportId: number;
  reviewId: number;
  userId: string;
  type: string;
  message: string;
};

export type Reviews = {
  reviewId: number;
  userId: string;
  placeId: number;
  reservationId: number;
  userName: string;
  rating: number;
  content: string;
  revisitFlag: boolean;
  recommendValue: number;
  inactiveFlag: boolean;

  user?: Users;
  place?: Places;
  reservation?: Reservations;
  images?: Images[];
  comment?: ReviewComments;
};

export type ReviewsHaveImages = {
  reviewId: number;
  imageId: number;
};

export type SeatGroups = {
  seatGroupId: number;
  placeId: number;
  name: string;
  price: number;
  description: string;
  discountTable: {
    hour: number;
    discount: number;
    price: number;
    visibleFlag: boolean;
    moreFlag: boolean;
  }[];
  discountDescription: string;
  discountFlag: boolean;
  outletFlag: boolean;
  activeFlag: boolean;

  images?: Images[];
  seats?: Seats[];
  place?: Places;
};

export type SeatGroupsHavelmages = {
  seatGroupId: number;
  imageId: number;
  value: number;
};

export type Seats = {
  seatId: number;
  placeId: number;
  seatGroupId: number;
  name: string;
  activeFlag: boolean;

  seatGroup?: SeatGroups;
  reservations?: Reservations;
};

export type Sectors = {
  sectorId: number;
  name: string;
  useFlag: boolean;
};

export type SettlementHistories = {
  settlementHistoryId: number;
  placeId: number;
  price: string;
  bankCode: string;
  bankName: string;
  accountholder: string;
  account: string;
  successFlag: boolean;
  data: any;
};

export type Suggestions = {
  suggestionId: number;
  userId: string;
  content: string;
  memo: string;
};

export type UserActivities = {
  userActivityId: number;
  userId: string;
  popup: E.PopupType;
  reviewCount: number;
  lastPhotoReviewDate: string;
  reservationCount: number;
  lastReservationDate: string;
  savePoint: number;
  usePoint: number;
};

export type UserCards = {
  userCardId: number;
  userId: string;
  sid: string;
  type: string;
  corp: string;
  corpCode: string;
  bin: string;
  json: any;
};

export type UserConfigs = {
  userId: string;
  startNotiFlag: boolean;
  endNotiFlag: boolean;
  marketingNotiFlag: boolean;
  marketingNotiDatetime: string;
};

export type UserFavoritePlaces = {
  userId: string;
  placeId: number;
};

export type UserHasCoupons = {
  userHasCouponId: number;
  userId: string;
  couponId: number;
  expirationDate: string;
  useFlag: boolean;

  user?: Users;
  coupon?: Coupons;
  reservation?: Reservations;
};

export type UserPointHistories = {
  userPointHistoryId: number;
  userId: string;
  datetime: string;
  point: number;
  type: E.PointHistoryType;
};

export type Users = {
  userId: string;
  code: string;
  phone: string;
  name: string;
  pushToken: string;
  type: string;
  point: number;
  imageId: number | null;

  reviews?: Reviews[];
  image?: Images;
  favorites?: Places[];
  card?: UserCards;
  config?: UserConfigs;
  activity?: UserActivities;
  reservations?: Reservations[];
  coupons?: UserHasCoupons[];
};

export type Zones = {
  zoneId: number;
  name: string;
  value: number;
  recommandFlag: boolean;
  useFlag: boolean;

  places?: Places[];
};
