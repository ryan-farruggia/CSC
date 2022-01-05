;CSC35 Lab 9 Signed Arithmetic and Stack Parameters, Spring 2021
;THIS PROGRAM is x86 32bit for MASM on MSVC++
; FILL IN THE FOLLOWING WITH APPROPRIATE INFORMATION
;YOUR FULL NAME
;CSC 35
;SEMESTER
;Instructor: Dr.Ghansah
;DAY, DATE and TIME
;LAB SECTION #
;Program# and Title
COMMENT &
Objectives: Students will learn to use the parameters passed on the stack and well as learn to create and use local variables in a stack frame. Students will also learn to use IMUL and IDIV instructions to do signed arithmetic. The main program is provided. This lab is a modification of Lab7. Students will create specific procedures to integrate with this main program. The skeletons for the procedures are provided. This program It uses Irvine Libraries for Primitive Input/Output.

&
;
; Irvine Libraries for Readchar, Writechar, WriteString, CrLf Only.
;*THIS IS 32 BIT VERSION USING MS VISUAL STUDIO MASM
;Lab 9. THIS PROGRAM IS MODIFIED FROM LAB 7
;PROCEDURES,ADD, SUB, IMUL, IDIV, multi-input,multi- output, SIGNED VARIABLES. SPECIFICALLY, UNSIGNED INPUTS, SIGNED OUTPUT.
;****THIS VERSION ALSO USES STACK TO PASS PARAMETERS FOR CalculateW AND OutW PROCEDURES. IT ALSO USES SIGNED VARIABLE for the output***
;***OutW PROCEDURE IS MODIFIED TO PRINT NEGATIVE NUMBERS***
;W = SUM MOD 3907 + 3 and W can be a negative number.
;*** THIS PROGRAM GETS NUMBERS X AND Y DIGITS FROM THE KBD AND  CHECKs CR=0Dh (ENTER KEY in ASCII)
;X AND Y ARE VARIABLE NUMBER OF DECIMAL DIGITS. ***
;*** it then COMPUTES W. THE FORMULA IS SUCH THAT W CAN BE  MULTIPLE DECIMAL DIGITS, POSITIVE OR NEGATIVE****
;**loc1, loc2, loc3, and sum are LOCAL variables within calculateW proc 
;But These Local variables are EXPLICITLY ALLOCATED WITHIN THE STACK. Thus they should seen nowhere in this program ****
;
; Key Concepts: Modularity, Looped Session, Parameter Passing via Stack, Signed Variables
;
.386
.model flat, stdcall
.stack 4096
ExitProcess PROTO ,dwExitCode:DWORD
INCLUDE c:\irvine\Irvine32.inc		;Change path if necessary
include c:\irvine\macros.inc
includelib c:\irvine\irvine32.lib
includelib c:\irvine\kernel32.lib
includelib c:\irvine\user32.lib

.data
X DWORD 0
Y DWORD 0
A DWORD 90
B DWORD 0
W SDWORD ?						;W can be + or - 
inputX BYTE "input X =", 0          ;IrvineLib WriteString expects null terminated string
inputY BYTE "input Y =", 0
outputW BYTE "output W=", 0
newline BYTE 0dh, 0ah, 0
calcW BYTE "calculating W....", 0
continue BYTE "Press Any Any key to continue or q to QUIT", 0
;
.code
main proc
    
   call CrLf
topMain:
  mov  esi, offset InputX   ;inputX=?
  call getInput
  mov X,eax
  call CrLf
;  
  mov esi, offset InputY    ;inputY=?
  call getInput
  mov Y, eax
  call CrLf

  mov edx, offset calcW     ;print calculating W
   call WriteString
  push Y				; pass input PARAMETERS Right to left on STACK 
  push X
  call calculateW
  ;Caller Cleans up the Stack
  add esp,8			;deallocate two 4Byte input parameters from stack
  mov W,eax			;output parameter returned in register

  mov edx, offset outputW   ;Print "OutputW=""
  call WriteString
  push W				;input parameter on STACK
  call outW
  ;Caller cleans up the Stack
  add esp, 4            ;deallocate one 4-Byte input parameter from Stack
   
   call CrLf
  mov edx, offset continue  ;prompt to continue or quit
  call WriteString
   
   call CrLf
  call readchar             ;this procedure does not echo
  cmp al,'q'
  jne topMain	
  invoke exitprocess,0
main endp
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
 getinput proc
;Get Decimal Number from the keyboard and press enter key when done. 
; ENTER key is CR = 0Dh
;This procedure calculates the binary equivalent of the decimal number it is typed and puts the result in a register.
;The Number is assumed to be positive, ie. Unsigned
;This procedure is the same as in Lab7.  
;Entry: esi = address to string which prompts for input.
;Exit: eax = Result of the calculated number.
 
    ret
    getinput endp

  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
CalculateW proc
;Calculates a value based on X and Y inputs
;INPUT:  X and Y . Y was pushed first
;OUTPUT: eax contains result.
;THIS VERSION USES LOCAL VARIABLES ALLOCATED ON STACK
;local variables are loc1,loc2,loc3,and sum
;All the local variables are 4 bytes (DWORD) and are
;explicitly allocated on the stack and accessed from the stack.

   
   ret
   calculateW endp
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
outW proc
;This procedure outputs MULTIPLE DECIMAL DIGITS on the screen.
;The algorithm is based on repeated division of quotient by 10  
;REMAINDERs are kept on the Stack and retrived in the reverse order.
; The number to be printed can be positive or negative.
;This procedure must print "-" sign if the number is negative.   
;INPUT parameter:W=number to be printed in binary. Caller Pushed W on Stack before this procedure is called. 
;OUTPUT parameter: None

 COMMENT &
ALGORITHM FOR CHECKING IF NUMBER IS NEGATIVE AND CONVERTING AND PRINTING NEGATIVE SIGN AS NEEDED.
  1. Get parameter (W=number) to be printed from the stack
  2. Check if number is negative or positive
  3. If it is positive  Go to Step 8 to ConvertToDec and Print
  4. If not, it is negative. Convert to positive (Use NEG instruction)before converting to decimal
  5. save it temporarily
  6. Display Negative Sign
  7. get Number back into eax. It will be the dividend in the division below
8. Convert to Decimal. This step is exactly the same as the code you used in Lab 7
&
  ConvertToDec:
   	   ; Code fom here is the same as in Lab7
   


  ret
outW endp
;;;;;;;;;;;;;;;;;;;;;;;;

end main
