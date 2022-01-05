; Student Name: Ryan Farruggia
; Course: CSC 35
; Semester: Spring 2021
; Instructor: Professor Ghansah
; Lab Date and Time: March 3, 2021
; Lab Section #10
; Lab #4 - Division, Direct Console Output, and ASCII code

INCLUDE c:\irvine\Irvine32.inc
include c:\irvine\macros.inc
includelib c:\irvine\irvine32.lib
includelib c:\irvine\kernel32.lib
includelib c:\irvine\user32.lib

; This program does arithmetic in assembly given specific instructions
.386
.model flat, stdcall
.stack 4096
ExitProcess PROTO ,dwExitCode:DWORD
.data
	A DWORD 90
	X DWORD 40
	Y DWORD 24
	W DWORD ?
	outw BYTE "w=", 0
	sum DWORD ?
	Loc1 DWORD ?
	Loc2 DWORD ?
	Loc3 DWORD ?
.code
Main proc
	mov eax, 160			; eax = 160
	mul Y 					; eax = ecx * eax
	mov ebx, eax			; Loc1 = eax
	mov eax, 2				; edx = 2 ; Y * 160 stored in ebx
	mul X   				; ax = edx * eax
	mov ecx, eax			; eax = ecx ; X * 2 stored in ecx
	add ecx, ebx			; ecx = eax + ecx ; Loc1 stored in ecx
	mov Loc1, ecx			; Loc1 = ecx ; Loc1 = (Y * 160) + (X * 2)
	mov eax, 950			; eax = 950
	mul A					; eax = A * eax
	mov edx, eax			; edx = eax
	mov Loc2, edx			; Loc2 = edx
	mov eax, Loc1			; eax = Loc1
	mov ebx, Loc2			; ebx = Loc2
	sub ebx, eax			; Loc2 - Loc1
	mov Loc3, ebx			; Loc3 = ebx
	mov Y, 3000				; Y = 3000
	sub Y, 1				; Y = Y - 1
	mov edx, 0				; edx = 0
	mov eax, Loc3			; eax = Loc3
	mov ebx, 16				; ebx = 16
	div ebx					; eax = eax/ebx ; edx = remainder
	mov sum, eax			; sum = eax
	add eax, Y				; sum = sum + Y
	mov sum, eax			; sum = eax
	mov eax, Y				; eax = Y
	mov ebx, 4				; ebx = 4
	mov edx, 0				; edx = 0
	div ebx					; eax = eax/ebx
	add sum, eax			; sum = sum + eax
	mov eax, Y				; eax = Y
	mov ebx, 200			; ebx = 200
	mov edx, 0				; edx = 0
	div ebx					; eax = eax/ebx
	add sum, eax			; sum = sum + eax
	mov edx, 0				; edx = 0
	mov eax, sum			; eax = sum
	mov ebx, 7				; ebx = 7
	mov edx, 0				; edx = 0
	div ebx					; eax = eax/ebx
	mov W, edx				; W = edx (5)
	add W, 3				; W = W + 3
	add W, 30h				; Convert '8' to ASCII

	mov edx, OFFSET outw
	call WriteString
	mov eax, W
	call WriteChar

	;mov ebx, OFFSET WMsg
	;call WriteString
	;mov eax, W
	;call WriteChar


	; done ; Y = 3000
	; done ; Y = Y - 1
	; done ; sum = loc3/16 + Y + Y/4 + Y/200
	; done ; W = sum % 7 + 3
	; writeNum(W)




invoke exitprocess,0		; EXIT TO Operating System
Main endp
end main