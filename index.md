## Принтеры

Очистка очереди печати
```
net stop spooler
del %systemroot%\system32\spool\printers\*.shd /F /S /Q
del %systemroot%\system32\spool\printers\*.spl /F /S /Q
net start spooler
```


## AD

Восстановление доверительных отношений в домене

```
powershell -command "Test-ComputerSecureChannel -Repair -Credential $(Get-Credeitoals)
```

## Проверка-восстановление целостности образа Windows

```
Repair-WindowsImage -Online -ScanHealth
Repair-WindowsImage -OnLine -CheckHealth
Repair-WindowsImage -Online -RestoreHealth
```

### Открыть разное из командной строки
сетевые адаптеры - `ncpa.cpl`  
принтеры - Win10 и ранее `control printers`  
управление компьютером `compmgmt.msc`  

_если в окне "выполнить" вместо Enter нажать "CTRL+SHIFT+ENTER", программа запустится от имени администратора_
_то же самое с меню Win+X (или правой кнопкой по "пуску") - удерживать CTRL+SHIFT при клике запускает от имени администратора (только в Win10, не работает в Win11)_












