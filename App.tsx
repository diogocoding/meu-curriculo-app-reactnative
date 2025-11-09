import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground, // novo
  Modal, // novo
  TouchableOpacity, // novo
  Linking, // novo
  TextInput, // novo
} from 'react-native';

// 1. Imagens que vou usar no app
// o fundo, minha foto, o gif...
const fundoApp = require('./assets/fundo_gibli.jpg');
const suaFoto = require('./assets/perfil.png');
const gifProjeto = require('./assets/fit-love.gif');

// 2. Onde tudo começa (o App)
export default function App() {
  // 3. Estados para saber qual modal está visível
  // (um para cada botão: sobre, projetos, etc)
  const [sobreVisivel, setSobreVisivel] = useState(false);
  const [projetosVisivel, setProjetosVisivel] = useState(false);
  const [formacaoVisivel, setFormacaoVisivel] = useState(false);
  const [contatoVisivel, setContatoVisivel] = useState(false);

  // 4. Helper para abrir os links (github, linkedin)
  const abrirLink = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error('Não foi possível abrir o link:', err)
    );
  };

  // ---------------------------------------------------
  // 5. O visual do App (o que aparece na tela)
  // ---------------------------------------------------
  return (
    <ImageBackground source={fundoApp} style={styles.container}>
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.mainContent}>
            <Text style={styles.logo}>◆</Text>

            <Text style={styles.nome}>DIOGO NASCIMENTO</Text>

            <Text style={styles.subtitulo}>
              DESENVOLVEDOR FULL-STACK EXPERIÊNCIA NA CONSTRUÇÃO DE SOLUÇÕES
              ROBUSTAS C#/.NET E INTERFACES INTERATIVAS COM
              JAVASCRIPT/FIREBASE/HTML/CSS.
            </Text>

            <View style={styles.navBar}>
              <TouchableOpacity
                style={styles.navButton}
                onPress={() => setSobreVisivel(true)}
              >
                <Text style={styles.navText}>SOBRE</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.navButton}
      1         onPress={() => setProjetosVisivel(true)}
              >
                <Text style={styles.navText}>PROJETOS</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.navButton}
                onPress={() => setFormacaoVisivel(true)}
              >
                <Text style={styles.navText}>FORMAÇÃO</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.navButton}
                onPress={() => setContatoVisivel(true)}
              >
                <Text style={styles.navText}>CONTATO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>

      {/*       // ---------------------------------------------------
      // 6. As janelinhas (Modais)
      // ---------------------------------------------------
      */}

      {/* --- MODAL SOBRE --- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={sobreVisivel}
        onRequestClose={() => setSobreVisivel(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSobreVisivel(false)}
            >
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.modalTitle}>SOBRE</Text>
              <Image source={suaFoto} style={styles.fotoPerfilModal} />

              <Text style={styles.modalText}>
                Desenvolvedor Full-Stack com experiência na construção de soluções
                robustas utilizando C#/.NET e interfaces interativas com React,
                Bootstrap, JavaScript, Firebase, HTML/CSS.
              </Text>
              <Text style={styles.modalText}>
                Possuo habilidades complementares em Análise de Dados (Python),
                aplicando uma abordagem orientada a dados para aprimorar
                projetos. Atualmente sou estudante de Análise e Desenvolvimento
                de Sistemas na Faculdade SENAC, como bolsista pelo projeto
                "Embarque Digital" da Prefeitura do Recife.
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* --- MODAL PROJETOS --- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={projetosVisivel}
        onRequestClose={() => setProjetosVisivel(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setProjetosVisivel(false)}
            >
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.modalTitle}>PROJETOS</Text>

              {/* Fit & Love (PWA) */}
              <Text style={styles.modalSubTitle}>Fit & Love (PWA)</Text>
              <Image source={gifProjeto} style={styles.gifProjeto} />
              <Text style={styles.modalText}>
                PWA para gerenciamento de perfis de treino e planos alimentares.
                Demonstra habilidades em JavaScript puro (Vanilla JS) para
                manipulação do DOM e integração em tempo real com Firebase
                (BaaS).
              </Text>
              <TouchableOpacity
                onPress={() =>
                  abrirLink('https://fit-love-demo.netlify.app/')
                }
              >
                <Text style={styles.linkText}>
                  Acesse a demo aqui (Código: 123)
                </Text>
              </TouchableOpacity>
              <View style={styles.divider} />

              {/* Lista de Presentes */}
              <Text style={styles.modalSubTitle}>
                Lista de Presentes Interativa (Projeto Pessoal)
              </Text>
              <Text style={styles.modalText}>
                Aplicação web para gerenciar uma lista de presentes, resolvendo o
                problema de itens repetidos. Implementado com JavaScript,
                HTML/CSS (Flexbox, Media Queries) e Firebase Realtime Database
                para atualizações em tempo real.
              </Text>
              <View style={styles.divider} />

              {/* Residência Tecnológica */}
              <Text style={styles.modalSubTitle}>
                Residência Tecnológica (Porto Digital & SiDi)
              </Text>
              <Text style={styles.modalText}>
                Participei do desenvolvimento do DoT, um sistema de ponto em
                formato de landing page, com foco em simplicidade, usabilidade e
                acessibilidade. Aprendi e apliquei React em um projeto real com
                prazo definido.
              </Text>
              <View style={styles.divider} />

              {/* NutriScan PWA */}
              <Text style={styles.modalSubTitle}>NutriScan PWA (Projeto Acadêmico)</Text>
              <Text style={styles.modalText}>
                Progressive Web App (PWA) que transforma a câmera do celular em
                um scanner de código de barras para consulta de informações
                nutricionais, integrado com a API do Open Food Facts e com
                funcionalidades offline (Service Workers).
              </Text>
              <View style={styles.divider} />

              {/* Análise de Dados Titanic */}
              <Text style={styles.modalSubTitle}>
                Análise de Dados do Titanic (Portfólio)
              </Text>
              <Text style={styles.modalText}>
                Análise Exploratória de Dados (EDA) para identificar fatores de
                sobrevivência. Aplicação de limpeza, tratamento de dados,
                StandardScaler e visualização com Matplotlib/Seaborn.
                Tecnologias: Python, Pandas, Scikit-learn.
              </Text>
              <View style={styles.divider} />

              {/* Sistemas em C# */}
              <Text style={styles.modalSubTitle}>
                Sistemas em C# (.NET) (Estudos)
              </Text>
              <Text style={styles.modalText}>
                Desenvolvimento de projetos práticos (Sistema de Hotel, Sistema
                de Estacionamento) aplicando Orientação a Objetos, tratamento de
                exceções e regras de negócio em C#/.NET.
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* --- MODAL FORMAÇÃO & EXPERIÊNCIA --- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={formacaoVisivel}
        onRequestClose={() => setFormacaoVisivel(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setFormacaoVisivel(false)}
            >
              <Text style={styles.closeText}>X</Text>
  _         </TouchableOpacity>

            <ScrollView>
              <Text style={styles.modalTitle}>FORMAÇÃO E EXPERIÊNCIA</Text>

              {/* Formação */}
              <Text style={styles.modalSubTitle}>FORMAÇÃO ACADÊMICA</Text>
              <Text style={styles.modalListItem}>
                • Graduando em Análise e Desenvolvimento de Sistemas - Faculdade
                SENAC (Bolsista pelo projeto "Embarque Digital")
              </Text>
              <Text style={styles.modalListItem}>
                • Bacharelado em Biologia (7 períodos concluídos) -
                Universidade Federal de Pernambuco (UFPE), 2019-2023
              </Text>

              <View style={styles.divider} />

              {/* Experiência */}
              <Text style={styles.modalSubTitle}>EXPERIÊNCIA PROFISSIONAL</Text>
              
              <Text style={styles.modalListItem}>
                • Analista de Operações | SpeedMais (02/2025 - 09/2025)
              </Text>
              <Text style={styles.modalText}>
                Suporte técnico e estratégico a operadores, auxiliando na
                interpretação e resolução de demandas de clientes internos.
                Habilidade de resolver problemas, comunicação assertiva e
                trabalho em equipe.
              </Text>

              <Text style={styles.modalListItem}>
                • Operador Bilíngue (Português/Inglês) | SpeedMais (10/2023 - 02/2025)
              </Text>
              <Text style={styles.modalText}>
                Trabalho CLT de suporte ao cliente via mensagem de texto e
                ligações.
          _   </Text>

              <Text style={styles.modalListItem}>
                • Estágio em Análises Clínicas e Biologia Molecular |
                UFPE/Laboratório Central (6 meses)
              </Text>
              <Text style={styles.modalText}>
                Experiência com diagnóstico molecular de doenças hematológicas,
                leitura de lâminas e liberação de laudos.
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* --- MODAL CONTATO --- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={contatoVisivel}
        onRequestClose={() => setContatoVisivel(false)}
section: true
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setContatoVisivel(false)}
            >
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.modalTitle}>CONTATO</Text>

              <Text style={styles.inputLabel}>NOME</Text>
              <TextInput style={styles.input} placeholderTextColor="#888" />

              <Text style={styles.inputLabel}>EMAIL</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="#888"
                keyboardType="email-address"
              />

              <Text style={styles.inputLabel}>MENSAGEM</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholderTextColor="#888"
                multiline={true}
              />

              <View style={styles.formButtons}>
                <TouchableOpacity style={styles.buttonPrimary}>
                  <Text style={styles.buttonTextPrimary}>ENVIAR MENSAGEM</Text>
                </TouchableOpacity>
      _       </View>

              <View style={styles.socialLinks}>
        _       <TouchableOpacity
                  onPress={() => abrirLink('https://github.com/diogocoding')}
                >
                  <Text style={styles.socialIcon}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    abrirLink(
                      'https://www.linkedin.com/in/diogo-nascimento-da-silva-diogocoding'
                    )
                  }
                >
                  <Text style={styles.socialIcon}>in</Text>
section: true
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    abrirLink('https://api.whatsapp.com/send?phone=SEUNUMERO') // Lembre de trocar SEUNUMERO
                  }
                >
                  <Text style={styles.socialIcon}>W</Text>
</span>              </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

// ---------------------------------------------------
// 7. Estilização (para deixar bonito)
// ---------------------------------------------------
const styles = StyleSheet.create({
  // --- Estilos da Tela Principal ---
  container: {
    flex: 1, // Ocupa a tela toda
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(20, 20, 20, 0.85)', // Fundo escuro semi-transparente
</i>  },
  safeArea: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 40,
    color: '#FFF',
    borderColor: '#FFF',
    borderWidth: 2,
    borderRadius: 50,
    width: 60,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center', // Específico para Android
    lineHeight: 58, // Ajuste fino para centralizar o ◆
    marginBottom: 20,
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#DDD',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#888',
    paddingVertical: 20,
  },
  navBar: {
    flexDirection: 'row', // Coloca os botões um ao lado do outro
    flexWrap: 'wrap', // Permite quebra de linha se não couber
    justifyContent: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#888',
  },
  navButton: {
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRightWidth: 1,
    borderColor: '#888',
  },
  navText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },

  // --- Estilos dos Modais ---
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo mais escuro
    alignItems: 'center',
async   justifyContent: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#1E1E1E', // Cor do modal (preto/cinza escuro)
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxHeight: '85%', // Ocupa no máximo 85% da altura
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 5,
  },
  closeText: {
s    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#555',
    paddingBottom: 5,
    marginBottom: 15,
  },
  modalSubTitle: {
    color: '#EEE',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  C  marginBottom: 5,
  },
  modalText: {
    color: '#CCC',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  modalListItem: {
    color: '#CCC',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#555',
    marginVertical: 15,
  },
  linkText: {
    color: '#70bfff', // Um azul claro para links
    fontSize: 16,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },

  // --- Estilos Específicos (Foto, GIF, Formulário) ---
  fotoPerfilModal: {
    width: '100%',
    height: 250, 
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#333',
  },
  gifProjeto: {
    width: '100%',
    height: 200, 
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: '#333',
  },
  inputLabel: {
    color: '#AAA',
    fontSize: 14,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#333',
    color: '#FFF',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Para Android
  },
  formButtons: {
    marginTop: 10,
  },
  buttonPrimary: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonTextPrimary: {
    color: '#111',
    fontWeight: 'bold',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderColor: '#444',
  },
  socialIcon: {
    color: '#FFF',
    fontSize: 24,
    marginHorizontal: 15,
    fontWeight: 'bold',
  },
});
