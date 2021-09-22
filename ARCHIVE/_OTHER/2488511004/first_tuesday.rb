require 'chronic'
class FirstTuesday
  def monthly_reminder
    "Don't forget first tuesday is coming up again on #{date}, if you would like to talk add your name to the list: http://bit.ly/I4ILCg"
  end
  
  def date
    Chronic.parse("Tuesday of first week of #{next_month}").to_date
  end
  
  def next_month
    Date::MONTHNAMES[Date.today.next_month.month]
  end
end

p FirstTuesday.new.monthly_reminder