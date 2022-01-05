; Student Name: Ryan Farruggia
; Course: CSC 35
; Semester: Spring 2021
; Instructor: Professor Ghansah
; Lab Date and Time: March 18, 2021
; Lab Section #10
; Lab #6 - Direct Addressing, Input/Output, Intro to Procedures

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
	inputX BYTE "Input X = ", 0
	inputY BYTE "Input Y = ", 0
	outputW BYTE "Output W = ", 0
	CalcW BYTE "Calculating W...", 0
	newline BYTE 0dh, 0ah, 0
	sum DWORD ?
	Loc1 DWORD ?
	Loc2 DWORD ?
	Loc3 DWORD ?
.code
Main proc
	mov edx, OFFSET inputX	; Display "Input X = "
	call WriteString
	call GetInput			; call GetInput procedure
	mov X, esi				; parameter input pass for X
	mov edx, OFFSET inputY	; Display "Input Y = "
	call WriteString
	call GetInput			; call GetInput procedure
	mov Y, esi				; parameter input pass for Y
	mov esi, X				; parameter input pass for X
	mov edi, Y				; parameter input pass for Y
	call CalculateW			; Calculate the value of W
	call DisplayW			; parameter output pass for W

invoke exitprocess,0		; EXIT TO Operating System
Main endp

DisplayW proc
	mov edx, OFFSET CalcW	; Display "Calculating W..."
	call WriteString
	mov edx, OFFSET newline
	call WriteString
	mov edx, OFFSET outputW	; Display "Output W = "
	call WriteString
	mov edx, eax			; Display the value of W (8)
	call WriteChar
	mov edx, OFFSET newline
	call WriteString
	ret
DisplayW endp

GetInput proc
	mov esi, 0				; initialize X value
	mov ecx, 4				; set loop count in ecx
	l1:						; establish loop 1 for X
		mov eax, 10			; eax = 10
		mul esi				; eax = eax * X
		mov	esi, eax		; X = X * 10
		call ReadChar		; read keyboard ASCII input
		call WriteChar		; write keyboard ASCII input
		sub al, 30h			; convert al to decimal
		movzx ebx, al		; move 8-bit unsigned integer to ebx
		add esi, ebx		; add ebx to X
		loop l1				; loop until ecx decrements to 0
	mov edx, OFFSET newline	; make a new line after inputX is finished
	call WriteString
	ret
GetInput endp

CalculateW proc
	mov eax, 160			; eax = 160
	mul edi 				; eax = eax * Y
	mov ebx, eax			; ebx = eax
	mov eax, 2				; edx = 2 ; Y * 160 stored in ebx
	mul esi   				; ax = edx * eax
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
	mov edi, 3000			; Y = 3000
	sub edi, 1				; Y = Y - 1
	mov edx, 0				; edx = 0
	mov eax, Loc3			; eax = Loc3
	mov ebx, 16				; ebx = 16
	div ebx					; eax = eax/ebx ; edx = remainder
	mov sum, eax			; sum = eax
	add eax, edi			; sum = sum + Y
	mov sum, eax			; sum = eax
	mov eax, edi			; eax = Y
	mov ebx, 4				; ebx = 4
	mov edx, 0				; edx = 0
	div ebx					; eax = eax/ebx
	add sum, eax			; sum = sum + eax
	mov eax, edi			; eax = Y
	mov ebx, 200			; ebx = 200
	mov edx, 0				; edx = 0
	div ebx					; eax = eax/ebx
	add sum, eax			; sum = sum + eax
	mov edx, 0				; edx = 0
	mov eax, sum			; eax = sum
	mov ebx, 7				; ebx = 7
	mov edx, 0				; edx = 0
	div ebx					; eax = eax/ebx
	mov eax, edx			; W = edx (5)
	add eax, 3				; W = W + 3
	add eax, 30h			; Convert 8 to ASCII
	ret
CalculateW endp

end main