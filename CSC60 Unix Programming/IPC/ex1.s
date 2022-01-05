	.file	"ex1.c"
	.section	.rodata
.LC0:
	.string	"%s \n"
	.align 4
.LC1:
	.string	"My process #%x, my thread ID #%x\n"
	.text
.globl print_greeting
	.type	print_greeting, @function
print_greeting:
	pushl	%ebp
	movl	%esp, %ebp
	subl	$40, %esp
	movl	8(%ebp), %edx
	movl	$.LC0, %eax
	movl	%edx, 4(%esp)
	movl	%eax, (%esp)
	call	printf
	call	pthread_self
	movl	%eax, -12(%ebp)
	call	getpid
	movl	$.LC1, %edx
	movl	-12(%ebp), %ecx
	movl	%ecx, 8(%esp)
	movl	%eax, 4(%esp)
	movl	%edx, (%esp)
	call	printf
	movl	$0, (%esp)
	call	pthread_exit
	.size	print_greeting, .-print_greeting
	.section	.rodata
	.align 4
.LC2:
	.string	"T1:We are done with pipes in Sac State"
	.align 4
.LC3:
	.string	"T2:We are done with forks Sac State"
	.text
.globl main
	.type	main, @function
main:
	pushl	%ebp
	movl	%esp, %ebp
	andl	$-16, %esp
	subl	$32, %esp
	movl	$.LC2, 24(%esp)
	movl	$.LC3, 28(%esp)
	movl	24(%esp), %eax
	movl	%eax, 12(%esp)
	movl	$print_greeting, 8(%esp)
	movl	$0, 4(%esp)
	leal	20(%esp), %eax
	movl	%eax, (%esp)
	call	pthread_create
	movl	28(%esp), %eax
	movl	%eax, 12(%esp)
	movl	$print_greeting, 8(%esp)
	movl	$0, 4(%esp)
	leal	16(%esp), %eax
	movl	%eax, (%esp)
	call	pthread_create
	movl	20(%esp), %eax
	movl	$0, 4(%esp)
	movl	%eax, (%esp)
	call	pthread_join
	movl	16(%esp), %eax
	movl	$0, 4(%esp)
	movl	%eax, (%esp)
	call	pthread_join
	movl	$0, %eax
	leave
	ret
	.size	main, .-main
	.ident	"GCC: (GNU) 4.4.7 20120313 (Red Hat 4.4.7-23)"
	.section	.note.GNU-stack,"",@progbits
