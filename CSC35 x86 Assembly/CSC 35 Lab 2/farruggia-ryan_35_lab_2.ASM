;THIS PROGRAM Lab2 Hello_Neg It is 32bit for MASM on MSVC++
; FILL IN THE FOLLOWING WITH APPROPRIATE INFORMATION
;Ryan Farruggia
;CSC 35
;Spring 2021
;Instructor: Dr.Ghansah
;February 18, 2021
;LAB SECTION # 10
;Lab 2 - Hello, Negative Numbers
COMMENT &
Objectives: Students will learn to output to screen using Libraries and Deal with Negative Numbers

&
;
.386
.model flat, stdcall
.stack 4096
ExitProcess PROTO ,dwExitCode:DWORD
INCLUDE Irvine32.inc
;This is a comment
;The following is group comment delimited with &
COMMENT &
INCLUDE c:\irvine\Irvine32.inc
include c:\irvine\macros.inca
includelib c:\irvine\irvine32.lib
includelib c:\irvine\kernel32.lib
includelib c:\irvine\user32.lib
&

.data
msg1 BYTE "Hello CSC35! Class, Spring 2021", 0dh, 0ah, 0
msg2 BYTE "My Name is Ryan Farruggia", 0dh, 0ah, 0

.code
 
main proc
;
;output the Hello Message on the Screen
;
  mov edx, OFFSET msg1
  call writestring
  mov edx, OFFSET msg2
  call writestring
;
;*******************************
; Negative and Positive numbers in Binary
;
  mov eax, 0fffffffh		;eax = 0FFFFFFF				Assigns the eax register the value of 0FFFFFFF
  add eax, 1				;eax = eax + 1				Adds 1 to the eax register which results in 10000000
  neg eax					;eax = eax * -1				Negate the eax register by multiplying it by -1 which results in F0000000
  add eax,20000001h			;eax = eax + 20000001h		Add 20000001h to the eax register which results in 10000001
  mov bx, -1				;bx = -1					Assigns the bx register the value of -1 which results in 65535
  add ax, bx				;ax = ax + bx				Adds the bx register to the ax register
  
  invoke exitprocess,0	;EXIT TO OS
main endp

end main
