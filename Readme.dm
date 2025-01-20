00 - Introduction to ETUR
In diesem Tutorial geht es darum, eine mögliche Kundenanforderung zu analysieren. Das Ziel ist es, ein Gespür dafür zu entwickeln, was die Applikation alles können muss, und einen ersten Entwurf zu erstellen.

Hintergrund
Die PlanB. GmbH möchte eine neue Reporting-Plattform ins Leben rufen. Easy-to-use reporting oder kurz "ETUR" ist das neue Produkt, welches Developer, Product Managers und Kunden dabei helfen soll, einfacher Reports zu erstellen und zu klassifizieren.

Bereitstellung von Dokumentationen und Handbüchern, das Verfolgen von Bugs und allgemeines Kundenfeedback sind alles Aufgaben, die ETUR in Zukunft übernehmen soll. Zwar gibt es bereits Lösungen für all diese Probleme am Markt, aber häufig sind diese für einen speziellen Bereich optimiert. Beispielsweise gibt es für das Tracken von Bugs Softwarelösungen wie z.B. Bugzilla oder MantisBT.

Ein Problem, das die PlanB. allerdings festgestellt hat, ist die Kombination der verschiedenen Stakeholder und die Art der Reports, die auftreten können.

✏️ Frage: Was ist ein Stakeholder und welche möglichen Stakeholder gibt es in ETUR?
    Antwort:
        Stakeholder sind Personen oder Gruppen, die direkt oder indirekt von der Nutzung der ETUR-Plattform betroffen sind oder ein Interesse an ihrem Erfolg haben.
        Mögliche Stakeholder in der ETUR-Plattform:
            1.	Kunden: Personen, die Berichte einreichen und auf die Plattform angewiesen sind, um Unterstützung zu erhalten und den Status zu verfolgen.
            2.	Produktmanager: Verantwortlich für die Überwachung, Organisation und Zuweisung von Berichten an verschiedene Teams.
            3.	Entwickler: Zuständig für die Bearbeitung von Berichten, Fehlerbehebung und die Implementierung neuer Funktionen.
            4.	Technischer Support: Teams, die die Plattform nutzen, um Hilfe zu leisten oder Probleme zu klären.
            5.	Geschäftsleitung: Interessiert an Statistiken und der allgemeinen Leistung der Plattform.

        Innovative Lösungen:
        •	Einführung einer Priorisierung von Stakeholdern basierend auf ihrer Rolle (z. B. Kunden mit hoher Priorität).
        •	Entwicklung eines interaktiven Dashboards, das relevante Informationen für jeden Stakeholder basierend auf seinen Bedürfnissen anzeigt (Customizable Dashboard).


✏️ Frage: Was für mögliche Probleme kann es bei klassischen Lösungen geben?
    Antwort:
        1.	Übermäßige Spezialisierung: Klassische Lösungen sind oft auf ein bestimmtes Gebiet spezialisiert, was ihre Fähigkeit einschränkt, mit einer Vielzahl von Berichten umzugehen.
        2.	Mangelnde Integration: Viele Tools arbeiten unabhängig voneinander, was die Integration in eine einzige Arbeitsumgebung erschwert.
        3.	Unflexible Benutzeroberfläche: Viele Lösungen bieten nicht genügend Anpassungsmöglichkeiten, um den unterschiedlichen Bedürfnissen der Nutzer gerecht zu werden.
        4.	Schwierigkeit in der Bedienung: Einige Tools sind für technisch weniger versierte Nutzer zu kompliziert.
    Innovative Lösungen:
    •	Gestaltung der ETUR-Plattform als flexibel und integrierbar mit Tools wie GitHub, Slack oder Jira.
    •	Einsatz von Machine-Learning-Technologien zur Analyse wiederkehrender Muster in Berichten und zur Verbesserung der Effizienz.


Der erste Meilenstein
In einem ersten Meilenstein möchte die PlanB. folgende Ziele erreichen:

Kunden können über ihre gewohnten Tools Feedback einreichen.
Kunden werden über Statusänderungen informiert.
Product Manager können hierfür Einstellungen vornehmen, was für Änderungen an den Kunden weitergeleitet werden.
Kunden können den Status ihres Reports einsehen.
Produkt Manager bekommen eine Übersicht über alle Reports im System.
Produkt Manager können nach Report-Art im System filtern.
Produkt Manager können Reports einzelnen Development Teams zuordnen.
Developer können weiterhin in ihrer gewohnten Umgebung arbeiten (Github Issues).

✏️ Frage: Was versteht man unter Kundenfeedback alles?
    Antwort:
    Kundenfeedback umfasst:
        1.	Fehlerberichte (Bug Reports): Beschreibung von Problemen, die während der Nutzung des Produkts auftreten.
        2.	Funktionsanfragen (Feature Requests): Wünsche zur Implementierung neuer oder Verbesserung bestehender Funktionen.
        3.	Beschwerden: Negative Rückmeldungen zu Dienstleistung oder Produkt.
        4.	Lob und positives Feedback: Anerkennung für nützliche oder herausragende Eigenschaften.
    Innovative Lösungen:
    •	Entwicklung eines interaktiven Feedback-Formulars, das sich an die Art des Feedbacks anpasst (z. B. Verbesserungsvorschlag oder Beschwerde).
    •	Bereitstellung eines KI-gestützten Systems zur automatischen Kategorisierung des Feedbacks nach Typ und Priorität.


✏️ Frage: Überlegt euch, was sind alle Informationen, die ein Report unbedingt benötigt?
    Antwort:
    Ein Bericht sollte folgende Informationen enthalten:
        1.	Grundlegende Informationen: 
            o	Name des Kunden.
            o	Kontaktdaten (E-Mail, Telefonnummer).
        2.	Beschreibung des Problems oder der Anfrage: 
            o	Titel des Berichts.
            o	Detaillierte Problembeschreibung oder Anforderung.
            o	Schritte, die der Kunde vor dem Problem unternommen hat (falls vorhanden).
        3.	Priorität: 
            o	Auswirkungen des Problems (kritisch, mittel, gering).
        4.	Anhänge: 
            o	Screenshots oder erläuternde Dateien.
        5.	Kategorisierung: 
            o	Typ des Berichts (Fehler, Verbesserungsvorschlag, Beschwerde).
        6.	Datum und Uhrzeit: 
            o	Wann das Problem aufgetreten ist oder die Anfrage eingereicht wurde.
    Innovative Lösungen:
    •	Dynamisches Formulardesign, das erforderliche Felder basierend auf dem Berichtstyp anpasst.
    •	Verwendung von Natural-Language-Processing-Technologie, um Berichte automatisch zu priorisieren.
    ________________________________________
    Zusätzliche Vorschläge für die Plattformentwicklung:
        1.	Einführung eines intelligenten Benachrichtigungssystems: Informiert Nutzer über Updates oder nächste Schritte in ihren Berichten.
        2.	Punktesystem für Kundenbewertungen: Vergibt Punkte basierend auf der Nutzung der Plattform, um die Interaktion zu fördern.
        3.	Mobile App: Ermöglicht Stakeholdern, Berichte einfach unterwegs zu verfolgen und zu verwalten.
