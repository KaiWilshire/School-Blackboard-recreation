from selenium import webdriver
from selenium.webdriver.common.by import By
import time

FILE_PATH = r"file:///C:/Users/Kai/Desktop/SCHOOL/project-main/Final%20Project/Login.html"

driver = webdriver.Chrome()
driver.get(FILE_PATH)

driver.find_element(By.ID, "email").send_keys("student@stamford.edu")
driver.find_element(By.ID, "password").send_keys("123456")

login_btn = driver.find_element(By.ID, "loginBtn")

assert login_btn.is_enabled()

print("PASS: Login button enabled")

time.sleep(5)
driver.quit()