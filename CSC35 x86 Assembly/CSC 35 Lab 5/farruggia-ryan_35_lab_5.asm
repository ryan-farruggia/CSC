; Student Name: Ryan Farruggia
; Course: CSC 35
; Semester: Spring 2021
; Instructor: Professor Ghansah
; Lab Date and Time: March 11, 2021
; Lab Section #10
; Lab #5 - Division, Direct Console Output, and ASCII code

INCLUDE c:\irvine\Irvine32.inc
include c:\irvine\macros.inc
includelib c:\irvine\irvine32.lib
includelib c:\irvine\kernel32.lib
includelib c:\irvine\user32.lib

; This program takes multiple digit inputs and produces single digit outputs
.386
.model flat, stdcall
.stack 4096
ExitProcess PROTO ,dwExitCode:DWORD
.data
	A DWORD 90
	X DWORD ?
	Y DWORD ?
	W DWORD ?
	inputX BYTE "Input X=", 0
	inputY BYTE "Input Y=", 0
	outputW BYTE "Output W=", 0
	newline BYTE 0dh, 0ah, 0
	sum DWORD ?
	Loc1 DWORD ?
	Loc2 DWORD ?
	Loc3 DWORD ?
.code
Main proc
	mov X, 0				; initialize X value
	mov ecx, 4				; set loop count in ecx
	mov edx, OFFSET inputX	; display Input X=?
	call WriteString		
	l1:						; establish loop 1 for X
		mov eax, 10			; eax = 10
		mul X				; eax = eax * X
		mov	X, eax			; X = X * 10
		call ReadChar		; read keyboard ASCII input
		call WriteChar		; write keyboard ASCII input
		sub al, 30h			; convert al to decimal
		movzx ebx, al		; move 8-bit unsigned integer to ebx
		add X, ebx			; add ebx to X
		loop l1				; loop until ecx decrements to 0
	mov edx, OFFSET newline	; make a new line after inputX is finished
	call WriteString		
	mov Y, 0				; clear X value
	mov ecx, 4				; reset loop count in ecx to 4
	mov edx, OFFSET inputY	; display Input Y=?
	call WriteString
	l2:						; establish loop 2 for Y
		mov eax, 10			; eax = 10
		mul Y				; eax = eax * Y
		mov	Y, eax			; Y = Y * 10
		call ReadChar		; read keyboard ASCII input
		call WriteChar		; write keyboard ASCII input
		sub al, 30h			; convert al to decimal
		movzx ebx, al       ; move 8-bit unsigned integer to ebx
		add Y, ebx			; add ebx to Y
		loop l2				; loop until ecx decrements to 0
	mov edx, OFFSET newline	; make a new line after inputY is finished
	call WriteString
	mov eax, 160			; eax = 160
	mul Y 					; eax = eax * Y
	mov ebx, eax			; ebx = eax
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
	add W, 30h				; Convert 8 to ASCII
	; print result W
	mov edx, OFFSET outputW
	call WriteString
	mov eax, W
	call WriteChar

invoke exitprocess,0		; EXIT TO Operating System
Main endp
end main