import React from "react";
import Svg from "@styleguide/components/svg";

type CareerHeroClipartProps = {
  className?: string;
};

const CareerHeroClipart = ({ className }: CareerHeroClipartProps) => (
  <Svg
    id="career-hero-clipart"
    title="career-hero-clipart"
    viewBoxWidth={755}
    viewBoxHeight={659}
    className={className}
  >
    <path
      fill="#F58862"
      d="M301 276.954c60.751 0 110-49.249 110-110S361.751 56.9541 301 56.9541 191 106.203 191 166.954s49.249 110 110 110zM88 537.954c35.899 0 65-29.101 65-65 0-35.898-29.101-65-65-65-35.8985 0-65 29.102-65 65 0 35.899 29.1015 65 65 65zM505 605.954c73.454 0 133-59.546 133-133 0-73.454-59.546-133-133-133-73.454 0-133 59.546-133 133 0 73.454 59.546 133 133 133z"
      opacity=".6"
    />
    <path
      fill="#6C63FF"
      d="M64.1299 258.037l-1.9561-.417c.419-1.965.8557-3.924 1.3101-5.875l1.9482.453c-.4516 1.94-.8857 3.886-1.3022 5.839z"
    />
    <path
      fill="#02B3C1"
      d="M693.887 241.513c-1.026-3.81-2.139-7.658-3.307-11.437l1.91-.591c1.176 3.802 2.296 7.674 3.328 11.509l-1.931.519zm-625.5374-.874l-1.9297-.525c1.0469-3.846 2.1817-7.729 3.3731-11.541l1.9091.597c-1.1845 3.789-2.312 7.647-3.3525 11.469zm618.5084-21.85c-1.309-3.735-2.701-7.485-4.138-11.147l1.861-.73c1.446 3.684 2.848 7.458 4.164 11.215l-1.887.662zm-611.3805-.953l-1.8857-.667c1.332-3.762 2.7515-7.548 4.2192-11.252l1.8594.736c-1.459 3.682-2.8696 7.445-4.1929 11.183zM678.17 196.653c-1.574-3.614-3.24-7.254-4.951-10.816l1.802-.866c1.722 3.585 3.399 7.246 4.983 10.884l-1.834.798zm-593.8961-1.017l-1.831-.805c1.6054-3.65 3.3003-7.318 5.0385-10.904l1.7998.872c-1.7275 3.564-3.4121 7.21-5.0073 10.837zm583.5941-20.429c-1.844-3.5-3.774-7.009-5.738-10.427l1.734-.996c1.976 3.439 3.919 6.969 5.774 10.491l-1.77.932zm-573.182-1.049l-1.7666-.938c1.8716-3.522 3.8325-7.054 5.8286-10.498l1.73 1.003c-1.9834 3.422-3.9326 6.933-5.792 10.433zm561.325-19.59c-2.091-3.35-4.276-6.708-6.491-9.982l1.657-1.121c2.229 3.294 4.426 6.674 6.531 10.044l-1.697 1.059zm-549.362-1.054l-1.692-1.065c2.122-3.369 4.336-6.746 6.582-10.037l1.652 1.127c-2.232 3.272-4.433 6.628-6.542 9.975zm536.015-18.667c-2.321-3.176-4.746-6.367-7.207-9.483l1.57-1.239c2.476 3.136 4.915 6.346 7.252 9.542l-1.615 1.18zm-522.569-1.034l-1.61-1.187c2.367-3.209 4.823-6.413 7.299-9.524l1.565 1.245c-2.461 3.092-4.902 6.277-7.254 9.466zm507.809-17.664c-2.56-3.011-5.213-6.017-7.883-8.934l1.474-1.351c2.688 2.935 5.357 5.959 7.933 8.989l-1.524 1.296zm-492.96-.994l-1.519-1.302c2.589-3.019 5.272-6.034 7.974-8.961l1.47 1.356c-2.686 2.91-5.352 5.906-7.925 8.907zm476.868-16.5812c-2.78-2.8218-5.646-5.6265-8.519-8.3365l1.373-1.455c2.89 2.727 5.773 5.5488 8.57 8.3881l-1.424 1.4034zm-460.699-.9351l-1.419-1.4092c2.808-2.8281 5.703-5.6382 8.604-8.352l1.367 1.4604c-2.884 2.6973-5.761 5.4903-8.552 8.3008zm443.359-15.4219c-2.976-2.6089-6.04-5.1977-9.108-7.6943l1.262-1.5508c3.087 2.5117 6.17 5.1162 9.164 7.7412l-1.318 1.5039zm-425.959-.8613l-1.312-1.5093c3.005-2.6128 6.096-5.2031 9.189-7.6992l1.256 1.5566c-3.073 2.4805-6.146 5.0552-9.133 7.6519zm407.465-14.1894c-3.153-2.3799-6.4-4.7378-9.65-7.0083l1.145-1.6397c3.271 2.2847 6.538 4.6573 9.71 7.0513l-1.205 1.5967zm-388.927-.774l-1.198-1.6016c3.189-2.3867 6.461-4.7431 9.725-7.0039l1.138 1.6445c-3.243 2.2462-6.495 4.5885-9.665 6.961zm369.375-12.8848c-3.326-2.146-6.739-4.2602-10.143-6.2827l1.022-1.7197c3.424 2.0356 6.858 4.1626 10.205 6.3218l-1.084 1.6806zm-349.798-.6767l-1.078-1.6845c3.351-2.144 6.785-4.2534 10.208-6.27l1.015 1.7236c-3.401 2.0038-6.815 4.1005-10.145 6.2309zm329.285-11.5117c-3.468-1.8926-7.028-3.75-10.581-5.5205l.893-1.79c3.574 1.7817 7.157 3.6504 10.646 5.5547l-.958 1.7558zm-308.774-.5723l-.951-1.7597c3.496-1.8897 7.075-3.7403 10.636-5.4996l.886 1.793c-3.54 1.7485-7.097 3.5879-10.571 5.4663zm287.412-10.0757c-3.601-1.6318-7.289-3.2207-10.964-4.7236l.757-1.8516c3.698 1.5122 7.41 3.1118 11.033 4.7539l-.826 1.8213zm-266.077-.4614l-.819-1.8242c3.619-1.624 7.323-3.2051 11.008-4.6983l.751 1.8536c-3.663 1.4843-7.344 3.0551-10.94 4.6689zm243.977-8.5776c-3.726-1.3648-7.525-2.6768-11.291-3.8999l.618-1.9024c3.789 1.231 7.611 2.5513 11.361 3.9243l-.688 1.878zm-221.935-.3526l-.682-1.8799c3.734-1.355 7.542-2.6567 11.318-3.8701l.612 1.9043c-3.752 1.2056-7.536 2.4995-11.248 3.8457zm199.213-7.0259c-3.809-1.082-7.686-2.1059-11.523-3.0444l.474-1.94237c3.862.94387 7.763 1.97457 11.595 3.06297l-.546 1.9238zm-176.552-.2553l-.541-1.9258c3.827-1.0747 7.731-2.09376 11.603-3.02881l.47 1.94431c-3.849.9292-7.729 1.9419-11.532 3.0103zm153.401-5.40432c-3.873-.7959-7.815-1.53026-11.717-2.1831l.33-1.97266c3.926.65674 7.892 1.396 11.789 2.19677l-.402 1.95899zm-130.235-.188l-.396-1.96c3.904-.79053 7.872-1.51807 11.795-2.1626l.324 1.97364c-3.898.64018-7.842 1.36333-11.723 2.14897v-.00001zm106.729-3.7456c-3.929-.50928-7.915-.95118-11.845-1.31495l.184-1.99121c3.955.36573 7.964.81055 11.918 1.32276l-.257 1.9834zm-83.212-.11866l-.251-1.98437c3.941-.49951 7.952-.93311 11.921-1.28906l.179 1.99218c-3.945.35353-7.932.78468-11.849 1.28126v-.00001zm59.481-2.07715c-3.942-.22021-7.948-.3706-11.91-.44726l.039-1.9999973c3.985.07764 8.017.2289973 11.982.4501873l-.111 1.99707zm-35.743-.05129L363.492.416c3.971-.21044 8.004-.35009 11.986-.416l.033 2c-3.958.06497-7.966.20413-11.913.41308z"
    />
    <path
      fill="#6C63FF"
      d="M698.104 259.145c-.41-1.954-.837-3.902-1.281-5.842l1.949-.448c.449 1.954.878 3.913 1.29 5.88l-1.958.41zM700.802 389.546l-1.963-.388c.386-1.953.754-3.912 1.105-5.878l1.969.35c-.352 1.979-.723 3.951-1.111 5.916z"
    />
    <path
      fill="#02B3C1"
      d="M381 651.954c-2.173 0-4.342-.021-6.505-.063l.039-2c3.953.077 7.934.082 11.892.018l.032 2c-1.815.03-3.635.044-5.458.045zm17.416-.456l-.105-1.998c3.955-.208 7.945-.491 11.859-.841l.178 1.992c-3.938.352-7.953.637-11.932.847zm-35.875-.058c-3.97-.221-7.983-.518-11.929-.882l.183-1.993c3.923.363 7.912.659 11.857.879l-.111 1.996zm59.701-2.069l-.251-1.984c3.937-.498 7.896-1.072 11.767-1.707l.323 1.974c-3.895.638-7.878 1.215-11.839 1.717zm-83.521-.133c-3.951-.512-7.933-1.102-11.834-1.755l.33-1.972c3.877.647 7.834 1.234 11.761 1.743l-.257 1.984zm107.129-3.733l-.396-1.961c3.881-.783 7.787-1.647 11.609-2.567l.468 1.945c-3.846.925-7.776 1.794-11.681 2.583zm-130.724-.21c-3.901-.801-7.829-1.683-11.673-2.621l.475-1.944c3.82.933 7.723 1.81 11.6 2.606l-.402 1.959zm153.983-5.387l-.539-1.926c3.794-1.062 7.625-2.211 11.388-3.418l.61 1.905c-3.786 1.214-7.641 2.371-11.459 3.439zm-177.225-.284c-3.823-1.084-7.684-2.257-11.478-3.486l.616-1.903c3.771 1.222 7.609 2.388 11.408 3.465l-.546 1.924zm199.978-7.004l-.68-1.881c3.695-1.337 7.423-2.762 11.078-4.239l.749 1.854c-3.678 1.486-7.428 2.921-11.147 4.266zm-222.793-.39c-3.738-1.366-7.501-2.821-11.183-4.325l.756-1.851c3.659 1.494 7.399 2.94 11.113 4.298l-.686 1.878zm244.924-8.548l-.816-1.827c3.599-1.61 7.214-3.307 10.743-5.045l.883 1.794c-3.551 1.749-7.188 3.457-10.81 5.078zm-267.119-.51c-3.624-1.639-7.266-3.366-10.826-5.136l.89-1.791c3.538 1.759 7.159 3.477 10.761 5.105l-.825 1.822zm288.548-10.041l-.949-1.76c3.476-1.873 6.958-3.832 10.347-5.823l1.014 1.724c-3.412 2.003-6.915 3.975-10.412 5.859zm-310.002-.627c-3.494-1.9-6.998-3.892-10.415-5.917l1.02-1.721c3.396 2.014 6.878 3.992 10.351 5.881l-.956 1.757zm330.607-11.472l-1.075-1.685c3.312-2.112 6.641-4.322 9.897-6.57l1.136 1.647c-3.276 2.261-6.627 4.484-9.958 6.608zm-351.21-.74c-3.34-2.149-6.687-4.391-9.948-6.663l1.143-1.641c3.242 2.258 6.568 4.486 9.887 6.622l-1.082 1.682zm370.88-12.839l-1.195-1.603c3.155-2.353 6.316-4.801 9.394-7.277l1.254 1.559c-3.097 2.491-6.278 4.954-9.453 7.321zm-390.524-.846c-3.168-2.382-6.341-4.862-9.431-7.37l1.259-1.552c3.072 2.492 6.226 4.956 9.374 7.325l-1.202 1.597zm409.157-14.139l-1.309-1.512c2.981-2.582 5.955-5.255 8.842-7.945l1.363 1.463c-2.903 2.707-5.896 5.396-8.896 7.994zm-427.743-.942c-2.994-2.616-5.977-5.32-8.865-8.036l1.37-1.457c2.87 2.699 5.835 5.387 8.811 7.988l-1.316 1.505zm445.242-15.367l-1.416-1.412c2.795-2.803 5.567-5.686 8.241-8.57l1.467 1.359c-2.69 2.903-5.48 5.804-8.292 8.623zm-462.672-1.022c-2.787-2.819-5.564-5.732-8.254-8.658l1.472-1.354c2.674 2.909 5.434 5.804 8.204 8.605l-1.422 1.407zm478.938-16.524l-1.516-1.304c2.58-2.996 5.137-6.076 7.598-9.154l1.562 1.25c-2.476 3.096-5.049 6.195-7.644 9.208zm-495.123-1.088c-2.575-3.016-5.131-6.123-7.597-9.234l1.567-1.242c2.452 3.092 4.992 6.18 7.552 9.178l-1.522 1.298zm510.073-17.604l-1.607-1.191c2.36-3.185 4.685-6.444 6.91-9.686l1.648 1.131c-2.237 3.263-4.576 6.541-6.951 9.746zm-524.924-1.135c-2.35-3.197-4.672-6.481-6.902-9.76l1.655-1.125c2.215 3.259 4.522 6.523 6.858 9.702l-1.611 1.183zm538.468-18.608l-1.69-1.071c2.111-3.329 4.191-6.751 6.184-10.168l1.729 1.007c-2.006 3.44-4.1 6.882-6.223 10.232zm-551.907-1.156c-2.108-3.358-4.182-6.801-6.1659-10.235l1.7319-1c1.971 3.412 4.033 6.834 6.128 10.172l-1.694 1.063zm563.972-19.533l-1.763-.943c1.87-3.497 3.693-7.064 5.421-10.601l1.796.877c-1.737 3.56-3.572 7.149-5.454 10.667zm-575.923-1.155c-1.856-3.504-3.6714-7.089-5.3955-10.654l1.8008-.871c1.7134 3.544 3.5176 7.106 5.3623 10.589l-1.7676.936zm586.436-20.373l-1.828-.811c1.599-3.608 3.156-7.302 4.626-10.978l1.857.742c-1.479 3.699-3.045 7.416-4.655 11.047zm-596.8306-1.127c-1.5942-3.632-3.1401-7.339-4.5952-11.017l1.8599-.736c1.4458 3.656 2.9824 7.34 4.5664 10.949l-1.8311.804zm605.7286-21.133l-1.882-.674c1.333-3.729 2.612-7.53 3.803-11.296l1.907.604c-1.198 3.788-2.486 7.612-3.828 11.366zm-614.5074-1.06c-1.3232-3.744-2.5947-7.563-3.7783-11.353l1.9092-.596c1.1763 3.766 2.4394 7.562 3.7549 11.283l-1.8858.666zm621.7374-21.809l-1.928-.533c1.047-3.791 2.039-7.666 2.949-11.518l1.948.461c-.917 3.875-1.915 7.775-2.969 11.59zm-628.8717-1.026c-1.041-3.825-2.0254-7.723-2.9257-11.586l1.9482-.453c.8945 3.839 1.8726 7.713 2.9072 11.513l-1.9297.526z"
    />
    <path
      fill="#6C63FF"
      d="M60.9565 388.307c-.3808-1.967-.7441-3.94-1.0898-5.92l1.9707-.344c.3428 1.967.7038 3.928 1.083 5.883l-1.9639.381zM544.265 390.46l-1.86-.735c.726-1.835 1.431-3.713 2.097-5.584l1.885.671c-.674 1.892-1.388 3.792-2.122 5.648z"
    />
    <path
      fill="#02B3C1"
      d="M381 501.454c-2.396 0-4.813-.049-7.186-.144l.082-1.998c3.936.159 7.959.186 11.907.077l.055 2c-1.614.044-3.234.065-4.858.065zm16.878-.802l-.19-1.99c3.939-.375 7.911-.892 11.808-1.536l.326 1.973c-3.942.652-7.96 1.174-11.944 1.553zm-36.074-.236c-3.978-.433-7.989-1.009-11.921-1.713l.353-1.969c3.887.696 7.852 1.266 11.785 1.694l-.217 1.988zm59.826-3.689l-.462-1.946c3.851-.914 7.714-1.971 11.483-3.145l.595 1.91c-3.813 1.186-7.721 2.257-11.616 3.181zm-83.523-.553c-3.884-.976-7.779-2.099-11.577-3.337l.62-1.902c3.755 1.224 7.605 2.335 11.444 3.299l-.487 1.94zm106.508-6.606l-.725-1.863c3.68-1.432 7.361-3.014 10.94-4.698l.853 1.808c-3.621 1.706-7.345 3.305-11.068 4.753zm-129.403-.862c-3.711-1.501-7.413-3.15-11.005-4.902l.877-1.797c3.55 1.731 7.21 3.361 10.878 4.846l-.75 1.853zm151.184-9.394l-.975-1.746c3.455-1.929 6.885-4.001 10.193-6.157l1.092 1.676c-3.346 2.181-6.815 4.276-10.31 6.227zm-172.831-1.155c-3.466-1.996-6.907-4.137-10.227-6.365l1.114-1.66c3.282 2.202 6.684 4.319 10.111 6.293l-.998 1.732zm193.002-11.991l-1.205-1.596c3.161-2.385 6.276-4.906 9.258-7.492l1.311 1.512c-3.016 2.615-6.167 5.164-9.364 7.576zm-212.997-1.425c-3.166-2.454-6.283-5.046-9.262-7.702l1.331-1.492c2.945 2.625 6.026 5.186 9.157 7.614l-1.226 1.58zm231.185-14.348l-1.41-1.418c2.804-2.79 5.547-5.711 8.152-8.682l1.504 1.318c-2.635 3.005-5.409 5.959-8.246 8.782zm-249.163-1.666c-2.797-2.857-5.531-5.847-8.128-8.889l1.521-1.299c2.567 3.008 5.271 5.965 8.036 8.789l-1.429 1.399zm265.037-16.438l-1.59-1.213c2.397-3.141 4.716-6.408 6.895-9.711l1.67 1.102c-2.205 3.341-4.55 6.645-6.975 9.822zm-280.668-1.874c-2.385-3.214-4.687-6.55-6.841-9.914l1.684-1.078c2.13 3.325 4.405 6.623 6.763 9.801l-1.606 1.191zm293.925-18.225l-1.74-.984c1.944-3.44 3.794-6.994 5.5-10.562l1.804.862c-1.724 3.609-3.596 7.204-5.564 10.684zm-306.911-2.046c-1.923-3.512-3.746-7.131-5.419-10.756l1.817-.838c1.652 3.584 3.455 7.161 5.356 10.633l-1.754.961z"
    />
    <path
      fill="#6C63FF"
      d="M216.865 388.216c-.708-1.865-1.395-3.775-2.044-5.678l1.894-.645c.64 1.881 1.32 3.77 2.02 5.613l-1.87.71zM219.955 261.279l-1.855-.746c.749-1.864 1.538-3.734 2.346-5.559l1.829.81c-.798 1.804-1.579 3.653-2.32 5.495z"
    />
    <path
      fill="#02B3C1"
      d="M227.531 244.949l-1.768-.934c1.889-3.573 3.93-7.127 6.065-10.562l1.698 1.056c-2.11 3.396-4.127 6.908-5.995 10.44zm305.36-2.913c-1.933-3.493-4.017-6.966-6.193-10.324l1.678-1.088c2.201 3.396 4.31 6.91 6.265 10.443l-1.75.969zm-292.66-17.527l-1.621-1.171c2.367-3.278 4.878-6.515 7.465-9.621l1.537 1.28c-2.557 3.071-5.041 6.271-7.381 9.512zm279.572-2.667c-2.399-3.193-4.943-6.345-7.559-9.37l1.512-1.308c2.647 3.059 5.22 6.247 7.646 9.477l-1.599 1.201zm-264.172-15.825l-1.445-1.383c2.795-2.921 5.728-5.781 8.718-8.503l1.346 1.479c-2.956 2.691-5.855 5.519-8.619 8.407zm248.426-2.371c-2.818-2.835-5.771-5.608-8.778-8.242l1.319-1.504c3.04 2.664 6.027 5.469 8.878 8.336l-1.419 1.41zm-230.629-13.828l-1.241-1.569c3.173-2.51 6.472-4.939 9.805-7.221l1.13 1.65c-3.296 2.256-6.557 4.658-9.694 7.14zm212.528-2.03c-3.18-2.419-6.487-4.759-9.829-6.954l1.098-1.672c3.381 2.221 6.726 4.587 9.942 7.034l-1.211 1.592zm-192.671-11.56l-1.013-1.725c3.486-2.046 7.089-3.997 10.709-5.796l.891 1.791c-3.579 1.778-7.141 3.707-10.587 5.73zm172.556-1.65c-3.489-1.96-7.088-3.82-10.695-5.528l.855-1.807c3.65 1.727 7.29 3.609 10.82 5.59l-.98 1.745zm-151.009-9.06l-.764-1.849c3.736-1.543 7.576-2.973 11.411-4.251l.631 1.897c-3.79 1.264-7.585 2.677-11.278 4.203zm129.26-1.236c-3.726-1.455-7.548-2.796-11.36-3.985l.596-1.909c3.856 1.203 7.722 2.559 11.491 4.031l-.727 1.863zm-106.436-6.37l-.498-1.937c3.913-1.006 7.915-1.888 11.893-2.619l.361 1.967c-3.932.723-7.887 1.594-11.756 2.589zm83.467-.796c-3.889-.92-7.86-1.715-11.804-2.363l.324-1.973c3.99.655 8.007 1.459 11.94 2.39l-.46 1.946zm-59.802-3.558l-.225-1.987c4.005-.452 8.089-.771 12.14-.948l.087 1.998c-4.006.175-8.044.49-12.002.937zm36.058-.341c-3.97-.372-8.013-.611-12.017-.709l.049-1.999c4.05.099 8.139.341 12.155.717l-.187 1.991z"
    />
    <path
      fill="#6C63FF"
      d="M540.805 258.277c-.775-1.827-1.59-3.661-2.423-5.451l1.812-.844c.843 1.81 1.668 3.666 2.452 5.514l-1.841.781z"
    />
    <circle cx="381" cy="320" r="57" fill="#EDF6FF" />
    <path
      fill="#3F3D56"
      d="M381 262.954c-11.274 0-22.294 3.343-31.668 9.606-9.373 6.264-16.679 15.166-20.993 25.581-4.314 10.416-5.443 21.876-3.244 32.933 2.2 11.057 7.628 21.214 15.6 29.185 7.971 7.972 18.128 13.4 29.185 15.6 11.057 2.199 22.518 1.07 32.933-3.244s19.317-11.62 25.581-20.993c6.263-9.374 9.606-20.394 9.606-31.668 0-15.117-6.005-29.615-16.695-40.305-10.689-10.69-25.188-16.695-40.305-16.695zm26.258 62.556c-.589 0-2.544-.017-3.115-.052l-11.233-.294c-.058-.002-.116.012-.168.039-.051.027-.095.067-.126.116l-16.858 25.2c-.25.394-.595.718-1.003.942-.409.223-.868.34-1.334.339h-4.101c-.97 0-1.299-.969-.952-1.869l8.671-24.733c.02-.051.027-.106.021-.161-.006-.055-.025-.107-.056-.153-.03-.046-.071-.084-.12-.11-.048-.027-.102-.042-.157-.043l-21.063-.467c-.219-.005-.436.041-.634.134-.199.093-.373.231-.509.402l-6.525 7.91c-.261.328-.592.593-.97.776-.377.183-.791.278-1.21.28h-2.891c-.11.001-.22-.025-.319-.075-.098-.05-.184-.123-.248-.213-.065-.09-.107-.194-.122-.304-.016-.109-.005-.221.032-.326l3.444-11.89c.259-.662.259-1.398 0-2.06l-3.444-11.89c-.037-.105-.048-.216-.032-.326.015-.11.057-.214.122-.304.064-.09.15-.163.248-.213.099-.05.209-.076.319-.074h2.908c.42-.003.835.091 1.213.274.378.183.709.45.968.781l6.404 7.789c.134.173.308.312.507.405.198.093.416.138.635.131l21.184-.311c.056 0 .111-.014.159-.041.049-.026.091-.064.122-.11.03-.046.049-.099.055-.154.005-.055-.003-.111-.024-.162l-8.671-24.716c-.346-.9-.017-1.869.952-1.869h4.102c.465.001.923.119 1.331.342.409.224.754.547 1.005.939l16.841 25.217c.03.05.073.092.125.119.052.028.11.04.169.037l11.233-.294c.553-.035 2.526-.052 3.115-.052 7.685 0 12.513 2.492 12.513 5.555 0 3.064-4.846 5.539-12.513 5.539z"
    />
    <path
      fill="#F0F0F0"
      d="M63.6724 512.09c-2.3734 0-4.6935-.704-6.6669-2.023-1.9734-1.318-3.5115-3.192-4.4197-5.385-.9083-2.193-1.1459-4.606-.6829-6.933.4631-2.328 1.6059-4.466 3.2842-6.144 1.6782-1.679 3.8164-2.822 6.1442-3.285 2.3277-.463 4.7405-.225 6.9332.683 2.1928.909 4.0669 2.447 5.3855 4.42 1.3186 1.973 2.0224 4.293 2.0224 6.667-.0037 3.181-1.2691 6.231-3.5188 8.481-2.2496 2.25-5.2998 3.515-8.4812 3.519zm0-22c-1.9779 0-3.9113.586-5.5558 1.685-1.6444 1.099-2.9262 2.661-3.683 4.488-.7569 1.827-.955 3.838-.5691 5.778.3858 1.94 1.3383 3.721 2.7368 5.12 1.3985 1.398 3.1803 2.351 5.1201 2.737 1.9399.386 3.9505.187 5.7778-.569 1.8272-.757 3.389-2.039 4.4879-3.683 1.0988-1.645 1.6853-3.578 1.6853-5.556-.003-2.651-1.0575-5.193-2.9322-7.068-1.8748-1.875-4.4166-2.929-7.0678-2.932zM316.672 243.09c-2.373 0-4.693-.704-6.666-2.023-1.974-1.318-3.512-3.192-4.42-5.385-.908-2.193-1.146-4.605-.683-6.933.463-2.328 1.606-4.466 3.284-6.144 1.678-1.679 3.816-2.822 6.144-3.285 2.328-.463 4.741-.225 6.934.683 2.192.909 4.066 2.447 5.385 4.42 1.319 1.973 2.022 4.293 2.022 6.667-.003 3.181-1.269 6.231-3.518 8.481-2.25 2.25-5.3 3.515-8.482 3.519zm0-22c-1.977 0-3.911.586-5.555 1.685-1.645 1.099-2.927 2.661-3.683 4.488-.757 1.827-.955 3.838-.57 5.778.386 1.94 1.339 3.721 2.737 5.12 1.399 1.398 3.181 2.351 5.12 2.737 1.94.386 3.951.188 5.778-.569 1.827-.757 3.389-2.039 4.488-3.683 1.099-1.645 1.685-3.578 1.685-5.556-.003-2.651-1.057-5.193-2.932-7.068s-4.416-2.929-7.068-2.932zM540.144 572.46l-13.465-14.436 14.436-13.465 13.465 14.436-14.436 13.465zm-11.319-14.362l11.394 12.216 12.215-11.394-11.394-12.215-12.215 11.393z"
    />
    <circle cx="57" cy="318" r="57" fill="#3F3D56" />
    <path fill="#EDF6FF" d="M25 290h64v46.545H25z" />
    <path
      fill="#EDF6FF"
      d="M89 333.636c0 1.607-1.302 2.909-2.909 2.909H27.909c-1.607 0-2.909-1.302-2.909-2.909v-40.727c0-1.607 1.302-2.909 2.909-2.909h58.182c1.607 0 2.909 1.302 2.909 2.909v40.727z"
    />
    <path fill="#E2E4E5" d="M65.728 336.545H48.273V344h17.455v-7.455z" />
    <path
      fill="#F0F1F1"
      d="M71.545 345.454c0 .803-.651 1.455-1.455 1.455H43.909c-.803 0-1.455-.651-1.455-1.455s.651-1.455 1.455-1.455h26.182c.803.001 1.454.652 1.454 1.455z"
    />
    <path
      fill="#fff"
      d="M89 333.636v-8.727H25v8.727c0 1.607 1.303 2.909 2.909 2.909h58.182c1.606 0 2.909-1.302 2.909-2.909z"
    />
    <path
      fill="#CFD3D4"
      d="M57 334.818c-2.156 0-3.909-1.753-3.909-3.909 0-2.155 1.754-3.909 3.909-3.909s3.909 1.753 3.909 3.909c0 2.156-1.753 3.909-3.909 3.909zM57 329c-1.053 0-1.909.856-1.909 1.909s.856 1.909 1.909 1.909 1.909-.856 1.909-1.909c0-1.052-.856-1.909-1.909-1.909z"
    />
    <path
      fill="#000"
      d="M35.2828 305.909L36 307.007l-5.7071 3.41L36 313.84l-.7845 1.069L29 311.118V309.7l6.2828-3.791zM44.489 315.909v-5.155h-3.978v5.155H39v-11h1.511v4.598h3.978v-4.598H46v11h-1.511zM52.7029 306.185v9.724H51.253v-9.724H48v-1.276h8l-.1513 1.276h-3.1458zM64.5051 315.909l-.3325-5.637c-.0823-1.549-.0823-3.336-.0652-3.688h-.0514l-1.8103 7.36h-1.512l-1.8926-7.36h-.0651c0 .366.0343 2.268-.0343 3.688l-.2811 5.637H57l.648-11h2.0914l1.7623 7.344h.0652l1.6765-7.344h2.1086l.648 11h-1.4949zM69 315.909v-11h1.3968v9.675H75l-.1609 1.325H69zM85 309.7v1.418l-6.2155 3.791L78 313.84l5.7071-3.423L78 307.007l.7172-1.098L85 309.7z"
    />
    <circle cx="217" cy="320" r="57" fill="#3F3D56" />
    <circle cx="543" cy="320" r="57" fill="#3F3D56" />
    <circle cx="698" cy="318" r="57" fill="#3F3D56" />
    <path
      fill="#EDF6FF"
      d="M217.248 299.771c2.633-.069 4.723-1.919 4.8-4.248.078-2.535-2.245-4.59-5.109-4.521-2.633.068-4.723 1.918-4.801 4.247-.077 2.535 2.246 4.59 5.11 4.522zm35.924 26.307h-1.394l-9.832-16.853c1.393-.137 2.787-.617 4.026-1.096 1.858-.754 2.245-2.946.851-4.248l-.077-.068c-.852-.754-2.168-1.028-3.329-.548-1.084.411-2.633.89-4.104.89-4.335 0-6.271-4.384-22.22-4.384-15.948 0-17.884 4.384-22.22 4.384-1.548 0-3.019-.411-4.103-.89-1.161-.412-2.477-.206-3.329.548l-.077.068c-1.394 1.302-1.007 3.425.851 4.248 1.239.548 2.632.959 4.026 1.096l-9.832 16.853h-1.394c-.619 0-1.084.479-1.007 1.027.852 4.385 7.123 7.742 14.788 7.742s13.936-3.357 14.788-7.742c.077-.548-.388-1.027-1.007-1.027h-1.394l-9.832-16.785c6.426-.479 9.832-3.357 14.787-3.357v33.295c-2.709 0-4.955 1.987-4.955 4.385h-5.496c-2.168 0-4.414 1.986-4.414 4.384h39.64c0-2.398-2.245-4.384-5.497-4.384h-4.413c0-2.398-2.245-4.385-4.955-4.385v-33.295c4.955 0 8.362 2.878 14.788 3.357l-9.833 16.785h-1.393c-.62 0-1.084.479-1.007 1.027.852 4.385 7.123 7.742 14.788 7.742s13.936-3.357 14.787-7.742c.078-.548-.387-1.027-1.006-1.027zm-50.944 0h-14.864l7.432-12.332 7.432 12.332zm29.73 0l7.433-12.332 7.432 12.332h-14.865zM575 294v52c0 3.31-2.69 6-6 6h-52c-3.31 0-6-2.69-6-6v-52c0-3.31 2.69-6 6-6h52c3.31 0 6 2.69 6 6z"
    />
    <path
      fill="#EDF6FF"
      d="M575 296.95V346c0 3.31-2.69 6-6 6h-52c-3.31 0-6-2.69-6-6v-13.74l11.21-7.21 17.01 3 15.53-10.35 8.96-15.91 11.29-4.84z"
    />
    <path
      fill="#F58862"
      d="M575 305v-2h-7v-4h-2v4h-5v2h5v6h-6v-3h-2v3h-1v2h1v6h-8v8h-6v-2h-2v2h-6v-1.001h-2V327h-6v-2h-2v2h-6v-1.001h-2V327h-2.22v2H518v6h-7v2h7v6h-7v2h7v6.999h2V345h6v7h2v-7h6v6.999h2V345h6v7h2v-7h6v7h2v-7h6v7h2v-7h6v7h2v-7h7v-2h-7v-6h7v-2h-7v-6h7v-2h-7v-6h7v-2h-7v-6h7v-2h-7v-6h7zm-23 16h6v6h-6v-6zm6 8v6h-6v-6h6zm-8 0v6h-6v-6h6zm-8 0v6h-6v-6h6zm-8 0v6h-6v-6h6zm-14 0h6v6h-6v-6zm0 14v-6h6v6h-6zm8 0v-6h6v6h-6zm8 0v-6h6v6h-6zm8 0v-6h6v6h-6zm8 0v-6h6v6h-6zm14 0h-6v-6h6v6zm0-8h-6v-6h6v6zm0-8h-6v-6h6v6zm0-8h-6v-6h6v6z"
    />
    <path
      fill="#3F3D56"
      d="M575 294.77l-10.657 4.561c-2.675-1.35-5.437 1.629-3.915 4.192l-5.916 10.529c-2.138-.371-3.949 1.555-3.412 3.681l-10.308 6.875c-.5-.377-1.117-.608-1.792-.608-1.12 0-2.084.621-2.6 1.53l-11.45-2.022c-.679-4.095-6.793-2.775-5.864 1.178L511 329.88v2.38l9.17-5.898c1.483 1.151 3.537.68 4.429-.891l11.45 2.02c.235 1.422 1.462 2.509 2.95 2.509 1.892 0 3.398-1.766 2.898-3.735l10.31-6.871c2.853 2.14 6.397-1.663 4.042-4.358l5.754-10.218c2.462.871 4.714-1.556 3.781-3.917L575 296.95v-2.18z"
    />
    <g clipPath="url(#clip0)">
      <path
        fill="#EDF6FF"
        d="M713.169 343.333c5.62-1.22 9.831-6.51 9.831-12.5 0-3.804-1.733-7.169-4.419-9.464.155-.993.252-2.002.252-3.036 0-6.825-3.247-12.882-8.333-16.666l4.167-4.167v-4.167l4.166-4.166-4.166-4.167-4.167 4.167h-4.167l-16.666 16.666-8.334 4.167v8.333l4.167 4.167h8.333l4.167-8.333 6.25-6.25c3.613 2.175 6.25 5.888 6.25 10.416-6.905 0-12.5 5.595-12.5 12.5h-25V335h12.5c1.245.928 2.738 1.44 4.167 2.083v6.25h-8.334L673 351.667h50l-8.333-8.334h-1.498zm-6.836-12.5c0-2.303 1.864-4.166 4.167-4.166s4.167 1.863 4.167 4.166c0 2.299-1.864 4.167-4.167 4.167s-4.167-1.868-4.167-4.167z"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path
          fill="#fff"
          d="M0 0h50v66.6667H0z"
          transform="translate(673 285)"
        />
      </clipPath>
    </defs>
  </Svg>
);

export default CareerHeroClipart;
