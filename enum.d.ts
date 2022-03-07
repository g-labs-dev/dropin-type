export type PUSH_TARGET =
  | "ALL"
  | "MARKETING_AGREE"
  | "MARKETING_REJECT"
  | "TESTER"
  | "RESERVATION";

export type PointHistoryType =
  | "reservation-use" // 예약 사용
  | "reservation-save" // 예약 적립
  | "review" // 리뷰
  | "photo-review" // 사진리뷰
  | "first-photo-review" // 첫 사진리뷰
  | "reserve-again-week" // 1주일 내 재예약
  | "suggestion" // 건의
  | "reservation-cancel" // 예약취소;
  | "etc";

export type PopupType =
  | "Marketing" // 마팅 동의 받ㅣ
  | "FirstPhotoReview" // 첫번째 포토리뷰 작성 완료
  | "FirstReservation" // 첫번째 이용 완료
  | "EndReservation"; // 이용 종료 후 리뷰 요청

export type ReviewReportType =
  | "irrelevant-photo" // 장소와 관련없는 사진
  | "irrelevant-content" // 장소/장소의 이용과 관련없는 내용
  | "advertising-content" // 광고 및 홍보성
  | "leakage-privacy" // 개인정보 유출 위험
  | "photo-license" // 이미지 도용, 저작권 침해
  | "inappropriate-content" // 욕설, 음란 등 부적절한 내용
  | "etc"; // 기타 (직접입력)
