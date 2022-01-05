; Student Name: Ryan Farruggia
; Course: CSC 35
; Semester: Spring 2021
; Instructor: Professor Ghansah
; Lab Date and Time: April 9, 2021
; Lab Section #10
; Lab #7 - Multi-Digit Input/Output, Procedures, Control Structures

INCLUDE c:\irvine\Irvine32.inc
include c:\irvine\macros.inc
includelib c:\irvine\irvine32.lib
includelib c:\irvine\kernel32.lib
includelib c:\irvine\user32.lib

; This program takes variable digit inputs and produces single digit outputs.
.386
.model flat, stdcall
.stack 4096
ExitProcess PROTO ,dwExitCode:DWORD
.data
	A DWORD 90
	B DWORD 60
	X DWORD ?
	Y DWORD ?
	W DWORD ?
	inputX BYTE "Input X = ", 0
	inputY BYTE "Input Y = ", 0
	outputW BYTE "Output W = ", 0
	CalcW BYTE "Calculating W...", 0
	continue BYTE "Press q to quit or any other key to continue", 0
	newline BYTE 0dh, 0ah, 0
	sum DWORD ?
	Loc1 DWORD ?
	Loc2 DWORD ?
	Loc3 DWORD ?
.code

Main proc
	l5:
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

	mov edx, OFFSET continue
	call WriteString

	mov edx, OFFSET newline
	call WriteString

	call ReadChar			; read keyboard ASCII input
	call WriteChar			; write keyboard ASCII input
	mov edx, OFFSET newline
	call WriteString
	mov edx, OFFSET newline
	call WriteString
	movzx ebx, al
	cmp ebx, 71h
	je l6
	jmp l5
	l6:
	invoke exitprocess,0		; EXIT TO Operating System
Main endp

DisplayW proc
	mov edx, OFFSET CalcW	; Display "Calculating W..."
	call WriteString
	mov edx, OFFSET newline
	call WriteString
	mov edx, OFFSET outputW	; Display "Output W = "
	call WriteString
	call outW
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
		movzx ebx, al		; move 8-bit unsigned integer to ebx
		add esi, ebx		; add ebx to X
		cmp ebx, 13
		je l2
		jmp l1
	l2:
		mov edx, OFFSET newline	; make a new line after inputX is finished
		call WriteString
	ret
GetInput endp

CalculateW proc
	mov eax, 160			; Loc1 = [Y * 160] + (X * 2)
	mul edi 				; Y = edi so multiply eax (160) and edi (Y) to get brackets
	mov ebx, eax			; move result into ebx for storage
	mov eax, 2				; move 2 into eax for (X * 2)
	mul esi   				; X = esi so multiply eax (2) and esi (X) to get parentheses
	add eax, ebx			; add the result (X * 2) and ebx [Y * 160] to get Loc1
	mov Loc1, eax			; move final result to Loc1 = (Y * 160) + (X * 2)
	mov eax, 950			; Loc2 = [A * 950] + (B * 350)
	mul A					; multiply A (90) and eax (950) and save in eax
	mov Loc2, eax			; move result into Loc2 for storage
	mov eax, 350			; move 350 into eax for multiplication
	mul B					; multiply B (60) and eax (350) and save in eax
	add Loc2, eax			; save final result into Loc2 = [A * 950] + (B * 350)
	mov eax, Loc1			; eax = Loc1
	mov ebx, Loc2			; ebx = Loc2
	sub ebx, eax			; Loc2 - Loc1
	mov Loc3, ebx			; Loc3 = ebx
	mov edi, 3000			; Y = 3000A
	sub edi, 1				; Y = Y - 1
	mov edx, 0				; edx = 0
	mov eax, Loc3			; eax = Loc3
	mov ebx, 16				; ebx = 16
	div ebx					; eax = eax/ebx ; edx = remainder
	mov sum, eax			; sum = eax
	add sum, edi			; sum = sum + Y
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
	mov ebx, 947			; ebx = 947
	div ebx					; sum (eax) = sum/947
	add eax, 345			; (sum % 947) + 345
	;mov eax, edx			; move ^^^ into eax for return
	add eax, 30h			; Convert eax to ASCII
	ret
CalculateW endp

outW proc
	mov ecx, 0				; 1) counter
	mov eax, eax			; 2) get number into dividend register
	l3:
		mov edx, 0
		mov esi, 10
		div esi				; 3) Divide dividend by 10
		add edx, 30h		; 4) Convert to ASCII by adding 30h
		push edx			; 5) Save remainder digit on stack using push
		add ecx, 1			; 6) Add 1 to stack counter
		mov edx, 0			; 7) Clear the remainder register
		cmp eax, 0			; 8) Test the quotient to see if it = 0
		je WriteNum			; 10) If yes display digits
		jmp l3				; 9) If no go to step 3 again
outW endp

WriteNum proc
	l4:
		pop eax
		call WriteChar
		loop l4
	l5:
		ret
WriteNum endp

end main