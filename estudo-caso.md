
#TAH (Teste Acadêmico de Habilidades) - Estudo de caso


##Breve descrição:
	O projeto trata de um simulador de questionários com a finalidade de auxiliar estudantes do ensino superior a se prepararem para o ENADE. O recurso conta com funcionalidades para medir o desempenho do aluno, cadastrar perguntas conforme categorias e simular testes com as perguntas sobre temas selecionados.  

##Possíveis usuários:
Professores e alunos de nível superior. 
##Possíveis stakeholders: 
	Universidades interessadas em aumentar o desempenho no ENADE.

##Principais funcionalidades; 
Cadastrar usuário;
Cadastrar perguntas e respostas;
Gerar questionário;
Exibir relatório de desempenho no questionário gerado; 
Enviar dúvidas;
Exibir relatório de desempenho geral;
	
##Roles: 
Visitante;
Aluno;
Professor;
Moderador;
Administrador. 	

##Personas:
Como VISITANTE consigo ver a landing page;
Como ALUNO consigo cadastrar perguntas e respostas(necessitam de aprovação para entrar no banco de perguntas), gerar questionários, exibir relatórios de questionário e desempenho geral, enviar dúvidas. 
Como PROFESSOR consigo cadastrar perguntas e respostas, aprovar perguntas e respostas escritas por ALUNO, exibir relatório de desempenho de ALUNO selecionado.
Como MODERADOR consigo cadastrar PROFESSOR e ALUNO, aprovar perguntas e respostas escritas por ALUNO, exibir relatórios de desempenho, visualizar todo banco de perguntas. 
Como ADMINISTRADOR consigo cadastrar MODERADOR, PROFESSOR e ALUNO, realizar mudanças no código.


Para VISITANTE se tornar MODERADOR/DIRETOR ele precisa contactar um ADMINISTRADOR. 


##Histórias de usuários:


Carlos, diretor de uma universidade, chegou ao site como VISITANTE e ao ver a landing page imaginou que a solução faria sentido para consolidar o aprendizado de seus alunos. Carlos entrou em contato com o time de administração do site e fechou contrato. Carlos agora é um MODERADOR/DIRETOR do site. 

Camila é uma estudante de arquitetura da universidade de Carlos, ela foi uma das participantes do projeto e recebeu um acesso como ALUNO no site. Após responder muitos simulados, Camila passou a se sentir confiante para realizar o ENADE. 

Diego é um professor responsável e Carlos decidiu dá-lo a responsabilidade de auxiliar no preparo de questões. Diego agora é um PROFESSOR do site e além de elaborar questões, passou a acompanhar o progresso de seus ALUNOS e premiar com pontos extras os alunos com bom desempenho.


