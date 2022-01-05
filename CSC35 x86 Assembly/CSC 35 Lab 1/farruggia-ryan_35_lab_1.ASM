;THIS PROGRAM Lab1 Familiarizarion It is 32bit for MASM on MSVC++
; FILL IN THE FOLLOWING WITH APPROPRIATE INFORMATION
;Ryan Farruggia
;CSC 35
;Spring 2021
;Instructor: Dr.Ghansah
;February 9, 2021
;LAB SECTION # 10
COMMENT &
Objectives: Students will learn to use Registers to do Step by Step ASM Instructions 

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
include c:\irvine\macros.inc
includelib c:\irvine\irvine32.lib
includelib c:\irvine\kernel32.lib
includelib c:\irvine\user32.lib
&

.data
Result DWORD ?
.code
 
main PROC
	mov ebx,2		;ebx=2
	inc ebx			;ebx++ i.e. ebx=ebx+1
	add ecx,2		;ecx=ecx+2
	mov eax,ebx		;eax=ebx
	add eax,ecx		;eax=eax+ecx
	mov ebx,eax		;ebx=eax
	mov eax,ebx		;eax=ebx
	dec ebx			;ebx--
	sub eax,ecx		;eax=eax-ecx
	add eax,ebx		;eax=eax+ebx
	mov Result,eax	;Result= eax
	invoke exitprocess,0	;EXIT TO OS
main endp

end main
