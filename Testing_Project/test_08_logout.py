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

driver.find_element(By.ID, "hamburgerMenu").click()

time.sleep(1)

driver.find_element(By.LINK_TEXT, "Sign Out").click()

assert "login" in driver.current_url.lower()

print("AT008 PASS")
time.sleep(5)
driver.quit()