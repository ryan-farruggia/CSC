; Student Name: Ryan Farruggia
; Course: CSC 35
; Semester: Spring 2021
; Instructor: Professor Ghansah
; Lab Date and Time: February 25, 2021
; Lab Section #10
; Lab #3 - Arithmetic Instructions

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
invoke exitprocess,0		; EXIT TO Operating System
Main endp
end main