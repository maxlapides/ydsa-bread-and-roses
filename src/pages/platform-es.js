import React from "react"
import { Element } from "react-scroll"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InternalLink from "../components/internal-link"
import ExternalLink from "../components/external-link"

const Platform = () => (
  <Layout
    title="Plataforma 2020"
    color="red"
    heroImageName="dslc"
    languageBarSettings={{
      english: "/platform/",
      spanish: "/platform-es/",
      activeLanguage: "spanish",
    }}
  >
    <SEO title="East Bay DSA Plataforma 2020" ogImage="dslc" />
    <div className="sidebar">
      <h2>Esquema</h2>
      <ul>
        <li>
          <InternalLink to="what-we-built-through-bernie">
            Lo que construimos a través de Bernie
          </InternalLink>
        </li>
        <li>
          <InternalLink to="triple-crisis">La triple crisis</InternalLink>
        </li>
        <li>
          <InternalLink to="working-class-fights-back">
            La clase obrera se defiende
          </InternalLink>
        </li>
        <li>
          <InternalLink to="rank-and-file-worker-power">
            1. Poder al trabajador de base!
          </InternalLink>
        </li>
        <li>
          <InternalLink to="fight-racism-and-oppression">
            2. Combatir el Racismo y la Opresión
          </InternalLink>
        </li>
        <li>
          <InternalLink to="fight-austerity-and-privatization">
            3. Luchar contra la austeridad y la privatización
          </InternalLink>
        </li>
        <li>
          <InternalLink to="message-towards-the-masses">
            4. Comunicación hacia las masas
          </InternalLink>
        </li>
        <li>
          <InternalLink to="build-a-multiracial-democratic-dsa">
            5. Construir una organización multirracial y democrática
          </InternalLink>
        </li>
        <li>
          <InternalLink to="bigger-than-bernie">
            6. Más grande que Bernie
          </InternalLink>
        </li>
      </ul>
    </div>

    <div className="content" id="wws">
      <Element
        name="what-we-built-through-bernie"
        id="what-we-built-through-bernie"
      >
        <h2>Lo que construimos a través de Bernie</h2>
        <p>
          Estamos saliendo de nuestra mayor movilización hasta ahora: una
          campaña independiente, altamente organizada y totalmente voluntaria
          para Bernie Sanders.{" "}
          <strong>
            La campaña de Bernie no esperaba ganar el Área de la Bahía pero
            nuestra campaña abrió el camino hacia la victoria de Bernie en
            California.
          </strong>
        </p>

        <p>
          Docenas de nuevos miembros se convirtieron en los líderes que crearon
          el programa "Construye la Bahía para Bernie", la organización
          distribuida, nuestra recaudación de fondos, y eventos sociales. A
          través de estos esfuerzos, politizamos y activamos a la gente
          trabajadora en todo la Bahía del Este.
        </p>

        <p>
          A pesar de que el Partido Demócrata se alineó detrás de Biden,{" "}
          <strong>
            la clase obrera se unió en torno a la plataforma de Bernie
          </strong>{" "}
          y ganó California con una coalición diversa y con el apoyo excepcional
          de los jóvenes y la gente de color, en particular la comunidad Latina.
          Cientos de miles de personas en la Bahía del Este votaron por Bernie,
          y a través de nuestros esfuerzos contactamos e identificamos a cinco
          mil partidarios.
        </p>
      </Element>
      <Element name="triple-crisis" id="triple-crisis">
        <h2>La triple crisis</h2>
        <p>
          En los meses transcurridos desde la victoria de Bernie en California,
          las condiciones han cambiado drásticamente y{" "}
          <strong>ahora nos enfrentamos a una triple crisis</strong> precipitada
          por la pandemia de Covid-19: una crisis sanitaria mundial que ha
          matado a miles de personas, una grave recesión económica, y una crisis
          política debido al surgimiento global de la derecha racista.
        </p>

        <p>
          COVID-19 ya ha cobrado la vida de miles de personas de la clase
          trabajadora, desproporcionadamente gente de color, y el sistema de
          salud de nuestro país, singularmente cruel, ha dejado a millones de
          personas en peligro debido a la falta de equipos medicos y a la
          incapacidad de pagar. El desempleo masivo está costando el seguro
          médico de más y más trabajadores cada día.
        </p>

        <p>
          Los poderosos están usando este desastre para imponer su agenda de
          especulación, austeridad, y privatización. Ya hemos visto masivos
          recortes presupuestarios y rescates corporativos, y hay más en el
          horizonte. Mientras tanto, millones de personas no pueden pagar la
          renta y se están endeudando para cubrir sus necesidades básicas.
        </p>

        <p>
          Un creciente movimiento de la extrema derecha culpa a los inmigrantes,
          buscando restringir su libertad de movimiento, despojandolos de sus
          derechos, y encarcelándolos. A medida que las economías se derrumban,
          la inestabilidad política, y el nacionalismo aumentan, el nivel de
          hostilidad se intensifica, como también la probabilidad de conflictos
          internacionales. El cambio climático sigue siendo una amenaza
          inminente, mientras que se evaporan las posibilidades de colaboración
          internacional en cuestiones climáticas.
        </p>

        <p>
          Mientras tanto, nuestras instituciones democráticas deficientes se
          están erosionando aún más debido a la privación masiva del derecho de
          votar, lo que consolida el poder político de la clase capitalista y
          sus aliados.
        </p>
      </Element>
      <Element name="working-class-fights-back" id="working-class-fights-back">
        <h2>La clase obrera se defiende</h2>
        <p>
          ¡Pero los trabajadores están resistiendo! Los trabajadores de primera
          línea, desproporcionadamente mujeres y gente de color, están tomando
          medidas para conseguir mejor paga y protección, y los inquilinos están
          reteniendo la renta.
        </p>

        <p>
          Antes de la crisis, la campaña de Bernie aumentó la conciencia de
          clase y el apetito por la política socialista democrática en toda la
          clase trabajadora multirracial. Entre las crecientes expectativas de
          la campaña de Bernie y la creciente desesperación por la crisis
          económica, hay miles de nuevos trabajadores radicalizados en la Bahía
          del Este.
        </p>

        <p>
          <strong>
            En este momento, la tarea de DSA es reunir a los partidarios de
            Bernie recién inspirados y a los trabajadores recién activados en un
            movimiento lo suficientemente poderoso como para desafiar a la clase
            dominante.
          </strong>{" "}
          Por un lado, debemos enraizar el "¡No yo, nosotros!" en la clase
          trabajadora que, al suspender su trabajo, tiene el poder de hacer caer
          de rodillas a los capitalistas. Por otro lado, debemos inspirar a los
          trabajadores organizados y a los nuevos militantes para que hagan
          campañas de reformas estructurales que combatan la opresión y protejan
          y expandan los servicios públicos vitales.
        </p>
      </Element>
      <Element
        name="rank-and-file-worker-power"
        id="rank-and-file-worker-power"
      >
        <h2>1. Poder al trabajador de base!</h2>
        <h3>
          Reconstruir un movimiento laboral militante, democrático, y de
          izquierda apoyando y uniendo a las bases
        </h3>

        <p>
          COVID-19 ha dejado más claro que nunca que hay dos clases: los jefes,
          que nos mandan a trabajar donde podríamos contraer un virus fatal, y
          los trabajadores cuyo único interés en este momento es sobrevivir.
          Esto ha incitado a los trabajadores a organizarse para cerrar los
          lugares de trabajo y obtener equipamientos de protección personal y la
          paga por riesgo. Necesitamos fortalecer este crecimiento en la
          militancia de las bases.
        </p>

        <p>
          <strong>
            Apoyamos una{" "}
            <ExternalLink href="https://www.jacobinmag.com/2019/03/rank-and-file-strategy-union-organizing">
              estrategia de trabajadores de base (rank-and-file)
            </ExternalLink>{" "}
            para reconstruir un movimiento laboral militante, democrático, y de
            izquierda.
          </strong>{" "}
          La clave de esta estrategia es desarrollar líderes trabajadores de
          base (rank-and-file) que se organicen permanentemente en el lugar de
          trabajo. Estos líderes son a menudo, pero no siempre,
          auto-identificados como socialistas. La toma de posesión de los
          sindicatos por parte de las bases destinará enormes recursos
          sindicales a las huelgas y a la organización de los no organizados, a
          una escala mayor que la que pueden tener los esfuerzos de organización
          al estilo de las ONGs.
        </p>

        <p>
          Podemos reconstruir este grupo de militante de varias maneras: tomando
          puestos de trabajo sindicalizados en los que podamos identificar y
          cohesionar a los líderes orgánicos y reformar los sindicatos
          existentes, tomando puestos de trabajo en lugares de trabajo no
          sindicados para organizar un sindicato, y apoyando a los trabajadores
          que ya están en movimiento, como la huelga de solidaridad que hicimos
          con los maestros de la OEA de Oakland, y el Comité de Organización de
          Trabajadores de Emergencia (EWOC) apoyando a los trabajadores que se
          organizan durante COVID-19. Concretamente, DSA de East Bay debería:
        </p>

        <ul>
          <li>
            <strong>
              Construir una canalización hacia trabajos de base (rank-and-file
              jobs).
            </strong>{" "}
            Con muchos miembros en cesantía temporal o permanente, podemos
            organizarnos en industrias estratégicas y apoyar la militancia de la
            clase trabajadora, incluso en lugares de trabajo no organizados.
            Debemos apoyar a los activistas de YDSA para que se integren a los
            trabajadores de base cuando se gradúen. Los activistas que se
            incorporen al movimiento laboral deben obtener recursos y tutela de
            organizadores con experiencia.
          </li>

          <li>
            <strong>
              Apoyar el{" "}
              <ExternalLink href="https://jacobinmag.com/2020/04/united-electrical-workers-dsa-workplace-organizng-coronavirus/">
                EWOC
              </ExternalLink>
            </strong>
            , una colaboración entre el DSA y la Unión de Trabajadores
            Eléctricos, de Radio y de Máquinas de América, que apoya
            directamente a los trabajadores que se organizan durante COVID-19 y
            construye una ola de militancia laboral. Nuestros miembros deben
            participar en el EWOC a medida que crece, y apoyar a los
            trabajadores locales que se organizan a través de él.
          </li>

          <li>
            <strong>Continuar el trabajo de solidaridad local</strong>,
            organizando con los maestros de la OEA de Oakland contra los cierres
            de escuelas y los recortes presupuestarios, los trabajadores de la
            salud del SEIU 1021 que luchan por el PPE, y los trabajadores de AC
            Transit de ATU 192, y apoyar y promover la nueva organización, junto
            con el Sindicato de Tartine y otros trabajadores que luchan por el
            reconocimiento sindical.
          </li>
        </ul>
      </Element>
      <Element
        name="fight-racism-and-oppression"
        id="fight-racism-and-oppression"
      >
        <h2>2. Combatir el Racismo y la Opresión</h2>
        <h3>
          Establecer campañas contra el racismo y enraizar nuestra organización
          en la clase trabajadora multirracial.
        </h3>

        <p>
          Debemos conectar nuestra lucha con la lucha contra el racismo,
          especialmente cuando la pandemia devasta las comunidades de color que
          sufren tasas de infección y mortalidad desproporcionadas.
        </p>

        <p>
          Las raíces de esta disparidad se remontan a la fundación racista de
          este país y a la perpetuación del racismo como ideología dominante.
          Las personas de color tienen más probabilidades de trabajar en empleos
          mal remunerados, tienen menos probabilidades de recibir beneficios, de
          poder trabajar desde su casa, de tener ahorros, y de poder no
          trabajar. Esto ha significado una viciosa segregación de la gente de
          color. La austeridad, la gentrificación, y la brutalidad policial han
          destruido las oportunidades de la clase trabajadora de Oakland.
        </p>

        <p>
          <strong>
            La solidaridad significa{" "}
            <ExternalLink href="https://jacobinmag.com/2018/11/democratic-socialism-class-organizing-racism-sexism">
              unir a la clase obrera multirracial
            </ExternalLink>{" "}
            contra la opresión y la explotación.
          </strong>{" "}
          Debemos exigir programas universales que garanticen a la gente de
          color vivienda, comida, atención médica, educación y todos los frutos
          de su trabajo - y debemos enfrentar las opresiones particulares a
          través de la lucha para defender y expandir los derechos
          reproductivos, terminar con la discriminación en la vivienda y el
          trabajo, y lograr la apertura de las fronteras y el fin de las
          deportaciones.
        </p>

        <p>
          Debemos comprometernos a{" "}
          <strong>
            luchar contra el capitalismo, el racismo y la opresión
          </strong>
          , y{" "}
          <strong>arraigar el DSA en la clase trabajadora multirracial</strong>.
          Este año, debemos:
        </p>

        <ul>
          <li>
            <strong>Priorizar la diversificación de la DSA de East Bay.</strong>{" "}
            Podemos tomar pasos críticos este año hacia la diversificación de
            nuestras filas continuando la formación de YDSA alrededor de la
            Bahía del Este que reúna a jóvenes y diversos organizadores, tomando
            trabajos de base que coloquen a los socialistas dentro de la clase
            obrera multirracial, reclutando activamente desde nuestra diversa
            lista de contactos de nuestra campaña para Bernie, llevando a cabo
            campañas antirracistas, y luchando contra el racismo a través de
            nuestras campañas.
          </li>

          <li>
            <strong>
              Construir campañas para enfrentar el racismo capitalista de forma
              directa
            </strong>
            , como nuestra{" "}
            <strong>
              Campaña de Justicia en el Salón de Clases (Classroom Justice)
            </strong>{" "}
            contra el cierre de escuelas, que defiende a las comunidades de
            color de Oakland del lobby de las escuelas charter, y la
            administración de escuelas respaldadas por millonarios. Nuestra
            <strong>campaña de Solidaridad con AHS</strong> defiende la fuerza
            laboral multirracial en la primera línea de la pandemia y refuerza
            el Sistema de Salud de Alameda que provee una red de seguridad para
            las diversas comunidades del Condado de Alameda.
          </li>

          <li>
            <strong>
              Construir la fuerza del movimiento laboral para{" "}
              <ExternalLink href="https://jacobinmag.com/2019/01/los-angeles-teachers-strike-antiracism-unions">
                ganar demandas antirracistas
              </ExternalLink>{" "}
              y proteger a los trabajadores de primera línea.
            </strong>{" "}
            Los trabajadores de color están haciendo la mayoría del "trabajo
            esencial" durante la pandemia, y debemos apoyar a estos trabajadores
            a través del EWOC y el trabajo solidario mientras se organizan,
            exigen PPE y otras medidas de seguridad, y ganan la paga por riesgo.
            Este trabajo salva vidas y construye la militancia de la clase
            trabajadora multirracial.
          </li>

          <li>
            <strong>
              Integrar la política de anti-opresión en todas nuestras campañas,
              comunicaciones, y educación política.
            </strong>{" "}
            Nuestros llamados por un Medicare para Todos y un Green New Deal
            deberían poner en primer plano las demandas para revocar la Enmienda
            de Hyde y terminar con el racismo ambiental. Nuestra publicación
            <em>Majority</em> debería continuar cubriendo las luchas contra{" "}
            <ExternalLink href="https://eastbaymajority.com/mosser-tenant-organizing-moms4housing-rent-hikes/">
              la gentrificación
            </ExternalLink>{" "}
            y{" "}
            <ExternalLink href="https://eastbaymajority.com/the-alameda-county-sheriffs-ties-to-the-racist-far-right/">
              la policía
            </ExternalLink>
            . Y debemos incorporar el feminismo socialista, el antirracismo, y
            las perspectivas internacionalistas en nuestra educación política
            para profundizar nuestro análisis colectivo de cómo combatir todas
            las formas de opresión.
          </li>
        </ul>
      </Element>
      <Element
        name="fight-austerity-and-privatization"
        id="fight-austerity-and-privatization"
      >
        <h2>3. Luchar contra la austeridad y la privatización</h2>
        <h3>
          Revertir la privatización, conseguir "Schools &amp; Communities First"
          y organizar a los inquilinos y a los desempleados
        </h3>
        <p>
          Mientras la depresión económica se establece, podemos esperar una ola
          de rescates corporativos, recortes presupuestarios y privatizaciones,
          aunque la falta de programas públicos costaban las vidas de mucha
          gente incluso antes de COVID.{" "}
          <strong>
            Sólo un movimiento organizado contra la austeridad puede revertir
            esta destrucción del bien público.
          </strong>
        </p>

        <p>
          Nuestros aliados naturales en la lucha contra la austeridad son los
          trabajadores de base (rank-and-file) del sector público y sus
          sindicatos. Debemos tratar de unir a los trabajadores públicos en
          todos los lugares de trabajo para oponerse a los recortes y la
          privatización y culpar a la clase capitalista por la crisis.
        </p>

        <p>
          La lucha contra la austeridad también significa la expansión de los
          servicios sociales y convertir servicios privatizados en servicios
          públicos usando un esquema socialista. Deberíamos:
        </p>

        <ul>
          <li>
            <strong>
              Luchar contra los recortes presupuestarios en el Distrito Escolar
              Unificado de Oakland y el Sistema de Salud de Alameda.
            </strong>{" "}
            Nuestra tarea inmediata es apoyar a los trabajadores del hospital en
            el AHS luchando por financiar su hospital y organizarse con la OEA
            contra los recortes presupuestarios en el OUSD.
          </li>

          <li>
            <strong>
              Conseguir{" "}
              <ExternalLink href="https://www.schoolsandcommunitiesfirst.org/">
                “Schools &amp; Communities First”
              </ExternalLink>{" "}
              en noviembre
            </strong>{" "}
            para cobrar impuestos a las corporaciones y asegurar miles de
            millones más de ingresos para los servicios públicos.
          </li>

          <li>
            <strong>
              Desarrollar campañas estratégicas locales contra la austeridad y
              la privatización.
            </strong>{" "}
            Debemos realizar campañas que tengan un impacto material en la vida
            de la clase trabajadora de la Bahía del Este y levantar demandas
            masivas — como{" "}
            <ExternalLink href="https://letsownpge.org/">
              convertir PG&amp;E en un servicio público
            </ExternalLink>{" "}
            al Green New Deal, conectando la prevención de la venta de terrenos
            públicos a la lucha por la vivienda social para todos, conectando la
            moratoria de las escuelas chárter a la reversión de la
            charterización, y conectando la construcción de un robusto sistema
            de salud pública a Medicare Para Todos.
          </li>

          <li>
            <strong>
              Organizar a los inquilinos y a los desempleados y subempleados
            </strong>
            contra los propietarios inmobiliarios y los multimillonarios y
            potenciar su poder para exigir la suspensión de las rentas,
            moratorias de desalojo, programas sociales universales totalmente
            financiados, y una garantía de empleo con un salario digno.
          </li>
        </ul>
      </Element>{" "}
      <Element
        name="message-towards-the-masses"
        id="message-towards-the-masses"
      >
        <h2>4. Comunicación hacia las masas</h2>
        <h3>
          Inversión en comunicaciones y educación política con un amplio alcance
        </h3>
        <p>
          No podemos alcanzar a millones de votantes de Bernie y a los nuevos
          trabajadores radicalizados sólo a través de interacciones uno a uno.
          Especialmente en condiciones de cuarentena, la construcción de
          plataformas de comunicación en masa serán clave para reclutar nuevos
          militantes al proyecto socialista democrático.
        </p>

        <p>
          La educación política es clave para formar líderes y organizadores
          socialistas de por vida y debemos hacerla lo más accesible posible.
          Nuestra Escuela Nocturna (Socialist Night School) atrae entre 40 y 70
          asistentes a cada sesión y durante el confinamiento, hemos visto cómo
          los eventos virtuales pueden alcanzar una audiencia aún más amplia.
        </p>

        <p>
          A través de nuestras comunicaciones y educación política, necesitamos
          atraer a los partidarios de Bernie y a los trabajadores de base a
          nuestra visión a largo plazo y hacer que se involucren en el proyecto
          socialista. Para aumentar el alcance de nuestra programación de
          comunicaciones y educación política, debemos:
        </p>

        <ul>
          <li>
            <strong>
              Transformar a{" "}
              <em>
                <ExternalLink href="https://eastbaymajority.com/">
                  Majority
                </ExternalLink>
              </em>{" "}
              en una fuerza mediática que competirá con los medios de
              comunicación locales y alcanzará una mayor audiencia.
            </strong>{" "}
            East Bay Majority ha publicado artículos sobre las luchas de los
            trabajadores en{" "}
            <ExternalLink href="https://eastbaymajority.com/alameda-countys-public-health-system-is-a-nightmare-for-workers-and-patients-covid-19-will-make-it-worse/">
              el Sistema de Salud de Alameda
            </ExternalLink>{" "}
            y{" "}
            <ExternalLink href="https://eastbaymajority.com/ousd-blueprint-plan-closures-school-board-violence/">
              el Distrito Escolar Unificado de Oakland
            </ExternalLink>{" "}
            leídos por decenas de miles de personas. Algunos fueron compartidos
            por figuras mediáticas y consultores de la campaña de Bernie y los
            escritores de <em>Majority</em> a menudo pasan a publicar su obra a
            nivel nacional.
          </li>

          <li>
            <strong>
              Expandir nuestra capacidad de periodismo de investigación y
              multimedia.
            </strong>{" "}
            Debemos seguir{" "}
            <ExternalLink href="https://eastbaymajority.com/workers-at-east-oakland-mcdonalds-strike-for-safety/">
              destacando las luchas de los trabajadores
            </ExternalLink>
            , entrenar a más reporteros en{" "}
            <ExternalLink href="https://eastbaymajority.com/the-alameda-county-sheriffs-ties-to-the-racist-far-right/">
              investigación
            </ExternalLink>
            , y seguir construyendo equipos para crear "compartibles"
            (shareables) para los medios sociales, videos, y medios que atraigan
            a una audiencia masiva.
          </li>

          <li>
            <strong>
              Ganar publicidad en la prensa para nuestras campañas y acciones.
            </strong>{" "}
            Los medios de comunicación{" "}
            <ExternalLink href="https://www.salon.com/2020/03/04/people-believe-another-world-is-possible-sanders-supporters-party-in-california-after-huge-win/">
              se fijaron
            </ExternalLink>{" "}
            en nuestra campaña Bernie, y deberíamos captar este atención
            enviando regularmente comunicados de prensa y desarrollando
            relaciones con la prensa local.
          </li>

          <li>
            <strong>
              Expandir nuestra programación de la Escuela Nocturna Socialista
              (Socialist Night School).
            </strong>{" "}
            Deberíamos organizar debates y paneles de discusión y ofrecer
            programación de educación política más avanzada para los líderes en
            desarrollo. También deberíamos desarrollar planes de estudio para
            resaltar las conexiones entre las luchas alrededor del mundo y las
            del Área de la Bahía para entender la reacción del capitalismo a la
            pandemia a una escala global.
          </li>
        </ul>
      </Element>
      <Element
        name="build-a-multiracial-democratic-dsa"
        id="build-a-multiracial-democratic-dsa"
      >
        <h2>5. Construir una organización multirracial y democrática</h2>
        <h3>
          Expandir DSA de East Bay y su enraizamiento en la clase trabajadora
          multirracial
        </h3>

        <p>
          El primer paso para convertirse en el tipo de organización de masa que
          puede llevar a cabo{" "}
          <ExternalLink href="https://socialistcall.com/2018/08/16/liberalism-ultraleftism-or-mass-action/">
            la política de forma masiva
          </ExternalLink>{" "}
          en la que creemos es enraizarnos en la clase obrera multirracial. La
          campaña de Bernie demostró que el socialismo democrático entusiasma a
          una base diversa, pero la composición de DSA de East Bay no refleja
          eso. Esto debe ser abordado con urgencia.
        </p>

        <p>
          Si queremos incorporar a la clase trabajadora multirracial,
          necesitamos una campaña de reclutamiento y organización dedicada.
          Nunca nos hemos focalizado en el reclutamiento explícito. Ya es hora.
          Deberíamos basar este trabajo en nuestras campañas y continuar con las
          tácticas de la campaña de Bernie como nuestra exitosa serie de toca de
          puertas "Construye la Bahía para Bernie", el equipo de organización
          distribuido, el modelo de organización relacional de la campaña de
          Bernie, y lanzar eventos orientados al reclutamiento en toda la Bahía
          del Este, comenzando en áreas como San Leandro, Hayward, East Oakland,
          y Richmond donde profundizamos nuestras raíces a través de la campaña
          para Bernie.
        </p>

        <p>
          <strong>
            Convertirse en una organización de masa también requiere que hagamos
            nuestra organización más democrática y que demos a los miembros
            control sobre las decisiones importantes
          </strong>
          , limitando al mismo tiempo los debates sobre cuestiones de
          procedimiento y evitando las luchas internas. El Comité Directivo
          (Steering Committee) no debería ser una entidad puramente
          administrativa, sino un entidad política que busca identificar y
          enmarcar los debates importantes de la organización.
        </p>

        <p>
          Tenemos que construir una cultura de debate participativo y de
          camaradería para revertir la disminución de la asistencia a las
          Reuniones Generales que vimos el año pasado.
        </p>

        <ul>
          <li>
            <strong>
              Lanzar una campaña de reclutamiento, específicamente para
              diversificar nuestra organización.
            </strong>{" "}
            Eso significa miembros que se dedican a la actividad de contacto
            regular con estudiantes de las universidades comunitarias locales
            para ayudarles a organizar nuevos grupos de YDSA y la asistencia
            regular a los eventos populares.
          </li>

          <li>
            <strong>
              Expandir nuestras capacidades de comunicación en español y
              materiales multilingües
            </strong>{" "}
            para alcanzar una mayor audiencia identificando más compañeros
            multilingües y reclutando a nuestro equipo de traducción.
          </li>

          <li>
            <strong>
              Construir mecanismos de formación de líderes que promuevan el
              crecimiento de líderes de color y de diversas identidades de
              género.
            </strong>
            A medida que diversificamos nuestra organización, necesitamos
            priorizar la diversificación de nuestro liderazgo también.
          </li>

          <li>
            <strong>Expandir nuestro programa de movilizadores</strong> con tres
            objetivos: comunicar con nuestros miembros y contactos durante
            COVID-19, conectarlos a campañas y educación política, y activarlos
            como organizadores socialistas. También deberíamos continuar con
            nuestros entrenamientos para organizadores y relacionarlos más
            explícitamente con nuestras campañas.
          </li>

          <li>
            <strong>
              Adoptar un enfoque organizador con respecto a nuestra democracia.
            </strong>{" "}
            Deberíamos invitar activamente a los miembros a nuestras reuniones
            generales y vincularlos a los debates activos, para que los miembros
            puedan decidir su posición sobre los temas políticos importantes que
            nos enfrentan.
          </li>
        </ul>
      </Element>
      <Element name="bigger-than-bernie" id="bigger-than-bernie">
        <h2>6. Más grande que Bernie</h2>
        <h3>
          Unir a los partidarios multirraciales de Bernie para luchar por el
          socialismo democrático
        </h3>
        <p>
          Más de 2 millones de californianos votaron por Bernie en 2020. A
          través de la campaña de Bernie de DSA hablamos con más de cinco mil
          partidarios de Bernie en toda la Bahía del Este y el DSA ha visto
          aumentar su número de miembros a raíz de esta campaña. Al mismo
          tiempo, los sindicatos, las organizaciones culturales, y grupos como
          Mijente, Dream Defenders, y el Sunrise Movement apoyaron a Bernie y
          lucharon por su plataforma socialista democrática.
        </p>

        <p>
          Estos son nuestros aliados naturales en la lucha por nuestras
          prioridades compartidas y{" "}
          <strong>
            deberemos reunir a estos partidarios y grupos de Bernie en un
            movimiento socialista amplio, diverso, y democrático
          </strong>
          .
        </p>

        <p>
          Bernie no ganó las primarias, pero su campaña creó uno de los
          movimientos socialistas más grande que este país ha visto. Para
          aquellos inspirados por esa campaña y que lucharon por los que no
          conocían, DSA debiera ser su hogar político. Nuestro trabajo es darles
          la bienvenida. Para hacerlo, debemos:
        </p>

        <ul>
          <li>
            <strong>
              Unir a los partidarios de Bernie, adoptando{" "}
              <ExternalLink href="https://bernie.dsausa.org/issues">
                la plataforma de Bernie
              </ExternalLink>{" "}
              como la de DSA, y animar a las organizaciones asociadas a firmar
              esta plataforma.
            </strong>{" "}
            También debemos profundizar los lazos con estos aliados al
            co-organizar eventos y hacer campañas conjuntas enfocadas en las
            demandas de la plataforma.
          </li>

          <li>
            <strong>Reclutar activistas y partidarios de Bernie en DSA.</strong>{" "}
            Tenemos que organizar a estos nuevos socialistas, empezando por los
            que identificamos a través de la campaña.
          </li>

          <li>
            <strong>
              Desarrollar una estrategia para formar{" "}
              <ExternalLink href="https://www.jacobinmag.com/2016/12/socialist-party-bernie-sanders-labor-capitalism/">
                un partido independiente de la clase obrera
              </ExternalLink>{" "}
              en colaboración con las organizaciones de la coalición Bernie.
            </strong>{" "}
            En el corto plazo, debemos continuar haciendo campañas electorales
            de lucha de clase que usen tácticamente la línea de votación del
            Partido Demócrata.
          </li>

          <li>
            <strong>
              Reclutar miembros de DSA y aliados para que se presenten a las
              elecciones de 2022.
            </strong>{" "}
            Deberíamos empezar a investigar elecciones estratégicas, buscar
            candidatos, y construir coaliciones para competir en las elecciones
            y ganar a lo grande en 2022.
          </li>
        </ul>
      </Element>
    </div>
  </Layout>
)

export default Platform
