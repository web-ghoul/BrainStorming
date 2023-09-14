import moment from "moment";

export const handleSparkDate = (spark_date) => {
  const year = new Date(spark_date).toLocaleDateString().split("/")[2];
  const month = new Date(spark_date).toLocaleDateString().split("/")[0];
  const day = new Date(spark_date).toLocaleDateString().split("/")[1];
  const hour = new Date(spark_date).getHours();
  const minute = new Date(spark_date).getMinutes();
  const second = new Date(spark_date).getSeconds();
  const curDay = new Date().toLocaleDateString().split("/")[1];
  const curMonth = new Date().toLocaleDateString().split("/")[0];
  const curYear = new Date().toLocaleDateString().split("/")[2];
  const curHour = new Date().getHours();
  const curMinute = new Date().getMinutes();
  const curSecond = new Date().getSeconds();
  return year === curYear && month === curMonth
    ? curDay === day
      ? curHour === hour
        ? curMinute === minute
          ? curSecond + 30 >= second
            ? "now"
            : `few seconds ago`
          : `${curMinute - minute} minute ago`
        : `${curHour - hour} hour ago`
      : `${curDay - day} day ago`
    : moment(
        year.toString() +
          month.toString().padStart(2, "0") +
          day.toString().padStart(2, "0"),
        "YYYYMMDD"
      ).fromNow();
};
