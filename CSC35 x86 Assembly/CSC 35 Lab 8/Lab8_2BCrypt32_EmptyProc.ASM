; CSC35 Lab 8 Symmetric Encryption and Decryption with 2-Byte Key, Spring 2021
; THIS PROGRAM is 32bit for MASM on MSVC++
; FILL IN THE FOLLOWING WITH APPROPRIATE INFORMATION
; Name: Ryan Farruggia
; CSC 35
; Spring 2021
; Instructor: Dr. Ghansah
; April 23, 2021
; LAB SECTION # 10
; Lab 8 Symmetric Encryption and Decryption with 2-Byte Key
COMMENT &
Objectives: Students will learn to do simple encryption and decryption using XOR instruction.
The main program is provided. Students will create specific procedures to integrate with this main program.
The Skeleton for the procedures are provided.
It uses Irvine Libraries for Primitive Input/Output.
&
; Irvine Libraries for Readchar, Writechar, WriteString, ClrScr, CrLf Only
; *THIS IS 32 BIT VERSION USING MS VISUAL STUDIO MASM and 16 bit register to hold key
; so the Key is 2 bytes, used to encrypt 2-byte blocks of plaintext
; *********************************************************
; This program asks for secret symmetric shared key from the keyboard.
; The program then requests the user type a plain text on the keyboard.
; This plain text can be encrypted with the key if the user chooses. 
; In all cases Enter key is pressed to indicate the end of whatever is typed on the keyboard.
; The program displays both plain and encrypted texts if requested. If the user wants to decrypt the text 
; the program asks for key again before decryption can occur. In all cases user's permission is sought 
; before anything featured is displayed on the Screen. This is a good way to test to see if the program really
; works. For obvious reasons, Every attempt is
; made not to display the key. As the key is typed
; The procedure that collects the key must display a fixed number of astericks instead of the actual key.
; In this case the user should consider the key similar to a password which must be remembered in
; order to get an encrypted text displayed correctly.
; This program uses the following Irvine Library procedures:
; 1) ReadChar for all inputs from the keyboard. Note that ReadChar 
; does not echo characters read from the keyboard. 
; 2) WriteChar is used for output dislays on the screen. 
; If you want to echo characters read from the keyboard you 
; can follow ReadChar immediately with WriteChar. 
; 3) WriteString is used primarily for prompting. Prompts are declared in memory and are terminated with 0 (ASCII NULL)
; 4) CrLf is used to Create Newlines and 
; 5) ClrScr is used for clearing the screen at the beginning.
; No other Irvine Library procedure is used.
; The following file is the  source code consisting of the Main Program and Templates for the 5 Procedures you are creating. 
; Two of the procedures namely, GetKey and PrintDec are modifications from previous labs. 
; Thus, only 3 Procedures are new. You can work on GetPlainText and PrintText procedures as well as GetKey and PrintDec right away and ask questions. 
; You can wait on the Crypt2Byte Procedure until I give some lectures on it.
.386
.model flat, stdcall
.stack 4096
ExitProcess PROTO ,dwExitCode:DWORD

include c:\irvine\Irvine32.inc
include c:\irvine\macros.inc
includelib c:\irvine\irvine32.lib
includelib c:\irvine\kernel32.lib
includelib c:\irvine\user32.lib

.data
    Heading	BYTE	"*****************************************************",0dh,0ah,
    			    "LAB8 2-BYTE SYMMETRIC KEY CRYPTO TESTING PROGRAM 2021  ",0dh,0ah,
    			    "*****************************************************",0dh,0ah,0

    KeyPrompt BYTE	"Please Type the secret shared key and press ENTER.",0dh,0ah,
    			    "The key can be letters and numbers which will ultimately be converted to a number",0dh,0ah,
    			    "If you use only numbers it should be between 1 and 2^16 - 2, inclusive:",0
    PlainPrompt	    BYTE	"GetPlainText: Please type your Plaintext message......:",0
    PlainNumPrompt  BYTE	"The Number of characters in your message is......:",0
    EncryptText	    BYTE	"Do you want to Encrypt your PlainText Message? Type N for No or any key for Yes  ",0
    EncWrtPrompt	BYTE	"Do you want to Print the Encrypted Text? Type N for No and any key for Yes",0
    DecryptPrompt	BYTE	"Do you want to Decrypt the Encrypted Text? Type N for No and any key for Yes",0
    TellKeyPrompt	BYTE	"Tell me the key and press ENTER before I decrypt it",0
    NoDecptPrompt	BYTE	"The Message cannot be decrypted. Try again or type q to quit",0
    Continue	    BYTE	"Press any key to Continue or q to quit:",0

    PlainBuf	BYTE	250 DUP (?)		;Plain Text Buffer
    PlainBufCnt	DWORD	?				;Plaintext Buffer Count
    EncryptBuf	BYTE	250 DUP (?)		;Encrypted Text Buffer
    EncBufCnt	DWORD	?				;Ciphertext Buffer Count
    DecryptBuf	BYTE	250 DUP (?)		;Decrypted Text Buffer
    Key1		WORD	?				
    Key2		WORD 	?
    MaxBuf		DWORD	250			    ;Maximum buffer size


.code
main proc
    call clrscr				    ;Clear the Screen
    mov edx, offset Heading		;First Large Prompt/Header
    call WriteString
    call crlf

    topMain:
        ; Reads Key1 (multiple decimal digits) into AX. Key1 placed in Key Buffer.
        call crlf
        call crlf
        mov edx, offset KeyPrompt	    ;Prompt for secret Shared key
        call WriteString
        call GetKey
        mov Key1,AX
    
        call crlf

        mov edx, offset PlainPrompt	    ; Prompt for Plaintext
        call WriteString

        ; Gets plaintext and stores in buffer
        call crlf
        mov edx, offset PlainBuf	    ; WHERE TO STORE THE PLAINTEXT
        mov ecx, MaxBuf				    ; MAX CHARACTERS IN PLAINTEXT

        call GetPlainText
        mov PlainBufCnt,ecx			    ; store actual count

        call crlf
        call crlf
        mov edx, offset PlainNumPrompt	; Prompt to Display count of characters
        call WriteString
        mov eax,PlainBufCnt
        call PrintDec				    ; Print the count in decimal
        call crlf
        mov edx, offset EncryptText		; Prompt Want to encrypt text?
        call WriteString
        call crlf
        call readchar			        ; Type 'N' for  No or Any other key for Yes 
        cmp al, 'N' 			        ; No means type another Plaintext or Quit
        je bottom
        mov esi, offset PlainBuf		; Yes means EncryptText. 
        mov edi, offset EncryptBuf		; esi=ptr to plaintext buffer, edi=ptr to ciphertext buffer
        mov ecx,PlainBufCnt			    ; ecx=plaintext count in bytes, ax= encryption key
        mov ax,Key1
        call Crypt2Byte
        mov EncBufCnt,ecx			    ; Size of Encrypted data. Needed in case padding was added when n-byte key is used
        call crlf
        mov edx, offset EncWrtPrompt	; Prompt for "Want to Print Encrypted Text? Y or N"
        call WriteString			    ; print out the number of characters typed????  
        call crlf
        call ReadChar
        cmp al, 'N'				        ; Type 'N' for  No or Any other key for Yes
        je LDcpt				        ; If NO Check for Desire to Decrypt
        mov edx, offset EncryptBuf		; YES means Print Encrypted  Text
        mov ecx, PlainBufCnt			; Plain Buffer Count so as not to include any part of the key
        call PrintText
        call crlf
    LDcpt:
        mov edx, offset DecryptPrompt
        call WriteString			    ; Prompt for Do you want to Decrypt Text?
        call crlf				        ; Type 'N' for  No or Any other key for Yes
        call ReadChar			        ; Read Response
        cmp al, 'N'				        ; N means Get Another PlainText
        je bottom
        call crlf
        mov edx, offset TellKeyPrompt	; Yes means tell me the key before I decrypt it
        call WriteString
        call crlf
        call GetKey				        ; Get the Key
        mov Key2,AX
        cmp Key1,AX
        ; Reads the Key2, Decrypt Key into AX. Compare with Encrypt Key (Key1) placed in Key1 variable. 
        jne NDcpt				        ; If key is not same we cannot decrypt. Otherwise, decrypt
        mov esi, offset EncryptBuf
        mov edi, offset DecryptBuf
        mov ecx, EncBufCnt
        mov ax, key2
        call Crypt2Byte		            ; Symmetric Key system. Encyption and Decryption use the same Procedure
    	;Both receive things in correct block sizes.

     ; In some implementations the padding is removed before placing decrypted text in memory.
     ; Regardless, it should return Decrypted text count in ecx	;register. Should Encrypt and Decrypt Procs be the same in that case????
        call crlf
        mov edx, offset DecryptBuf		; Print Decrypted Text
        mov ecx, EncBufCnt
        call PrintText
        call crlf
        jmp Bottom
    NDcpt:
        call CrLf
        mov edx, offset NoDecptPrompt	;Cannot be Decrypted Statement
        call WriteString
        call crlf
    Bottom:
        mov edx, offset continue		;"Press any key to continue or q to quit
        call WriteString
        call crlf
        call ReadChar
        cmp al,'q'
        jne topMain

    	invoke exitprocess,0

main endp
; Errors w/ asterisks or encryption key input are likely related to GETKEY
    GetKey PROC
        ; Get secret shared key from the keyboard in decimal digits. 
        ; DO NOT ECHO TO SCREEN. BUT PRINT 3 ASTERISKS REGARDLESS OF KEY SIZE.
        ; Entry: None.
        ; Exit: Key is placed in AX
        mov esi, 0				; initialize esi to zero
	    l1:						
	    	mov ebx, 10			; eax = 10
	    	mul eax				; eax = eax * ebx (10)
	    	call ReadChar		; read keyboard ASCII input
            movzx edx, al       ; store keyboard input in edx
            mov al, 42        ; move asterisk into al
	    	call WriteChar		; write asterisk instead of keyboard input
	    	add eax, edx		; eax += edx
	    	cmp edx, 13
	    	je l2
	    	jmp l1
	    l2:
	    	call CrLf
	    ret
    GetKey ENDP
; Errors w/ plain text input are likely related to GETPLAINTEXT
    GetPlainText PROC
        ; This collects text from keyboard and prints it on the screen.
        ; Use ReadString which echoes to the screen as well as writes to memory.
        ; Read a string of characters from Keyboard (std input) and place it in memory. 
        ; Stops on ENTER (CR) key.
        ; Entry: EDX = offset of array of bytes where data is stored
        ; ECX = maximum number of characters to be read.
        ; Exit: count of actual bytes read in ECX
        ; Note: Stops when user presses ENTER key (CR=0dh)
        mov ecx, 0
        top:
            call ReadChar
            cmp al, 0dh
            je bot
            call WriteChar
            movzx edx, al
            inc ecx
            inc  edx
            jmp top
        bot:
    	ret
    GetPlainText ENDP
; Errors w/ output, encryption/decryption are likely related to CRYPT2BYTE
    Crypt2Byte PROC
        ;This Procedure is used for 2 BYTE Key for Encryption. 
        ;Consequently, the plaintext must be in 2 Byte Blocks. 
        ;Therefore, if a plaintext consists of odd number of bytes we should add 1 Byte 'Pad'
        ;to the Plaintext to force the last byte to be 2 Bytes before we encrypt it. 
        ;Divide the plaintext by 2 and check if remainder is 0 or 1. If 0, it encrypts cleanly, if not add 1 byte.
        ;However, that should not prevent this procedure to be used for both encryption and decryption.
        ;NOTE: This procedure can be modified in the future to handle N-byte Encryption where N>2. 
        ;Entry: ESI=Pointer to Plaintext in memory. EDI=ptr to encrypted text in memory 
        ;ECX=count of bytes of plaintext. AX= key to be used for encryption. 
        ;Exit: ECX= count of bytes of encrypted text

        ;2. Check to see if plaintext size is even
        mov ebx, eax
        mov eax, ecx
        mov edx, 0
        mov ebx, 2
        div ebx
        cmp edx, 0
        ;3. If yes, no NULL (0) Pad is needed so go to l3
        je ecryptlabel
        ;4. Add a pad ( 0 ) to the end of the plaintext
        mov BYTE PTR [esi + ecx], 0
        ;5. Update length of plaintext to take the pad into account.
        inc ecx
        mov ebx, ecx
        ;6. Get 2 Bytes from plaintext memory buffer
        encryptlabel:
            mov dx, [esi]
            ;7. Encrypt/Decrypt with key (XOR)
            xor dx, ax
            ;8. Put encrypted 2 bytes in Encrypted text memory buffer
            mov [edi], dx
            ;9. Update buffer pointers to point to next block
            add esi, 2
            add edi, 2
            ;10. Check to see if we are done with last block
            sub ecx, 2
            cmp ecx, 0
            ;11. If not done Go to step 6.
            jne encryptlabel
            ;12. Return count of bytes to output parameter to relevant register.
            mov edx, ecx
    	ret
    Crypt2Byte ENDP
; Errors w/ printing basic text from keyboard are likely related to PRINTTEXT
    PrintText PROC
        ;This procedure is primarily used to print encrypted or decrypted text already in memory on the screen. 
        ;Entry: EDX=address of string of encrypted text, ECX=byte count of text. Must be >0
        execText:
            mov al, [edx]
            call WriteChar
            inc edx
            loop execText
        ret
    PrintText ENDP
; Errors w/ printing decimals/integers are likely related to PRINTDEC
    PrintDec PROC
        ; Writes 32-bit unsigned integer to std output in decimal format 
        ; with no leading zeroes. Can handle multiple decimal digits.
        ; Can be used to print shared key in decimal if it is a number and
        ; if requested. Note: Printing shared key is not recommended because the shared key is a secret.
        ; This procedure can also be used to print the number of characters in a plaintext message or ciphertext. This is its common use. 
        ; It can be modified to print signed integers, making it more general.
        ; Entry: EAX = Integer to be printed
        ; Exit: Nothing
        ; Note: Can push and pop ax because NO result is returned in AX
	    mov ecx, 0				; 1) counter
	    mov eax, eax			; 2) get number into dividend register
	    l1:
	    	mov edx, 0
	    	mov esi, 10
	    	div esi				; 3) Divide dividend by 10
	    	add edx, 30h		; 4) Convert to ASCII by adding 30h
	    	push edx			; 5) Save remainder digit on stack using push
	    	add ecx, 1			; 6) Add 1 to stack counter
	    	mov edx, 0			; 7) Clear the remainder register
	    	cmp eax, 0			; 8) Test the quotient to see if it = 0
	    	je l2			    ; 10) If yes display digits
	    	jmp l1				; 9) If no go to step 3 again
	    l2:
	    	pop eax
	    	call WriteChar
	    	loop l2
    	ret
    PrintDec ENDP

end main