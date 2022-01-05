# Setup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
PATH = "C:/Program Files (x86)/chromedriver.exe"
driver = webdriver.Chrome(PATH)

# Begin
driver.get("https://ryan-farruggia.github.io/")
print(driver.title)
driver.quit()