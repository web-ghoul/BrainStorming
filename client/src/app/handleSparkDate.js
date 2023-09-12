import moment from "moment";

export const handleSparkDate = (spark_date) => {
  const year = new Date(spark_date).toLocaleDateString().split("/")[2];
  const month = new Date(spark_date).toLocaleDateString().split("/")[0];
  const day = new Date(spark_date).toLocaleDateString().split("/")[1];
  const hour = new Date(spark_date).toLocaleTimeString().split(":")[0];
  const minute = new Date(spark_date).toLocaleTimeString().split(":")[1];
  const second = new Date(spark_date).toLocaleTimeString().split(":")[2];
  const curDay = new Date().toLocaleDateString().split("/")[1];
  const curMonth = new Date().toLocaleDateString().split("/")[0];
  const curYear = new Date().toLocaleDateString().split("/")[2];
  const curHour = new Date().toLocaleTimeString().split(":")[0];
  const curMinute = new Date().toLocaleTimeString().split(":")[1];
  const curSecond = new Date().toLocaleTimeString().split(":")[2];
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
