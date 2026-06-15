from selenium import webdriver
from selenium.webdriver.common.by import By
import time

FILE_PATH = r"file:///C:/Users/Kai/Desktop/SCHOOL/project-main/Final%20Project/Login.html"

driver = webdriver.Chrome()
driver.maximize_window()
driver.get(FILE_PATH)

driver.find_element(By.ID, "email").send_keys("student@stamford.edu")
driver.find_element(By.ID, "password").send_keys("123456")
driver.find_element(By.ID, "loginBtn").click()

time.sleep(2)

try:
    driver.find_element(By.CSS_SELECTOR, "#loginPopup .btn.btn-primary").click()
except:
    pass

driver.find_element(By.PARTIAL_LINK_TEXT, "Supplies").click()

time.sleep(1)

driver.find_element(
    By.CSS_SELECTOR,
    '[data-add-item="Web Development 1 Textbook"]'
).click()

cart_count = driver.find_element(By.ID, "cartCount")

assert cart_count.text == "1"

checkout = driver.find_element(By.ID, "checkoutBtn")

assert checkout.is_enabled()

checkout.click()

alert = driver.switch_to.alert

assert "Order request submitted" in alert.text

time.sleep(5)
alert.accept()

print("AT007 PASS")
time.sleep(5)
driver.quit()